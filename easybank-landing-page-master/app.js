// variables Declaration 

var burgerIcon;
var navBarContainer;
var closeNav;

// passing values to variables 
burgerIcon = document.getElementById('burgerIcon');
navBarContainer = document.querySelector('.burgerBar');
closeNav = document.getElementById('closeNavBar');

// Treatment 

burgerIcon.addEventListener('click', function show(){

    navBarContainer.style.display = 'flex';

});

closeNav.addEventListener('click', function hide(){

    navBarContainer.style.display ='none';
});



