function sendSOS(){
 navigator.geolocation.getCurrentPosition(pos=>{
  let msg = `🚨 SOS SENT!
Lat:${pos.coords.latitude}
Lng:${pos.coords.longitude}
SMS sent to trusted contacts (simulated)`;
  alert(msg);
  document.getElementById("location").innerText = msg;
 });
}
