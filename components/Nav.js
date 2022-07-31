function Nav(container) {
  const nav = `<nav class="category-list">
                <ul>
                    <li id="all" class="category-item active">전체보기</li>
                    <li id="business" class="category-item">비즈니스</li>
                    <li id="entertainment" class="category-item">엔터테인먼트</li>
                    <li id="health" class="category-item">건강</li>
                    <li id="science" class="category-item">과학</li>
                    <li id="sports" class="category-item">스포츠</li>
                    <li id="technology" class="category-item">기술</li>
                </ul>
               </nav>`;
  container.innerHTML += nav;
}

export default Nav;
