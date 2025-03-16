let shoppingList = JSON.parse(getCookie('shoppingList') || '[]');
let receipt = JSON.parse(getCookie('receipt') || '[]');
let classrooms = JSON.parse(getCookie('classrooms') || '[]');

function addPurchase() {
    const name = document.getElementById('productName').value;
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const existingItem = shoppingList.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        shoppingList.push({ name, quantity, bought: false });
    }
    setCookie('shoppingList', JSON.stringify(shoppingList), 7);
    document.getElementById('productName').value = '';
    document.getElementById('productQuantity').value = '';
    displayShoppingList();
}

function buyProduct() {
    const name = document.getElementById('productName').value;
    const item = shoppingList.find(item => item.name === name);
    if (item) {
        item.bought = true;
    }
    setCookie('shoppingList', JSON.stringify(shoppingList), 7);
    displayShoppingList();
}

function displayShoppingList() {
    const shoppingListDiv = document.getElementById('shoppingList');
    shoppingListDiv.innerHTML = '';
    const notBought = shoppingList.filter(item => !item.bought);
    const bought = shoppingList.filter(item => item.bought);
    const fullList = [...notBought, ...bought];

    fullList.forEach(item => {
        shoppingListDiv.innerHTML += `<p>${item.name} - ${item.quantity} (${item.bought ? "Куплено" : "Не куплено"})</p>`;
    });
}

function addToReceipt() {
    const name = document.getElementById('receiptName').value;
    const quantity = parseInt(document.getElementById('receiptQuantity').value);
    const price = parseFloat(document.getElementById('receiptPrice').value);
    receipt.push({ name, quantity, price });
    setCookie('receipt', JSON.stringify(receipt), 7);
    document.getElementById('receiptName').value = '';
    document.getElementById('receiptQuantity').value = '';
    document.getElementById('receiptPrice').value = '';
}

function printReceipt() {
    const receiptListDiv = document.getElementById('receiptList');
    receiptListDiv.innerHTML = '';
    receipt.forEach(item => {
        receiptListDiv.innerHTML += `<p>${item.name} - ${item.quantity} x ${item.price.toFixed(2)} = ${(item.quantity * item.price).toFixed(2)}</p>`;
    });
    const total = receipt.reduce((total, item) => total + (item.quantity * item.price), 0);
    receiptListDiv.innerHTML += `<strong>Общая сумма: ${total.toFixed(2)}</strong>`;
}

function applyStyles() {
    const text = document.getElementById('styleText').value;
    const color = document.getElementById('styleColor').value;
    const fontSize = document.getElementById('styleFontSize').value;
    const styledTextDiv = document.getElementById('styledText');

    styledTextDiv.innerHTML = `<p style="color: ${color}; font-size: ${fontSize};">${text}</p>`;
}

function addClassroom() {
    const name = document.getElementById('classroomName').value;
    const seats = parseInt(document.getElementById('classroomSeats').value);
    const faculty = document.getElementById('classroomFaculty').value;
    classrooms.push({ name, seats, faculty });
    setCookie('classrooms', JSON.stringify(classrooms), 7);
    document.getElementById('classroomName').value = '';
    document.getElementById('classroomSeats').value = '';
    document.getElementById('classroomFaculty').value = '';
}

function displayClassrooms() {
    const classroomListDiv = document.getElementById('classroomList');
    classroomListDiv.innerHTML = '';
    classrooms.forEach(classroom => {
        classroomListDiv.innerHTML += `<p>${classroom.name} - ${classroom.seats} мест (${classroom.faculty})</p>`;
    });
}

function showTask(taskNumber) {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => task.style.display = 'none');
    document.getElementById(`task${taskNumber}`).style.display = 'block';
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '');
}

window.onload = function() {
    displayShoppingList();
    printReceipt();
    displayClassrooms();
};
