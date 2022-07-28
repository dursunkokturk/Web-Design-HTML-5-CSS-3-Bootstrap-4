var Pictures = [
    'img/coder.jpg',
    'img/laptop.jpg',
    'img/perfect.jpg'
];

var Picture_Indis = 0;

function Previous_Pictures(){
    var Slider = document.getElementById("slider");
    Picture_Indis--;
    if(Picture_Indis < 0){
        Picture_Indis = Pictures.length-1;
    }
    Slider.src = Pictures[Picture_Indis];
}
function Next_Pictures(){
    var Slider = document.getElementById("slider");
    Picture_Indis++;
    if(Picture_Indis >= Pictures.length){
        Picture_Indis = 0;
    }
    Slider.src = Pictures[Picture_Indis];
}