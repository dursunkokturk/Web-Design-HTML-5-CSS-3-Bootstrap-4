document.write("While Döngüsü İçinde İf Döngüsü İle Continue Komutu Kullanılarak" + "<br>");
document.write("Bir Sayının 5 e Bölümünden Kalanların Ekrana Yazılmaması" + "<br>");

var i=20;

while(i>=0){
    if(i%5==0){
        i--;
        continue;
    }
    document.write(i + "<br>");
    i--;
}