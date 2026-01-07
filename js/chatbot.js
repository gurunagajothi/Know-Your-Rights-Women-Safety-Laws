function reply(){
  const q = document.getElementById("userInput").value.toLowerCase();
  let r="Please call 181 or 112";
  if(q.includes("law")) r="IPC 354 protects women";
  if(q.includes("help")) r="Press SOS or call police";
  if(q.includes("abuse")) r="Domestic Violence Act applies";
  document.getElementById("botReply").innerText=r;
}
