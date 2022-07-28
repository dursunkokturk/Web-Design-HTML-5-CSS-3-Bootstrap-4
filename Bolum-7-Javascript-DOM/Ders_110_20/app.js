var DivAltEtiketleri = document.getElementsByClassName("bolum1")[0];
for(var i=0;i<DivAltEtiketleri.childElementCount;i++){
    DivAltEtiketleri.getElementsByTagName("p")[i].innerHTML="Değiştirildi";
}