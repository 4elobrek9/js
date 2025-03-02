// function compareNumbers(num1) {
//     if (num1 > 0) {
//         return num1.toLocaleString();
//     } else if (num1 === 0) {
//         return "дебил, ноль нельзя возводить в степень";
//     } else {
//         return "отрицательные я не буду возводить бе-бе-бе";
//     }
// }

// function checkNumbers() {
//     const num1 = parseFloat(document.getElementById("num1").value);
//     const num2 = parseInt(document.getElementById("num2").value);

//     if (isNaN(num1) || isNaN(num2)) {
//         alert('Пожалуйста, введите корректные числа.');
//         return;
//     }

//     let sigma_res = Math.pow(num1, num2);
//     const result = compareNumbers(sigma_res);
//     alert('Результат: ' + result);
// }

// // -------------------------------- НОД/НОК

// function gcd(a, b) {
//     // Алгоритм Евклида для нахождения НОД
//     a = Math.abs(a);
//     b = Math.abs(b);
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// function lcm(a, b) {
//     // НОК = (a * b) / НОД
//     return (a * b) / gcd(a, b);
// }

// function hmm() {
//     const num1 = parseInt(document.getElementById("Nok1").value); // Получаем значение Nok1
//     const num2 = parseInt(document.getElementById("Nok2").value); // Получаем значение Nok2

//     if (isNaN(num1) || isNaN(num2)) {
//         alert('Пожалуйста, введите корректные числа.');
//         return;
//     }

//     const result = lcm(num1, num2); // Находим НОК
//     alert('Наименьшее общее кратное: ' + result);
// }

// function gcd(a, b) {
//     // Алгоритм Евклида для нахождения НОД
//     a = Math.abs(a);
//     b = Math.abs(b);
//     while (b !== 0) {
//         let temp = b;
//         b = a % b; // Остаток от деления
//         a = temp;  // Обновляем a
//     }
//     return a; // НОД
// }

// function hmm() {
//     const num1 = parseInt(document.getElementById("Nod1").value); // Получаем значение Nok1
//     const num2 = parseInt(document.getElementById("Nod2").value); // Получаем значение Nok2

//     if (isNaN(num1) || isNaN(num2)) {
//         alert('Пожалуйста, введите корректные числа.');
//         return;
//     }

//     const result = gcd(num1, num2); // Находим НОД
//     alert('Наибольший общий делитель: ' + result);
// }

// function checkNumbers() {
//     const num1 = document.getElementById('num1').value;
//     const num2 = document.getElementById('num2').value;
//     if (num1 && num2) {
//         const result = Math.pow(num1, num2);
//         document.getElementById('result').innerText = `Результат: ${result}`;
//     } else {
//         document.getElementById('result').innerText = 'Пожалуйста, введите оба числа.';
//     }
// }

// function findNok() {
//     const Nok1 = document.getElementById('Nok1').value;
//     const Nok2 = document.getElementById('Nok2').value;
//     // Реализуйте логику поиска НОК здесь
//     document.getElementById('nokResult').innerText = 'Результат НОК будет тут.';
// }

// function findNod() {
//     const Nod1 = document.getElementById('Nod1').value;
//     const Nod2 = document.getElementById('Nod2').value;
//     // Реализуйте логику поиска НОД здесь
//     document.getElementById('nodResult').innerText = 'Результат НОД будет тут.';
// }

// // ------------------------------------------------------------

//   function createSakura() {
//       const sakura = document.createElement('img');
//       sakura.src = 'sakura-Photoroom.png'; // Замените на URL вашего изображения лепестка
//       sakura.alt = 'Сакура';
//       sakura.width = 30;
//       sakura.className = 'sakura';
      
//       // Установка случайной позиции по горизонтали
//       const randomX = Math.random() * 100;
//       sakura.style.left = `${randomX}vw`;

//       // Установка случайной анимации
//       const animationDuration = Math.random() * 5 + 5; // от 5 до 10 секунд
//       sakura.style.animationDuration = `${animationDuration}s, ${animationDuration}s`;
      
//       // Добавление анимации вращения
//       sakura.style.animation += ', rotate linear infinite';

//       document.body.appendChild(sakura);

//       // Удаление лепестка после завершения анимации
//       sakura.addEventListener('animationend', () => {
//           sakura.remove();
//       });
//   }

//   // Создание лепестков сакуры каждые 1 секунду
//   setInterval(createSakura, 50);


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
    // Алгоритм Евклида для нахождения НОД
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
    // НОК = (a * b) / НОД
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
    document.getElementById('nokResult').innerText = 'Наименьшее общее кратное: ' + result;
}

function findNod() {
    const num1 = parseInt(document.getElementById("Nod1").value);
    const num2 = parseInt(document.getElementById("Nod2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Пожалуйста, введите корректные числа.');
        return;
    }

    const result = gcd(num1, num2); // Находим НОД
    document.getElementById('nodResult').innerText = 'Наибольший общий делитель: ' + result;
}

// function createSakura() {
//     const sakura = document.createElement('img');
//     sakura.src = 'sakura-Photoroom.png'; // Замените на URL вашего изображения лепестка
//     sakura.alt = 'Сакура';
//     sakura.width = 30;
//     sakura.className = 'sakura';
    
//     // Установка случайной позиции по горизонтали
//     const randomX = Math.random() * 100;
//     sakura.style.left = `${randomX}vw`;

//     // Установка случайной анимации
//     const animationDuration = Math.random() * 5 + 5; // от 5 до 10 секунд
//     sakura.style.animationDuration = `${animationDuration}s`;

//     document.body.appendChild(sakura);

//     // Удаление лепестка после завершения анимации
//     sakura.addEventListener('animationend', () => {
//         sakura.remove();
//     });
// }

// // Создание лепестков сакуры каждые 1 секунду
// setInterval(createSakura, 100);

const MAX_SAKURA = 50; // Максимальное количество лепестков
let sakuraCount = 0; // Счетчик текущих лепестков

function createSakura() {
    // Проверка, не превышает ли текущее количество лепестков максимальное
    if (sakuraCount >= MAX_SAKURA) {
        return; // Прекратить выполнение, если лимит достигнут
    }

    const sakura = document.createElement('img');
    sakura.src = 'sakura-Photoroom.png'; // Замените на URL вашего изображения лепестка
    sakura.alt = 'Сакура';
    sakura.width = 30;
    sakura.className = 'sakura';
    
    // Установка случайной позиции по горизонтали
    const randomX = Math.random() * 100;
    sakura.style.position = 'absolute'; // Добавлено для правильного позиционирования
    sakura.style.left = `${randomX}vw`;

    // Установка случайной анимации
    const animationDuration = Math.random() * 5 + 5; // от 5 до 10 секунд
    sakura.style.animationDuration = `${animationDuration}s`;

    document.body.appendChild(sakura);
    sakuraCount++; // Увеличение счетчика при создании нового лепестка

    // Удаление лепестка после завершения анимации
    sakura.addEventListener('animationend', function handler() {
        sakura.removeEventListener('animationend', handler); // Удалить обработчик события
        sakura.remove(); // Удалить элемент
        sakuraCount--; // Уменьшение счетчика при удалении лепестка
    });
}

// Создание лепестков сакуры каждые 1 секунду
setInterval(createSakura, 1000); // Изменено на 1000 мс (1 секунда)

document.getElementById('hamburger').onclick = function() {
    const menu = document.getElementById('menu');
    const buttons = document.querySelectorAll('.menu-btn');

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        buttons.forEach(btn => {
            btn.style.opacity = '0'; // Скрываем кнопки
            btn.style.transform = 'translateY(20px)'; // Сдвигаем вниз
        });
    } else {
        menu.style.display = 'flex';
        buttons.forEach((btn, index) => {
            btn.style.transitionDelay = `${index * 100}ms`; // Задержка для каждой кнопки
            btn.style.opacity = '0.2'; // Показываем кнопки
            btn.style.transform = 'translateY(0)'; // Возвращаем на место
        });
    }
};
