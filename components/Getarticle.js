async function getArticle(page = 1, category = "all", pageSize = 5) {
  const apiKey = "c46462a739f6429bbc1ad5c30113415d";
  const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${
    category === "all" ? "" : category
  }&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
  try {
    let response = await axios.get(url);
    response.data.articles.forEach((article) => setArticle(article));
  } catch (error) {
    console.log(`Error : ${error}`);
  }
}

function setArticle(article) {
  const newslist = document.querySelector(".news-list");
  const image = article.urlToImage
    ? article.urlToImage
    : "./img/skeletonUI.png";

  newslist.innerHTML += `<section class="news-item">
<div class="thumbnail">
    <a href="${article.url}" target="_blank" rel="noopener noreferrer">
        <img src="${image}" alt="thumbnail" />
    </a>
</div>
<div class="contents">
    <h2>
        <a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a>
    </h2>
    <p>${article.description}</p>
</div>
</section>`;
}

export default getArticle;
