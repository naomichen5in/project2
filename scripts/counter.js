//Make Variables
let number = 0;
let addonebutton = document.getElementById("counter-button");
let counter = document.getElementById("counter");
let delbutton = document.getElementById("del-button");
let minusbutton = document.getElementById("minus-button");

//Define Functions
function add1() {
    number = number + 1;
    counter.textContent = number;
}


function minus() {
    number = number - 1;
    counter.textContent = number;
}


function del() {
    number = 0;
    counter.textContent = number;
}


//Define Buttons Event Listeners
addonebutton.addEventListener("click", add1);
minusbutton.addEventListener("click", minus);
delbutton.addEventListener("click", del);

