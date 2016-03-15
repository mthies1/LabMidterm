


var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   zoom: 10,
   center: {lat: 32.0, lng: -78.64}
   //zoomControl: true
 });
 
 var ctaLayer = new google.maps.KmlLayer({
   url: 'http://waterservices.usgs.gov/nwis/site/?format=ge,1.0&countyCd=37183&siteOutput=expanded&seriesCatalogOutput=true&outputDataTypeCd=iv,dv,qw&siteType=LK,ST,WE',
   preserveViewport: true,
   map: map
 });
 
map.data.loadGeoJson('http://data.wake.opendata.arcgis.com/datasets/e971bec1f1d94c9d927548b6d45455d4_0.geojson');
 
}
