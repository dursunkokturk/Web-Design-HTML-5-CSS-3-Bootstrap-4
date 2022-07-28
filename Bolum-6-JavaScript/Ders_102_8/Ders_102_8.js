function TekMiCiftMi(sayi){
    if(sayi%2==0){
        return "Çift Sayı";
    }
    else{
        return "Tek Sayıdır";
    }
}

for (i=0;i<20;i++){
    document.write(i + " Sayısı " + TekMiCiftMi(i) + "<br>");
}
