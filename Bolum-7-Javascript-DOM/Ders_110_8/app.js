document.getElementsByName("baslik").innerHTML = "<p>Dursun Köktürk</p>";
document.getElementsByName("baslik").innerHTML = "<p>Bilişim Sistemleri Mühendisi</p>";

var nameler=document.getElementsByName("baslik");
for (var i=0;i<nameler.length;i++){
    nameler[i].innerHTML = "<p>Dursun Köktürk</p>"+i;
}