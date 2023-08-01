const boxes = document.querySelectorAll("aside");
const resultContainer = document.querySelector(".results");
const startContainer = document.querySelector("#gameLayout");
const overContainer = document.querySelector("#gameOver");
const rabbit = document.querySelector("img");
const scoreDisplayDiv = document.querySelector(".score");
const timeDisplayDiv = document.querySelector(".time-left p");
const textDisplayDiv = document.querySelector(".second-text");
const buttonContaiuner = document.querySelector(".buttonContaiuner");
const startBtn = document.querySelector(".startBtn");
const difficult = document.querySelector(".difficult");
const levelBtns = document.querySelector(".difficult");

//GAME COUNTER
let gameStuts = true;
let computerCount = 0 ;
let score = 0;
let time;
let gameInteveal;
let inputElem ;
let speed = 1250;

//GAME LEVELS
levelBtns.addEventListener("click", function(){
	speed = 750;
	this.classList.add("active-btn");
})

displayCont(timeDisplayDiv,"none");

//CREATING A RANDOM NUMBER
function randy(){
	let randy = Math.floor((Math.random()*9));
	return randy;
}

//GAMELOOP
const gameLoop =()=>{
	rabbit.remove();

	for(let index = 0; index < boxes.length ; index++){
		let randomBlock = boxes[randy()];
		//show the rabbit
		displayCont(rabbit, "block")
		randomBlock.appendChild(rabbit);
		computerCount++;
	}

	displayCont(textDisplayDiv,"block");
	timesUp();
}

//SETTING UP A INPUT FIELD
function input(){
	let input = document.querySelector("input");
	return input;
}

function startGame(){
	//getSet()
		score = 0;
		inputElem = input();
		//HIDE ING THE ELEMENT FORM DOCUMENT
		time = Number(input().value);

		//RESETTING THE  DOM
		resultContainer.classList.remove("center");
		displayCont(overContainer,  "none");
		displayCont(startContainer,  "flex");
		scoreDisplayDiv.textContent = 0;

		gameInteveal = setInterval(gameLoop, speed);

}
 //document.addEventListener("click", gameLoop);

function timesUp(){
	time--;
	displayCont(inputElem,"none");
	displayCont(timeDisplayDiv,"inline");
	timeDisplayDiv.textContent = time;
	displayCont(startBtn,"none");
	displayCont(difficult,"none");

	if(time === 0){
		alert("Time  is up");
		displayCont(textDisplayDiv,"none");
		gameOver(time);
	}
}

function gameOver(time){

	time = 0 ;
	resultContainer.classList.add("center");

	//GAME DIV HIDE FORM DOCUMENT
	displayCont(startContainer,  "none");

	//GAME OVER DIV SETT UP
	overContainer.style.transition = "all 2s ease";

	displayCont(overContainer,  "flex");
	overContainer.classList.add("slid-up");
	startBtn.innerText = " PLAY AGAIN";

	//displayCont(startBtn,  "block");
	buttonContaiuner.append(startBtn);
	buttonContaiuner.append(difficult);

	clearInterval(gameInteveal);

	highestScore(score);

	displayCont(inputElem,"block");
	displayCont(startBtn,"block");
	startBtn.classList.add("events");
	timeDisplayDiv.textContent = 0 ;

	setTimeout(()=>{
		startBtn.classList.remove("events");
		timeDisplayDiv.append(inputElem);
	},2000);
}

//Handling dispplay of content
function displayCont(elem, prop){
	elem.style.display = prop;
}

rabbit.addEventListener("click", function(){
	this.classList.add("clicked");
	displayHandler();
});

function displayHandler(){
	score++;
	scoreDisplayDiv.textContent = score;
	rabbit.classList.remove("clicked");
}

//GET SET function
function getSet(){
	const headCount = document.createElement("h1");
	headCount.textContent = "h1";
	headCount.className = "headCount";

	const body = document.querySelector("body");
	body.style.position = "relative";
	body.append(headCount);
	headCount.style.position = "absolute";
}

function highestScore(score){
	let vidi = document.querySelector("#highestScores video");
	const pareElem = vidi.parentElement;

	const elem = ()=>{
		let elem = document.createElement("h3");
		elem.setAttribute("class","heading#");

		return  elem;
	}

	document.querySelector("#highestScores h3 span").innerText = localStorage.HighestScores;

	if(localStorage.HighestScores < score){
		window.localStorage.setItem("HighestScores" , score);
		document.querySelector("#highestScores h3 span").innerText = localStorage.HighestScores;
		return;
	}else {
		vidi.play();
		setInterval(()=>{
			vidi.play();
		},3500);
	}
}
