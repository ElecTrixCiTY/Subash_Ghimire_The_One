
var lighton = document.querySelector(".on");
var lightoff = document.querySelector(".off");

lighton.addEventListener("click", hideoff);

function hideoff(){
    document.getElementById("bof").classList.add("hidden");
    document.getElementById("bon").classList.add("view");
    lighton.classList.add("pressed");
    lightoff.classList.remove("pressed");
}

lightoff.addEventListener("click", viewon);

function viewon(){
    document.getElementById("bof").classList.remove("hidden");
    document.getElementById("bon").classList.remove("view"); 
    lightoff.classList.add("pressed");
    lighton.classList.remove("pressed");
    

}