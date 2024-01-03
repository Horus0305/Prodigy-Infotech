const startbtn = document.querySelector("#start");
const resetbtn = document.querySelector("#reset");
const lapbtn = document.querySelector("#lap");
const laps = document.querySelector(".laps");

let watch = document.querySelector(".watch");
let hour = 0;
let minute=0;
let second=0;
let hr = document.querySelector("#hourval");
let min=document.querySelector("#minuteval");
let sec=document.querySelector("#secondval");
let isPlay=false;
let isPaused=false;
let timer;
let num=1;

const btnvis= ()=>{
    lapbtn.classList.remove("hidden");
    resetbtn.classList.remove("hidden");
};
const btninvis= ()=>{
    lapbtn.classList.add("hidden");
    resetbtn.classList.add("hidden");
};

function updateTimeDisplay() {
    sec.innerHTML = second;
    min.innerHTML = minute;
    hr.innerHTML = hour;
}
startbtn.addEventListener("click",()=>{
    if(!isPlay && !isPaused){
        btnvis();
        startbtn.innerHTML="Pause";
        isPlay=true;
        watch.classList.add('animate');
        timer = setInterval(() => {
            second++;
            if (second === 60) {
                minute++;
                second = 0;
            }
            if (minute === 60) {
                hour++;
                minute = 0;
            }
            updateTimeDisplay();
        }, 1000);
    }
    else if(isPlay){
        if(watch.classList.contains('paused')){
            startbtn.innerHTML="Pause";
            watch.classList.remove('paused');
            timer = setInterval(() => {
                second++;
                if (second === 60) {
                    minute++;
                    second = 0;
                }
                if (minute === 60) {
                    hour++;
                    minute = 0;
                }
                updateTimeDisplay();
            }, 1000);

        }
        else{
            startbtn.innerHTML="Resume";
            watch.classList.add('paused');   
            clearInterval(timer);

            sec.innerHTML = second;
            min.innerHTML = minute;
            hr.innerHTML = hour;
            
        }    
    }
});

resetbtn.addEventListener("click",()=>{
    btninvis();
    startbtn.innerHTML="Start";
    watch.classList.remove('animate');
    watch.classList.remove('paused');
    isPlay=false;
    sec.innerHTML ='0';
    min.innerHTML ='0';
    hr.innerHTML ='0';
    minute=0;
    hour=0;
    second=0;
    clearInterval(timer);
    laps.innerHTML='';
    num = 1;

});

lapbtn.addEventListener("click",()=>{
let li = document.createElement("li");
let number = document.createElement("span");
let timestamp = document.createElement("span");

li.setAttribute("class","lap-item");
number.setAttribute("class","number");
timestamp.setAttribute("class","timestamp");

li.append(number,timestamp);
laps.append(li);

timestamp.innerHTML = `${hour}:${minute}:${second}`;
number.innerHTML = `${num++}.`;
});



