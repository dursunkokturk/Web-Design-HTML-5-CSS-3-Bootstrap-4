$("button").eq(0).click({isim:"Dursun",Bolum:"Bilisim Sistemleri Mühendisi",Yas:35},function(event){
    $("div").text(event.data.isim+" "+event.data.Bolum+" "+event.data.Yas);
});