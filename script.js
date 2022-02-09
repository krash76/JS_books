"use strict";

const books = document.querySelectorAll(".books")[0].children;
const adv = document.querySelector(".adv");
const body = document.querySelector("body");
const book_2 = books[0].querySelector("ul");
const book_5 = books[5].querySelector("ul");
const book_6 = books[2].querySelector("ul");

books[0].before(books[1]);
books[1].after(books[4]);
books[5].after(books[3]);
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
books[2].querySelector("a").textContent = "Книга 3. this и Прототипы Объектов";
adv.remove();
book_2.children[3].after(book_2.children[6]);
book_2.children[4].after(book_2.children[8]);
book_2.children[9].after(book_2.children[2]);
book_5.children[1].after(book_5.children[9]);
book_5.children[5].after(book_5.children[3]);
book_5.children[8].after(book_5.children[6]);
book_6.innerHTML += "<li>Глава 8: За пределами ES6</li>";
book_6.children[10].after(book_6.children[9]);
