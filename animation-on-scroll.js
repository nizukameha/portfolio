/*--------
OPACITY
--------*/
// Remove the transition class because we want this class to be apply when the user is on this section
// Opacity = 0
const square = document.querySelector('.competence-animation');
square.classList.remove('competence-animation-transition');
// When the user scroll to this section, it add the transition class
// Opacity = 1
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('competence-animation-transition');
      return;
    }

    square.classList.remove('competence-animation-transition');
  });
});
// If the user disable JS there is no transition but the section is still visible
observer.observe(document.querySelector('.competence-wrapper'));
/*--------
CARROUSEL
---------*/
let carousel = document.querySelector('.carousel');
let cellCount = 9;
let selectedIndex = 0;
// Turn carrousel
function rotateCarousel() {
  let angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-550px) rotateY(' + angle + 'deg)';
}
// Previous Button
let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function () {
  selectedIndex--;
  rotateCarousel();
});
// Next Button
let nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function () {
  selectedIndex++;
  rotateCarousel();
});

let scene = document.querySelector('.scene');

let onCarrousel = false;
// When the cursor enter in the div, it change the value of the variable. So the carousel stop
scene.addEventListener('mouseover', function () {
  onCarrousel = true;
});
// When the cursor quit the div, it change the value of the variable. So the carousel start
scene.addEventListener('mouseout', function () {
  onCarrousel = false;
});
// By default the carousel is moving
setInterval(() => {
  if (onCarrousel == false) {
    selectedIndex++;
    rotateCarousel();
  }
}, 2500)