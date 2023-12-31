
//GLOBAL SCOPE VARIABLES
const divs  = document.querySelectorAll(".computer-choices aside div");
const startBtn  = document.querySelector(".start");
const stopBtn  = document.querySelector(".stop");
const sectionBtnSec = document.querySelector('.btn');
const section = document.querySelector('.section');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.content span');
const content = document.querySelector('.content');
const body = document.querySelector('body');

//STORING SELECTED OPTIONS VARIABLES
let lottoNumbers = [];
let playerOption = [];
let lotNumbers = [];
let plyOptions = [];
let loop;
let playVidiLoop;


function openGame(){
	modal.style.transition = " opacity 5s ease-out";
	modal.style.opacity = " 1";
	
	section.style.transition = " opacity 5s ease-out";
	section.style.opacity = " 1";

};
openGame();


//START GAME FUNCTION
function start(){
	
	//get all players inputs
	let playerChoices = document.querySelectorAll(".player-choices input");
	
	//generating players inputs
	playerChoices.forEach((choice)=>{
		playerOption.push(choice.value);
	});
	
	//check if there the player has not inserted number
	if(playerOption.includes("")){
		alert("PLEASE FILL IN 10 OF YOUR LUCKY NUMBERS!");
		//location.reload();
		//resetDivs();

		playerOption = [] ;
		return;
	}
	
	//stylings
	document.querySelector(".lastd").style.opacity = "1";
	
	if(document.querySelector(".fifth").innerText === ""){
		document.querySelector(".fifth").classList.remove("removeOpacity");
	};
	startBtn.classList.add("deactivated");
	stopBtn.classList.remove("disabled");
	startBtn.style.pointerEvents = "none "; 
	
	startBtn.textContent = " ROLLING... "
	startBtn.innerText = " ROLLING... "
	startBtn.style.fontStyle = " italic ";
	
	loop = setInterval(looping,60);
}
function looping(){

	divs.forEach((div)=>{
		let randomNumber = Math.floor((Math.random()*10) + 1);
		div.innerHTML = randomNumber ;
	
		lottoNumbers.push(div.innerHTML);
	})
	
}

function stop(){
	if(playerOption.includes("")){
		alert("PLEASE FILL IN 10 OF YOUR LUCKY NUMBERS!");
		location.reload();
		return;
	}
	
	//styling the buttons
	startBtn.classList.remove("deactivated");
	startBtn.classList.add("disable");
	startBtn.style.pointerEvents = "auto "; 
	
	startBtn.classList.remove("disabled");
	startBtn.textContent = " Waiting... "
	startBtn.innerText = " Waiting... "
	startBtn.style.fontStyle = " italic ";
	
	clearInterval(loop);
	
	setTimeout(function(){
		lottoNumbers.reverse();
		lottoNumbers.length = 10 ;
		
		//acending order
		lottoNumbers.sort();
		playerOption.sort();

		lotNumbers = lottoNumbers;
		plyOptions = playerOption;

		//Sepereting order
		lottoNumbers = lottoNumbers.join(" | ");
		playerOption = playerOption.join(" | ");
		
		//displaying the numbers on the page
		openModal();
		let lottoResults =  document.querySelector(".lottoResults");
		lottoResults.textContent = lottoNumbers;
		let playerResults = document.querySelector(".playerResults");
		playerResults.textContent = playerOption ;
			
		validateWin();
		
	},2000);
	

}

function validateWin(){
	let sameIndex = 0;
	
    lotNumbers.forEach((lotto, index) =>{
        plyOptions.forEach((player, index) =>{
           if(player == lotto){
            sameIndex++;
           }
        })

    })

	sameIndex = sameIndex / 10;;

    if(sameIndex === 10){

		section.classList.add("makedark");
		document.querySelector("#lotto-won .price").textContent = "You won a gold medal";
		document.querySelector("#lotto-won").classList.add("forceShow");
		document.querySelector("#lotto-won .lucky-stats").textContent = "You got " + sameIndex + " lucky numbers ";
		
		playVidiLoop = setInterval(()=> document.querySelector("#lotto-won video").play(), 3000);
		openModal();
	}else if(sameIndex  <= 8 && sameIndex > 5){

		section.classList.add("makedark");
		document.querySelector("#lotto-won .price").textContent = "You won a silver medal";
		document.querySelector("#lotto-won").classList.add("forceShow");
		document.querySelector("#lotto-won .lucky-stats").textContent = "You got " + sameIndex + " lucky numbers ";
		
		playVidiLoop = setInterval(()=> document.querySelector("#lotto-won video").play(), 3000);
		openModal();
	}
	else if(sameIndex  <= 5 && sameIndex > 3){

		section.classList.add("makedark");
		document.querySelector("#lotto-won .price").textContent = "You won a ticket to the movie"
		document.querySelector("#lotto-won").classList.add("forceShow");
		document.querySelector("#lotto-won .lucky-stats").textContent = "You got " + sameIndex + " lucky numbers ";
		
		playVidiLoop = setInterval(()=> document.querySelector("#lotto-won video").play(), 3000);
		openModal();
	}else{
	
		section.classList.add("makedark");
		document.querySelector("#lotto-lost .price").textContent = "You lost!!!";
		document.querySelector("#lotto-lost").classList.add("forceShow");
		document.querySelector("#lotto-lost .lucky-stats").textContent = "You got " + sameIndex + " lucky numbers ";
		
		playVidiLoop = setInterval(()=> document.querySelector("#lotto-lost video").play(), 3000);
		openModal();
	}

}


/* ==============================================================================================================
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>		MODAL		<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 ============================================================================================================== */
const openModal = () =>{
	section.style.display = " none";
	modal.style.display = "flex " ;
	section.style.height = " 80vh";
}

closeBtn.addEventListener('click',closey);

function closey(){
	modal.style.display = "none " ;
	section.style.display = "block " ;
	setTimeout(()=>{
		section.classList.remove("makedark");		 

	//get all players inputs and reseting
	let playerChoices = document.querySelectorAll(".player-choices input");
	playerChoices.forEach((choice)=>{
		choice.value = "" ;
	});

	//DISENABLE RESULTS DIV
	document.querySelectorAll(".content aside").forEach(item => item.className === "modal-results forceShow" ? item .classList.remove("forceShow") : "")
	
	playerOption = [] ;
	lottoNumbers = [];
	clearInterval(playVidiLoop);
	resetDivs();
	

	},1000);
	
	if(modal.style.display == "flex"){
			body.addEventListener('click' , ()=>{
				closey();
			});
		}
};

window.addEventListener('click' , outsideClose);

function outsideClose(e){
	if(e.target === modal){
		closey();
	}
}


resetDivs = () =>{
	
	
	let box = Array.prototype.slice.call(divs);

	box[0].textContent = "P ";
	box[1].textContent = "L ";
	box[2].textContent = "A ";
	box[3].textContent = "Y ";
	box[4].classList.add("removeOpacity");
	box[4].textContent = " ";
	box[5].textContent = "A ";
	box[6].textContent = "G";
	box[7].textContent = "A ";
	box[8].textContent = "I ";

	document.querySelector(".lastd").style.opacity = "1";
	document.querySelector(".lastd").style.transition= " opacity 2s ease-in";

	box[9].textContent = "N ";
	
	//styling backg to defualt
	stopBtn.classList.add("disabled");
	startBtn.textContent = " START";
	
}  



//this is the storey
//resetting the inputs was a challenge... The first tryu I resster this inputs
//My I use window funcgion, so I dicided that I wont be ysing the browser forever lcation.relaod()
//I kight as well go around that  window methods;
//So I tried resset to " " 
//which was okay but .. When I tried putting new inpuits it didint work
//I didnt no whta hek i shappeniong
// I stared a minint trialout of app aside//Stilol I had this problex;
//I romoved the max-length poperty .. An wala it worked
// Now, I figure I need that property preset 
//My problem was not solved;
// I wspend my tine on Chrom dev tool 
//Loooking how the ins  of the input filed before used;
//After they are processed and the nothing changes other then vlaue of those inputs;
// However swo, I relize slightly diffrence which is not visible to eye until really you are doing intensive search//
// The preset value of an empty input was set to "" (no space);
//My ressets was set to " " (with spae)'
//Then wlala, I change that hen my app was complete;
//Good challenge , that was.....