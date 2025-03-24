const settingsButton = document.getElementById('settings-button');
const settingsMenu = document.getElementById('settings-menu');

settingsButton.addEventListener('click', () => {
  settingsMenu.classList.toggle('active');
});

function closeSettings() {
  settingsMenu.classList.remove('active');
}

function changeAvatar() {
  const newAvatar = prompt("Введите ссылку на новую аватарку:");
  if (newAvatar) {
    document.getElementById('profile-avatar').src = newAvatar;
  }
}

function changeName() {
  const newName = prompt("Введите новый ник:");
  if (newName) {
    document.getElementById('profile-name').textContent = newName;
  }
}

function changeID() {
  const newID = prompt("Введите новый ID:");
  if (newID) {
    document.getElementById('profile-id').textContent = "@" + newID;
  }
}

function toggleFont() {
  isMinecraftFontActive = !isMinecraftFontActive;
  updateFontStyle();
  closeSettings();
}

function updateFontStyle() {
  const elements = document.querySelectorAll('body, .chat-item, .header-title, .menu-items a, .setting-item, #message-input, .last-seen, .message');
  elements.forEach(element => {
    if (isMinecraftFontActive) {
      element.style.fontFamily = "'Press Start 2P', monospace";
    } else {
      element.style.fontFamily = "Arial, sans-serif";
    }
  });
}

let isMinecraftFontActive = false;
updateFontStyle();