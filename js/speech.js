let synth = window.speechSynthesis;
let utterance;

function startReading(){
  stopReading();
  const text = document.getElementById("lawsContent").innerText;
  utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}
function stopReading(){ if(synth.speaking) synth.cancel();}
