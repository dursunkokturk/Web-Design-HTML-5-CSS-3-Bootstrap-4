$(function(){
    $("p").eq(0).click(function(){
        $("div").fadeIn(1000);
    });
    $("p").eq(1).click(function(){
        $("div").fadeOut(1000);
    });
});