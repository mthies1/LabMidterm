


var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 30.0, lng: -91.0},
   zoom: 10
 });
  map.data.loadGeoJson('http://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=la&parameterCd=00060,00065&siteType=ST');
 }
//
