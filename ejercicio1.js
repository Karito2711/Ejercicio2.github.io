var osm = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>' +
        "contributors",
      maxZoom: 18,
    }
  );
  var map = L.map("map", {
    center: [1.61389, -75.6128],
    zoom: 13,
    layers: osm,
    scrollWheelZoom: false,
  });
  L.control.scale().addTo(map);

      //Añadir un icono de marcador
var myIcon1 = L.icon({
    iconUrl: 'icono.PNG',
    iconSize: [30, 30],
    popupAnchor: [-1, -10]
    });

  var marker = L.marker([1.6202449688398415, -75.60382644992481], {icon:myIcon1}
  ).addTo(map)
    .bindPopup('Universidad de la amazonia')
    .openPopup();

 //Añadir un círculo
var circle = L.circle([1.6153647622901208, -75.61384927492189], 500, {
    color: 'pink',
    fillColor: '#FFC0C0',
    fillOpacity: 0.5
    }).addTo(map);

    var myIcon2 = L.icon({
        iconUrl: 'icono2.PNG',
        iconSize: [30, 30],
        popupAnchor: [-1, -10]
        });
          
    var marker2 = L.marker([1.6153325885735046, -75.61389219026513], {icon:myIcon2}
        ).addTo(map)
          .bindPopup('Alcaldía')
          .openPopup();
          
var myIcon3 = L.icon({
            iconUrl: 'icono3.PNG',
            iconSize: [30, 30],
            popupAnchor: [-1, -10]
            });
              
     var marker3 = L.marker([1.6152573131571846, -75.61336877677259], {icon:myIcon3}
            ).addTo(map)
              .bindPopup('Parque Santander')
              .openPopup();  

//Añadir un polígono
var polygon = L.polygon([
    [1.6151820067593488, -75.61369562032502],
    [1.6153992484523254, -75.61304024041706],
    [1.614616150966208, -75.61313355143501]
    ]).addTo(map)
    .bindPopup ('parque');


//Añadir una línea
var pointA = new L.LatLng(1.6187866562565414, -75.60189397876792);
var pointB = new L.LatLng(1.618623785902201, -75.60206418804307);
var pointC = new L.LatLng(1.61922793225593, -75.60274852317164);
var pointD = new L.LatLng(1.618118053307778, -75.6038245601133);
var pointE = new L.LatLng(1.6201644795717325, -75.6051116457992);
var pointF = new L.LatLng(1.6200368348405327, -75.60451185280311);
var pointG = new L.LatLng(1.6202449688398415, -75.60382644992481);

var latlngs = [pointA, pointB, pointC, pointD, pointE, pointF, pointG];
var polyline = L.polyline(
latlngs, {color: 'purple'}
)
.addTo(map)
.bindPopup ('ruta Karen Silva');
              
   