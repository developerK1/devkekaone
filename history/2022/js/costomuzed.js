
//updating the copyright year
(function(){
	const currentYear = document.querySelector(".year" );

	let thisYear = new Date();
	let newYear = thisYear.getFullYear();

	currentYear.textContent = newYear ;
	currentYear.innerText = newYear;
}());




let urlpath = [...window.location.pathname];
const allLinksAchors = checkUp(document.querySelectorAll("nav ul li a"));
const urlname = urlpath.slice(7,urlpath.length-1 ).join("").toUpperCase();

allLinksAchors.forEach(link => {
	if(link.textContent === urlname){
		link.parentElement.className = "at-page";
		return;
 	} if(link.textContent === "CONTACT US" && urlname === "CONTACT-US"){
		link.parentElement.className = "at-page";
	}

	toggleLinkActive();
});






//POP UP GALLERY IMAGE
$(function() {

      $("#portfolio").magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image',
          gallery: {
              enabled: true
          }
      });
});

/* =============================================
		toggling an active state on the menu links
================================================= */
$(document).on('click', 'ul li', function(){
	$(this).addClass('active').siblings().removeClass('active');
});

/* =============================================
				navbar icon animations
================================================= */
const navbar = checkUp(document.querySelector('.navbar-toggler .hamburger'));
const line1 = checkUp(document.querySelector('.navbar-toggler .hamburger #line1'));
const line2 = checkUp(document.querySelector('.navbar-toggler .hamburger #line2'));
const line3 = checkUp(document.querySelector('.navbar-toggler .hamburger #line3'));

if(navbar){
	navbar.addEventListener("click", function(){
		navbar.classList.toggle("openn");

		if(navbar.className == "hamburger centerfy-col openn"){
			line1.classList.add("line1");
			line2.classList.add("line2");
			line3.classList.add("line3");
		}else{
			line1.classList.remove("line1");
			line2.classList.remove("line2");
			line3.classList.remove("line3");
		}
	})
}



/* =============================================
				toggling the current link state
============================================= */
function toggleLinkActive(){
	const menuHover = document.querySelector('ul');
	currentLi = document.querySelector('.at-page');

	menuHover.addEventListener('mouseover', ()=>{
		currentLi.classList.remove('at-page');
	});

	menuHover.addEventListener('mouseout', ()=>{
		currentLi.classList.add('at-page');
	});
}
/* =============================================================== */
/* ========================= SHARE BUTTON ============================= */
/* =============================================================== */

//const shareBtn = document.querySelector("footer button a");
//const shareLink = "https://rebangwefunerals.co.za";
//shareBtn.href = `https://www.facebook.com/share.php?u=${shareLink}`;

/* =============================================================== */
/* ========================= SERVICES MUSK OVER FUNCTIOPNALITY ============= */
/* =============================================================== */
const servLayerLinks = checkUp(document.querySelectorAll("#services .musk-layer"));
const serviceAsides = checkUp(document.querySelectorAll("#services aside"));

if(servLayerLinks != null && serviceAsides != null){
	serviceAsides.forEach((item, index) => {
		let currentServLink;

		item.addEventListener("mouseover", function(){
			currentServLink = servLayerLinks[index];
			servLayerLinks[index].classList.add("add-musk-layer");
		});

		item.addEventListener("mouseout", function(){
			currentServLink.classList.remove("add-musk-layer");
		});
	});
}
/* =============================================================== */
/* ========================= STOP TIMER ============= */
/* =============================================================== */
// Set the date we're counting down to
const countDownDate = new Date("Nov  13, 2022 10:30:59").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  document.getElementById("demo").innerHTML =  hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
		 const constent  = checkUp(document.getElementById("demo"));
     if(constent != null){
			 constent.innerHTML = "EXPIRED";
		 }
  }
}, 1000);
/* =============================================================== */
/* ========================= CHECK IF DOCUEMNET HAS AN ITEM ============= */
/* =============================================================== */
function checkUp(item){

 if(item.length === 0) {
   return null;
 }
   return item;
}

function checkSingle(elem){
  if(elem !== null){
    return elem;
  }
}
