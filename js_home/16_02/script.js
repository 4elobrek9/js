function showTask(taskNumber) {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => task.style.display = 'none');
    document.getElementById(`task${taskNumber}`).style.display = 'block';
}

function stringStatistics(str) {
    let letterCount = 0;
    let digitCount = 0;
    let otherCount = 0;

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            letterCount++;
        } else if (/\d/.test(char)) {
            digitCount++;
        } else {
            otherCount++;
        }
    }

    return {
        letters: letterCount,
        digits: digitCount,
        others: otherCount
    };
}

function displayStatistics() {
    const input = document.getElementById('stringInput1').value;
    const result = stringStatistics(input);
    document.getElementById('statisticsResult').innerHTML = `Буквы: ${result.letters}, Цифры: ${result.digits}, Другие знаки: ${result.others}`;
}

function numberToText(num) {
    const units = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    const tens = ["", "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
    
    if (num < 10 || num > 99) {
        return "Число должно быть двузначным.";
    }

    const firstDigit = Math.floor(num / 10);
    const secondDigit = num % 10;

    return `${tens[firstDigit]} ${units[secondDigit]}`.trim();
}

function displayNumberText() {
    const input = parseInt(document.getElementById('numberInput').value);
    const result = numberToText(input);
    document.getElementById('numberTextResult').innerHTML = result;
}

function swapCaseAndReplaceDigits(str) {
    let result = "";

    for (let char of str) {
        if (/[a-z]/.test(char)) {
            result += char.toUpperCase();
        } else if (/[A-Z]/.test(char)) {
            result += char.toLowerCase();
        } else if (/\d/.test(char)) {
            result += "_";
        } else {
            result += char;
        }
    }

    return result;
}

function displaySwappedCase() {
    const input = document.getElementById('swapCaseInput').value;
    const result = swapCaseAndReplaceDigits(input);
    document.getElementById('swappedCaseResult').innerHTML = result;
}

function toCamelCase(cssString) {
    return cssString.split('-').map((word, index) => {
        if (index === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}

function displayCamelCase() {
    const input = document.getElementById('cssInput').value;
    const result = toCamelCase(input);
    document.getElementById('camelCaseResult').innerHTML = result;
}

function createAbbreviation(phrase) {
    return phrase.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
}

function displayAbbreviation() {
    const input = document.getElementById('phraseInput').value;
    const result = createAbbreviation(input);
    document.getElementById('abbreviationResult').innerHTML = result;
}


function concatenateStrings(...strings) {
    let result = "";
    for (let str of strings) {
        result += str;
    }
    return result;
}

function displayConcatenatedString() {
    const input = document.getElementById('concatInput').value.split(',');
    const result = concatenateStrings(...input);
    document.getElementById('concatenatedResult').innerHTML = result;
}

// 7. Калькулятор
function calculator(expression) {
    const operators = ['+', '-', '*', '/'];
    let operator = '';
    let operands = [];
    
    for (let char of expression) {
        if (operators.includes(char)) {
            operator = char;
        } else if (!isNaN(char)) {
            operands.push(Number(char));
        }
    }

    if (operands.length !== 2 || !operator) {
        return "Неверное выражение.";
    }

    switch (operator) {
        case '+':
            return operands[0] + operands[1];
        case '-':
            return operands[0] - operands[1];
        case '*':
            return operands[0] * operands[1];
        case '/':
            return operands[0] / operands[1];
    }
}

function displayCalculationResult() {
    const input = document.getElementById('calcInput').value;
    const result = calculator(input);
    document.getElementById('calculationResult').innerHTML = result;
}

// 8. Информация о URL
function parseURL(url) {
    const a = document.createElement('a');
    a.href = url;

    return {
        protocol: a.protocol,
        host: a.host,
        pathname: a.pathname,
        search: a.search,
        hash: a.hash
    };
}

function displayUrlInfo() {
    const input = document.getElementById('urlInput').value;
    const result = parseURL(input);
    document.getElementById('urlInfoResult').innerHTML = `
        Протокол: ${result.protocol}<br>
        Хост: ${result.host}<br>
        Путь: ${result.pathname}<br>
        Запрос: ${result.search}<br>
        Хэш: ${result.hash}
    `;
}

// 9. Разделение строки
function splitString(str, delimiter) {
    const result = [];
    let currentSubstring = "";
    
    for (let char of str) {
        if (char === delimiter) {
            result.push(currentSubstring);
            currentSubstring = "";
        } else {
            currentSubstring += char;
        }
    }
    result.push(currentSubstring);

    return result;
}

function displaySplitResult() {
    const input = document.getElementById('splitInput').value;
    const delimiter = document.getElementById('delimiterInput').value;
    const result = splitString(input, delimiter);
    document.getElementById('splitResult').innerHTML = JSON.stringify(result);
}
