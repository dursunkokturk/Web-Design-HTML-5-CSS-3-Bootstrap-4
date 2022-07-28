for(i=0;i<5;i++){
    $("button").eq(i).click({Deger:i},function(event){
        $("div").text($("button").eq(event.data.Deger).html());
    });
}