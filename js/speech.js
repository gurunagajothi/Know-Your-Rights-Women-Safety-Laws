let synth = window.speechSynthesis;
let utterance;

function startReading() {
  stopReading();
  const text = document.getElementById("lawsContent").innerText;
  utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-IN";
  synth.speak(utterance);
}

function pauseReading() {
  if (synth.speaking) synth.pause();
}

function stopReading() {
  if (synth.speaking || synth.paused) synth.cancel();
}
