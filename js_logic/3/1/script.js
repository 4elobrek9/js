document.getElementById("num1")
document.getElementById("checkNumbers()")
document.getElementById("num2")

function compareNumbers(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else {
        return 0;
    }
}
function checkNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = compareNumbers(num1, num2);
    alert('Результат: ' + result);
}