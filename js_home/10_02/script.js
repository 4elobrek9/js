const colorForm = document.getElementById('color-form');
const colorPalette = document.getElementById('color-palette');
const colorPicker = document.getElementById('color-picker');
const colorCodeInput = document.getElementById('color-code');
let colors = [];

function saveColorsToCookies() {
    const colorsJson = JSON.stringify(colors);
    document.cookie = `colors=${encodeURIComponent(colorsJson)}; path=/; max-age=31536000`;
}
function loadColorsFromCookies() {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].trim().split('=');
        if (cookiePair[0] === 'colors') {
            const colorsJson = decodeURIComponent(cookiePair[1]);
            colors = JSON.parse(colorsJson);
            colors.forEach(color => displayColor(color));
            break;
        }
    }
}

// Обработчик выбора цвета
colorPicker.addEventListener('input', function() {
    colorCodeInput.value = colorPicker.value;
});

colorForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const colorName = document.getElementById('color-name').value.trim();
    const colorType = document.getElementById('color-type').value;
    const colorCode = document.getElementById('color-code').value.trim();

    // Проверка уникальности названия
    if (colors.some(color => color.name.toLowerCase() === colorName.toLowerCase())) {
        alert('Цвет с таким названием уже существует!');
        return;
    }

    // Проверка корректности кода цвета
    if (!isValidColorCode(colorCode, colorType)) {
        alert('Некорректный код цвета для выбранного типа!');
        return;
    }

    // Добавление цвета в массив и отображение на странице
    const newColor = { name: colorName, type: colorType, code: colorCode };
    colors.push(newColor);
    displayColor(newColor);
    saveColorsToCookies(); // Сохраняем цвета в куки
});

function isValidColorCode(code, type) {
    const rgbPattern = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
    const rgbaPattern = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([01]?\.\d+)\s*\)$/;
    const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    switch (type) {
        case 'RGB': return rgbPattern.test(code);
        case 'RGBA': return rgbaPattern.test(code);
        case 'HEX': return hexPattern.test(code);
        default: return false;
    }
}

function displayColor(color) {
    const colorBox = document.createElement('div');
    colorBox.style.backgroundColor = color.code;
    colorBox.textContent = `${color.name} (${color.type})`;
    colorPalette.appendChild(colorBox);
}

// Загружаем цвета из куки при загрузке страницы
loadColorsFromCookies();
