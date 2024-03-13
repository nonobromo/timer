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
    if (!isRunning) {
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
    seconds = 0;
    minutes = 0;
    hours = 0;

    const list = document.querySelector("#list");
    list.innerHTML = "";
    localStorage.clear();
}

function add() {
    seconds++
    if (seconds === 60) {
        seconds = 0;
        minutes++
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    h = hours < 10 ? "0" + hours : hours;
    m = minutes < 10 ? "0" + minutes : minutes;
    s = seconds < 10 ? "0" + seconds : seconds;

    showTime = `${h}:${m}:${s}`;

    num1.innerHTML = `${h}:${m}:${s}`;
}

function showInterval() {


    const list = document.querySelector("#list");
    const li = document.createElement("li");

    li.innerHTML = showTime;
    list.appendChild(li);

    saveLaps();
}

function saveLaps() {
    const laps = document.querySelectorAll('ol li');

    const lapsArray = [];

    for (const li of laps) {
        const interval = li.textContent;

        if (interval) {
            lapsArray.push(interval);
        }
    }
    localStorage.setItem("laps", JSON.stringify(lapsArray));
}



function loadLaps() {
    if (localStorage.laps) {
        const times = JSON.parse(localStorage.laps);

        for (const time of times) {
            const li = document.createElement("li");
            li.textContent = time;
            list.appendChild(li);
        }
    }
}

window.addEventListener("load", loadLaps);