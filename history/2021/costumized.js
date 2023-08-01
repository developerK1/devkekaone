

//toggling an active state on the menu links
$(document).on('click', 'ul li', function(){
	$(this).addClass('active').siblings().removeClass('active');
});

	
/* /toggling the current link state
const menuHover = document.querySelector('ul');
const currentLi = document.querySelector('.at-page');

menuHover.addEventListener('mouseover', ()=>{
	currentLi.classList.remove('at-page');
});

menuHover.addEventListener('mouseout', ()=>{
	currentLi.classList.add('at-page');
});
*/

//navbar icon animations
const navbar = document.querySelector('.navbar-toggler');
const icon = document.querySelector('.navbar-toggler-icon'); 

navbar.addEventListener('click', pressed);

function pressed(){
	navbar.classList.toggle('openn');
	icon .classList.toggle('openn-icon');
	navbar.style.transition = " 0.6s ease" ;
	icon.style.transition = " 1s ease" ;
};



	const addMore =  document.querySelector("#construct-cont4 button");
	const addMoreContent = document.querySelector("#notVisible");
	let showMore = false;



	addMore.addEventListener("click", () =>{
	console.log(123);
		if(showMore === false){
			addMoreContent.classList.remove("notVisible");
			addMore.textContent = " SHOW LESS " ;
			
			showMore = true;
		}else if(showMore === true){
			addMoreContent.classList.add("notVisible");
			addMore.textContent = " SHOW MORE " ;
			showMore = false;
		};
	
	});





//updating the copyright year
(function(){
	const currentYear = document.querySelector(".year" );
	
	let thisYear = new Date();
	let newYear = thisYear.getFullYear();
	
	currentYear.textContent = newYear ;
	currentYear.innerText = newYear;
}());