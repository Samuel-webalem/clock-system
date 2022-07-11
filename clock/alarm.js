var ahour = document.querySelector("#ahour");
var amin = document.querySelector("#amin");
var start = document.querySelector("#start");
var asec = document.querySelector("#asec");
var inputhour = document.querySelector("#inputhour");
var inputmin = document.querySelector("#inputmin");
var inputsec = document.querySelector("#inputsec");
var alarmseted = document.querySelector("#alarmseted");
var audio = document.querySelector("#audio");
var coun;
var ih, im ,is;
start.addEventListener('click', function () {
    if (inputhour != 0 || inputmin != 0) {
            ih = inputhour.value;
            im = inputmin.value;
            is = inputsec.value;
        alarmseted.textContent = "ALARM SETED TO " + ih + ":" + im + " :"+ is;
            inputhour.value = null;
            inputmin.value = null;
            inputsec.value = null
      }
     })

function begincount() {
coun = setInterval(timeset, 1000); 
    function timeset() {
        
     let current_time = new Date();
    ahour.textContent = current_time.getHours();
    amin.textContent = current_time.getMinutes();
    asec.textContent = current_time.getSeconds();
     if (current_time.getSeconds()<10) {
                asec.textContent ="0" + current_time.getSeconds();
        }
         if (current_time.getMinutes()<10) {
                amin.textContent ="0" + current_time.getMinutes();
        }
         if (current_time.getSeconds()<10) {
                asec.textContent ="0" + current_time.getSeconds();
        }
        if (current_time.getHours()<10) {
                ahour.textContent ="0" + current_time.getHours();
        }
        if(current_time.getMinutes()==im && current_time.getHours()==ih && current_time.getSeconds()==is) {
                console.log("ladk");
                audio.play();
                alarmseted.textContent = " ";
            } 
    }    
}
begincount();


