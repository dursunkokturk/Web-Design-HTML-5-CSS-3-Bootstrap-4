var InputEtiketi = document.getElementsByTagName("input")[0];

InputEtiketi.onfocus = function(){
    InputEtiketi.value="Input'a Tıklandı";
};
InputEtiketi.onblur = function(){
    InputEtiketi.value="Input'tan Çıkıldı";
};