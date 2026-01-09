async function loadSafetyTip() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  alert("Safety Tip: " + data.slip.advice);
}
