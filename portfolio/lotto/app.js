(function(){
	let lotNumbers = [10,10,2,3,5,7,8,9,10,10];
	let plyOptions = [20,40,11,30,2,3,5,6,5,2];
	let sameIndex = 0;
	
	
    lotNumbers.forEach((lotto, index) =>{
        plyOptions.forEach((player, index) =>{
           if(lotto == player){
            console.log(lotto)
            sameIndex++;
           }
        })

    })


    if(sameIndex === 10){
		console.log("You won a gold medal");
		console.log("you won " + sameIndex + " lucky number ");
	}else if(sameIndex  <= 8 && sameIndex > 5){
		console.log("You won a silver medal");
		console.log("you won " + sameIndex + " lucky number ");
	}
	else if(sameIndex  <= 5 && sameIndex > 3){
		console.log("You won a ticket to the movie");
		console.log("you won " + sameIndex + " lucky number ");
	}else{
		console.log("you lost atry again")
	}

	console.log(sameIndex + " alike numbers");

}())