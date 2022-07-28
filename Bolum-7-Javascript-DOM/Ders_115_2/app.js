var YeniPEtiketi = document.createElement("p");
var YeniPEtiketiIcerik = document.createTextNode("Hedeflerimiz");

YeniPEtiketi.appendChild(YeniPEtiketiIcerik);

var Vizyon = document.getElementById("vizyon");

Vizyon.parentElement.replaceChild(YeniPEtiketi,Vizyon);