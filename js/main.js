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
function findMin(a,b,c){
    var result;
    if(a>b){
        if(a>c){
            result = a;
        }else{
            result = c;
        }
    }else{
        if(b>c){
            result = b;
        }else{
            result = c;
        }
    }
    return result;
}
function findMax(a,b,c){
    var result;
    if(a<b){
        if(a<c){
            result = 1;
        }else{
            result = 3;
        }
    }else{
        if(b<c){
            result = 2;
        }else{
            result = 3;
        }
    }
    return result;
}

function winner(a){
    var winElement;
    if(a==1){
        winElement = document.getElementById('carA').parentElement;
    }else if(a==2){
        winElement = document.getElementById('carB').parentElement;
    }else{
        winElement = document.getElementById('carC').parentElement;
    }
    return winElement;
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

    setTimeout(() => {
        $("#result").text("Thứ tự về đích là : "+compare(a,b,c));
        winner(findMax(a,b,c)).children[3].style.display = 'block';
        winner(findMax(a,b,c)).classList.add('blueviolet');
    }, findMin(a,b,c));  
    
});

$('#btn2').click(function(){
    $("#carA").css('left','0px');
    $("#carB").css('left','0px');
    $("#carC").css('left','0px');
    $("#result").text("Thứ tự về đích là : ")

    winner(1).children[3].style.display = 'none';
    winner(2).children[3].style.display = 'none';
    winner(3).children[3].style.display = 'none';

    winner(1).classList.remove('blueviolet');
    winner(2).classList.remove('blueviolet');
    winner(3).classList.remove('blueviolet');
});