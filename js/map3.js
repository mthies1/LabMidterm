


var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 35.0, lng: -78.64},
   zoom: 9,
   zoomControl: true
 });
 // map.data.loadGeoJson('http://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=la&parameterCd=00060,00065&siteType=ST');
 // map.data.loadGeoJson('gstore.unm.edu/apps/rgis/datasets/d93688b6-eece-4253-a6e8-5b18c8834bef/S_GEN_STRUCT.derived.json');
 //map.data.loadGeoJson('http://clt.charlotte.opendata.arcgis.com/datasets/61d841ee66bf4c1a862777607dc6e91c_7.geojson');
 //map.data.loadGeoJson('http://clt.charlotte.opendata.arcgis.com/datasets/82b9ca8a57e44eccb0d104ff7d325829_0.geojson');
 //map.data.loadGeoJson('http://clt.charlotte.opendata.arcgis.com/datasets/357e79f8af3b4bb1a3ada6271507d6c3_0.geojson');
 map.data.loadGeoJson('http://data.wake.opendata.arcgis.com/datasets/e971bec1f1d94c9d927548b6d45455d4_0.geojson');
 //map.data.loadGeoJson('http://data.wake.opendata.arcgis.com/datasets/e10e1fafe835491db6d68b5ececa7d66_0.geojson');
 var ctaLayer = new google.maps.KmlLayer({
   url: 'http://waterservices.usgs.gov/nwis/site/?format=gm,1.0&countyCd=37183&outputDataTypeCd=iv,qw,aw&siteType=AT,GL,OC,OC-CO,ES,LK,ST,ST-CA,ST-DCH,ST-TS,SP,GW,GW-CR,GW-EX,GW-HZ,GW-IW,GW-MW,GW-TH,SB,SB-CV,SB-GWD,SB-TSM,SB-UZ,WE,LA,LA-EX,LA-OU,LA-SNK,LA-SH,LA-SR,FA,FA-CI,FA-CS,FA-DV,FA-FON,FA-GC,FA-HP,FA-QC,FA-LF,FA-OF,FA-PV,FA-SPS,FA-STS,FA-TEP,FA-WIW,FA-SEW,FA-WWD,FA-WWTP,FA-WDS,FA-WTP,FA-WU,AW,AG,AS',
   map: map
 });

 
}
