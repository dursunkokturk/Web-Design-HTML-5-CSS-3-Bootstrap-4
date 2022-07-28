function insan(isim,yas,GozRengi){
    this.isim = isim,
    this.yas = yas,
    this.GozRengi = GozRengi
}
var insan1 = new insan("Dursun",35,"Ela");
document.write("İsim " + insan1.isim + " " + " Yaş " + insan1.yas + " " + " Göz Rengi " + insan1.GozRengi);