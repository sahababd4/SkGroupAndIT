
// Ajax working here with Jquery buyer

$(document).ready(function(){

$("#buyer_data").on("click",function(){
  document.getElementById("loading_img").style.display = "inline-block";
  var emailOfBuyer = $("#buyer_email").val();
  var buyerPhone = $("#buyer_phone").val();
  var msgOfBuyer = $("#buyer_message").val();

setTimeout(function(){
	document.getElementById("loading_img").style.display = "none";
	 $.post("ajax_buyer_data_core.php",{buyer_email : emailOfBuyer, buyer_phone : buyerPhone, buyer_msg : msgOfBuyer},function(buyer_response){
	 	 	document.getElementById("buyer_response_fild").innerHTML = buyer_response;
	 	setTimeout(function(){
	 		document.getElementById("buyer_response_fild").innerHTML ="";
	 	},2500);

 });
	}, 1000)
  
});


});

// Ajax Working Here With Jquery Team
$(document).ready(function(){
$("#add_team_data").on("click",function(){
	document.getElementById("loading_img_team").style.display = "inline-block";
	var emailOfTeam =$("#team_email").val();
	var phoneOfTeam = $("#team_phone").val();
	var msgOfTeam = $("#team_msg").val();
	setTimeout(function(){
		$.post("ajax_team_data_core.php",{team_email: emailOfTeam,team_phone: phoneOfTeam, team_msg: msgOfTeam},function(team_response){
			document.getElementById("loading_img_team").style.display = "none";
			document.getElementById("team_response_fild").innerHTML = team_response;
			setTimeout(function(){
				document.getElementById("team_response_fild").innerHTML = "";
			},2500);
		})
	},1000)
})


})

