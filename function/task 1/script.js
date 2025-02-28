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
