var x=0;

$("div").animate({
    width:'500px',
    height:'100px'
},50000);

function Yuklenme_Yuzdesi(){

    x++;
    
    if(x>=100){
        clearInterval(Yuklenme_Orani);
    }
    $("div").text(x);

    var Yuklenme_Orani = setInterval(Yuklenme_Yuzdesi,500);
    
}