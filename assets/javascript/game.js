
	var numberToGuess;
	var counter = 0;
	var numberOfGems = 4;
	var wins = 0;
	var losses = 0;


$(document).ready(function(){

// gem game image elements
	
	for(var i=0; i<numberOfGems; i++){

		var imageGem = $("<img>")

			imageGem.attr('src', "assets/images/image" + (i + 1) + ".jpg");
			imageGem.attr('alt', "gems");
		imageGem.addClass("gemImage");
			$("#gems").append(imageGem)

	}

// event handler for clicking a gem
	
	$('.gemImage').on("click", function() {

		// add gem number to total
		counter = counter + parseInt($(this).data('num'));

		// display total
		$("#totalScore").text(counter);

	// alert if player won or lost

	if (counter === numberToGuess) {
		alert("You won!!!");
		wins++;
		$('#wins').text(wins);
		reset();
	
	}else if(counter > numberToGuess){
		alert("You lost!!!");
		losses++;
		$("#losses").text(losses);
		reset();
	}
});
	reset();
});

function reset () {

	counter = 0;
	numberToGuess = Math.floor((Math.random() * 120) + 19);
	$("#number").text(numberToGuess);
	$("#totalScore").text(counter);

	$("#gems img").each(function(index){
		var num = Math.floor((Math.random() * 12) + 1);
		$(this).attr("data-num", num);
	});
}














