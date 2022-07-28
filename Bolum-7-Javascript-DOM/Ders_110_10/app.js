var PEtiketleri = document.getElementsByTagName("p");

for(var i=0;i<PEtiketleri.length;i++){
    PEtiketleri[i].innerHTML = "Paragraf Sıralaması "+i;
}