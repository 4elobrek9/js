function compareNumbers(num1) {
    if (num1 > 0) {
        return num1.toLocaleString();
    } else if (num1 === 0) {
        return "дебил, ноль нельзя возводить в степень";
    } else {
        return "отрицательные я не буду возводить бе-бе-бе";
    }
}

function checkNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Пожалуйста, введите корректные числа.');
        return;
    }

    let sigma_res = Math.pow(num1, num2);
    const result = compareNumbers(sigma_res);
    alert('Результат: ' + result);
}

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function findNok() {
    const num1 = parseInt(document.getElementById("Nok1").value);
    const num2 = parseInt(document.getElementById("Nok2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Пожалуйста, введите корректные числа.');
        return;
    }

    const result = lcm(num1, num2); // Находим НОК
    document.getElementById('nokResult').innerText =
    'Наименьшее общее кратное: ' + result;
}

function findNod() {
    const num1 = parseInt(document.getElementById("Nod1").value);
    const num2 = parseInt(document.getElementById("Nod2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Пожалуйста, введите корректные числа.');
        return;
    }

    const result = gcd(num1, num2); // Находим НОД
    document.getElementById('nodResult').innerText =
    'Наибольший общий делитель: ' + result;
}

const MAX_SAKURA = 50;
let sakuraCount = 0;

function createSakura() {
    if (sakuraCount >= MAX_SAKURA) {
        return;
    }

    const sakura = document.createElement('img');
    sakura.src = 'sakura-Photoroom.png';
    sakura.alt = 'Сакура';
    sakura.width = 30;
    sakura.className = 'sakura';
    
    const randomX = Math.random() * 100;
    sakura.style.position = 'absolute';
    sakura.style.left = `${randomX}vw`;

    const animationDuration = Math.random() * 5 + 5;
    sakura.style.animationDuration = `${animationDuration}s`;

    document.body.appendChild(sakura);
    sakuraCount++;

    sakura.addEventListener('animationend', function handler() {
        sakura.removeEventListener('animationend', handler);
        sakura.remove();
        sakuraCount--;
    });
}

setInterval(createSakura, 1000);

document.getElementById('hamburger').onclick = function() {
    const menu = document.getElementById('menu');
    const buttons = document.querySelectorAll('.menu-btn');

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        buttons.forEach(btn => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';
        });
    } else {
        menu.style.display = 'flex';
        buttons.forEach((btn, index) => {
            btn.style.transitionDelay = `${index * 100}ms`;
            btn.style.opacity = '0.2';
            btn.style.transform = 'translateY(0)';
        });
    }
};

function find_ez_num() {
    const num = parseInt(document.getElementById('ez_num').value);
    const factors = primeFactors(num);
    document.getElementById('res_ez_num').innerText =
    `Простые множители числа ${num}: ${factors.join(', ')}`;
}

function primeFactors(n) {
    const factors = [];
    
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

function find_proz() {
    const proz11 = document.getElementById('proz1').value;
    const proz22 = document.getElementById('proz2').value;
    let prozz = ((proz11 * proz22) / 100);
    document.getElementById('prozzz').innerText =
    `процент от числа равен ${prozz} `;
}