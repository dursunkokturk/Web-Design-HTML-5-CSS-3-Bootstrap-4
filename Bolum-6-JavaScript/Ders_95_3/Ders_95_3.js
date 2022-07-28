document.write("! Operatörünü Kullanarak" + "<br>");
document.write("Yapılan İşlemin Sonucunun" + "<br>");
document.write("Boolean Karşılığı Ne İse Onu Tam Tersine Çevirme" + "<br>" + "<br>");
  
var x = (10>4) || (5>7)
document.write("10>4 || 5>7 İşleminin Sonucu" + "<br>");
document.write(x + "<br>" + "<br>");
x = !x
document.write("!x Kullanılarka 10>4 && 5>7 İşleminin Sonucu" + "<br>");
document.write(x + "<br>" + "<br>");