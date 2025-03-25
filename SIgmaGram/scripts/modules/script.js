// Регистрация
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('registerId').value;
    const password = document.getElementById('registerPassword').value;
    const name = document.getElementById('registerName').value;
  
    const response = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, password, name }),
    });
  
    const data = await response.json();
    document.getElementById('message').textContent = data.message || data.error;
    if (response.ok) {
      window.location.href = '/index.html';
    }
  });
  
  // Вход
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('loginId').value;
    const password = document.getElementById('loginPassword').value;
  
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, password }),
    });
  
    const data = await response.json();
    document.getElementById('message').textContent = data.message || data.error;
    if (response.ok) {
      window.location.href = '/index.html';
    }
  });
  
  // Проверка авторизации
  async function checkAuth() {
    const response = await fetch('/check-auth');
    const data = await response.json();
  
    if (response.ok) {
      document.getElementById('profile-id').textContent = `@${data.userId}`;
      document.getElementById('profile-name').textContent = data.userName;
      document.getElementById('profile-avatar').src = `https://dthezntil550i.cloudfront.net/w1/latest/w11906110323031110009617316/e564f187-7ccb-4510-9a6d-8eadfb0ab1a2.jpg`;
    } else {
      window.location.href = '/registr.html';
    }
  }
  
  checkAuth();
  