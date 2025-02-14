let redPhone =document.getElementById("redPhone");
let bluePhone =document.getElementById("bluePhone");
let whitePhone =document.getElementById("whitePhone");
let blackPhone =document.getElementById("blackPhone");
let goldenPhone =document.getElementById("goldenPhone");

let container = document.getElementsByClassName("container");

let phoneImages=document.getElementsByClassName("phoneImages");
redPhone.addEventListener("click",function(){
    container[0].style.backgroundColor = "rgb(211, 27, 27)";
    phoneImages[0].src="./images/4.png";

});
bluePhone.addEventListener("click",function(){
    container[0].style.backgroundColor = "rgb(47, 101, 163)";
    phoneImages[0].src="./images/1.png";

});
goldenPhone.addEventListener("click",function(){
    container[0].style.backgroundColor="black";
    phoneImages[0].src="./images/0.png";

});
blackPhone.addEventListener("click",function(){
    container[0].style.backgroundColor = "rgba(0, 0, 0, 0.82)";
    phoneImages[0].src="./images/2.png";

});
whitePhone.addEventListener("click",function(){
    container[0].style.backgroundColor = "rgb(211, 174, 25)";
    phoneImages[0].src="./images/3.png";

});