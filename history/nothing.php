<?php


$modalviw = '';


if(isset($_POST['directions'])){
  // session_start();

    $pathTo = $_POST['page-info'];

header("Location: $pathTo");
}else {
    $modalviw = '
        <div class="content-added">
            <article class="boxers">
                <img src="../assest/"  alt="lotto-html5-game" />
                <form action="2022/" method="POST">
                    <aside>
                        <h2>2022(Rebangwe)</h2>
                    </aside>
                    <input type="text=" name="page-info" hidden value="2022"/>
                    <button class="view" name="directions">VIEW</button>
                </form>
            </article>

            <article class="boxers">
            <img src="../assets/thumbs/wimcorp.png"  alt="lotto-html5-game" />
                <form action="2021/" method="POST">
                    <aside>
                        <div class="center-col">
                        <h2>2021 (Wimcorp)</h2>
                        </div>
                    </aside>
                    <input type="text=" name="page-info" hidden value="2021"/>
                    <button class="view" name="directions">VIEW</button>
                </form>
            </article>


            <article class="boxers">
                <img src="../assest/thumbs/"  alt="wimcorp" />
                <form action="2020/" method="POST">
                    <aside>
                    <div class="center-col">
                        <h2>2020 ()</h2>
                    </div>
                    </aside>
                    <input type="text=" name="page-info" hidden value="2020"/>
                    <button class="view" name="directions">VIEW</button>
                </form>
        </article>

        <article class="boxers">
            <img src="../assets/thumbs/splamatic.png"   alt="splamatic" />
            <form action="2019/" method="POST">
            <aside>
                <div class="center-col">
                    <h2>2019 (Spalamic cleaning)</h2>
                </div>
            </aside>
            <input type="text=" name="page-info" hidden value="2019"/>
            <button class="view" name="directions">VIEW</button>
        </form>
        </article>

        <article class="boxers">
            <img src="../assets/thumbs/keamaoba.png"   alt="splamatic" />
            <form action="2018/" method="POST">
                <aside>
                <div class="center-col">
                    <h2>2018 (Kearabilwe)</h2>
                </div>
                </aside>
                <input type="text=" name="page-info" hidden value="2018"/>
                <button class="view" name="directions">VIEW</button>
            </form>
        </article>
        </div>
    ';
}

?>
<html>
<!DOCTYPE HTML>
<head>
 <meta charset="utf-8">
 <meta http-equiv="X-UA-Compatible" content="EI=egde">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta name="description" content="We design business website’s solutions that cater your business marketing goals. On affordable pricing and packages we design tailored website for your online presence needs.">
 <meta name="keywords" content="web design, website develope, online marketing">
 <link rel="shortcut icon" type="images/png" href="favicon.png" />
 <!-- FACEBOOK -->
 <meta name="keywords" content="website developere , web designer, website marketing, online branding, online solution">
 <meta property="og:url" content="http://devkekaone.co.za">
 <meta property="og:type" content="website">
 <meta property="og:title" content="2022 Tailored online solution | Zeerust">
 <meta property="og:description" content="We design business website’s solutions that cater your business marketing goals. On affordable pricing and packages we design tailored website for your online presence needs.">
 <meta property="og:image" content="http://devkekaone.co.za/fblogo.png">
 <!-- bootstrap -->
 <link href="../../bootstrap/css/bootstrap.min.css" rel="stylesheet">
 <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
 <title>2022 Web design Zeerust | Website designer | online marketing</title>

 <style>
 .wrapper {
   max-width: 240px;
   min-height: 65px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }
 #port-article {
    width: 100%;
 }
 .content-added {
    width: 100%;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    justify-content: center;
}
.boxers {
    width: 419px;
    height: 26vh;
    margin: 8px;
    border: 3px solid red;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #050b1f;
}
.boxers form {
    width: 100%;
    height: 100%;
    color: white;
    justify-content: center;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
}
.boxers aside {
    display :flex;
    flex-direction: column;
}
#port-article form aside .center-col {

  align-items: center;
}
#port-article form button {
  margin: 15px auto;
  width: 100px;
  height: 38px;
  border-radius: 8px;
  font-weight: 700;
  line-height: 38px;
  background: rgb(176, 19, 45);
  color: rgb(255, 252, 252);
  transition: all 0.5s ease-in-out;
  z-index : 100;
  cursor : pointer;
}
.boxers img {
  width: 169px;
  padding: 16px;
  height: 122px;
  transform: translateY(10px);
}
 /* ===================================================================
   HOVER STATES
 ==================================================================== */
 .wrapper:hover {
   margin: 8px 0px 8px 15px;
 }
 .wrapper:active {
   margin: 8px 0px 8px 15px;
 }
 #port-article form button:hover {
  background: pink;
   color: black;
  letter-spacing: 1.8px;
}
 main {
    background: url("../../assets/") no-repeat;
    background-size: cover;
    background-position: center;
    background-color:#dc00268c;
    background-blend-mode: multiply;
 }
 </style>
</head>
<body>
<main>

<article id="port-article" class="centerfy">
<?=$modalviw;?>
</div>



</main>
<script>
  const bodyTag = document.querySelector("body");

let anchortag =  () => {
    let anchoTag = document.createElement('a');
    anchoTag.setAttribute('href', '../');
    anchoTag.setAttribute('class', 'homeBtn');
    anchoTag.innerText = "BACK";
    anchoTag.style.position = "fixed";
    anchoTag.style.top = "20px";
    anchoTag.style.left = "20px";
    anchoTag.style.backgroundColor = "black";
    anchoTag.style.color = "white";
    anchoTag.style.fontWeight = "700";
    anchoTag.style.padding = "1%";
    anchoTag.style.height = "35px";
    anchoTag.style.width = "100px";
    anchoTag.style.textAlign = "center";
    anchoTag.style.display = "flex";
    anchoTag.style.justifyContent = "center";
    anchoTag.style.alignItems = "center";
    anchoTag.style.transition = "all 0.5s ease-in-out";
   
    return anchoTag;
}

bodyTag.style.position = "relative";
bodyTag.append(anchortag());

window.addEventListener("DOMContentLoaded", function(){

    document.querySelector(".homeBtn").addEventListener("mouseover", function(){
        this.style.backgroundColor = "white";
        this.style.color = "black";
        this.style.letterSpacing = "2px";
        this.style.fontWeight = "700";
    });

    document.querySelector(".homeBtn").addEventListener("mouseout", function(){
        this.style.backgroundColor = "black";
        this.style.color = "white"
        this.style.letterSpacing = "1px";
        this.style.fontWeight = "300";
    });
})

</script>
<script src="../../js/jquery.js"></script>
<script src="../../js/app.js"></script>

