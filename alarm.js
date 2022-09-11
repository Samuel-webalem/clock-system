var current_hour_hold = document.querySelector("#ahour");
var current_minute_hold = document.querySelector("#amin");
var start = document.querySelector("#start");
var current_second_hold = document.querySelector("#asec");
var inputhour = document.querySelector("#inputhour");
var inputmin = document.querySelector("#inputmin");
var inputsec = document.querySelector("#inputsec");
var alarmseted = document.querySelector("#alarmseted");
var audio = document.querySelector("#audio");
var coun;
var seted_hour, seted_minute ,seted_second;
start.addEventListener('click', function () {
    if (inputhour != 0 || inputmin != 0) {
            seted_hour = inputhour.value;
            seted_minute = inputmin.value;
            seted_second = inputsec.value;
        alarmseted.textContent = "ALARM SETED TO " + seted_hour + ":" + seted_minute + ":"+ seted_second;
            inputhour.value = null;
            inputmin.value = null;
            inputsec.value = null
      }
     })

function begincount() {
coun = setInterval(timeset, 1000); 
    function timeset() {
        
            let current_time = new Date();
            //current time
    current_hour_hold.textContent = current_time.getHours();
    current_minute_hold.textContent = current_time.getMinutes();
    current_second_hold.textContent = current_time.getSeconds();
     if (current_time.getSeconds()<10) {
                current_second_hold.textContent ="0" + current_time.getSeconds();
        }
         if (current_time.getMinutes()<10) {
                current_minute_hold.textContent ="0" + current_time.getMinutes();
        }
         if (current_time.getSeconds()<10) {
                current_second_hold.textContent ="0" + current_time.getSeconds();
        }
        if (current_time.getHours()<10) {
                current_hour_hold.textContent ="0" + current_time.getHours();
        }
        if(current_time.getMinutes()==seted_minute && current_time.getHours()==seted_hour && current_time.getSeconds()==seted_second) {
                audio.play();
                alarmseted.textContent = " ";
            } 
    }    
}
begincount();


