var Div1AltEtiketleri = document.getElementsByClassName("bolum1")[0];
if(Div1AltEtiketleri.hasChildNodes()){
    document.body.innerHTML="Div Etiketi İçinde Alt Etiket Var";
}
else{
    document.body.innerHTML="Div Etiketi İçinde Alt Etiket Yok";
}