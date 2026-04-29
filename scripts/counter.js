//Make Variables
let number = 0;
let addonebutton = document.getElementById("counter-button");
let counter = document.getElementById("counter");
let delbutton = document.getElementById("del-button");
let minusbutton = document.getElementById("minus-button");
let onebutton = document.getElementById("one-button");
let twobutton = document.getElementById("two-button");
let threebutton = document.getElementById("three-button");
let fourbutton = document.getElementById("four-button");
let fivebutton = document.getElementById("five-button");
let sixbutton = document.getElementById("six-button");
let sevenbutton = document.getElementById("seven-button");
let eightbutton = document.getElementById("eight-button");
let ninebutton = document.getElementById("nine-button");
let zerobutton = document.getElementById("zero-button");

//Define Functions
function show(number) {
    counter.textContent = number;
}

function add1() {
    number = number + 1;
    show(number);
}
function minus() {
    number = number - 1;
    show(number);
}
function del() {
    number = 0;
    show(number);
}
function one() {
    number = number*10+1;
    show(number);
}

function two() {
    number = number*10+2;
    show(number);
}

function three() {
    number = number*10+3;
    show(number);
}

function four() {
    number = number*10+4;
    show(number);
}

function five() {
    number = number*10+5;
    show(number);
}

function six() {
    number = number*10+6;
    show(number);
}

function seven() {
    number = number*10+7;
    show(number);
}

function eight() {
    number = number*10+8;
    show(number);
}

function nine() {
    number = number*10+9;
    show(number);
}

function zero() {
    number = number*10+0;
    show(number);
}

//Define Buttons Event Listeners
addonebutton.addEventListener("click", add1);
minusbutton.addEventListener("click", minus);
delbutton.addEventListener("click", del);
onebutton.addEventListener("click", one);
twobutton.addEventListener("click", two);
threebutton.addEventListener("click", three);
fourbutton.addEventListener("click", four);
fivebutton.addEventListener("click", five);
sixbutton.addEventListener("click", six);
sevenbutton.addEventListener("click", seven);
eightbutton.addEventListener("click", eight);
ninebutton.addEventListener("click", nine);
zerobutton.addEventListener("click", zero);
addbutton.addEventListener("click", add);
minusbutton.addEventListener("click", minus);
equalbutton.addEventListener("click", equal);