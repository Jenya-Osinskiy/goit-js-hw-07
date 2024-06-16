function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');

function generateBoxes(count) {
  let newBoxes = '';
  for (let i = 0; i < count; i++) {
    newBoxes += `<div style='background-color: 
    ${getRandomHexColor()}; width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px;'></div>`;
  }
  return newBoxes;
}

function destroyBoxes() {
  boxes.innerHTML = '';
  boxes.style.display = 'none';
}

create.addEventListener('click', () => {
  const count = parseInt(input.value);
  if (!count || count < 1 || count > 100) {
    return alert('Значення повинно бути від 1 до 100');
  }
  destroyBoxes();
  boxes.insertAdjacentHTML('beforeend', generateBoxes(count));
  boxes.style.display = 'flex';
});

destroy.addEventListener('click', destroyBoxes);
