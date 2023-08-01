
$('.carousel').carousel()

function openBtn(){
	modal.classList.remove('modal-fadeOut');
	modal.style.display = "flex " ;
};

//closeBtn.addEventListener('click',closey);

function closey(){
	modal.classList.add('modal-fadeOut');
	
	 setTimeout(function(){
		modal.style.display = " none" ;;
	}, 2000);
	console.log("finshed");
	
};

window.addEventListener('click' , outsideClose);

window.addEventListener('scroll' , closey)
function outsideClose(e){
	if(e.target === modal ){
		closey();
	}
}








//this was just for excicse peropse

const person = {
	name : "Kekaone" ,
	lastName : "Maoba",
	getFullNames : function(){
		fullName = this.name + " " + this.lastName;
		return fullName;
	}
}
 //console.log(person);

let logName = function(user){
	console.log("yopu are log in: " +  user +" " + this.lastName);
	console.log("================================================");
	console.log("cofrim that you are: " + this.getFullNames());
	
}

const logPerson = logName.bind(person);

console.log(logPerson);
console.log("========================================");




/*
function createCircle(radius, location){
	return {
		radius,
		location,
		draw : function (){
			console.log("PLeae be patient with me , Coz I am drawing anyways");
		}
	}
}

const circle1 = createCircle("one",{x : 6 ,y:7});

alert(circle1.location);
*/

