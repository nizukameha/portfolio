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
// Fait tourner le carrousel
function rotateCarousel() {
  let angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-550px) rotateY(' + angle + 'deg)';
}
// Bouton précédent
let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function () {
  selectedIndex--;
  rotateCarousel();
});
// Bouton Suivant
let nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function () {
  selectedIndex++;
  rotateCarousel();
});

let scene = document.querySelector('.scene');

let onCarrousel = false;
// Quand la souris entre dans la div la variable change, le carrousel doit s'arreter
scene.addEventListener('mouseover', function () {
  onCarrousel = true;
});
// Quand la souris sort de la div la variable change, le carrousel doit reprendre
scene.addEventListener('mouseout', function () {
  onCarrousel = false;
});
// Par défaut le carrousel tourne automatiquement
setInterval(() => {
  if (onCarrousel == false) {
    selectedIndex++;
    rotateCarousel();
  }
}, 2500)