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

function updateHeaderTitle() {
  const profileName = document.getElementById('profile-name').innerText;
  const headerTitle = document.querySelector('.header-title');
  headerTitle.innerText = profileName;
}

updateHeaderTitle();

const observer = new MutationObserver(updateHeaderTitle);
observer.observe(document.getElementById('profile-name'), { childList: true, subtree: true });

function changeID() {
  const newID = prompt("Введите новый ID:");
  if (newID) {
    document.getElementById('profile-id').textContent = "@" + newID;
  }
}

function openChat(chatName, avatarUrl) {
  document.getElementById('chat-window').style.display = 'flex';
  document.getElementById('chat-title').textContent = chatName;
  document.querySelector('.ch-avatar').src = avatarUrl;
}

function closeChat() {
  document.getElementById('chat-window').style.display = 'none';
}

function sendMessage() {
  const input = document.getElementById('message-input');
  const message = input.value.trim();
  if (message) {
    const messagesContainer = document.getElementById('chat-messages');
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent');

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const messageText = document.createElement('span');
    messageText.textContent = message;

    const timeElement = document.createElement('span');
    timeElement.classList.add('message-time');
    timeElement.textContent = currentTime;

    messageElement.appendChild(messageText);
    messageElement.appendChild(timeElement);

    messagesContainer.appendChild(messageElement);
    
    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}

const menuIcon = document.querySelector('.header-left .icon');
const sideMenu = document.querySelector('.side-menu');
const phoneFrame = document.querySelector('.phone-frame');
const chatList = document.querySelector('.chat-list');

menuIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  if (sideMenu.classList.contains('open')) {
    chatList.style.transform = `translateX(${sideMenu.offsetWidth * 0.75}px)`;
  } else {
    chatList.style.transform = 'translateX(0)';
  }
});

phoneFrame.addEventListener('click', (event) => {
  if (event.target !== menuIcon && !sideMenu.contains(event.target)) {
    sideMenu.classList.remove('open');
    chatList.style.transform = 'translateX(0)';
  }
});

let startX, currentX, initialX, xOffset = 0;
let active = false;

phoneFrame.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  active = true;
});

phoneFrame.addEventListener('touchmove', (e) => {
  if (active) {
    currentX = e.touches[0].clientX;
    xOffset = (currentX - startX) * 0.5;

    if (xOffset > 0) {
      sideMenu.style.left = `0`;
      chatList.style.transform = `translateX(${xOffset}px)`;
    } else {
      sideMenu.style.left = `${xOffset}px`;
      chatList.style.transform = `translateX(${xOffset}px)`;
    }
  }
});

phoneFrame.addEventListener('touchend', (e) => {
  initialX = currentX;
  active = false;

  if (xOffset > 100) {
    sideMenu.classList.add('open');
    chatList.style.transform = `translateX(${sideMenu.offsetWidth * 0.75}px)`;
  } else if (xOffset < -100) {
    sideMenu.classList.remove('open');
    chatList.style.transform = 'translateX(0)';
  } else if (xOffset < 0) {
    closeChat();
  } else {
    sideMenu.style.left = '-300px';
    chatList.style.transform = 'translateX(0)';
  }

  xOffset = 0;
});

class Time {
  constructor(displayElementId) {
      this.displayElement = document.getElementById(displayElementId);
      this.updateTime();
      setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      this.displayElement.textContent = `${hours}:${minutes}`;
  }
}

const time = new Time('timeDisplay');

let isMinecraftFontActive = false;

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

isMinecraftFontActive = false;
updateFontStyle();