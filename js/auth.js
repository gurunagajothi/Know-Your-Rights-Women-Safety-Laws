document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = email.value;
  const password = password.value;

  if (!email.endsWith("@gmail.com")) {
    alert("Please use a valid Gmail ID");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  localStorage.setItem("loggedInUser", email);
  window.location.href = "dashboard.html";
});

function socialLogin(platform) {
  alert(`Redirecting to ${platform} login (Simulation)`);
  localStorage.setItem("loggedInUser", platform + " User");
  window.location.href = "dashboard.html";
}
