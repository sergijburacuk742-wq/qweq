// Це вміст файлу script.js

// Знаходимо кнопку за її id
const button = document.getElementById('myButton');

// Додаємо обробник події "click"
button.addEventListener('click', function() {
  alert('Кнопку натиснуто!');
});