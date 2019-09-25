const clockContainer = document.querySelector(".js-clock"),
  colockTitle = clockContainer.querySelector("h1");

//3.2__ clock.js
function getTime() {
  const date = new Date();
  const minute = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  colockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minute < 10 ? `0${minute}` : minute
  }:${seconds < 9 ? `0${seconds}` : seconds}`;
}
function init() {
  setInterval(getTime, 1000);
}

init();
