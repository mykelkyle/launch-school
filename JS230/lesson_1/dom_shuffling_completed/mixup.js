const body = document.body;
const header = body.querySelector("header");
const main = body.querySelector("main");
const footer = body.querySelector("footer");
const secondHeader = body.querySelectorAll("header")[1];

body.insertBefore(header, main);
header.insertBefore(main.querySelector("h1"), header.firstChild);

header.firstElementChild.insertAdjacentElement(
  "afterend",
  secondHeader.firstElementChild
);

const article = main.firstElementChild.firstElementChild;
article.insertBefore(secondHeader, article.firstElementChild);

Array.from(main.querySelectorAll("figure")).forEach((fig) => {
  article.appendChild(fig);
});

secondHeader.appendChild(header.lastElementChild);
secondHeader.insertBefore(
  header.lastElementChild,
  secondHeader.firstElementChild
);

const chinStickImg = article.lastChild.firstElementChild;
let firstFig = article.querySelector("figure");
firstFig.insertBefore(chinStickImg, firstFig.firstElementChild);

const babyImg = firstFig.querySelectorAll("img")[1];
article.lastElementChild.insertBefore(
  babyImg,
  article.lastElementChild.firstElementChild
);
