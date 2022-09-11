var second = document.querySelector("#sec");
var minute = document.querySelector("#min");
var hour = document.querySelector("#hour");
var micro = document.querySelector("#mic");
var startbtn = document.querySelector(".start");
var stopbtn = document.querySelector(".stop");
var resetbtn = document.querySelector(".reset")
var sec = 0, mic = 0, min = 0, ssset = 0, sset = 0, mset = 0, hset = 0, hou = 1, counter;


//stop watch
startbtn.addEventListener('click', function () {
   
    if (!counter) {
        counter = setInterval(run_time, 10); 
    }
    function run_time() {
        if (mic<99) {
             mic = mic + 1;
            if (mic<10) {
                micro.textContent ="0" + mic;
            } else {
                micro.textContent = mic;
            }
        }
        else {
            mic = 0;
            micro.textContent = "0" + mic;
        }
        if(mic===0){
        if (sec<59) {
             sec = sec + 1;
            if (sec<10) {
                second.textContent ="0" + sec;
            } else {
                second.textContent = sec;
            }
            sset = 1;
        }
        else {
            sec = 0;
            sset = 2;
            ssset = 0;
            second.textContent = "0" + sec;
            }
        }
        if (sset === 2) {
            while (ssset === 0) {
                if (min<59)
              {   min++;
            
                if (min<10) {
                    minute.textContent ="0" + min;
                } else {
                    minute.textContent = min;
                 }
                    mset = 1;
                    ;
            } 
            else {
                 min = 0;
                 minute.textContent ="0" + min;
                 mset = 2;
                    hset = 0;
                }
                ssset = 1;  
            }
             
        }
        if (mset === 2) {
            while (hset===0) {
                 if (hou<=24)
              {
                if (hou<10) {
                    hour.textContent ="0" + hou;
                } else {
                    hour.textContent = hou;
                 }
                hou++;
            } 
            else {
                hou = 1;
                hour.textContent ="0" + hou;
                }
                 hset = 1;
            }
        }     
    }
})
    stopbtn.addEventListener('click', function () {
        clearInterval(counter);
        counter = false;
    })
     resetbtn.addEventListener('click', function () {
        clearInterval(counter);
         counter = false;
         sec = 0; min = 0; hou = 0; mic = 0;
         second.textContent = "0" + sec;
         minute.textContent = "0" + min;
         hour.textContent = "0" + hou;
         micro.textContent = "0" + mic;
     }) 



