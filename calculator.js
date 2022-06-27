
function clearScreen(){
    document.querySelector(".display").textContent=" ";
}

function display(value){
    document.querySelector(".display").textContent += value;
}

function calculate(){
    var p = document.querySelector(".display").textContent;
    var q = eval(p);
    document.querySelector(".display").textContent = q;
}
