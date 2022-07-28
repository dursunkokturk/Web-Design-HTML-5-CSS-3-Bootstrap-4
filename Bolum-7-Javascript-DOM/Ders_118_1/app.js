var Big_Div = document.getElementById("parent");
var Small_Div = document.getElementById("child");

Big_Div.addEventListener("click",Big_Dive_Yaz)
Small_Div.addEventListener("click",Small_Dive_Yaz)

function Big_Dive_Yaz(){
    console.log("Big Div");
}
function Small_Dive_Yaz(){
    console.log("Small Div");
}