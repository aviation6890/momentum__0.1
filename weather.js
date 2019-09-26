const API_KEY = "96cb754e00b7e33f467b8d9380b5cd27";

const COORDS = "coords";

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

  console.log(coordsObj);
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
  }
}

function init() {
  loadCoords();
}

init();
