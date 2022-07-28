$(document).ready(function(){

    var DivEtiketi = $("div").eq(0);

    DivEtiketi.click(function(){
        DivEtiketi.text("Değiştirildi");
    });

    alert("Elemanlar Yüklendi");

});