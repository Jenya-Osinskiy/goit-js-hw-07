function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colors = {
  button: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
  body: document.querySelector('body'),
};
colors.button.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  colors.body.style.backgroundColor = randomColor;
  colors.color.textContent = randomColor;
});
