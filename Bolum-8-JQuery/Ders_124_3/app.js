function UrlGoster(){
    var url = $("a").attr("href");
    $("p").html(url);
}
function UrlDegistir(){
    $("a").attr("href","www.google.com");
    alert("Url Değişti");
}