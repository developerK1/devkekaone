<?php
if(isset($_POST['sendMailBtn'])) {
  session_start();
  $_SESSION['progres'] = md5(rand());

    $fromEmail = $_POST['email'];
    $name = $_POST['firstname'];
    $subjectName = $name." from ".$fromEmail;
    $phone = $_POST['phone'];
    $text = $_POST['message'];
    $service = $_POST['service'];

    $to = 'maobakg@yahoo.com'; //DONT FORGET TO PUST YUOUR EMAIL TO
    $subject = $subjectName;
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: '.$fromEmail.'<'.$fromEmail.'>' . "\r\n".'Reply-To: '.$fromEmail."\r\n" . 'X-Mailer: PHP/' . phpversion();
    $message = '<!doctype html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport"
					  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>Document</title>
			</head>
			<body>
			<span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">'.$text.'</span>
				<div class="container">
                <p>Subject : '.$service.'</p><br/>
                 Tell :'.$phone.'<br/>
                 Name :'.$name.'<br/><br/>
                 '.$text.'<br/><br/>
                    Regards Ba ga OS Bonolo<br/>
                  '.$fromEmail.'
				</div>
			</body>
			</html>';
    $result = @mail($to, $subject, $message, $headers);

   header('Location: message.php');
}else {
  include_once "../includes/header.php";
  include_once "../includes/modals.php";

  echo '<section id="no-entry">
        <aside class="flexy-col">
          <h1>Lost your track!</h1>
          <a href="../index.php"><button class="btn-col-2">HOME</button></a>
        </aside>
      </section>
      <footer >
        <a href="#to-top" class="move-up-icon"><div>
          <img src="../assests/icons/black-up.png" />
        </div></a>
        <div class="footer-links">
          <img src="../logo.png" alt="logo" />
          <p>All Copy Right Reserved <span class="year"></span></p>
          <p>Designed by <span><a href="www.maobatechsolutions.co.za">Maoba Tech</a></p>
        </div>
      </footer>
      <?php include_once "../includes/modals.php"; ?>
      </main>
      <script>
      
      
      
      function openBtn (){
        alert("show something different...!")
      }
      
      
      
      
      //updating the copyright year
      (function(){
        const currentYear = document.querySelector(".year" );
      
        let thisYear = new Date();
        let newYear = thisYear.getFullYear();
      
        currentYear.textContent = newYear ;
        currentYear.innerText = newYear;
      }());
      
      
      /* =============================================================== */
      /* ========================= HAMBURGER ============================= */
      /* =============================================================== */
      const hamburger = document.querySelector("#hamburger");
      const hamburgerLines = Array.from(document.querySelectorAll("#hamburger .lines"));
      const navLinks = document.querySelector("header article .flexy-cen ul")
      let hamburgerStatus = false;
      
      
      hamburger.addEventListener("click", function(){
        if(!hamburgerStatus){
          navLinks.classList.add("show-ul");
          setTimeout(()=> navLinks.classList.add("open-hamburder"), 500);
      
          hamburgerLines[0].classList.add("upperline");
          hamburgerLines[1].classList.add("middleline");
          hamburgerLines[2].classList.add("lowerline");
      
          hamburgerStatus = true;
      
        }else if(hamburgerStatus){
          setTimeout(()=> navLinks.classList.remove("open-hamburder"), 500);
      
          hamburgerLines[0].classList.remove("upperline");
          hamburgerLines[1].classList.remove("middleline");
          hamburgerLines[2].classList.remove("lowerline");
      
          navLinks.classList.remove("show-ul");
          hamburgerStatus = false;
      
        }
      })
      
      
      
      
      </script>
      <script src="../js/jquery.js"></script>
      <script src="../bootstrap/js/bootstrap.min.js"></script>
      ';
}
