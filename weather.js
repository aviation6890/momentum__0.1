const weather = document.querySelector(".js-weather");
const API_KEY = "a642557230df536a658e829899660fa0";
const COORDS = "coords";

function getWether(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      const temperture = json.main.temp;
      const place = json.name;

      weather.innerText = `${temperture} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handelGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const coordsObj = {
    latitude: latitude,
    longitude: longitude
  };

  saveCoords(coordsObj);

  getWether(latitude, longitude);
}

function handelGeoError(position) {}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handelGeoSuccess, handelGeoError);
}
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);

  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    console.log(parseCoords);
    getWether(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
