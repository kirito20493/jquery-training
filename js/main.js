var carElement = $('.car');
var wallElement = $('.wall');
var boomElement = $('.boom');
var overlayElement = $('.overlay');
function moveCar(a){
    var move =0;
    do{
        move += 10;
    }
    while(move < (a-50));
    return move;
}

function appearWall(){
    var x = Math.floor(Math.random() * 1000);  
    return x+50;
}


$('#btn1').click(function(){

    var coordinates = appearWall();
    var coordinatesBoom = coordinates-10;
    console.log(coordinates);
    wallElement.css("left",`${coordinates}px`)
    boomElement.css("left",`${coordinatesBoom}px`)
    carElement.animate({
        left: `${moveCar(coordinates)}px`
    },2000);
    setTimeout(function(){ overlayElement.css('display','block');
    wallElement.css("display",'none');
    boomElement.css("display",'none') }, 2100);
    setTimeout(function(){ overlayElement.css('display','none'); }, 3000);
});

$('#btn2').click(function(){
    carElement.css('left','0px');
    wallElement.css('left','500px');
    boomElement.css('left','490px');
    wallElement.css("display",'block');
    boomElement.css("display",'block');
});