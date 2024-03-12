const num1 = document.getElementById("num1");

const list = document.querySelector("#list");

let addTime;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

let h;
let m;
let s;

let showTime;

function start() {
    if (!isRunning){
        addTime = setInterval(add, 1000);
        isRunning = true;
    }
}

function stopTime() {
    clearInterval(addTime);
    isRunning = false;
}

function reset() {
    clearInterval(addTime);
    num1.innerHTML = "00:00:00";
    isRunning = false;
    seconds =0;
    minutes=0;
    hours = 0;

    const list = document.querySelector("#list");
    list.innerHTML = "";
}

function add(){
    seconds++
    if (seconds === 60){
        seconds =0;
        minutes++
    }

    if (minutes === 60){
        minutes = 0;
        hours++;
    }

     h = hours < 10 ? "0" + hours: hours;
     m = minutes < 10 ? "0" + minutes: minutes;
     s = seconds < 10 ? "0" + seconds: seconds;

    showTime = `${h}:${m}:${s}`;

    num1.innerHTML = `${h}:${m}:${s}`;
}

function showInterval(){
    const list = document.querySelector("#list");

    const li = document.createElement("li");

    li.innerHTML = showTime;
    list.appendChild(li);

}