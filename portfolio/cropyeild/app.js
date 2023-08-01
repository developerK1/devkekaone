//ADD DOM ELEMENTS
const btnSub = document.querySelector("form button");
let resultsContent;

const checkInputs = (e)=>{
	e.preventDefault();
	let emptycount = 0;
	document.querySelectorAll("form input").forEach(item=>{ if(item.value == "" )emptycount++});
	emptycount > 0 ? alert("Please fill all fields..") : Analyze();
	//Analyze()
}

btnSub.addEventListener("click", checkInputs);

function Analyze(){
	let landSeedSize = getSeedSize();
	let areaMeters = getArea();
	
	let capacity = getCapacity(landSeedSize, areaMeters);
	
	resultsContent += `
		<aside id="infor">
		<div class="headings">
			<h3> Name : <span>${document.querySelector("form #project-name").value} </span></h3>
			<h3> Seed Spacing :  <span>${document.querySelector("form #spacing").value} </span> cm</h3>
			<h3> Seed Size :  <span>${document.querySelector("form #seed-size").value} </span> mm</h3>
		</div>
		<div class="content">
			<p>Your field size is <span>${areaMeters}</span> meters squared in size.</p>
			<p>With this type of seeding  <span>${document.querySelector("form #seed-name").value}</span>, and spacing of ${document.querySelector("form #spacing").value} cm. It will only be possible to plant about ${capacity} of seeds at maximum.</p>
			<p class="note-benne">To store this data locally into your browser, save it here <button onClick="save();" class="save">SAVE</button>.</p>
		</div>
		<div class="flexy">
			<button onClick="deleteItem(this)" class="delete">Delete</button>
			<button  class="close" onClick="closeModal();">CLOSE</button>
		</div>
	</aside>
	
	`;

	setTimeout(results, 1000);
}

function getSeedSize(){
	let seed = Number(document.querySelector("form #seed-size").value) / 100;
	let space = Number(document.querySelector("form #spacing").value) / 100;
	
	return seed + space;
}

function getArea(){
	let l = Number(document.querySelector("form #length").value);
	let b = Number(document.querySelector("form #breadth").value) ;

	return l * b;
}

function getCapacity(landSeedSize, areaMeters){
	return areaMeters / landSeedSize;
	
}

///MODAL FUNCTIONALITY
function results(){
	document.querySelector("#results").style.display = "flex";
	document.querySelector("#results").innerHTML = resultsContent
	document.querySelector("#results").classList.add("fade-in");
}


function closeModal(){
	document.querySelector("#results").style.display = "none";
	document.querySelector("#results").innerHTML = "";
	document.querySelector("#results").classList.remove("fade-in");
	setTimeout(()=> window.location.reload(),800)
}

function save(){
	let newInfor = [];
		
	if(localStorage.getItem("data") == null){
		localStorage.setItem("data", "[]");
	}
	
	let savedData = JSON.parse(localStorage.getItem("data")) ;

	savedData.forEach(item=>{
		newInfor.push(item);
	})
	
	newInfor.push(resultsContent)

	localStaff(newInfor);
	setTimeout(()=> window.location.reload(),1000)
}

function localStaff(newInfor){
	newInfor = JSON.stringify(newInfor);
	window.localStorage.setItem("data", newInfor);
	
	
}


function openHistory(){
	if(localStorage.getItem("data") == null){
		alert("This app uses LocalStroage Api, permit to continue");

		let answer = window.confirm("Do you permit the app?");

		answer === true ? localStorage.setItem("data", "[]") : alert("Continue without saving projects");


	}

	let history = document.querySelector("#history");
	let data = JSON.parse(localStorage.getItem("data"));


	if(data.length === 0){
		let head3 = `<div class="flexy-col" id="no-results">
				<h3 class="no-reults">NOTHING TO SHOW...</h3>
				<button onClick="closeNoresults(this)">BACK</button>
			</div>`;
		history.innerHTML = head3;
	}else{
		data.forEach(item =>{
			history.innerHTML += item;
		});
	}
	
	display(history)
}

function display(history){
	document.querySelectorAll(".delete").forEach(item=> item.style.display = "flex");
	history.style.display = "flex" ;
	const allHistroyBtns = document.querySelectorAll("#history .note-benne button");
	allHistroyBtns.forEach(btn => btn.style.display = "none");
}

	
function deleteItem(btn){
	let curentIndex;
	
	let allAsides = document.querySelectorAll("#history aside");
	const currentAside = btn.parentElement.parentElement;
	
	let dataLngth = allAsides.length;
	
	allAsides.forEach((item,index)=> {
		if(item == currentAside){
			curentIndex = index;
		}
	});
	
	ressetData(curentIndex, currentAside);
}


function ressetData(curentIndex, currentAside ){
	document.querySelector("#preloader-modal").style.display = "flex";
	let confrimation = window.confirm("Are you sure you want to delete?");
	
	if(confrimation){
		
		setTimeout(()=> loadModal(curentIndex), 2000);	
		currentAside.style.display = "none";
			
		let newInfor = [];

		let savedData = JSON.parse(localStorage.getItem("data")) ;

		savedData.forEach((item, index)=>{
			if(index != curentIndex){
				newInfor.push(item);
			}
		})

		localStaff(newInfor);
	}
}




function closeNoresults(){
	document.querySelector("#history").style.display = "none";
	document.querySelector("#results").innerHTML = "";
	setTimeout(()=> window.location.reload(),800);
}


function loadModal(){
	document.querySelector("#history").innerHTML = "";
	document.querySelector("#preloader-modal").style.display = "none";
	
	openHistory();
	document.querySelector("#history").childElementCount == 0 ? window.location.reload() : "";
	console.log(document.querySelector("#history").childElementCount)
}


//GET HELP
function getHelp(status){
	let helpModal = document.querySelector("#help-modal");
	status == "open" ? helpModal.style.display = "flex" : helpModal.style.display = "none";
	
}
