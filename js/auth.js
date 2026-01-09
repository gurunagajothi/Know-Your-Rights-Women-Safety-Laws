function socialLogin(platform) {
  // show fake loading
  alert(`Connecting to ${platform}...`);

  // simulate login delay
  setTimeout(() => {
    localStorage.setItem("loggedInUser", platform + " User");
    localStorage.setItem("loginType", platform);

    // redirect
    window.location.href = "dashboard.html";
  }, 1200);
}
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
