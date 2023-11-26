let span1 = document.querySelector(".span1");

let btn = document.querySelector("button");

let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
let green = document.querySelector("#green");

red.addEventListener("click", function () {
    btn.textContent = "Thanks For Feedback";
    btn.disabled = true;
    document.querySelector("body").style.backgroundColor = "darkred";
    blue.parentElement.style.display = "none";
    green.parentElement.style.display = "none";
    span1.textContent = red.textContent;
});

blue.addEventListener("click", function () {
    btn.textContent = "Thanks For Feedback";
    btn.disabled = true;
    document.querySelector("body").style.backgroundColor = "darkblue";
    red.parentElement.style.display = "none";
    green.parentElement.style.display = "none";
    span1.textContent = blue.textContent;
});

green.addEventListener("click", function () {
    btn.textContent = "Thanks For Feedback";
    btn.disabled = true;
    document.querySelector("body").style.backgroundColor = "forestgreen";
    blue.parentElement.style.display = "none";
    red.parentElement.style.display = "none";
    span1.textContent = green.textContent;
});