// Wähle das Display
const display = document.querySelector('.display');

// Wähle alle klickbaren Buttons
const buttons = document.querySelectorAll('.clickable');

// Füge Klick-Logik hinzu
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    handleButtonClick(value);
  });
});

// Funktion zur Verarbeitung der Button-Klicks
function handleButtonClick(value) {
  if (value === 'AC') {
    display.textContent = '';
  } else if (value === '<-') {
    display.textContent = display.textContent.slice(0, -1);
  } else if (value === '=') {
    try {
      display.textContent = eval(display.textContent); 
    } catch (error) {
      display.textContent = 'Error';
    }
  } else if (value === '+/-') {
    toggleSign();
  } else if (value === '%') {
    calculatePercentage();
  } else {
    display.textContent += value;
  }
}

// Funktion zum Umkehren des Vorzeichens
function toggleSign() {
  const currentValue = display.textContent;
  if (currentValue !== '' && !isNaN(currentValue)) { 
    display.textContent = -parseFloat(currentValue); 
  }
}

// Funktion zur Berechnung des Prozentwerts
function calculatePercentage() {
  const currentValue = display.textContent;
  if (currentValue !== '' && !isNaN(currentValue)) { 
    display.textContent = parseFloat(currentValue) / 100;
  }
}
