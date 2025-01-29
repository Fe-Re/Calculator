// Wähle das Display
const display = document.querySelector('.display');

// Wähle alle klickbaren Buttons
const buttons = document.querySelectorAll('.clickable');

// Füge Klick-Logik hinzu
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent; // Hole den Button-Text
    handleButtonClick(value); // Rufe die Logik-Funktion auf
  });
});

// Funktion zur Verarbeitung der Button-Klicks
function handleButtonClick(value) {
  if (value === 'AC') {
    // Lösche das Display bei "AC"
    display.textContent = '';
  } else if (value === '<-') {
    // Entferne das letzte Zeichen
    display.textContent = display.textContent.slice(0, -1);
  } else if (value === '=') {
    // Berechne den Ausdruck
    try {
      display.textContent = eval(display.textContent); // Achtung: eval ist unsicher, wenn Benutzer Eingaben manipulieren können!
    } catch (error) {
      display.textContent = 'Error';
    }
  } else if (value === '+/-') {
    // Vorzeichen umkehren
    toggleSign();
  } else if (value === '%') {
    // Prozentwert berechnen
    calculatePercentage();
  } else {
    // Füge den Wert an das Display an
    display.textContent += value;
  }
}

// Funktion zum Umkehren des Vorzeichens
function toggleSign() {
  const currentValue = display.textContent;
  if (currentValue !== '' && !isNaN(currentValue)) { // Überprüfen, ob der Inhalt eine Zahl ist
    display.textContent = -parseFloat(currentValue); // Vorzeichen umkehren
  }
}

// Funktion zur Berechnung des Prozentwerts
function calculatePercentage() {
  const currentValue = display.textContent;
  if (currentValue !== '' && !isNaN(currentValue)) { // Überprüfen, ob der Inhalt eine Zahl ist
    display.textContent = parseFloat(currentValue) / 100; // Durch 100 teilen
  }
}