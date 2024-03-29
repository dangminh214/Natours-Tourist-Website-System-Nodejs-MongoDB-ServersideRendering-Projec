/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A';
var map = new mapboxgl.Map({
  container: 'map', //access using the id map in pug file see lesson 187 about using Mapbox
  style: 'mapbox://styles/jonasschmedtmann/cjvi9q8jd04mi1cpgmg7ev3dy',
  scrollZoom: false
  /* center: [-118.11349, 34.111745],
  zoom: 10,
  interactive: false */
})

//bounds on the map declare
const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  //create marker
  const el = document.createElement('div');
  el.className = 'marker';

  //add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  }).setLngLat(loc.coordinates)
  .addTo(map);

  //Add popup
  new mapboxgl.Popup({
    offset: 30
  })
  .setLngLat(loc.coordinates)
  .setHTML(`<p>Day ${loc.day}:${loc.description}</p>`)
  .addTo(map);

  //extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
   bottom: 150,
   left: 100, 
   right: 100      
  }
});