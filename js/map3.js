
var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   zoom: 10,
   center: {lat: 35.80, lng: -78.64},
 });
 
 //map.data.loadGeoJson('http://data.wake.opendata.arcgis.com/datasets/e971bec1f1d94c9d927548b6d45455d4_0.geojson');
 //map.data.loadGeoJson('http://data.wake.opendata.arcgis.com/datasets/e10e1fafe835491db6d68b5ececa7d66_0.geojson');
 map.data.loadGeoJson('http://data.wake.opendata.arcgis.com/datasets/65477520a8b949689ec8f804b48cba2f_0.geojson');
 
 // Create an infowindow object to use later
var infowindow = new google.maps.InfoWindow();

/* Create a "listener" that will wait for the user to click an earthquake point,
 * and then display the infowindow with details about that earthquake.
 */
map.data.addListener('click', function(event) {
  var type = event.feature.getProperty("TYPE");
  var use = event.feature.getProperty("PRIMARY_US");
  var html = 'Type: ' + type + 'Primary Use: ' + use; 
  infowindow.setContent(html); // show the html variable in the infowindow
  infowindow.setPosition(event.Feature.getGeometry().get()); // anchor the infowindow at the marker
  infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)}); // move the infowindow up slightly to the top of the marker icon
  infowindow.open(map);
});
 
 var sitequality = new google.maps.KmlLayer({
   url: 'http://waterservices.usgs.gov/nwis/site/?format=ge,1.0&countyCd=37183&siteOutput=expanded&seriesCatalogOutput=true&outputDataTypeCd=iv,dv,qw&siteType=LK,ST,WE',
   preserveViewport: true
 });
 sitequality.setMap( map );
 
}


