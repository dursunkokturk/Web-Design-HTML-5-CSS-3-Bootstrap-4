for(i=0;i<3;i++){
    $("button").eq(i).click({Deger:i},function(event){
        $("div").text(event.data.Deger);
    });
}