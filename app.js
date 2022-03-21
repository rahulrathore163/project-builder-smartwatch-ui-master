var timer1 = document.getElementById("text1");
var timer2 = document.getElementById("text2");

var h = 0;
var m = 0;
var s = 0;
var stopTime = true;

window.onload=()=>{
    time();
}


function time(){
    if(stopTime == true){
        stopTime = false;
        timerCycle();
    }
}
function timerCycle(){
    if(stopTime == false){
        h = parseInt(h);
        m = parseInt(m);
        s = parseInt(s);
        s++;
        if(s == 60){
            s = 0;
            m++;
        }
        if(m == 60){
            m = 0;
            s = 0;
            h++;
        }
        if(m < 10 || m == 0){
            m = '0' + m;
        }
        if(h < 10 || h == 0){
            h = '0' + h;
        }
        timer1.innerHTML = h + ':' + m;
        timer2.innerHTML = h + ':' + m;

        setTimeout(timerCycle,1000);
    }
}