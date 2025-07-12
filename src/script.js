const numberElement = document.getElementById('number');
const incrementButton = document.getElementById('button1');

let currentNumber = parseInt(localStorage.getItem('currentNumber')) || 0;
numberElement.textContent = currentNumber;

function incrementNumber() {
    currentNumber += 1; // Increase the number by 1
    localStorage.setItem('currentNumber', currentNumber); // Save the new number in localStorage
    numberElement.textContent = currentNumber;

  incrementButton.addEventListener('click', incrementNumber);


