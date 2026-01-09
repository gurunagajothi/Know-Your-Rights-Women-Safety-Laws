let synth = window.speechSynthesis;
let utterance;
let currentLang = "en-IN"; // default English

function setLanguage(lang) {
  if (lang === "en") currentLang = "en-IN";
  if (lang === "ta") currentLang = "ta-IN";
  if (lang === "hi") currentLang = "hi-IN";
}

function startReading() {
  stopReading();

  const text = document.getElementById("lawsContent").innerText;

  utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = currentLang;
  utterance.rate = 1;
  utterance.pitch = 1;

  synth.speak(utterance);
}

function stopReading() {
  if (synth.speaking) {
    synth.cancel();
  }
}
