document.write("For Döngüsü İçinde İf Döngüsü İle Continue Komutu Kullanılarak" + "<br>");
document.write("Bir Sayının 5 e Bölümünden Kalanların Ekrana Yazılmaması" + "<br>");

var i;

for(i=0;i<20;i++){
    if(i%5==0){
        continue;
    }
    document.write(i + "<br>");
}