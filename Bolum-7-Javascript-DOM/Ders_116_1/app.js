window.onload = function(){
    var KucukKutuyuGezdirme = 0;
    var KucukKutu = document.getElementById("kucuk-kutu");
    var zaman = setInterval(HareketEt,100);

    function HareketEt(){
        if(KucukKutuyuGezdirme>=150){
            clearInterval(zaman);
        }
        else{
            KucukKutuyuGezdirme = KucukKutuyuGezdirme + 1;
            KucukKutu.style.left = KucukKutuyuGezdirme + "px";
        }
    }
}