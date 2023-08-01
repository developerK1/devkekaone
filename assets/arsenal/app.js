

/* ====================================================================
			
======================================================================*/
const projectsAides = checkMany(document.querySelectorAll("#projects aside"))

const showAll = () => filter(null);
const showPhp = (elm) => filter(elm);
const showNodejs = (elm) => filter(elm);
const showFullStack = (elm) => filter(elm);
const showVanilla = (elm) => filter(elm);
const showDesigns = (elm) => filter(elm);

if(projectsAides !== null){

	

	function filter(elm){

		let passedClassName = "column " + elm ;
		
		projectsAides.forEach(aside => aside.className != passedClassName ? vanishAside(aside) : showAside(aside));
		
		if(elm === null)  document.querySelectorAll("#projects aside").forEach(aside => showAside(aside));

		function vanishAside(aside){
			aside.style.animation = 'disappear 1s ease-in-out forwards';
			aside.style.display = "none";
		}
		
		function showAside(aside){
			aside.style.animation = 'appear 1s ease-in-out forwards';
			aside.style.display = "flex";
		}
	}

}else {
	console.log('projectsAides not found')
}

/*==================================================
			CHECK IF ELEMETS/ELEMENT EXIST 
===================================================*/
function checkMany(item){

 if(item.length === 0) {
   return null;
 }
   return item;
}

function checkOne(elem){
  if(elem !== null){
    return elem;
  }
}


/*==================================================
			CHECK IF ELEMETS/ELEMENT EXIST 
===================================================*/

let div = createDiv("div","ciicles","green");

for(let i = 0; i < 10)





function createDiv(tag,atrr,bgclr){
	let elem = document.createElement(tag);
	//elem.attributes('class',atrr);
	elem.style.backgroundColor = bgclr;
	
	
	return elem;
}



