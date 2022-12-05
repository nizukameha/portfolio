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