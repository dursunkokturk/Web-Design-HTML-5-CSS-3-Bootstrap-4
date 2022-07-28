var BodyAltEtiketleri = document.body.childNodes;

for(var i=0;i<BodyAltEtiketleri.length-1;i++){
    document.body.innerHTML += BodyAltEtiketleri[i].nodeName + "<br>";
}