let input = document.querySelector(".input input");
console.log(input)
let btns = document.querySelectorAll("button");

function displayValu (value) {
    input.value += value
}
function clearInput () {
    input.value = "";
}

function calculat () {
    input.value = eval(input.value);
}
