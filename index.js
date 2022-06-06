

var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


var button1 = document.querySelector(".Dark");
var footer1 = document.querySelector(".ft");



button1.addEventListener("click", () => {
    document.body.classList.remove("body");
    document.body.classList.add("dark");
    footer1.classList.add("footer2");
    footer1.classList.remove("footer");
   
    

})
var button2 = document.querySelector(".Light");

button2.addEventListener("click", ()=>{
    document.body.classList.remove("dark");
    document.body.classList.add("body");
    footer1.classList.remove("footer2");
    footer1.classList.add("footer");
})



