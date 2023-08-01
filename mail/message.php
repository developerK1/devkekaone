<?php
session_start();
 include_once("../includes/dynamics.php");
 include_once "../includes/header.php"; 

if(!isset($_SESSION['progres'])){
  header('Location: ../index.php');
}else{
  session_unset();
  
}
?>



<section id="message-content">
	<div class="msg-cont">
		<div class="messgae">
			<h2> MESSAGE SUCCESFULLY SENT</h2>
		</div>	
		<div class="container-wrapper container">
			<article>
				<h3 class="three">THANKS FOR CONTACTING</h3>
				<h3 class="three"><?=$busName ?></h3>
			</article>
			<aside class="container">
				<aside >
					<a href="../index.php"><button > BACK HOME HERE </button></a>
				</aside>
			</aside>
		</div>
	</div>
</section>




<section id="easy-contact" class="clr2">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 col-lg-6">
				<aside class="contacts-details flexy-col">
					<div class="flexy-cen">
						<p><img src="../assests/social/whatsapp.png" alt="-icon" /></p>
						<p><?=$busphone?> </p>
						<p>whatsApp</p>
					</div>
					<div class="flexy-cen">
						<p><img src="../assests/social/call.png" alt="-icon" /></p>
						<p><?=$busphone?> </p>
						<p>Phones</p>
					</div>
					<div class="flexy-cen">
						<p><img src="../assests/social/email.png" alt="-icon" /></p>
						<p><?=$busmail?> </p>
						<p>Email</p>
					</div>
				</aside>
			</div>
			<div class= "col-lg-6 col-md-12 adress clr1">
				<div class="locationIconAds" style="margin:15px;">
					<img src="../assests/social/location-icon.jpg" alt="location-icon" style=" border-radius : 20px"/>
				</div>
				<h3> Adress </h3>
				<a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.590450410472!2d25.92156231409561!3d-25.489219983761195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcbadd98bddffbafb!2zMjXCsDI5JzIxLjIiUyAyNcKwNTUnMjUuNSJF!5e1!3m2!1sen!2sza!4v1670401227653!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"><button type="submit" class="btn">DIRECTION</button></a>
				<p>41 Klip St</p>
				<p>Zeerust</p>
				<p>North West</p>
				<p>2865</p>
				<p>South Africa</p>
			</div>
		</div>
	</div>
</section>
<footer >
	<!-- <article id="map">
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.590450410472!2d25.92156231409561!3d-25.489219983761195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcbadd98bddffbafb!2zMjXCsDI5JzIxLjIiUyAyNcKwNTUnMjUuNSJF!5e1!3m2!1sen!2sza!4v1670401227653!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </article> -->
  <aside class="refer">
    <div class="full-width flexy-col">
			<h3>Refer a Friend</h3>
	    <p><?=$fbTags?></p>
	    <div class="flexy-cen">
	      <button class="go-to add-more"><a target="_blank">Share FB</a></button>
	    </div>
		</div>
  </aside>
	<a href="#to-top" class="move-up-icon"><div>
		<img src="../assests/icons/black-up.png" />
	</div></a>
  <div class="footer-links">
		<img src="../logo.png" alt="logo" />
    <p>All Copy Right Reserved <span class="year"></span></p>
    <p>Designed by <span><a href="www.maobatechsolutions.co.za">Maoba Tech</a></p>
  </div>
</footer>
</main>
<script>
	document.querySelector(".social-links").lastElementChild.style.display = "none";
</script>
<script src="../js/app.js"></script>
<script src="../js/jquery.js"></script>
<script src="../bootstrap/js/bootstrap.min.js"></script>
