<?php

$name = $_POST['name'];
$fromEmail = $_POST['email'];
$subject = $_POST['subject'];
$text = $_POST['body'];
$phone =  $_POST['phone'];

// $name =" Kekaone MAoba";
// $fromEmail = "Maobakg@gmail.com";
// $subject = "Testing Mail funtionality";
// $text = "Hi there , You ar so clever";
// $phone =  "018 10 111 52";

$subjectName = $subject;
$service =$subject;


    $to = 'maobakg@yahoo.com'; //DONT FORGET TO PUST YUOUR EMAIL TO
    $subject = $subjectName;
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: '.$fromEmail.'<'.$fromEmail.'>' . "\r\n".'Reply-To: '.$fromEmail."\r\n" . 'X-Mailer: PHP/' . phpversion();
    $message = '<!doctype html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport"
					  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>Document</title>
			</head>
			<body>
                <h4>Hello there</h4>
			</body>
			</html>';
    mail($to, $subject, $message, $headers);

    echo "success";
