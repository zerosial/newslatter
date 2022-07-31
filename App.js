import Nav from "./components/Nav.js";
import NewsList from "./components/NewsList.js";
import getArticle from "./components/Getarticle.js";

const root = document.querySelector("#root");
let pages = 1;
let newsCategory = "all";

// 프록시
const categoryProxy = new Proxy(getArticle, {});

// 화면 랜더링
Nav(root);
NewsList(root);
categoryProxy();

// Nav 클릭 액션
document.querySelector(".category-list").addEventListener("click", (event) => {
  if (event.target.className === "category-item") {
    pages = 1;
    newsCategory = event.target.id;
    navReRender();
    document.querySelector(".news-list").innerHTML = "";
    categoryProxy(pages, newsCategory);
    event.target.classList.add("active");
  }
});

// 클릭 시 메뉴바 상태 변경
function navReRender() {
  const navItem = [...document.querySelectorAll(".category-list > ul > li")];
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].classList.remove("active");
  }
}

// 무한 스크롤
function scrollObserver() {
  let target = document.querySelector(".scroll-observer");

  let options = {
    threshold: 1.0,
  };

  let observer = new IntersectionObserver(() => {
    pages++;
    categoryProxy(pages, newsCategory);
  }, options);

  observer.observe(target);
}

window.addEventListener("DOMContentLoaded", scrollObserver);
