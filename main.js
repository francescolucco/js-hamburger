// Inizializzo le variabili
const showMenu = document.querySelector('div.hamburger-menu');

const toggleMenuOn = document.querySelector('.header-right > a');

const toggleMenuOff = document.querySelector('div.hamburger-menu > .close');


toggleMenuOn.addEventListener('click', function() {
  console.log('hai cliccato sull\'hamburger');
  console.log(toggleMenuOn.classList);
  console.log(showMenu.classList);
  showMenu.classList.add('active')
}
);

toggleMenuOff.addEventListener('click', function() {
  console.log('hai cliccato sulla croce di chiusura');
  console.log(toggleMenuOff.classList);
  showMenu.classList.remove('active')
}
);