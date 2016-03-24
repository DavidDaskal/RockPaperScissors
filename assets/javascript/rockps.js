// Unfortunately, I was only able to set up the to children but waas unable to manipulate and retrieve
//the information from Firebase properly. I tried different methods but have not been able to
//get the right variables set up. I will be working on this in the coming days and weeks and will update.

$(document).ready(function() {

	var rockps = new Firebase("https://rockps.firebaseio.com/");
	playercount = 0;
$("#submit").on("click",function () {

		 playerOne = $("#playerOneName").val();
		

		rockps.on("value",function(snapshot) {

			if (snapshot.child("playerone").exists()) {
				alert("Player 1 already chose, please submit under player 2");
			}
			else {
			$("#name").html("Hello "+playerOne+". Please click on rock, paper, or scissors");
			$("#player1").css("display","none");
			$("#playertwo").css("display","none");
			$("#rockps").css("display","inline");
			rockps.child("playerone").set({
				playernum:"player1"
				});
		}
		});


	  return false;
	});

$(".rps").on("click",function () {
	$(this).css("border","solid red 2px");
	var selection = $(this).data("name");
	$("#name").html("Thank you "+playerOne+". You chose "+selection)
	
	playerOneInfo = {
			name: playerOne,
			choice: selection
		}
		playerOneFire = rockps.child("playerone");
		playerOneFire.update(playerOneInfo);
	
	});




$("#submit2").on("click",function () {

		 playerTwo = $("#playerTwoName").val();
		
		 rockps.on("value",function(snapshot) {

			if (snapshot.child("playertwo").exists()) {
				alert("Player two already chosen. Submit under player 1")
			}
			else {
		$("#name2").html("Hello "+playerTwo+". Please click on rock, paper, or scissors");
		$("#player1").css("display","none");
		$("#playerone").css("display","none");
		$("#rockps2").css("display","inline");
		rockps.child("playertwo").set({
				playernum:"player2"
				});
			}
		});
		
	return false;
	});

$(".rps2").on("click",function () {
	$(this).css("border","solid red 2px");
	var selection2 = $(this).data("name");
	$("#name2").html("Thank you "+playerTwo+". You chose "+selection2);
	playerTwoInfo = {
			name: playerTwo,
			choice: selection2
		}
	playerTwoFire = rockps.child("playertwo");
	playerTwoFire.set(playerTwoInfo);
	});

	
});



