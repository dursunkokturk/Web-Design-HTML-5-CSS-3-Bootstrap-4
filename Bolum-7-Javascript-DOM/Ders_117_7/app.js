var InputEtiketi1 = document.getElementsByTagName("input")[0];
var InputEtiketi2 = document.getElementsByTagName("input")[1];

InputEtiketi1.onkeyup = function(){
    InputEtiketi1.value=InputEtiketi1.value.toUpperCase();
};
InputEtiketi2.onkeydown = function(){
    InputEtiketi2.value=InputEtiketi2.value.toUpperCase();
};