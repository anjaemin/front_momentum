const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hour = new String(date.getHours()).padStart(2, "0");
    const minutes = new String(date.getMinutes()).padStart(2, "0");
    const second = new String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minutes}:${second}`;
}

getClock();
setInterval(getClock, 1000);