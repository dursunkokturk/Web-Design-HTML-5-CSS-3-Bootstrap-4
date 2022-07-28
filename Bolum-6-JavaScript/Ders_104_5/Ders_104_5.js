function insan(isim,yas,GozRengi){
    this.isim = isim,
    this.yas = yas,
    this.GozRengi = GozRengi,
    this.IsimDegistir = function(YeniIsim){
        this.isim = YeniIsim;
    } 
}
var insan1;

insan1 = new insan("Dursun",35,"Ela");
document.write("İsim " + insan1.isim + " " + " Yaş " + insan1.yas + " " + " Göz Rengi " + insan1.GozRengi + "<br>");

insan1.IsimDegistir("Hakan");
document.write("İsim " + insan1.isim + " " + " Yaş " + insan1.yas + " " + " Göz Rengi " + insan1.GozRengi);