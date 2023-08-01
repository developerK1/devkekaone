<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="EI=egde">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Aluminius doors & windows, tombstones, architectural planning and construction">
	<link rel="shortcut icon" type="images/png" href="favicon.png" />
	<link href="../bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link rel="shortcut icon" href="../images/logo.ico" type="image/x-icon" >
	<link href="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css" rel="stylesheet">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<title>WIM Corporation</title>
 <link rel="stylesheet"  href="../Style.css" href=”image.css”>
 <link rel="stylesheet"  href="../modalStyle.css" href=”image.css”>
 <style>
	.messgae {
		height : 80px;
		width : 60%;
		line-height :80px;
		background-color : #24ff24;
		font-weight : 700;
		text-align :center;
		display : flex;
		margin : auto;
	}
	.messgae h2 {
		margin : auto;
	}
	.msg-cont {
		width : 100%;
		display : flex;
		min-height : 15vh;
		background-color : orange;
	}
	.see button {
		width : 130px !Important;
	}
	.message-content {
		min-height : 65vh;
		width : 100%;
		background : url("../images/helmet.jpg");
	}
	.message-content h3 {
		font-size : 62px;
		font-family : casteller;
		text-align :center;
	}
	aside aside {
		min-height : 25vh;
		padding : 3%;
		width : 100%;
		display : flex;
	}
	.container-wrapper {
		background-color : white;
		
	}
	aside aside a {
		margin : auto;
		border-radius : 8px;
		background-color : black;
		color : orange;
		font-weight : 700;
	}
	.orange p {
		font-size : 28px;
		font-style : italic;
		font-weight : 700;
	}
	aside aside a button {
		background-color : orange;
		color : black;
		font-weight : 700;
		transition : all 0.75s ease;
	}
	
	aside aside a button:hover {
		background-color : black;
		color : orange;
		letter-spacing : 2px;
	}	
	
	@media(max-width : 720px){
		.messgae {
			width : 100%;
		}
		.message-content h3 {
			font-size : 32px;
			padding-top : 18px;
		}
		.orange p {
			font-size : 23px;
			font-style : italic;
			font-weight : 700;
		}
		.orange {
			flex-direction : column;
			text-align :center;
		}
	}
 </style>
</head>
<body>
<header>
	<div class="container-fluid" >
		<div class="row">
			<div class="contacts">
				<p><a href="tel:0813159025">(+27)81 315 9025</a></p>
				<p><a data-toggle="modal" data-target="#openForm">wimcorp@gmail.com</a></p>
				<div class="socialie-icon">
					<a href="https://mobile.facebook.com/WIMCorp/?tsid=0.0655118292026613&source=result"><img src="../social/facebook.png" alt="facebook-icon" /></a>
					<a href="https://wa.me/+27732336546?text=I'm%20interested%20in%20your%20"><img src="../social/whatsapp.png" alt="whatsAPP-icon" alt="whatsapp_icon"/></a>
				</div>
			</div>
		</div>
	</div>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src="../logo.jpg" />
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto links-cont">
      <li class="nav-item active">
        <a class="nav-link" href="../index.html" >ABOUT <span class="sr-only ">(current)</span></a>
      </li>	  
      <li class="nav-item">
        <a class="nav-link disable" href="../architectural-plans.html" >ARCHITECTURAL PLANS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="../construction.html">CONSTRUCTION</a>
      </li>
	  <li class="nav-item">
        <a class="nav-link " href="../tombstones.html" >TOMBSTONES</a>
      </li>
	  <li class="nav-item">
        <a class="nav-link disable" href="../aluminiums.html">ALUMINIUM</a>
      </li>
	   <li class="nav-item">
        <a class="nav-link " href="message.html" id="onactive" >YOU HERE...</a>
      </li>
    </ul>
  </div>
</nav>
</header>



<section class="message-content">
<div class="msg-cont">
	<div class="messgae">
		<h2> MESSAGE SUCCESFULLY SENT</h2>
	</div>
	</div>
	<div class="container-wrapper container">
	<article>
		<h3>THANKS FOR CONTACTING WIM CORPORATION</h3>
	</article>
	<aside class="container">
			<aside >
				<a href="../index.html"><button > BACK HOME HERE </button></a>
			</aside>
	</aside>
	<aside class=" orange flexy">
			<p>Your design and dream...</p>
			<p>Our design structure and building...</p>
	</aside>
	</div>
	
</section>
<div class="modal fade" id="openForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog"> 
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true"> &times; </button>
			<h4 class="modal-title" id="myModalLabel">EMAIL US</h4>
		</div>
			<div class="modal-body">
				<div class="row">
			<div class="col-lg-12 col-lg-12">
				<form role="form" method="POST" class="p-10"  action="mail/contact_us.php">
					<div class="form-group">
						<label for="inputEmail">From <span style="color: #FF0000">*</span></label>
                        <input type="text" name="fromEmail" id="fromEmail" class="form-control"  placeholder="info@yourEmailAdress.com / (+27)88 888 8888"  required >
					</div>
					<div class="form-group">
						 <label for="inputPassword">Subject <span style="color: #FF0000">*</span></label>
						 <input type="text" id="subject" name="subject" class="form-control" placeholder="Subject" required>
					</div>	
					<div class="form-group">
						<label for="name">Message</label>
						<textarea  id="message" name="message" class="form-control" placeholder="Message" required ></textarea>
					</div>
					<button type="submit" class="btn btn-default" name="sendMailBtn">Submit</button>
				</form>
			</div>
			</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close </button>
			</div>
	</div><!-- /.modal-content -->
	</div><!-- /.modal-content -->
</div><!-- /.modal-content -->
<footer >
	<div class="container">
		<div class="row">
			<div class="wrap">
				<aside>
					<h3>CONTACT INFO</h3>
					<h4>Head Office</h4>
					<div >
						<p><a href="tel:+27813159025">Phone: </a></p>
						<span><a href="tel:+27813159025"><img class="icon" src="../social/tell.png"></a></span>
					</div>
					<div >
						<a href="https://wa.me/+27813159025?text=I'm%20interested%20in%20"><p>WhatsApp:</p></a>
						<a href="https://wa.me/+27813159025?text=I'm%20interested%20in%20"><span><img class="icon-whats" src="../social/whatsapp.png"></span></a>
					</div>
					<div >
						<p><a data-toggle="modal" data-target="#openForm">Email</a></p>
						<a data-toggle="modal" data-target="#openForm"><span><img class="icon" src="../social/email.png"></span></a>
					</div>
				</aside>
				<article>
					<h3>QUICK LINKS</h3>
					<div class="footer-links">
						<ul class="links-cont">
							<li><a href="../index.html" >ABOUT</a></li>
							<li><a href="../architectural-plans.html" >ARCHITECTURAL</a></li>
							<li><a href="../construction.html">CONSTRUCTION</a></li>
							<li><a href="../aluminiums.html">ALUMINIUM</a></li>
							<li><a href="../tombstones.html">TOMBSTONES</a></li>
						</ul>
					</div>
				</article>	
			</div>
		</div>
	</div>
 </footer>
 <div class="footer-credits">
	<p>&COPY <span class="year"></span> ALL RIGHT RESERVED </p>
	<p> <span class="design">Design by  <a href="http://maobatechsolutions.com">KeKaone...</a></span></p>
 </div>
</main>

<!--- JQUERY =========================== -->
<script src="../jquery.js"></script>
<!-- BOOTSTRAP ========================= -->
<Script src="../bootstrap/js/bootstrap.min.js"></script>
<!---- Customized JAvascript =========== -->
<script src="../costumized.js"></script>
<script type="text/javascript">
	const btn = document.querySelector(".see");
	const hiddenClass = document.querySelector(".notVisible");
	const dots = document.querySelector(".dots");
	
	btn.addEventListener("click",function(){
		
		hiddenClass.style.transition = "all 3s ease";
		dots.style.transition = "all 3s ease";
		this.style.transition = "all 3s ease";
		
		hiddenClass.classList.remove("notVisible");
		dots.style.display = " none ";
	
		this.style.opacity = "0.7";
		setTimeout(()=>{
			btn.style.display = " none" ; 
		},1000);
	});
	

	
	
</script>
</body>
</html>;