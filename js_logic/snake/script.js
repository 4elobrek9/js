const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let snake = [{ x: 15, y: 15 }];
let direction = { x: 0, y: 0 };
let food = { x: getRandomCoord(), y: getRandomCoord() };
let bonusFood = null;
let poisonFood = null;
let portal = null;
let score = 0;
let lives = 3;
let speed = 120;
let level = 1;
let obstacles = [];
let shieldActive = false;
let gameInterval;

function startGame() {
    gameInterval = setInterval(updateGame, speed);
}

function updateGame() {
    moveSnake();
    checkCollision();
    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    if (bonusFood) drawBonusFood();
    if (poisonFood) drawPoisonFood();
    if (portal) drawPortal();
    drawSnake();
    drawObstacles();
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * 20, food.y * 20, 20, 20);
}

function drawBonusFood() {
    ctx.fillStyle = 'gold';
    ctx.fillRect(bonusFood.x * 20, bonusFood.y * 20, 20, 20);
}

function drawPoisonFood() {
    ctx.fillStyle = 'purple';
    ctx.fillRect(poisonFood.x * 20, poisonFood.y * 20, 20, 20);
}

function drawPortal() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(portal.x * 20, portal.y * 20, 20, 20);
}

function drawSnake() {
    ctx.fillStyle = shieldActive ? 'cyan' : 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20);
    });
}

function drawObstacles() {
    ctx.fillStyle = 'black';
    obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x * 20, obstacle.y * 20, 20, 20);
    });
}

function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        document.getElementById('eatSound').play();
        score++;
        updateScore();
        food = { x: getRandomCoord(), y: getRandomCoord() };

        if (score % 5 === 0) {
            level++;
            updateLevel();
            generateObstacles();
            adjustSpeed();
        }

        if (Math.random() < 0.3) bonusFood = { x: getRandomCoord(), y: getRandomCoord() };
        if (Math.random() < 0.2) poisonFood = { x: getRandomCoord(), y: getRandomCoord() };
        if (Math.random() < 0.1) portal = { x: getRandomCoord(), y: getRandomCoord() };
    } else if (bonusFood && head.x === bonusFood.x && head.y === bonusFood.y) {
        document.getElementById('bonusSound').play();
        score += 3;
        speed = Math.max(50, speed - 5);
        shieldActive = true;
        setTimeout(() => (shieldActive = false), 10000);
        updateScore();
        bonusFood = null;
    } else if (poisonFood && head.x === poisonFood.x && head.y === poisonFood.y) {
        document.getElementById('damageSound').play();
        lives--;
        updateLives();
        poisonFood = null;
    } else if (portal && head.x === portal.x && head.y === portal.y) {
        head.x = getRandomCoord();
        head.y = getRandomCoord();
        portal = null;
    } else {
        snake.pop();
    }
}

function checkCollision() {
    const head = snake[0];

    if (head.x < 0 || head.x >= canvas.width / 20 || head.y < 0 || head.y >= canvas.height / 20 ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y) ||
        obstacles.some(obstacle => obstacle.x === head.x && obstacle.y === head.y)) {

        if (shieldActive) {
            shieldActive = false;
        } else {
            lives--;
            updateLives();
        }

        if (lives === 0) {
            alert(`Игра окончена! Ваш счет: ${score}`);
            document.location.reload();
        } else {
            resetSnake();
        }
    }
}

function resetSnake() {
    snake = [{ x: 15, y: 15 }];
    direction = { x: 0, y: 0 };
}

function generateObstacles() {
    obstacles = [];
    for (let i = 0; i < level + Math.floor(Math.random() * 5); i++) {
        let obstacle;
        do {
            obstacle = { x: getRandomCoord(), y: getRandomCoord() };
        } while (snake.some(segment => segment.x === obstacle.x && segment.y === obstacle.y) || (obstacle.x === food.x && obstacle.y === food.y));
        obstacles.push(obstacle);
    }
}

function adjustSpeed() {
    speed = Math.max(50, speed - 5);
    clearInterval(gameInterval);
    startGame();
}

function changeDirection(event) {
    switch (event.key) {
        case 'ArrowUp': if (direction.y === 0) direction = { x: 0, y: -1 }; break;
        case 'ArrowDown': if (direction.y === 0) direction = { x: 0, y: 1 }; break;
        case 'ArrowLeft': if (direction.x === 0) direction = { x: -1, y: 0 }; break;
        case 'ArrowRight': if (direction.x === 0) direction = { x: 1, y: 0 }; break;
    }
}

function updateScore() { document.getElementById('score').textContent = score; }
function updateLevel() { document.getElementById('level').textContent = level; }
function updateLives() { document.getElementById('lives').textContent = lives; }
function getRandomCoord() { return Math.floor(Math.random() * 30); }

document.addEventListener('keydown', changeDirection);
startGame();