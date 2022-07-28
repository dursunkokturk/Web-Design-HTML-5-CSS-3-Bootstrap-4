function SaatGoster(){
    var tarih = new Date;
    var saat=tarih.getHours();
    var dakika=tarih.getMinutes();
    var saniye=tarih.getSeconds();
    document.body.innerHTML=saat+":"+dakika+":"+saniye;
}

SaatGoster();