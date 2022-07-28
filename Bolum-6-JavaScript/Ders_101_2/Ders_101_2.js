document.write("For Döngüsü İçinde İf Döngüsü İle Continue Komutu Kullanımı" + "<br>");

var i;

for(i=0;i<10;i++){
    if(i==5){
        continue;
    }
    document.write(i + "<br>");
}