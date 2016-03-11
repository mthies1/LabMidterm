//ArcGIS Map Javascript Code

/*
 * Create a simple map with the ArcGIS JavaScript API.
 * example: http://developers.arcgis.com/javascript/samples/map_simple/
 */

var map;
require([
  "esri/map",
  //"esri/layers/ArcGISDynamicMapServiceLayer",
  "esri/layers/KMLLayer",
  //"esri/basemaps",
  "esri/dijit/BasemapToggle",    // modules need to be added to this list before dojo/domReady, separated by a comma and enclosed in quotation marks
  "dojo/domReady!"
], function (
  Map, KMLLayer, BasemapToggle
   // the names of functions corresponding to the modules need to be added to this list, separated by a comma
) {
  map = new Map("map", {
    basemap: "topo", // list of basemap names: https://developers.arcgis.com/javascript/jsapi/esri.basemaps-amd.html
    center: [-91, 30.5],
    zoom: 6
  });
//for KML look for a "KML feed, .kml link
//http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month_age_link.kml

var kmlUrl = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month_age_link.kml";
    var kml = new KMLLayer(kmlUrl);
    map.addLayer(kml);

  var toggle = new BasemapToggle({
    map:map,
    basemap: "satellite"
  }, "BasemapToggle");
  toggle.startup();
  // code to add layers and map control goes here

});
