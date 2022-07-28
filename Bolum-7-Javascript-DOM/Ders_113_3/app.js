var Menu = document.getElementById("menu");
var A = document.createElement("a");

Menu.appendChild(A);

A.href="www.dursunkokturk.com";
A.target="_blank";

var AText = document.createTextNode("Dursun Köktürk'ün Sitesine Git");

A.appendChild(AText);