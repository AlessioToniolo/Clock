const clockSection = document.getElementById("clock");
let switches = document.querySelectorAll('.switch');
const militaryTime = document.querySelectorAll('input[type=checkbox]')[0];
const utcTime = document.querySelectorAll('input[type=checkbox]')[1];

for (var i = 0; i < switches.length; i++) {
  switches[i].addEventListener('click', function(event) {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
      this.querySelector('input[type=checkbox]').checked = false;
    } else {
      this.classList.add('active');
      this.querySelector('input[type=checkbox]').checked = true;
    }
  })
}

function getTime() {
      function pad(number) {
        if (number < 10) {
          return "0" + number;
        } else {
          return number;
        }
      }
      const now = new Date();
  
    // Conditionals to run each function
      if (utcTime.checked === true) {
          if (militaryTime.checked === true) { 
              const muhh = pad(now.getUTCHours());
              const mumm = pad(now.getUTCMinutes());
              const muss = pad(now.getUTCSeconds());
              return `${muhh}:${mumm}:${muss}`;
          } else {
                const uhh = pad(now.getUTCHours());
                const umm = pad(now.getUTCMinutes());
                const uss = pad(now.getUTCSeconds());
                
               const ucorrectedHours = uhh - 12;
                let utime;
                if (uhh > 12) {
                 utime = `${ucorrectedHours}:${umm}:${uss}`;
                } else {
                 utime = `${uhh}:${umm}:${uss}`;
                }
                
                if (uhh >= 12) {
                  const upmTime = utime + " PM";
                  return upmTime;
                } else {
                  const uamTime = utime + " AM";
                  return uamTime;
                }
          }
      } else {
          if (militaryTime.checked === true) {
              const mhh = pad(now.getHours());
              const mmm = pad(now.getMinutes());
              const mss = pad(now.getSeconds());
              return `${mhh}:${mmm}:${mss}`;
          } else {
                const hh = pad(now.getHours());
                const mm = pad(now.getMinutes());
                const ss = pad(now.getSeconds());
              
                const correctedHours = hh - 12;
                let time;
                if (hh > 12) {
                 time = `${correctedHours}:${mm}:${ss}`;
                } else {
                 time = `${hh}:${mm}:${ss}`;
                }
                
                if (hh >= 12) {
                  const pmTime = time + " PM";
                  return pmTime;
                } else {
                  const amTime = time + " AM";
                  return amTime;
                }
          }
      }
}


function tickClock() {
  clockSection.textContent = getTime();
}
tickClock();
setInterval(tickClock, 1000);