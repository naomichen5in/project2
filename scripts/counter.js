let number=0;
let addonebutton=document.getElementById("counter-button");
let counter=document.getElementById("counter");

 function add1(){
       number= number+1;
   counter.textContent=number;}

addonebutton.addEventListener("click", add1);


