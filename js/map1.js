var map;
require([
"esri/basemaps",
    "esri/map",
    "dojo/domReady!"
  ], function (esriBasemaps, Map){
    esriBasemaps.delorme = {
      baseMapLayers: [{url: "http://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer"}
      ],
      thumbnailUrl: "http://www.example.com/images/thumbnail_2014-11-25_61051.png",
      title: "Delorme"
    };
])
