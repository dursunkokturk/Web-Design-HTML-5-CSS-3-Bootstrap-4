var YeniPEtiketi = document.createElement("p");
var YeniPEtiketiIcerik = document.createTextNode("Hedeflerimiz");

YeniPEtiketi.appendChild(YeniPEtiketiIcerik);

var Hakkimizda = document.getElementById("hakkimizda");
var Vizyon = document.getElementById("vizyon");

Hakkimizda.replaceChild(YeniPEtiketi,Vizyon);