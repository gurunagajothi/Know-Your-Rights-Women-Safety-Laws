function reply(){

  const questions = [
  {
    q: "What is IPC 354 related to?",
    a: "Assault or criminal force against women"
  },
  {
    q: "What does POSH stand for?",
    a: "Prevention of Sexual Harassment"
  },
  {
    q: "Women Helpline Number?",
    a: "181"
  }
];

let index = 0;

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  if (index < questions.length) {
    document.getElementById("chatbox").innerHTML =
      `<p><b>Bot:</b> ${questions[index].q}</p>
       <button onclick="showAnswer()">Show Answer</button>`;
  } else {
    document.getElementById("chatbox").innerHTML =
      "<p><b>Bot:</b> Quiz completed ✅</p>";
  }
}

function showAnswer() {
  document.getElementById("chatbox").innerHTML +=
    `<p><b>Answer:</b> ${questions[index].a}</p>`;
  index++;
  setTimeout(showQuestion, 1500);
}

  const q = document.getElementById("userInput").value.toLowerCase();
  let r="Please call 181 or 112";
  if(q.includes("law")) r="IPC 354 protects women";
  if(q.includes("help")) r="Press SOS or call police";
  if(q.includes("abuse")) r="Domestic Violence Act applies";
  document.getElementById("botReply").innerText=r;
}
