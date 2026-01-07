function sendSOS() {
  navigator.geolocation.getCurrentPosition(pos=>{
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    document.getElementById("location").innerText = 
      `🚨 SOS sent! Location: ${lat}, ${lng}`;
    loadMap(lat,lng);
  });
}
