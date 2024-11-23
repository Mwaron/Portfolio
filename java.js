const animateButton = document.querySelector('.loadbutton');
const loadscreen = document.querySelector('.loadscreen');
const mainscreen = document.querySelector('body');

animateButton.addEventListener('click', () => {
  loadscreen.classList.add('loadscreenToMainscreen');
  mainscreen.classList.add('mainscreen');
});
