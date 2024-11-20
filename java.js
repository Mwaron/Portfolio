const animateButton = document.querySelector('.loadbutton');
const loadscreen = document.querySelector('.loadscreen');

animateButton.addEventListener('click', () => {
  loadscreen.classList.add('loadscreenToMainscreen');
});