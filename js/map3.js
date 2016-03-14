


var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 34.78, lng: -78.64},
   zoom: 8,
   zoomControl: true
 });
 // map.data.loadGeoJson('http://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=la&parameterCd=00060,00065&siteType=ST');
 // map.data.loadGeoJson('gstore.unm.edu/apps/rgis/datasets/d93688b6-eece-4253-a6e8-5b18c8834bef/S_GEN_STRUCT.derived.json');
 //map.data.loadGeoJson('http://clt.charlotte.opendata.arcgis.com/datasets/61d841ee66bf4c1a862777607dc6e91c_7.geojson');
 //map.data.loadGeoJson('http://clt.charlotte.opendata.arcgis.com/datasets/82b9ca8a57e44eccb0d104ff7d325829_0.geojson');
 //map.data.loadGeoJson('http://clt.charlotte.opendata.arcgis.com/datasets/357e79f8af3b4bb1a3ada6271507d6c3_0.geojson');
 map.data.loadGeoJson('http://data.wake.opendata.arcgis.com/datasets/e971bec1f1d94c9d927548b6d45455d4_0.geojson');
 map.data.loadGeoJson('http://data.wake.opendata.arcgis.com/datasets/e10e1fafe835491db6d68b5ececa7d66_0.geojson');
 }
