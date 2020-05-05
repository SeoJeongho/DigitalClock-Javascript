const hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    ampm = document.getElementById('ampm');

function clock() {
    const date = new Date();
    let h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const ap = "AM";
    if(h > 12) {
        h = h - 12;
        const ap = "PM";
    }
    hours.innerHTML = `${h < 10 ? `0${h}` : h}`;
    minutes.innerHTML = `${m < 10 ? `0${m}` : m}`;
    seconds.innerHTML = `${s < 10 ? `0${s}` : s}`;
    ampm.innerHTML = ap;
}

function init() {
    clock();
    setInterval(clock, 1000);
}
init();
