import os

# Определяем структуру проекта и содержимое файлов
project_structure = {
    'index.html': """<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SigmaGram</title>
  <link rel="stylesheet" href="styles/main.css">
</head>
<body>
  <div class="phone-frame">
    <div class="phone-head">
      <h4 class="time_in" id="timeDisplay">10:10</h4>
      <img class="www" src="./assets/images/bater.png"></img>
    </div>
    <div class="header">
      <div class="header-left">
        <div class="icon">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="header-title">SigmaGram</div>
      </div>
      <div class="header-right"></div>
    </div>
    <div class="chat-list">
      <div class="chat-item" onclick="openChat('WOMAN', './assets/images/альтушка.jpg')">
        <img class="avatar" src="./assets/images/альтушка.jpg" alt="Avatar">
        <div class="message-info">
          <div class="title">WOMAN</div>
          <div class="content">Ну чё?)</div>
        </div>
        <div class="time">9:40</div>
      </div>
      <div class="separator"></div>
      <div class="chat-item" onclick="openChat('❤️‍🔥 彼岸花 ❤️‍🔥', './assets/images/моя ава.jpg')">
        <img class="avatar" src="./assets/images/моя ава.jpg" alt="Avatar">
        <div class="message-info">
          <div class="title">❤️‍🔥 彼岸花 ❤️‍🔥</div>
          <div class="content">бести</div>
        </div>
        <div class="time">01:46</div>
      </div>
      <div class="separator"></div>
      <div class="chat-item" onclick="openChat('𝕄𝕣.ℍ𝕖𝕝𝕡𝕖𝕣', './assets/images/helper.jpg')">
        <img class="avatar" src="./assets/images/helper.jpg" alt="Avatar">
        <div class="message-info">
          <div class="title">𝕄𝕣.ℍ𝕖𝕝𝕡𝕖𝕣</div>
          <div class="content">С вас 9500, картой или наличными?</div>
        </div>
        <div class="time">10:25</div>
      </div>
      <div class="separator"></div>
      <div class="chat-item" onclick="openChat('📃 • TOF #NEWS', './assets/images/TOF.jpg')">
        <img class="avatar" src="./assets/images/TOF.jpg" alt="Avatar">
        <div class="message-info">
          <div class="title">📃 • TOF #NEWS</div>
          <div class="content">Сигма: ну чё делаем дальше?</div>
        </div>
        <div class="time">Вчера</div>
      </div>
      <div class="separator"></div>
      <div class="chat-item" onclick="openChat('❤️‍🔥 ЛЕГЕНДА ❤️‍🔥', './assets/images/лучшая.jpg')">
        <img class="avatar" src="./assets/images/лучшая.jpg" alt="Avatar">
        <div class="message-info">
          <div class="title">❤️‍🔥 ЛЕГЕНДА ❤️‍🔥</div>
          <div class="content">Чуваак...</div>
        </div>
        <div class="time">21:16</div>
      </div>
      <div class="separator"></div>
    </div>    
    <div class="side-menu">
      <div class="profile-block">
        <img class="avatar" src="https://dthezntil550i.cloudfront.net/w1/latest/w11906110323031110009617316/e564f187-7ccb-4510-9a6d-8eadfb0ab1a2.jpg" alt="Avatar" id="profile-avatar">
        <div class="name" id="profile-name">❤️‍🔥 ヨルハ二号B型 ❤️‍🔥
          <div class="dropdown-arrow"></div>
        </div>
        <div class="id" id="profile-id">@123</div>
      </div>
      <div class="menu-items">
        <a href="#" id="settings-button">Настройки</a>
      </div>
    </div>
  </div>

  <div class="chat-window" id="chat-window">
    <div class="chat-header">
      <div class="back-arrow" onclick="closeChat()">
        <img src="./assets/images/стрелка.png" alt="Back Arrow">
      </div>
      <img class="ch-avatar" src="./assets/images/chat-avatar.png" alt="Avatar">
      <div class="header-info">
        <div id="chat-title">Чат</div>
        <div class="last-seen">был(а) в 10:25</div>
      </div>
      <img class="phone" src="./assets/images/phone.png" alt="phone">
      <div class="vertical-dot">⋮</div>
    </div>
    <div class="chat-messages" id="chat-messages"></div>
    <div class="chat-input">
      <img src="./assets/images/smile.png" style="margin-left: 5px; height: 45px;">
      <input type="text" id="message-input" placeholder="Cообщение" />
      <button onclick="sendMessage()" style="border: none; background: none; padding: 0;">
        <img src="./assets/images/send.png" alt="Отправить" style="width: auto; height: 45px;">
      </button>
    </div>
  </div>

  <div class="rotate-message" style="display: none;">
    Пожалуйста, поверните телефон в вертикальное положение
  </div>

  <div class="settings-menu" id="settings-menu">
    <div class="close-settings" onclick="closeSettings()">← Закрыть</div>
    <div class="setting-item" onclick="changeAvatar()">Сменить аватарку</div>
    <div class="setting-item" onclick="changeName()">Сменить ник</div>
    <div class="setting-item" onclick="changeID()">Сменить ID</div>
    <div class="setting-item" onclick="toggleFont()">Включить/Выключить шрифт undertale</div>
  </div>

  <script src="./scripts/main.js"></script>
</body>
</html>""",
    'styles': {
        'main.css': """@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

body {
  font-family: Arial, sans-serif;
  background-color: #000;
  color: #fff;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.phone-frame {
  border: 0px;
}

/* под комп */
@media (orientation: landscape) {
  .phone-frame {
    border: 10px solid #5d0697;
    max-width: 400px;
    height: 100%;
    max-height: 800px;
    border-radius: 30px;
  }
  .www {
    z-index: 12;
    padding-left: 15%;
  }
  .separator, .separator1 {
    width: 80%;
  }
}

/* под мобилу */
@media (orientation: portrait) {
  .phone-frame {
    border: 0px;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 1px;
  }
  .www {
    z-index: 12;
    padding-left: 79%;
  }
  .separator, .separator1 {
    width: 86%;
  }
}

.phone-frame {
  width: 100%;
  background-color: #2d1934;
  position: relative;
  overflow: hidden;
}
.phone-head{
  display: flex;
  align-items: center;
}
.time_in {
  z-index: 9999;
  margin-top: 2%;
  margin-left: 3%;
  margin-bottom: 2%;
  font-family: 'Arial', sans-serif;
  font-weight: 20;
}
.www {
  position: fixed;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #341c3c;
}
.header-left {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.header-left .icon {
  width: 20px;
  height: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
}
.header-left .icon .line {
  width: 100%;
  height: 2px;
  background-color: #fff;
}
.header-title {
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
.header-right {
  width: 40px;
  height: 40px;
  background-image: url('./assets/images/луп_чист.png');
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: auto;
  padding: 0.5%;
}
.chat-list {
  transition: transform 0.4s ease-in-out;
  overflow-y: auto;
}
.chat-item {
  display: flex;
  background-color: #2d1934;
  padding: 2%;
  padding-top: 1%;
  padding-bottom: 1%;
  border: #000;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s;
}
.separator, .separator1 {
  height: 0.2px;
  background-color: #000000;
  margin: 10px 0;
  margin-left: 6vh;
}
.chat-item:hover {
  background-color: #555;
}
.chat-item .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.chat-item .message-info {
  flex-grow: 1;
}
.chat-item .message-info .title {
  font-weight: bold;
}
.chat-item .message-info .content {
  color: #aaa;
}
.chat-item .time {
  font-size: 12px;
  color: #aaa;
}
.side-menu {
  position: absolute;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  background-color: #220e29;
  box-sizing: border-box;
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.side-menu.open {
  left: 0;
}
.profile-block {
  background-image: url('https://images.wallpaperscraft.ru/image/single/serdechki_ogni_svechenie_147987_225x300.jpg');
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: 20%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  position: relative;
}
.profile-block .avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
  margin-left: 3%;
  margin-top: 13%;
}
.profile-block .name {
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
}
.profile-block .id {
  font-size: 14px;
  color: #aaa;
}
.profile-block .dropdown-arrow {
  display: inline-block;
  width: 10px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  padding: 3px;
  margin-left: 5px;
  transform: rotate(45deg);
  position: absolute;
  right: 10px;
  top: 42%;
}
.menu-items {
  width: 100%;
}
.menu-items a {
  display: block;
  padding: 12px 16px;
  background-color: #360d52;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
  margin-bottom: 10px;
}
.menu-items a:hover {
  background-color: #4b0580;
  transform: translateY(-2px);
}
.menu-items a:active {
  transform: translateY(1px);
}
.settings-menu {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  padding: 20px;
}
.settings-menu.active {
  display: flex;
}
.settings-menu .close-settings {
  cursor: pointer;
  color: #fff;
  margin-bottom: 20px;
}
.settings-menu .setting-item {
  background-color: #444;
  padding: 15px;
  border-radius: 10px;
  margin: 10px 0;
  width: 100%;
  text-align: left;
  cursor: pointer;
}
.rotate-message {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1b1b1b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  display: none;
}
.chat-window {
  display: none;
  flex-direction: column;
  height: 100%;
  background-color: #222;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
.ch-avatar{
  border-radius: 50%;
}
.chat-header {
  display: flex;
  align-items: center;
  background-color: #341c3c;
  height: 8%;
  padding-top: 7%;
  position: relative;
}
.back-arrow {
  margin-right: 10px;
}
.back-arrow img {
  width: 40px;
  height: auto;
}
.ch-avatar {
  width: 40px;
  height: auto;
  margin-right: 10px;
}
.header-info {
  flex-grow: 1;
}
#chat-title {
  font-weight: bold;
  font-size: 18px;
}
.last-seen {
  font-size: 14px;
  color: #aaa;
  white-space: nowrap;
}
.phone{
  position: absolute;
  height: 50px;
  width: auto;
  margin-left: 75%;
  top: 40%;
  color: #fff;
}
.vertical-dot {
  position: absolute;
  height: 10%;
  width: auto;
  right: 15px;
  top: 55%;
  transform: translateY(-50%);
  font-size: 24px;
  color: #fff;
}
.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  background-image: url("https://avatars.dzeninfra.ru/get-zen_doc/9195055/pub_648a0eec9506570f87e0b518_648a0efcc4bec04674773e9d/scale_1200");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px;
}
.message {
  max-width: 80%;
  padding: 10px;
  margin: 2px 0;
  position: relative;
  align-self: flex-end;
  opacity: 0.9;
}
.message.sent {
  background-color: rgba(93, 6, 151, 0.9);
  color: white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.message.sent:first-child {
  border-top-right-radius: 25px;
}
.message.sent:last-child {
  border-bottom-right-radius: 5px;
  border-top-right-radius: 0;
}
.message.sent:last-child::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -10px;
    width: 20px;
    height: 10px;
    background-color: rgba(93, 6, 151, 0.9);
    border-top-right-radius: 100px;
}
.message-time {
  display: block;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
  text-align: right;
}
.message.sent:not(:last-child) {
  border-bottom-right-radius: 5px;
}
.chat-input {
  display: flex;
  padding: 2%;
  background-color: #341c3c;
}
#message-input {
  border: none;
  outline: none;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
}
.chat-input input {
  flex-grow: 1;
  padding: 10px;
  border: none;
  margin-right: 10px;
  background-color: #341c3c;
}
.chat-input button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #341c3c;
  cursor: pointer;
}""",
        'base': {
            'reset.css': """/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}"""
        },
        'components': {
            'header.css': """.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #341c3c;
}""",
            'chat-list.css': """.chat-list {
  transition: transform 0.4s ease-in-out;
  overflow-y: auto;
}""",
            'chat-window.css': """.chat-window {
  display: none;
  flex-direction: column;
  height: 100%;
  background-color: #222;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}""",
            'side-menu.css': """.side-menu {
  position: absolute;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  background-color: #220e29;
  box-sizing: border-box;
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}""",
            'settings-menu.css': """.settings-menu {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  padding: 20px;
}"""
        },
        'utils': {
            'variables.css': """:root {
  --primary-color: #5d0697;
  --secondary-color: #341c3c;
}"""
        }
    },
    'scripts': {
        'main.js': """const settingsButton = document.getElementById('settings-button');
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
updateFontStyle();""",
        'modules': {
            'time.js': """class Time {
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

const time = new Time('timeDisplay');""",
            'chat.js': """function openChat(chatName, avatarUrl) {
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
}""",
            'settings.js': """const settingsButton = document.getElementById('settings-button');
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
updateFontStyle();""",
            'menu.js': """const menuIcon = document.querySelector('.header-left .icon');
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
});"""
        }
    },
    'README.md': """# SigmaGram

Это проект мессенджера SigmaGram, созданный для демонстрации возможностей HTML, CSS и JavaScript.

## Структура проекта

- **index.html** - Основной файл HTML.
- **assets/** - Папка с изображениями и шрифтами.
- **styles/** - Папка с CSS файлами.
- **scripts/** - Папка с JavaScript файлами.
- **README.md** - Описание проекта.

## Запуск проекта

1. Склонируйте репозиторий.
2. Откройте файл `index.html` в браузере.

## Автор

[Ваше имя]"""
}

# Функция для создания структуры проекта
def create_project_structure(base_path, structure):
    for name, content in structure.items():
        new_path = os.path.join(base_path, name)
        if isinstance(content, dict):
            os.makedirs(new_path, exist_ok=True)
            create_project_structure(new_path, content)
        elif isinstance(content, list):
            os.makedirs(new_path, exist_ok=True)
            for file in content:
                with open(os.path.join(new_path, file), 'w', encoding='utf-8') as f:
                    f.write('')
        else:
            with open(new_path, 'w', encoding='utf-8') as f:
                f.write(content)

# Запуск создания структуры проекта
base_path = './SigmaGram'  # Укажите путь, где нужно создать проект
os.makedirs(base_path, exist_ok=True)
create_project_structure(base_path, project_structure)

print('Структура проекта успешно создана!')
