window.onload = function(){
    var KucukKutuyuGezdirmeX = 0;
    var KucukKutuyuGezdirmeY = 0;
    var KucukKutu = document.getElementById("kucuk-kutu");
    var zaman = setInterval(HareketEt,100);

    function HareketEt(){
        if(KucukKutuyuGezdirmeX>=150){
            KucukKutuyuGezdirmeY = KucukKutuyuGezdirmeY + 1;
            KucukKutu.style.top = KucukKutuyuGezdirmeY + "px";
            if(KucukKutuyuGezdirmeY>=150){
                clearInterval(zaman);
            }
        }
        else{
            KucukKutuyuGezdirmeX = KucukKutuyuGezdirmeX + 1;
            KucukKutu.style.left = KucukKutuyuGezdirmeX + "px";
        }
    }
}