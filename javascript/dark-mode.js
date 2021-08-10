// listen for dark mode
let darkMode = document.getElementById('dark-mode-icon');
darkMode.addEventListener('click', displayDarkMode);

/////////// BEGIN DARK MODE //////////////
// Function dark mode
function displayDarkMode() {
  // Change all of UI to dark mode theme
  let body = document.querySelector('body');
  body.style.backgroundColor = 'black';
  body.style.backgroundImage = 'none';
  // Navbar -- dark mode
  let navbar = document.querySelector('.navbar');
  let lightMode = document.getElementById('light-mode-icon');
  navbar.classList.remove('bg-light');
  navbar.classList.add('bg-dark');
  darkMode.hidden = true;
  lightMode.hidden = false;
  // Navbar collapse -- dark mode
  let navbarSlide = document.querySelector('.navbar-collapse');
  navbarSlide.classList.add('bg-dark');
  navbarSlide.classList.remove('bg-light');
  // Navbar links
  let navLinks = document.querySelectorAll('.nav-link');
  var i;
  for (i = 0; i <navLinks.length; i++) {
    navLinks[i].style.color = 'white';
    navLinks[i].style.textShadow = '1px 1px 3px black';
  }
 
  // Calculators -- dark mode
  let basicCalc = document.querySelectorAll('.calculator');
  var i;
  for (i = 0; i < basicCalc.length; i++) {
    basicCalc[i].style.backgroundImage = 'linear-gradient(to top,  #333 0%, #242424 20%, #3434 25%, #333 98%)';
    basicCalc[i].style.boxShadow = '0 4px 8px 0 #fff, 0 6px 20px 0 #e6e6';
  }
  // Visual bend in calculators -- dark mode
  let bend = document.querySelectorAll('.bend');
  var i;
  for (i = 0; i <bend.length; i++) {
  bend[i].style.backgroundImage = 'linear-gradient(to bottom, #2424 0%, #333 85%, #111 99%)';
  }
  // Results -- dark mode
  let display = document.querySelector('.result');
  display.style.backgroundColor = '#222';
  display.style.borderColor = 'white';
  let history = document.getElementById('history-value');
  history.style.color = 'white';
  // Input tags for numbers -- dark mode
  let converterInput = document.querySelectorAll('.numbersonly');
  var i;
  for (i = 0; i < converterInput.length; i ++) {
    converterInput[i].style.borderColor = 'lightgrey';
  }
  // All other input tags -- dark mode
  let inputs = document.querySelectorAll('.inputs');
  var i;
  for (i = 0; i < inputs.length; i ++) {
    inputs[i].classList.remove('text-secondary');
    inputs[i].classList.remove('bg-white');
    inputs[i].style.backgroundColor = '#666';
    inputs[i].style.backgroundImage = 'linear-gradient(to bottom right, #2424 0%, #333 85%, #111 99%)';
    inputs[i].style.color = 'white';
    inputs[i].classList.add('white-text');
  }
  // Selector tags -- dark mode
  let selector = document.querySelectorAll('.selector');
  var i;
  for (i = 0; i < selector.length; i ++) {
    selector[i].classList.remove('text-secondary');
    selector[i].style.backgroundColor = '#222';
    selector[i].style.borderColor = 'white';
    selector[i].style.backgroundImage = 'linear-gradient(to right, #2424 0%, #333 85%, #111 99%)';
    selector[i].style.color = 'white';
  }
  // Operator buttons -- dark mode
  let operator = document.querySelectorAll('.operator');
  var i;
  for (i = 0; i < operator.length; i++) {
    operator[i].classList.remove('text-secondary');
    operator[i].classList.add('text-light');
    operator[i].style.backgroundColor = '#111';
    operator[i].style.backgroundImage = 'linear-gradient(to bottom, #2424 0%, #333 85%, #111 99%)';
  }
  // Number buttons -- dark mode
  let number = document.querySelectorAll('.number');
  var i;
  for (i = 0; i < number.length; i++) {
    number[i].classList.remove('text-secondary');
    number[i].classList.add('text-light');
    number[i].style.backgroundColor = '#111';
    number[i].style.backgroundImage = 'linear-gradient(to bottom, #2424 0%, #333 85%, #111 99%)';
  }
  // Blank spots -- dark mode
  let spans = document.querySelectorAll('.spans');
  var i;
  for (i = 0; i < spans.length; i ++) {
    spans[i].classList.remove('bg-silver');
    spans[i].classList.remove('text-secondary');
    spans[i].style.color = 'white';
    spans[i].style.backgroundColor = '#444';
    spans[i].style.backgroundImage = 'linear-gradient(to bottom, #2424 0%, #333 85%, #111 99%)';
  }
 // Cards -- dark mode
 let cards = document.querySelectorAll('.card');
 var i;
 for (i = 0; i < cards.length; i++) {
   cards[i].classList.remove('bg-silver');
   cards[i].classList.remove('shadow-lg');
   cards[i].style.backgroundColor = '#111';
   cards[i].style.backgroundImage = 'linear-gradient(to bottom, #2424 0%, #333 85%, #111 99%)';
   cards[i].style.boxShadow = '0 4px 8px 0 #ebc7e5, 0 6px 20px 0 #888';
 }

  // // Fixes js null bug for Tip Calculator UI
  if(document.getElementById('tipUI').hidden === false) {
    fixDarkModeNull();
  }
  
};
function fixDarkModeNull(){
   // People Icon Tip Calculator -- dark mode
   document.querySelector('.peopleIcon-lightMode').hidden = true;
   document.querySelector('.peopleIcon-darkMode').hidden = false;
}
// End dark mode


/////////// BEGIN LIGHT MODE //////////////
// Listen for light mode
let lightMode = document.getElementById('light-mode-icon');
lightMode.addEventListener('click', displayLightMode);

// Function light mode
function displayLightMode() {
  // Change all of UI to light mode theme
  let body = document.querySelector('body');
  body.style.backgroundColor = '#fff';
  body.style.backgroundImage = 'linear-gradient(147deg, #fff 0%, #f9fcff 74%)';
  // Navbar -- light mode
  let navbar = document.querySelector('.navbar');
  let darkMode = document.getElementById('dark-mode-icon');
  navbar.classList.remove('bg-dark');
  navbar.classList.add('bg-light');
  darkMode.hidden = false;
  lightMode.hidden = true;
  // Navbar collapse -- light mode
  let navbarSlide = document.querySelector('.navbar-collapse');
  navbarSlide.classList.add('bg-light');
  navbarSlide.classList.remove('bg-dark');
  // Calculators -- light mode
  let basicCalc = document.querySelectorAll('.calculator');
  var i;
  for (i = 0; i < basicCalc.length; i++) {
    basicCalc[i].style.backgroundImage = 'linear-gradient(to top,  #dee4ea 0%, #fff 20%, #f9fcff 25%, #dee4ea 98%)';
    basicCalc[i].style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
  }
  // Visual bend in calculators -- light mode
  let bend = document.querySelectorAll('.bend');
  var i;
  for (i = 0; i <bend.length; i++) {
  bend[i].style.backgroundImage = 'linear-gradient(to bottom, #fff 0%, #f9fcff 85%, #dee4ea 99%)';
  }
  // Input tags for numbers -- light mode
  let converterInput = document.querySelectorAll('.numbersonly');
  var i;
  for (i = 0; i < converterInput.length; i ++) {
    converterInput[i].style.borderColor = 'white';
  }
  // All other input tags -- light mode
  let inputs = document.querySelectorAll('.inputs');
  var i;
  for (i = 0; i < inputs.length; i ++) {
    inputs[i].classList.add('text-secondary');
    inputs[i].classList.add('bg-white');
    inputs[i].style.backgroundColor = '#fff';
    inputs[i].style.backgroundImage = 'linear-gradient(to right,  #edf4fa 0%, white 10%, #f9fcff 90%, #edf4fa 100%)';
    inputs[i].style.color = 'grey';
    inputs[i].classList.remove('white-text');
  }
  // Selector tags -- light mode
  let selector = document.querySelectorAll('.selector');
  var i;
  for (i = 0; i < selector.length; i ++) {
    selector[i].style.color = 'none';
    selector[i].classList.add('text-secondary');
    selector[i].style.backgroundColor = 'red';
    selector[i].style.backgroundImage = 'linear-gradient(to bottom right,  #dee4ea 0%, #fff 20%, #f9fcff 55%, #dee4ea 100%)';
    selector[i].style.borderColor = 'none';
  }
  // Results -- light mode
  let display = document.querySelector('.result');
  display.style.backgroundColor = 'white';
  display.style.borderColor = 'rgb(228, 226, 226)';
  let history = document.getElementById('history-value');
  history.style.color = 'black';
  // Operator buttons -- light mode
  let operator = document.querySelectorAll('.operator');
  var i;
  for (i = 0; i < operator.length; i++) {
    operator[i].classList.remove('text-light');
    operator[i].classList.add('text-secondary');
    operator[i].style.backgroundColor = '#fff';
    operator[i].style.backgroundImage = 'linear-gradient(147deg, #fff 0%, #f9fcff 50%, #dee4ea 99%)';
  }
  // Number buttons -- light mode
  let number = document.querySelectorAll('.number');
  var i;
  for (i = 0; i < number.length; i++) {
    number[i].classList.remove('text-light');
    number[i].classList.add('text-secondary');
    number[i].style.backgroundColor = '#fff';
    number[i].style.backgroundImage = 'linear-gradient(147deg, #fff 0%, #f9fcff 50%, #dee4ea 99%)';
  }
  // Blank spots -- light mode
  let spans = document.querySelectorAll('.spans');
  var i;
  for (i = 0; i < spans.length; i ++) {
    spans[i].classList.add('bg-silver');
    spans[i].classList.add('text-secondary');
    spans[i].style.color = '#6c757d';
    spans[i].style.backgroundColor = '#e9ecef';
    spans[i].style.backgroundImage = 'linear-gradient(to top, #dee4ea 0%, #fff 20%, #f9fcff 25%, #dee4ea 98%)';
  }
  // Cards -- light mode
  let cards = document.querySelectorAll('.card');
  var i;
  for (i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = '#f9fcff;';
    cards[i].style.backgroundImage = 'linear-gradient(to top,  #dee4ea 0%, #fff 20%, #f9fcff 25%, #dee4ea 98%)';
  }
  
    
  // Fixes js null bug for Tip Calculator UI
  if(document.getElementById('tipUI').hidden === false) {
    fixLightModeNull();
  }

};
// End light mode

// Js null bug fix function for Tip Calculator UI
function fixLightModeNull() {
  document.querySelector('.peopleIcon-lightMode').hidden = false;
  document.querySelector('.peopleIcon-darkMode').hidden = true;
}
