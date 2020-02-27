function initMap() {
	// add your code here
  L.mapquest.key = '49cSMX9PVfBwlGkZTwdDWHAdAvxWtJo0';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [32.8755, -117.2323],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

//add marker to mapquest
L.marker([32.8755, -117.2323]).addTo(map);
}
