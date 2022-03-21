

setInterval(showTime, 1000);
var weekdays = ['Sunday','Monday','Tuesday','Wesnesday','Thrusday','Friday','Saturday','Sunday'];

 function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let date = time.getDay();
    let weekname = weekdays[date];
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" + min;
  
    document.getElementById("text1").innerHTML = currentTime;
    document.getElementById("text2").innerHTML = currentTime;
    document.getElementById("day").innerHTML = weekname;
 }