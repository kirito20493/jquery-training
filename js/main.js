function randomSpeedA(){
    speedA = Math.floor(Math.random() * 5000); 
    return speedA;
}
function randomSpeedB(){
    speedB = Math.floor(Math.random() * 5000); 
    return speedB;
}
function randomSpeedC(){
    speedC = Math.floor(Math.random() * 5000); 
    return speedC;
}

function compare(a,b,c){
    var result ="";
    if(a<b){
        if(a<c){
            if(b<c){
                result = "1 - 2 - 3";
            }else{
                result = "1 - 3 - 2";
            }
        }else {
            result = "3 - 1 - 2";
        }
    }else{
        if(b<c){
            if(a<c){
                result = "2 - 1 - 3";
            }else{
                result = "2 - 3 - 1";
            }
        }else{
            result = "3 - 2 - 1";
        }
    }
    return result;
}

$("#btn1").click(function(){
    var a = randomSpeedA();
    var b = randomSpeedB();
    var c = randomSpeedC();

    $("#carA").animate({
        left: '1220px',
    },a);

    $("#carB").animate({
        left: '1220px',
    },b);

    $("#carC").animate({
        left: '1220px',
    },c);

    $("#result").text("Thứ tự về đích là : "+compare(a,b,c));
});

$('#btn2').click(function(){
    $("#carA").css('left','0px');
    $("#carB").css('left','0px');
    $("#carC").css('left','0px');
    $("#result").text("Thứ tự về đích là : ")
});