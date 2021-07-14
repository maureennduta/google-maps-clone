mapboxgl.accessToken =
  "pk.eyJ1IjoibW8tbW8xIiwiYSI6ImNrbXViNTZnNzB6dDYyeHMwMm5paHNwYnIifQ.JQ_azqeZX41RNvwBsuij8Q";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  //default location set to Kenya
  setupMap([37.9062, 0.0236]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: center,
    zoom: 10,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
