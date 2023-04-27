const citymap = {
  chicago: {
    center: { lat: 41.8781, lng: -87.6298 },
    population: 2746388,
  },
};

function initMap() {
  const iitLocation = {lat:41.83570098540951, lng: -87.62571134647413};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: iitLocation,
    position: google.maps.ControlPosition.BOTTOM_CENTER
  });
  
//*IIT Campus Marker*//
  var iitLocationMarker = new google.maps.Marker({
    position: iitLocation,
    map,
    title: "IIT!",
    animation: google.maps.Animation.DROP,
    icon:{
      url: 'images/cleariitlogo.png',
      scaledSize: new google.maps.Size(30,30),
    }
  });

  var iitLocationInfoString = "<h2>IIT Location</h2><h3>Close to Bridgeport and located in Bronzeville</h3><p>This is where everyone is at during the semester including me.</p>";

  var iitLocationinfoWindow = new google.maps.InfoWindow({
    content: iitLocationInfoString
  });
    
  google.maps.event.addListener(iitLocationMarker, 'mouseover', function(){
    iitLocationinfoWindow.open(map, iitLocationMarker);
  });

  google.maps.event.addListener(iitLocationMarker, 'mouseout', function(){
    iitLocationinfoWindow.close();
  });

  for (const city in citymap) {
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.5,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.30,
      map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 10,
    });
  }
}

//*Box Slider*//
$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'horizontal',
    auto: true,
    speed: 500,
    pause: 5000
  });
});

window.initMap = initMap;
  
