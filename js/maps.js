function loadMap(lat,lng){
  const map = new google.maps.Map(document.getElementById("map"),{
    zoom:15,
    center:{lat,lng}
  });
  new google.maps.Marker({position:{lat,lng},map:map});
}
