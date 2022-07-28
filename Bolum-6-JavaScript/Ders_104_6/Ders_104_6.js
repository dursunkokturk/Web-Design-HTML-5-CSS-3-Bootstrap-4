function insan(isim,yas,GozRengi){
    this.isim = isim,
    this.yas = yas,
    this.GozRengi = GozRengi,
    this.IsimDegistir = IsimDegistir;
    this.DogumYili = DogumYiliHesapla;
}

function IsimDegistir(YeniIsim){
    this.isim = YeniIsim;
}

function DogumYiliHesapla(){
        return 2021-this.yas;
    }
var insan1;

insan1 = new insan("Dursun",35,"Ela");
document.write("İsim " + insan1.isim + " " + " Doğum Yılı " + insan1.DogumYili() + " Yaş " + " " + insan1.yas + " Göz Rengi " + " " + insan1.GozRengi + "<br>");