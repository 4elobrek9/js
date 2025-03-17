// Трекбар
const track = document.getElementById('track');
const pointer = document.getElementById('pointer');

let isDragging = false;

pointer.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

track.addEventListener('mousemove', (event) => {
    if (isDragging) {
        let rect = track.getBoundingClientRect();
        let offsetX = event.clientX - rect.left;
        if (offsetX < 0) offsetX = 0;
        if (offsetX > rect.width - pointer.offsetWidth) offsetX = rect.width - pointer.offsetWidth;
        pointer.style.left = offsetX + 'px';
    }
});

const images = [
    'https://img2.freepng.ru/20180604/pkr/aa9ny5n5d.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYCvvFnCEJkDGLfy8130O7tfnn26pikGMsQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXkBzXpWs24sz8lY_gm3rFeOY_MgXAlGFVw&s'
];
let currentIndex = 0;

function updateImage() {
    document.getElementById('galleryImage').src = images[currentIndex];
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex === images.length - 1;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

updateImage();

const headers = document.querySelectorAll('.header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        document.querySelectorAll('.content').forEach(item => {
            if (item !== content) item.style.display = 'none';
        });

        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

const newsArray = [
    'Новость 1',
    'Новость 2',
    'Новость 3',
    'Новость 4',
    'Новость 5'
];
let newsIndex = 0;

function loadNews() {
    if (newsIndex < newsArray.length) {
        const newsDiv = document.getElementById('news');
        const newsItem = document.createElement('div');
        newsItem.textContent = newsArray[newsIndex++];
        newsDiv.appendChild(newsItem);
    } else {
        document.getElementById('loadMore').disabled = true;
        document.getElementById('loadMore').textContent = 'Больше новостей нет';
    }
}

document.getElementById('loadMore').addEventListener('click', loadNews);

function generateCalendar(month, year) {
    const calendarDiv = document.getElementById('calendar');
    calendarDiv.innerHTML = '';

    const date = new Date(year, month - 1, 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = date.getDay() || 7;

    let table = '<table><tr>';
    for (let i = 1; i <= 7; i++) {
        table += `<th>${['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'][i - 1]}</th>`;
    }
    table += '</tr><tr>';

    for (let i = 1; i < firstDay; i++) {
        table += '<td></td>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        table += `<td>${day}</td>`;
        if ((day + firstDay - 1) % 7 === 0) {
            table += '</tr><tr>';
        }
    }

    table += '</tr></table>';
    calendarDiv.innerHTML = table;
}

document.getElementById('generateCalendar').addEventListener('click', () => {
    const month = parseInt(document.getElementById('monthInput').value);
    const year = parseInt(document.getElementById('yearInput').value);
    if (month >= 1 && month <= 12 && year > 0) {
        generateCalendar(month, year);
    } else {
        alert('Введите корректный месяц и год.');
    }
});

const links = document.querySelectorAll('#linkList a');

links.forEach(link => {
    if (link.href.startsWith('http://')) {
        link.classList.add('dotted');
    }
});

const books = document.querySelectorAll('.book');
let lastClickedIndex = null;

books.forEach((book, index) => {
    book.addEventListener('click', (event) => {
        if (event.ctrlKey) {
            book.classList.toggle('selected');
        } else if (event.shiftKey && lastClickedIndex !== null) {
            const start = Math.min(lastClickedIndex, index);
            const end = Math.max(lastClickedIndex, index);
            for (let i = start; i <= end; i++) {
                books[i].classList.add('selected');
            }
        } else {
            books.forEach(b => b.classList.remove('selected'));
            book.classList.add('selected');
        }
        lastClickedIndex = index;
    });
});

const editableDiv = document.getElementById('editableText');

editableDiv.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        alert('Текст сохранён: ' + editableDiv.innerText);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'e') {
        editableDiv.focus();
    }
});

const table = document.getElementById('dataTable');

table.querySelectorAll('th').forEach(th => {
    th.addEventListener('click', () => {
        const type = th.getAttribute('data-type');
        const index = Array.from(th.parentNode.children).indexOf(th);
        const rows = Array.from(table.querySelectorAll('tbody tr'));

        rows.sort((a, b) => {
            const aText = a.children[index].textContent;
            const bText = b.children[index].textContent;

            if (type === 'number') {
                return parseFloat(aText) - parseFloat(bText);
            } else {
                return aText.localeCompare(bText);
            }
        });

        rows.forEach(row => table.querySelector('tbody').appendChild(row));
    });
});
