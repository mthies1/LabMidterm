//ArcGIS Map Javascript Code for Midterm Assignment
//KML layer data used.

//Create a map
var map;
require([
  "esri/map",
  //"esri/layers/ArcGISDynamicMapServiceLayer",
  "esri/layers/KMLLayer",
  //"esri/basemaps",
  "esri/dijit/BasemapToggle",    // modules need to be added to this list before dojo/domReady, separated by a comma and enclosed in quotation marks
  "dojo/domReady!"
], function (Map, KMLLayer, BasemapToggle) {    //module names
  map = new Map("map", {
    basemap: "topo", // list of basemap names: https://developers.arcgis.com/javascript/jsapi/esri.basemaps-amd.html
    center: [-91, 30.5],
    zoom: 6
  });

//Create KML layer with data from USGS stream gauge service
var streamgaugeurl = "http://waterwatch.usgs.gov/index.php?m=real&w=kml&r=us&regions=all2";
    var streamgauge = new KMLLayer(streamgaugeurl);
    map.addLayer(streamgauge);   //add to map

//Create KML layer with data from USGS flood service
var floodurl = "http://waterwatch.usgs.gov/download/?gt=map&mt=flood&st=08&dt=site&ht=&fmt=kml";
    var flood = new KMLLayer(floodurl);
    map.addLayer(flood); //add to map
    
//Create a toggle button to switch between satellite view and topography view
  var toggle = new BasemapToggle({
    map:map,
    basemap: "satellite"
  }, "BasemapToggle");
  toggle.startup();
  

});
