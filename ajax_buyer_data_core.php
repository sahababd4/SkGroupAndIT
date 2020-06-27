<?php
 $email = htmlentities($_REQUEST["buyer_email"]);
 $phone_number = htmlentities($_REQUEST["buyer_phone"]);
 $buyer_message = htmlentities($_REQUEST["buyer_msg"]);

if(empty($email)){
	echo"Demo : Please Enter a valid Email";
}elseif(empty($buyer_message)){
	echo "Demo : Massage Box Should Not Be Blank";
}else{
echo "Demo : We have received your message. Our team will respond you as soon as possible";
// require_once("connection.php");
// $sent_data_query = "INSERT INTO `buyer_data_table` (`id`, `email`, `phone`, `message`, `time`) VALUES (NULL,'$email', '$phone_number', '$buyer_message', 'current_timestamp()')";
// $send_data = mysqli_query($connect,$sent_data_query);
}


















 // $email= $_REQUEST["buyer_email"];
 // $phone_number = $_REQUEST["buyer_phone"];
 // $buyer_message = $_REQUEST["buyer_msg"];
 // 
 // 
// if($_REQUEST["buyer_email"]==true){
// 	$email= $_REQUEST["buyer_email"];
// 	if
// }else{
// 	echo "Inter a valid Email";
// }

// $phone_number = $_REQUEST["buyer_phone"];
// $message = $_REQUEST["buyer_msg"];

// echo $email.'<br>';
// echo $phone_number.'<br>';
// echo $message.'<br>';