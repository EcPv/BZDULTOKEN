const clickButton = document.getElementById('click-button');
const scoreElement = document.getElementById('score');
const levelElement = document.getElementById('level');

let score = 0;
let level = 1;

clickButton.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
});