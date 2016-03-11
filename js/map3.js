


var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 30.0, lng: -91.0},
   zoom: 10
 });
  map.data.loadGeoJson('http://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=la&parameterCd=00060,00065&siteType=ST');
  map.data.loadGeoJson('gstore.unm.edu/apps/rgis/datasets/d93688b6-eece-4253-a6e8-5b18c8834bef/S_GEN_STRUCT.derived.json');
 }
//
