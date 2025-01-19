function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  const boxesArray = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box); 
  }

  boxesContainer.append(...boxesArray);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('input');
  const inputValue = input.value;
  const numberOfBoxes = parseInt(inputValue, 10);

  if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
    createBoxes(numberOfBoxes);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

