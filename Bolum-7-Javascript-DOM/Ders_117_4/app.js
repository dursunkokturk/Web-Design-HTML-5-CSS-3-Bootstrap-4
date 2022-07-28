var InputEtiketi = document.getElementsByTagName("input")[0];

InputEtiketi.onchange = function(){
    InputEtiketi.value = InputEtiketi.value.toUpperCase();
};