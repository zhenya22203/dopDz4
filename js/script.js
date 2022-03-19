const first = document.querySelector("div.box");

const second = document.querySelector("div.box2");

const third = document.querySelector("div.box3");

first.classList.toggle("black2");

second.classList.toggle("black");

third.classList.toggle("black2");

second.addEventListener ("click", () => {
    first.classList.toggle("first");
    second.classList.toggle("second");
    third.classList.toggle("third");
});