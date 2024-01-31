const btnStart  = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");

let hrs=mins=sec=ms=0,starttimer;

btnStart.addEventListener("click",()=>{
    
    btnStart.classList.add("start-active");
    btnStop.classList.remove("stop-active");
    starttimer=setInterval(()=>{
    ms++;
    if(ms==100)
    {
        sec++;
        ms=0;
    }
    if(sec==60)
    {
        mins++;
        sec=0;
    }
    if(mins==60){
        hrs++;
        mins=0;
    }
    updatetime();
    },10)
});

btnStop.addEventListener("click",()=>{
    btnStart.classList.remove("start-active");
    btnStop.classList.add("stop-active");
    clearInterval(starttimer);
});

btnReset.addEventListener("click",()=>{
    btnStart.classList.remove("start-active");
    btnStop.classList.remove("stop-active");
    clearInterval(starttimer);
    hrs=mins=sec=ms=0;
    updatetime();
});


function updatetime() {
    phrs=hrs < 10? "0"+hrs:hrs;
    pmins=mins < 10? "0"+mins:mins;
    psec=sec < 10? "0"+sec:sec;
    pms=ms < 10? "0"+ms:ms;

document.querySelector(".hrs").innerText = phrs;
document.querySelector(".min").innerText = pmins;
document.querySelector(".sec").innerText = psec;
document.querySelector(".ms").innerText = pms;



}