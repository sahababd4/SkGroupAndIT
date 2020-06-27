<?php 

 $email = htmlentities($_REQUEST["team_email"]);
 $phone_number = htmlentities($_REQUEST["team_phone"]);
 $buyer_message = htmlentities($_REQUEST["team_msg"]);

if(empty($email)){
	echo"Demo : Please Enter a valid Email";
}elseif(empty($buyer_message)){
	echo "Demo : Massage Box Should Not Be Blank";
}else{
	require_once("connection.php");
	if($connect == false){

		echo "Demo : Sorry.. Database Is Disconnected, Check later";
	}else{
echo "Demo : We have received your message. Our team will respond you as soon as possible";

// $sent_data_query = "INSERT INTO `team_data_table` (`id`, `email`, `phone`, `message`, `time`) VALUES (NULL,'$email', '$phone_number', '$buyer_message', 'current_timestamp()')";
// $send_data = mysqli_query($connect,$sent_data_query);
}
}
