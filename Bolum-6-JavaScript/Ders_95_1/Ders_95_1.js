document.write("&& (AND) Operatörünü Kullanarak" + "<br>");
document.write("Tüm Şartların Aynı Anda Sağlanması Durumu" + "<br>" + "<br>");

var x = (10>4) && (5<6)
document.write("10>4 && 5<6 İşleminin Sonucu" + "<br>");
document.write(x + "<br>" + "<br>");

var x = (10>4) && (5>6)
document.write("10>4 && 5>6 İşleminin Sonucu" + "<br>");
document.write(x + "<br>" + "<br>");

var x = (10>4) && (5<6) && (7>5) && (8<9)
document.write("10>4 && 5>6 7>5 8<9 İşleminin Sonucu" + "<br>");
document.write(x);