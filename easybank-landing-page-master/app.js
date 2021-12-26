// variables Declaration 

var burgerIcon;
var navBarContainer;

// passing values to variables 
burgerIcon = document.getElementById('burgerIcon');
navBarContainer = document.querySelector('.burgerBar');

// Treatment 

burgerIcon.addEventListener('click', function show(){

    navBarContainer.style.display = 'flex';

});



