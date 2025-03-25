const express = require('express');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// Пути к данным
const usersPath = path.join(__dirname, '../../users_data/users.json');
const publicPath = path.join(__dirname, '../../');

app.use(express.json());
app.use(cookieParser());
app.use(express.static(publicPath));

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.redirect('/registr.html');
// });

// Загрузка пользователей из файла
let users = {};
if (fs.existsSync(usersPath)) {
  users = JSON.parse(fs.readFileSync(usersPath, 'utf8'));
}

// Регистрация
app.post('/register', (req, res) => {
  const { id, password, name } = req.body;

  // Проверка длины ID
  if (id.length > 12 || !/^[a-zA-Z0-9]+$/.test(id)) {
    return res.status(400).json({ error: 'ID должен быть на английском и не более 12 символов' });
  }

  // Проверка, существует ли пользователь
  if (users[id]) {
    return res.status(400).json({ error: 'Пользователь с таким ID уже существует' });
  }

  // Создание пользователя
  users[id] = { id, password, name };
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

  // Установка куки
  res.cookie('userId', id, { maxAge: 900000, httpOnly: true });
  res.cookie('userName', name, { maxAge: 900000, httpOnly: true });

  res.status(201).json({ message: 'Пользователь зарегистрирован' });
});

// Вход
app.post('/login', (req, res) => {
  const { id, password } = req.body;

  // Проверка пользователя
  if (!users[id] || users[id].password !== password) {
    return res.status(401).json({ error: 'Неверный ID или пароль' });
  }

  // Установка куки
  res.cookie('userId', id, { maxAge: 900000, httpOnly: true });
  res.cookie('userName', users[id].name, { maxAge: 900000, httpOnly: true });

  res.json({ message: 'Вход выполнен' });
});

// Проверка авторизации
app.get('/check-auth', (req, res) => {
  const userId = req.cookies.userId;
  if (!userId || !users[userId]) {
    return res.status(401).json({ error: 'Не авторизован' });
  }
  res.json({ userId, userName: users[userId].name });
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
