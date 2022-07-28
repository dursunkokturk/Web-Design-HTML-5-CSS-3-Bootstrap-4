$("p").parents().eq(1).css("background","red");

var indis=3;

function item_Sil(){
    if(indis>=0){
        $("li").eq(0).remove();
        indis--;
    }
    
}