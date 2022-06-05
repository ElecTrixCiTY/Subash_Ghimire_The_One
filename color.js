
var colors = ["blue", "pink", "orange","red","yellow","aqua"];

var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", changebackground);

function changebackground() {

    const colorIndex = parseInt(Math.random() * colors.length)  // parseInt can also be used in place of  Math.floor
    body.style.backgroundColor = colors[colorIndex]
    // for (var i =0; i<=5; i++){
    //     body.style.backgroundColor = colors[i];
    // }
}