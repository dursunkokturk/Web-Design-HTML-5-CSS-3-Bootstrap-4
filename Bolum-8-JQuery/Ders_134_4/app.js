$("button").eq(0).click({isim:"Dursun"},function(event){
    $("div").text(event.data.isim);
});