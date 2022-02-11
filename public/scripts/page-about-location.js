const options = {
  dragging: false,
  touchZoom: false,
  doubleClick: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// create map

const map = L.map("mapid", options).setView([-22.9277209, -43.686198], 12);

// create and add titleLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon

const icon = L.icon({
  iconUrl: "public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker

L.marker([-22.9277209, -43.686198], { icon }).addTo(map);
