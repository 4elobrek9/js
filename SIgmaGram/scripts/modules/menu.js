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