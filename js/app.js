//updating the copyright year
(function(){
	const currentYear = document.querySelector(".year" );
	
	let thisYear = new Date();
	let newYear = thisYear.getFullYear();
	
	currentYear.textContent = newYear ;
	currentYear.innerText = newYear;
}());


$(function() {

      $("#portfolio").magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image',
          gallery: {
              enabled: true
          }

      });
});
  

document.querySelectorAll('#my-arsenal .carousel-indicators li').forEach( btn => {
  btn.addEventListener('click', function(){
    btn.style.transform = "rotate(360deg)";
      btn.style.borderRadius = "0% !important";
  })
  
});


/*================================================================ */
const developerSpan = document.querySelector(".developer");
let textCounter = 0;

const titles = [ "Web Developer", "Front End Developer", "Javascript Developer","Web Designer","Web Constructor"];

//const  randy = (arr) => Math.floor(Math.random()*arr.length);

const changeSpanText = (text) => {
developerSpan.classList.remove("from-left");
 developerSpan.innerText = text;
}

setInterval(()=> {
  if(textCounter === 4){
    changeSpanText(titles[textCounter]);
    textCounter = 0;
  }else{
    changeSpanText(titles[textCounter]);
  }
  setTimeout(()=>developerSpan.classList.add("from-left"),3000);
  textCounter++;
}, 4000)
/*================================================================ 
      AJAX CALL FOREMAIL SENDING
================================================================ */

let firstName;
let email;
let emailInterval;
let emailCounter;
let openEmail = false;
const messageDiv =  document.querySelector("#message-alert");

//CLOSE THE SUCESS MESSAGE
const closeEmail = () => {
  openEmail = false;
  hideAllSection();
  
  messageDiv.classList.remove("force-show");
  document.querySelectorAll("#get-in-touch input").forEach(input=> input.value = "");
  document.querySelector("#get-in-touch #body").value = "";
  document.querySelector("form button").classList.remove("no-pointer");
;};

//CLEAR NEXT ERROR INPUT
const clearError = elem => {
  elem.parentElement.lastElementChild.innerText = " ";
  elem.parentElement.lastElementChild.classList.remove("bad-input")
};

document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.add("no-pointer");
    openEmail = true;
    hideAllSection();

document.querySelectorAll("#get-in-touch input").forEach(input=>{
      validateInput(input);
    })
   
    function validateInput(input) {
      let nextElem = input.parentElement.lastElementChild;

      if(input.value == ""){
        nextElem.innerText = `Field for ${input.id} cannot be empty`;
        nextElem.classList.add("bad-input");        
      }else{
        if(input.id === "name"){
          let thisInput = input.value;
  
          if([...thisInput].length < 3){
            nextElem.innerText = `${input.id} cannot be less than 3 character`
          }
          nextElem.classList.add("bad-input");
        }
  
        if(input.id === "subject"){
          let thisInput = input.value;

          if([...thisInput].length < 5 ){
            nextElem.innerText = `${input.id} cannot be less 3`;
            nextElem.classList.add("bad-input");
          }

        }
  
        if(input.id === "email"){
          let thisInput = input.value;
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
          if(regex.test(thisInput) === false ){
            nextElem.innerText = `Please provide a valid ${input.id} adress`;
            nextElem.classList.add("bad-input")
          } 
        }

        if(input.id === "phone"){
          let thisInput = input.value;
          nextElem.className= "";
        }
      }
    }
    
    function checkPass(btn){
       setTimeout(()=>{
        if(document.querySelectorAll("#get-in-touch .bad-input").length != 1){
          btn.classList.remove("no-pointer");
        }else{
          processData() 
        }
      },1500)
      
    }

    checkPass(this);  
});

function processData(){
    firstName = document.getElementById('name').value;
    email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const body = document.getElementById('body').value;
    const subject = document.getElementById('subject').value;

    let params = {
        name : 'name=' + firstName ,
        email : '&email=' + email,
        phone : '&phone=' + phone,
        body : '&body=' + body,
        subject : '&subject=' + subject
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'mail/validator.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {

      if (xhr.readyState === 4 && xhr.status === 200) {
        showModal(xhr.responseText);
        console.log("message reach php", xhr.responseText)
      }
    };

    xhr.send(params.name + params.email + params.body + params.phone + params.subject);
  
}

 function showModal(content){
   emailCounter = 4;
    let modal = `<section id="overlay" class="flexy-col">
                    <aside class="flexy-col">
                        <div class="flexy-col" class="content">
                          <h3><span class="sent">Message Sent</span> from ${email}</h3>
                          <h6>We will get back to you</h6>
                          <p>${name} very soon</p>
                          <p><span class="count">5</span></p>
                        </div>
                        <div class="okay">
                          <button onclick="closeEmail()">CLOSE</button>
                        </div>
                    <aside>
                </section>`;  


    setTimeout(()=>{
      startEmailClose()
    },1500)
    messageDiv.classList.add("force-show");
    messageDiv.innerHTML = modal;
 } 

 function startEmailClose(){
  emailInterval = setInterval(()=>{
    document.querySelector("#message-alert .count").innerText = emailCounter;
    
    if(emailCounter === 0){
      clearInterval(emailInterval);
       closeEmail();
    }else{
      emailCounter--;
    }
    
  },1000)
 }

function hideAllSection(){

  if(openEmail){
    sections.forEach(section =>{

      if(section.id != "get-in-touch"){
        section.classList.add("hide-section");
      }
    })


  }else {
    sections.forEach(section =>{

      if(section.id != "get-in-touch"){
        section.classList.remove("hide-section");
      }
    })
  }
}
/*================================================================ 
      MAIN
================================================================ */
document.addEventListener("DOMContentLoaded", ()=>{
      
      
    /* ===========================================================
      UNORDER LISTS
    =========================================================== */
    const portAside = document.querySelector("#port-aside");
    const portArticle = document.querySelector("#port-article");
    let unoderList ;
    let portContent;


    if(document.querySelectorAll("#port-list li").length > 0){
      unoderList = document.querySelectorAll("ul li");
      
      unoderList.forEach( list => list.addEventListener("click",alterDivs));

      function alterDivs(){
        unoderList.forEach((item) => {
          item !== this ? item.classList.remove("active") : item.classList.add("active");
        });
        updatePortArticle(this);
      }

    }

   setTimeout(()=>{
    document.querySelector("#port-list #first").classList.add("active");
    portContent = `<div>
              <a data-toggle="modal" data-target="#lotto"><article class="boxers">
                <img src="assets/thumbs/lotto.png"  alt="lotto-html5-game" />
                <aside>
                  <h2>Lotto</h2>
                  
                </aside>
              </article></a>
              <a data-toggle="modal" data-target="#hammerrabbit"><article class="boxers">
                <img src="assets/thumbs/rabbit.png"  alt="hammer-rabbit-html5-game" />
                <aside>
                  <h2>Hammer The rabbit</h2>
                  
                </aside>
              </article></a>
          </div>
        `;
        portArticle.innerHTML = portContent;
   }, 3000);
 

    function updatePortArticle(item){
      item.classList.add("active");
      if(item.innerText == "HTML GAMES"){
        portContent = `
          <div>
            <a data-toggle="modal" data-target="#lotto"><article class="boxers">
              <img src="assets/thumbs/lotto.png"  alt="lotto-html5-game" />
              <aside>
                <h2>Lotto</h2>
                
              </aside>
            </article></a>
            <a data-toggle="modal" data-target="#hammerrabbit"><article class="boxers">
              <img src="assets/thumbs/rabbit.png"  alt="hammer-rabbit-html5-game" />
              <aside>
                <h2>Hammer The rabbit</h2>
                
              </aside>
            </article></a>
          </div>
        `;
        portArticle.innerHTML = portContent;
      }
      else if(item.innerText == "Vanilla Javascript"){
        portContent = `
          <div>
          <a data-toggle="modal" data-target="#digitalwatch"><article class="boxers">
            <img src="assets/thumbs/watch.jpg"  alt="digital-watch-app" />
            <aside>
              <h2>Digital alarm stoptimmer watch</h2>
              
            </aside>
          </article></a>
          <a data-toggle="modal" data-target="#yeildfieled"><article class="boxers">
            <img src="assets/thumbs/yeild.png"  alt="yeild-app" />
            <aside>
              <h2>Field Yield</h2>
              
            </aside>
          </article></a>
          </div>
        `;
        portArticle.innerHTML = portContent;
      }
      else if(item.innerText == "PHP and Mysql"){
        portContent = `
          <div>
            
            <a data-toggle="modal" data-target="#onlinestore"><article class="boxers">
              <img src="../assets/"  alt="online-store-website-demo" />
              <aside>
                <h2>Online Store</h2>
                
              </aside>
            </article></a>
          </div>
        `;
        portArticle.innerHTML = portContent;
      }
      else if(item.innerText == "Designs"){
        portContent = `<div>
        <a data-toggle="modal" data-target="#bcards">
        <article class="boxers">
          <aside class="center-col">
            <img src="assets/thumbs/bcards.png"  alt="lotto-html5-game" />
            <div class="center-col">
              <h2>B Cards Designs</h2>
              </div>
          </aside>
         
        </article></a>
        </div>`;
        portArticle.innerHTML = portContent;
      }
      else if(item.innerText == "Full Stack"){
        portContent = `<div>
        
        <a data-toggle="modal" data-target="#signupsingin"><article class="boxers">
              <img src="assets/thumbs/register.jpg"  alt="signupsingin-website-demo" />
              <aside>
                <h2>Simple SignUp & SignIn</h2>
                
              </aside>
            </article></a>

        <a data-toggle="modal" data-target="#budget-analysis"><article class="boxers">
           <img src="assets/thumbs/budget.png"  alt="lotto-html5-game" />
            <aside> 
              <h2>Budget Analysis</h2>
            </aside>
      </article></a>
        </div>`;
        portArticle.innerHTML = portContent;
      }
      // else if(item.innerText == "Moblie app"){
      //   portContent = `
      //     <div>
      //       <h2>Land Yeild (REACT NATIVE)</h2>
      //       <h2>PHONE GAP</h2>
      //     </div>
      //   `;
      //   portArticle.innerHTML = portContent;
      // }
      else {
        portContent = `
          <div>
              <a data-toggle="modal" data-target="#rainbow">
              <article class="boxers">
                    <aside class="center-col">
                    <img src="assets/thumbs/rainbow.png"  alt="lotto-html5-game" />
                    <div class="center-col">
                      <h2>2022 (BEAUTY PALOUR)</h2>
                      </div>
                    </aside>  
              </article> </a>


              <a data-toggle="modal" data-target="#wimcorp">
              <article class="boxers">
                    <aside class="center-col">
                      <img src="assets/thumbs/wimcorp.png"  alt="lotto-html5-game" />
                      <div class="center-col">
                        <h2>2021 (Wimcorp)</h2>
                      </div>
                      </aside>
              </article></a>


              <a data-toggle="modal" data-target="#cakes">
              <article class="boxers">
                  <aside class="center-col">
                    <img src="assets/thumbs/cakes.png"  alt="cake" />
                    <div class="center-col">
                      <h2>2020 (CAKES)</h2>
                    </div>
                    </aside>
                </form>
            </article></a>


            <a data-toggle="modal" data-target="#splamatic">
            <article class="boxers">
              <aside class="center-col">
                <img src="assets/thumbs/splamatic.png"   alt="splamatic" />
                <div class="center-col">
                  <h2>2019 (Spalamic cleaning)</h2>
                </div>
                </aside>
          </article></a>


          <a data-toggle="modal" data-target="#kearabilwe">
          <article class="boxers">
            <aside class="center-col">
              <img src="assets/thumbs/keamaoba.png"   alt="splamatic" />
              <div class="center-col">
                <h2>2018 (Kearabilwe)</h2>
              </div>
            </aside>
           
          </article> </a>
          </div>
        `;
        portArticle.innerHTML = portContent;
      }
    }

    /*

    ================================================================ */
    const portSidBar = document.querySelector("#tamplate .side-bar");
    const portCont = document.querySelector("#tamplate .contents");

    function aboutME(){
      portSidBar.classList.add("slide-none");
      setTimeout(()=>portSidBar.style.display = "none",2000);
      portCont.classList.add("slide-left");
    }



    /*================================================================ */
    
setTimeout(()=> {
      document.querySelector("#hero-port #arsenal h3").classList.add("resset");
      document.querySelector("#arsenal").classList.add("slide-up");
    },1500)
})



/*================================================================ */
/*================================================================ */
/*================================================================ */
const hamburger  = document.querySelector("#hamburger");
const nav  = document.querySelector("nav");
const main  = document.querySelector("main");
const sections  = document.querySelectorAll("section");
const lines  = document.querySelectorAll("#hamburger .line");
const linkTag  = document.querySelectorAll("nav .anchor-tag");

hamburger.addEventListener("click", menuFunc);

linkTag.forEach(line =>{
  line.addEventListener("click" , function(){

    if(hamburger.className === "open-menu"){
      hamburger.classList.remove("open-menu");
      nav.classList.remove("slow-show");
      main.style.display = "block";
    }
lines.forEach(line => line.className = "line");

  });
})


function menuFunc (){
  this.classList.toggle("open-menu");

  if(this.className === "open-menu"){
    main.style.display = "none";

    nav.classList.add("slow-show");

    lines.forEach( (line, index) =>{
      line.classList.add(line.id); 
    })

  }else {
    main.style.display = "block";

    nav.classList.remove("slow-show");

    lines.forEach( (line, index) =>{
      line.classList.remove(line.id); 
    })

  }


}

