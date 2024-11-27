const animateButton = document.querySelector('.loadbutton');
const loadscreen = document.querySelector('.loadscreen');
const mainscreen = document.querySelector('body');

animateButton.addEventListener('click', () => {
  loadscreen.classList.add('loadscreenToMainscreen');
  mainscreen.classList.add('mainscreen');
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.style.visibility = 'hidden';
    if (entry.isIntersecting) {
      const animationClass = entry.target.dataset.animation;
      entry.target.style.visibility = 'visible';
    
    if (animationClass) {
      entry.target.classList.add(animationClass);
    
    }

    observer.unobserve(entry.target);
  }
  });
});


const animatedElements = document.querySelectorAll('[data-animation]');
animatedElements.forEach((element) => {
  observer.observe(element);
})