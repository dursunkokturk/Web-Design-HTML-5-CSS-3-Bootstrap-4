var color = "red";

switch(color){
    case "red":
        document.write("<div style=\"text-align:center;background-color:red;\"><h1>Kırmızı<h1></div>");
        break;
    case "yellow":
        document.write("<div style=\"text-align:center;background-color:yellow;\"><h1>Sarı<h1></div>");
        break;
    case "purple":
        document.write("<div style=\"text-align:center;background-color:purple;\"><h1>Mor<h1></div>");
        break;
    default:
        document.write("Böyle Bir Renk Yoktur");
}