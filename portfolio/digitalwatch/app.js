//gettting the buttons from the DOMContentLoaded
const lightBtn = document.querySelector(".light");
const menhBtn = document.querySelector(".menu");
const setBtn = document.querySelector(".set");
const nextBtn = document.querySelector(".next");

//initiantion variables
let alarmset;
let seconds = 12000;

//gettting the other elements
const p = document.querySelector("#watch-wrapper p");
const watchWrapper = document.querySelector("#watch-wrapper");
const container = document.querySelector(".container");
const chickenCrack = document.querySelector("#chicken-crack");

lightBtn.addEventListener("click" , function(){
	makeBright(p);
});
menhBtn.addEventListener("click" , openMenu);
nextBtn.addEventListener("click" , nextItem);
setBtn.addEventListener("click" , setIt);


function getTime(){	
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	
	if(h < 10){
		h = "0" + h;
	}
	
	if(m < 10){
		m = "0" + m;
	}
	
	let time = `${h}:${m}`;
	return time;
}

function displayTime() {
	let currentTime = getTime();
	
	p.textContent = currentTime ;
	
}

let displayTimeInterval = setInterval(displayTime,1000)

/* ======================================================
					MENU FUNCTIONALITY
====================================================== */
function openMenu(){
	//CHANGE CLASS NAME OF THE CONTAINER
	const menuContainer = createMenuItems();
	
	let firstElem = menuContainer.firstElementChild;
	//LIGHNING
	
	if(menuContainer.childElementCount = 1 ){
		makeBright(firstElem)
	}else {
		let secElem = menuContainer.firstElementChild.nextElementSibling;
		makeBright(firstElem)
		makeBright(secElem)
	}

}

/* ======================================================
				ALARM FUNCTIONALITY
====================================================== */


/* ======================================================
						HELPER FUNCTIONS
====================================================== */

function createMenuItems(){
	menuCont = watchWrapper;
	menuCont.className = "menu-cont";
	//CREATING THE BUTTONS
	
	//ASIGNING BUTTONS
	let alarmBtn = createBtn("alarmBtn", "ALARM" , setAlarm, "button");
	let stopTimeBtn = createBtn("stopTimeBtn", "STOP TIMMER" , setStopTime,"button");
	
	//ADD CLASS FOR CSS
	alarmBtn.className = "cont-button";	
	stopTimeBtn.className = "cont-button";	
	
	//CLEARING  THE CONTAINER
	menuCont.innerHTML = "";
	
	//AAPPENDING THE NEW CHILDREN
	menuCont.appendChild(alarmBtn)
	menuCont.appendChild(stopTimeBtn);
	
	return menuCont;
	
}


function setAlarm(){
	alarmCont = watchWrapper;
	alarmCont.className = "alarm-cont";
	//CREATING THE BUTTONS
	
	//ASIGNING ELEMENT
	const alarmIput = createBtn("alarmIput", null , null , "input");
	alarmIput.setAttribute("type", "time");
	
	//MAKING THE SET BUTTON ACTIVE
	setBtnStats(null, "auto", alarmCont);

	//CLEARING  THE CONTAINER
	alarmCont.innerHTML = "";
	
	//AAPPENDING THE NEW CHILDREN
	alarmCont.appendChild(alarmIput);
	
	return alarmCont;
}


function setStopTime(){
	
	let parentElem = watchWrapper;
	parentElem.innerHTML = " ";
	
	//ELEMENT GENERATED ON THE FLY
	const holderDiv = createBtn('div', null , null , 'div');
	const countPara = createBtn('p', null , null , 'p');
	const startLapBtn = createBtn('btn', 'Start' , startLap , 'button');
	const stopLapBtn = createBtn('btn', 'Stop' , stopLap , 'button');

	holderDiv.className = "stoptimer";	
	
	//APPENDING THE TO HOLDERDIV
	countPara.innerText = '00:00:00';
	holderDiv.append(countPara);
	holderDiv.append(startLapBtn)
	holderDiv.append(stopLapBtn)

	//INITIALIZING THE VARIABLES
	let ms = 00, s = 00 , m = 00;
	let run;
	let stopBtnStats = true;
	
	parentElem.append(holderDiv);
	
	document.querySelector(".ringing").textContent = "Feature not yet ready";
		
	
	//STyling the light button
	countPara.className = "brightningBtn";
	
	setTimeout(()=>{
		countPara.style.transition = "all 1s ease-in-out " ;	
		countPara.classList.remove("brightningBtn");
		document.querySelector(".ringing").textContent = " ";
	},5000);



	function start(){
		countPara.textContent = m + ":" + s + ":" + ms ;
		ms++;
		
		if(ms >= 100){
			s++;	
			s < 10 ? s = "0" + s : s = s;
			ms=00;
		}
		
		if(s >= 60){
			m++;
			m < 10 ? m = "0" + m : m = m;
			s=00;
		}
	}



	//HELPER FUNCTIONS
	function startLap(){
		run = setInterval(start,10);
		startLapBtn.innerText = "Running";
		stopLapBtn.innerText = "Pause";
		stopBtnStats = true;	
	}

	function stopLap(){
		if(stopBtnStats === true){
			clearInterval(run);
			this.innerText = "Resset";
			startLapBtn.innerText = "Start";
			stopBtnStats = false;
		}else if(stopBtnStats === false){		
			this.innerText = "Stop";
			stopBtnStats = true;
			countPara.textContent = "00:00:00";
		}
	}
}


//CREAT|ING BUTTONS
function createBtn(elm, text , fnName , eleType){
		elm = document.createElement(eleType);
		elm.textContent = text;
		elm.addEventListener("click",fnName);		
		return  elm;
}


function makeBright(){
	let countChildren = watchWrapper.childElementCount;
	let elem1 = watchWrapper.firstElementChild;
	

	//Function settings
	let yellow = "#c8e445" ; //Yellow
	let darkGrey =  "#234246" ; //darkGrey
	
	//CHECK THE CONTAINER CHILDREN
	if(watchWrapper.childElementCount === 1){
		styleElem(elem1);
	}else {
		let elem2 = elem1.nextElementSibling;
		
		styleElem(elem1);
		styleElem(elem2);
		
		setTimeout(()=>{
			elem2.style.transition = "all 1s ease-in-out " ;
			elem2.style.backgroundColor = darkGrey ;
		},seconds);
	}		
	
	//STyling the light button
	lightBtn.classList.add("brightningBtn");
	
	setTimeout(()=>{
		elem1.style.transition = "all 1s ease-in-out " ;
		elem1.style.backgroundColor = darkGrey ;
		
		lightBtn.classList.remove("brightningBtn");
	},seconds);

	//HELPER FUNCTION
	function styleElem(eleme){
		eleme.style.transition = "all 1s ease-in-out " ;
		eleme.style.backgroundColor = yellow ;
	}
	
	
}


/* ======================================================
						NEXT FUNCTIONALITY
====================================================== */
let currentContainer = () => {
	return document.querySelector("#watch-wrapper");
}


function nextItem(){
	let containerDiv = currentContainer();
	

	if(containerDiv.className == "") {
		openMenu();
	}else if(!containerDiv.className == ""){
		
		anotherDiv(containerDiv);
	}
	
}


function anotherDiv(containerDiv){
	const p = createBtn("p", null , null , "p");
		containerDiv.innerHTML = "";
		
		containerDiv.append(p) ;
		containerDiv.className = "" ;
		
		makeBright()
		function paraTime(){
			let currentTime = getTime();
			p.textContent = currentTime ;
		}
		setInterval(paraTime,1000);
}



/* ======================================================
						SET UP BTN FUNCTIONALITY
====================================================== */
function setIt(){
	let parentElem = watchWrapper;

	if(parentElem.className == "alarm-cont"){
		let currentElem = parentElem.firstChild.value;
			
		if(currentElem == ""){
			alert("PLEASE ALLOCATE TIME")
		}else {
			let inputCon = parentElem.firstChild;
			//ALERT SET
			alert("Alarm set to " + currentElem);
			inputCon.classList.add("stayVisible");
			 
			
			parentElem.parentElement.appendChild(inputCon);
			
			//GET BACK TO OPTIONS
			setBtnStats(null, "none", alarmCont);
			openMenu();

			alarmset = setInterval(function(){
				let time = getTime();
				
				if(currentElem == time){
					chickenCrack.play();
					timesUp();
					
					//all buttons
					const allBtn = document.querySelectorAll(".buttons .btn");

					allBtn.forEach((btn)=>{
						btn.classList.add("events-class");

					});

					nextBtn.addEventListener("click", ()=>{
						chickenCrack.pause();
						allBtn.forEach((btn)=>{
							btn.classList.remove("events-class")
						});

						currentContainer().classList.remove("timesUp");
						document.querySelector(".ringing").textContent = "";
						
						anotherDiv(currentContainer());
					})
				
					
					//remove it
					inputCon.remove();	
					clearInterval(alarmset);
				}
			},1000);
		}
	}
}




function setBtnStats(elemClass, prop, container){
	setBtn.classList.remove(elemClass);
	setBtn.style.pointerEvents = prop ;
}


function timesUp(){
	let currentDiv = currentContainer();
	currentDiv.classList.add("timesUp");
	document.querySelector(".ringing").textContent = "TIME IS UP!!!";
}


makeBright();