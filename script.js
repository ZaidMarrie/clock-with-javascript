let hoursHand = document.querySelector('[data-hour-hand]');
let minutesHand = document.querySelector('[data-minute-hand]');
let secondHand = document.querySelector('[data-second-hand]');

setInterval(getTime, 1000);

function getTime() {
    let date = new Date();
    let secondsRatio = date.getSeconds() / 60;
    let minutesRatio = (secondsRatio + date.getMinutes()) / 60;
    let hoursRatio = (minutesRatio + date.getHours()) / 12;
    setTime(secondHand, secondsRatio);
    setTime(minutesHand, minutesRatio);
    setTime(hoursHand, hoursRatio);
}

function setTime(element, ratio) {
    element.style.setProperty("--rotation", ratio * 360)
}

getTime();