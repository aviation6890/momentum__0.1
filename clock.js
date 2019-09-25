const clockContainer = document.querySelector(".js-clock"),
  colockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minute = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  colockTitle.innerText = `${hours}:${minute}:${seconds}`;
}
function init() {
  getTime();
}

init();
