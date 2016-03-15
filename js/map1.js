//JavaScript file for Assignment 3 - utilizing Leaflet layers from external Web Mapping Services



//Create a map object and set the initial view with Lat, Long, and Zoom level
var map = L.map('map').setView([30.5, -91], 7);



//Create a baselayer variable with street view for use in the controls, but not to be viewed initially on the map
var streets = L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
	maxZoom: 20,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});    //do not add to map

//Create a baselayer map variable for initial map view using satellite imagery
var base = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
	type: 'sat',
	ext: 'jpg',
	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
	subdomains: '1234'
}).addTo(map);   //add layer to map



//Create a WMS layer object showing the current radar from NOAA web service data
var radar = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WmsServer", {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: "NOAA/NOS/OCS nowCOAST and NOAA/NWS/NCEP/OPC",
  opacity: 0.25
}).addTo(map);  //add layer to map

//Create a WMS layer object showing the precipitation over the last 24 hours, from NOAA web service data
var hr_48_precip = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer", {
  layers: '5',
  format: 'image/png',
  transparent: true,
  attribution: "NOAA/NOS/OCS nowCOAST and NOAA/NWS/NCEP/OPC",
	opacity: 0.25
}).addTo(map);   //add layer to map

//Create a WMS layber object showing flash flood warnings, using data from NOAA web services
var flash_flood = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer/WMSServer", {
	layers: '0',
	format: 'image/png',
	transparent: true,
	attribution: "NOAA NOWCoast",
	opacity: 0.25
}).addTo(map);   //add layer to map



//Create an object containing layers for each basemap, defined above
var baseLayers = {
  "Satellite": base,
  "Streets": streets
};

//Create an object containing the WMS layers for each type of data, defined above
var overlays = {
	"Radar": radar,
	"48-Hour Precipitation": hr_48_precip,
	"Flash Flood Watches": flash_flood
};



//Use this function to add a selection control feature utilizing baselayers and overlays objects created above
L.control.layers(baseLayers, overlays).addTo(map);   //add controls to map
