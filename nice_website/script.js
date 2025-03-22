// Открытие меню настроек
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


function openChat(chatName) {
  document.getElementById('chat-window').style.display = 'flex';
  document.getElementById('chat-title').textContent = chatName;
  document.getElementById('chat-messages').innerHTML = `<strong>${chatName}</strong><br>`;
}

// Закрытие чата
function closeChat() {
  document.getElementById('chat-window').style.display = 'none';
}

// Отправка сообщения
function sendMessage() {
  const input = document.getElementById('message-input');
  const message = input.value.trim();
  if (message) {
    const messagesContainer = document.getElementById('chat-messages');
    messagesContainer.innerHTML += `<div>${message}</div>`;
    input.value = ''; // Очистка поля ввода
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Прокрутка вниз
  }
}

// Обработчик клика на 3 полоски
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

// Обработчик клика вне меню для закрытия меню
phoneFrame.addEventListener('click', (event) => {
  if (event.target !== menuIcon && !sideMenu.contains(event.target)) {
    sideMenu.classList.remove('open');
    chatList.style.transform = 'translateX(0)';
  }
});

// Обработчик свайпов для открытия/закрытия меню
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
``
class Time {
  constructor(displayElementId) {
      this.displayElement = document.getElementById(displayElementId);
      this.updateTime(); // Первоначальное обновление времени
      setInterval(() => this.updateTime(), 1000); // Обновление каждую секунду
  }

  updateTime() {
      const now = new Date(); // Получаем текущее время
      const hours = String(now.getHours()).padStart(2, '0'); // Часы
      const minutes = String(now.getMinutes()).padStart(2, '0'); // Минуты
      const seconds = String(now.getSeconds()).padStart(2, '0'); // Секунды
      this.displayElement.textContent = `${hours}:${minutes}`; // Обновляем текст
  }
}

const time = new Time('timeDisplay');
