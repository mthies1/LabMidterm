
var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   zoom: 10,
   center: {lat: 35.80, lng: -78.64},
 });
 
 map.data.loadGeoJson('http://data.wake.opendata.arcgis.com/datasets/e971bec1f1d94c9d927548b6d45455d4_0.geojson');
 
 // Create an infowindow object to use later
var infowindow = new google.maps.InfoWindow();

/* Create a "listener" that will wait for the user to click an earthquake point,
 * and then display the infowindow with details about that earthquake.
 */
map.data.addListener('click', function(event) {
  // in the geojson feature that was clicked, get the "place" and "mag" attributes
  var shed = event.feature.getProperty("PROPWS");
  var status = event.feature.getProperty("NON_CRIT");
  var html = shed + ' watershed, status: ' + status; 
  infowindow.setContent(html); // show the html variable in the infowindow
  infowindow.setPosition(event.feature.getGeometry().get()); // anchor the infowindow at the marker
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)}); // move the infowindow up slightly to the top of the marker icon
  infowindow.open(map);
});
 
 var ctaLayer = new google.maps.KmlLayer({
   url: 'http://waterservices.usgs.gov/nwis/site/?format=ge,1.0&countyCd=37183&siteOutput=expanded&seriesCatalogOutput=true&outputDataTypeCd=iv,dv,qw&siteType=LK,ST,WE',
   preserveViewport: true,
   map: map
 });
 
}


