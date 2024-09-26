document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector("ul");
  const links = ul.querySelectorAll("a");
  const articles = document.querySelectorAll("article");
  const main = document.querySelector("main");

  function removeHighlighted() {
    main.classList.remove("highlight");
    for (let i = 0; i < links.length; i++) {
      let href = links[i].getAttribute("href");
      let article = document.querySelector(href);
      article.classList.remove("highlight");
    }
  }

  ul.addEventListener("click", (e) => {
    if (e.target.tagName !== "A") return;
    e.stopPropagation();
    removeHighlighted();
    let href = e.target.getAttribute("href");
    let article = document.querySelector(href);

    article.classList.add("highlight");
  });

  articles.forEach((article) => {
    article.addEventListener("click", (e) => {
      e.stopPropagation();
      removeHighlighted();
      article.classList.add("highlight");
    });
  });

  main.addEventListener("click", () => {
    removeHighlighted();
    main.classList.add("highlight");
  });
});
