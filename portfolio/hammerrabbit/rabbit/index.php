<?php

echo '<section style="height:100vh;width:100%;display:flex;">
	<article style="margin : auto;width:300px;height:400px;background-color:black;color:white">
		<h1>STOP TRYING TO BE SMART!!!</h1>
		<h6 class="count-down">6</h6>
	</article>
	<script>
		let coundDown = 6;
		
		let interCounter = setInterval(()=>{
			if(coundDown === 0){
				stopDount();
			}else{
				document.querySelector(".count-down").innerText = coundDown;
				coundDown--;
			}
		},1000);
		
		function stopDount(){
			clearInterval(interCounter);
			window.location = "";
		}
	</script>
</section>';


