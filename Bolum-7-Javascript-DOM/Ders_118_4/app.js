var Big_Div = document.getElementById("parent");
var Small_Div = document.getElementById("child");

Big_Div.addEventListener("click",Big_Dive_Yaz,true);
Small_Div.addEventListener("click",Small_Dive_Yaz,true);

function Big_Dive_Yaz(event){
    event.stopPropagation();
    console.log("Big Div");
}
function Small_Dive_Yaz(event){
    event.stopPropagation();
    console.log("Small Div");
}