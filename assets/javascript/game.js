/*
BASICS FOR THE GAME:
The computer generates a random number between 19 and 120
Each gem button is assigned a random number as well between 1 and 12
User clicks on each gem button
Each button when clicked adds its value to the score
If the score matches the random number exactly, user wins: add a win, display message, generate new random number
If the score goes over the random number, user looses: add a loss, display message, generate new random number
Display all game stats to the user
Reset button resets all game stats
*/

//Document Ready !IMPORTANT
$(document).ready(function(){

	// All code STARTS here:

	//Generate random number and display it under Random Number on HTML doc
	var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19; // returns a number between 19 and 120
		console.log("The Random Number is: " + randomNumber); //Checking via console

	//Add this new random number to the HTML page
	$("#randomNumberId").html(randomNumber);

	//======

   	//Generate random numbers and assign them to each gem
		//Green Diamond
		var greenGemNmbr = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
		console.log("The Green Diamond's value is: " + greenGemNmbr); //Checking via console

		//Red Diamond
		var redGemNmbr = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
		console.log("The Red Diamond's value is: " + redGemNmbr); //Checking via console

		//Yellow Diamond
		var yellowGemNmbr = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
		console.log("The Yellow Diamond's value is: " + yellowGemNmbr); //Checking via console

		//Purple Diamond
		var purpleGemNmbr = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
		console.log("The Purple Diamond's value is: " + purpleGemNmbr); //Checking via console
	
	//======

	//Create a variable for the Total Score that will be updated
	var yourScoreIs = 0;
	var wins = 0;
	var losses = 0;

	//Everytime each crystal is clicked, add each crystal's value to the Total Score and display it
		//Green Diamond
		$("#greenGem").on("click", function() {
			yourScoreIs = yourScoreIs + greenGemNmbr;
			console.log(yourScoreIs); //Checking via console
			$("#yourScore").html(yourScoreIs);

			//Conditions for win or lose are checked after every click

				//When user wins, update wins, update message, reset Random Number and Gem Values
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					console.log("YOU WIN");
					//MISSING: figure out how to reset random number and gem values
				}

				//When user loses, update losses, update message, reset Random Number and Gem Values
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("YOU LOSE");
					console.log("YOU LOSE");
					//MISSING: figure out how to reset random number and gem values
				}
		});

		//Red Diamond
		$("#redGem").on("click", function() {
			yourScoreIs = yourScoreIs + redGemNmbr;
			console.log(yourScoreIs); //Checking via console
			$("#yourScore").html(yourScoreIs);

			//Conditions for win or lose are checked after every click

				//When user wins, update wins, update message, reset Random Number and Gem Values
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					console.log("YOU WIN");
					//MISSING: figure out how to reset random number and gem values
				}

				//When user loses, update losses, update message, reset Random Number and Gem Values
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("YOU LOSE");
					console.log("YOU LOSE");
					//MISSING: figure out how to reset random number and gem values
				}
		});
		
		//Yellow Diamond
		$("#yellowGem").on("click", function() {
			yourScoreIs = yourScoreIs + yellowGemNmbr;
			console.log(yourScoreIs); //Checking via console
			$("#yourScore").html(yourScoreIs);

			//Conditions for win or lose are checked after every click

				//When user wins, update wins, update message, reset Random Number and Gem Values
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					console.log("YOU WIN");
					//MISSING: figure out how to reset random number and gem values
				}

				//When user loses, update losses, update message, reset Random Number and Gem Values
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("YOU LOSE");
					console.log("YOU LOSE");
					//MISSING: figure out how to reset random number and gem values
				}
		});

		//Purple Diamond
		$("#purpleGem").on("click", function() {
			yourScoreIs = yourScoreIs + purpleGemNmbr;
			console.log(yourScoreIs); //Checking via console
			$("#yourScore").html(yourScoreIs);

			//Conditions for win or lose are checked after every click

				//When user wins, update wins, update message, reset Random Number and Gem Values
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					console.log("YOU WIN");
					//MISSING: figure out how to reset random number and gem values
				}

				//When user loses, update losses, update message, reset Random Number and Gem Values
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("YOU LOSE");
					console.log("YOU LOSE");
					//MISSING: figure out how to reset random number and gem values
				}
		});

	//======












   // All code STOPS here:

});