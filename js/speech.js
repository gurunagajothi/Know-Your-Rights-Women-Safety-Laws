let speech;
let isSpeaking = false;

function startReading() {
    if (isSpeaking) return;

    let text = document.getElementById("lawsContent").innerText;
    speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";

    isSpeaking = true;

    speech.onend = () => {
        isSpeaking = false;
    };

    window.speechSynthesis.speak(speech);
}

function stopReading() {
    window.speechSynthesis.cancel();
    isSpeaking = false;
}
