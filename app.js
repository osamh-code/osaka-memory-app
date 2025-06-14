
const PASSWORD = "0000";
const MAX_VIEWS = 2;
let viewCount = parseInt(localStorage.getItem('welcomeViews') || "0");

function checkPassword() {
  const input = document.getElementById('password-input').value;
  if (input === PASSWORD) {
    document.getElementById('password-screen').classList.add('hidden');
    if (viewCount < MAX_VIEWS) {
      document.getElementById('welcome-screen').classList.remove('hidden');
      document.getElementById('welcome-screen').classList.add('visible');
    } else {
      document.getElementById('gallery-screen').classList.remove('hidden');
      document.getElementById('gallery-screen').classList.add('visible');
    }
  } else {
    alert("Wrong password.");
  }
}

function hideWelcome() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('gallery-screen').classList.remove('hidden');
  document.getElementById('gallery-screen').classList.add('visible');
  localStorage.setItem('welcomeViews', (++viewCount).toString());
}
