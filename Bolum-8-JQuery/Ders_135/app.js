$(function(){
    $("#Ekle_Butonu").click(function(){
        var Input_Value = $("input").val();
        if(Input_Value != ""){
            var LiEtiketi = $("<li></li>").text(Input_Value);
            $(LiEtiketi).append("<button class=\"X_Butonu\">X</button>");
            $("#Listemiz").append(LiEtiketi);
            $("input").val("");
            $(".X_Butonu").click(function(){
                $(this).parent().remove();
            });
        }
    });
});