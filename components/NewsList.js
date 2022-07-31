function NewsList(container) {
  const newslist = `<div class="news-list-container">
  <article class="news-list">
  </article>
  <div class="scroll-observer">
    <img src="img/ball-triangle.svg" alt="Loading..." />
  </div>
</div>`;
  container.innerHTML += newslist;
}

export default NewsList;
