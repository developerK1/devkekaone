
let StartAT = performance.now();

const navbar = document.querySelector('.navbar-toggler');
const icon = document.querySelector('.navbar-toggler-icon'); 

navbar.addEventListener('click', pressed);

function pressed(){
	navbar.classList.toggle('openn');
	icon .classList.toggle('openn-icon');
	navbar.style.transition = " 0.6s ease" ;
	icon.style.transition = " 3s ease" ;
}

let endAT = performance.now();

console.log(endAT-StartAT);