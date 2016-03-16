

function addmypopup(feature, layer)
	{
		msg = Feature.properties.PROPWS + "<br>" + "<br>" + 
		"STATUS: " + Feature.properties.CRIT_NON + "<br>" + 
		"MORE INFO: " + '<a href="http://data.wake.opendata.arcgis.com/datasets/e971bec1f1d94c9d927548b6d45455d4_0"></a>';
		layer.bindPopup(msg);
	}

var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   zoom: 10,
   center: {lat: 35.80, lng: -78.64},
 });
 
 map.data.loadGeoJson('http://data.wake.opendata.arcgis.com/datasets/e971bec1f1d94c9d927548b6d45455d4_0.geojson');
 
 var ctaLayer = new google.maps.KmlLayer({
   url: 'http://waterservices.usgs.gov/nwis/site/?format=ge,1.0&countyCd=37183&siteOutput=expanded&seriesCatalogOutput=true&outputDataTypeCd=iv,dv,qw&siteType=LK,ST,WE',
   preserveViewport: true,
   map: map
 });
 
}

L.geoJson(geojsonFeature, {onEachFeature: addmypopup}).addTo(map);
