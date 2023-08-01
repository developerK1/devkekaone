<?php
  $_SESSION['progres'] = md5(rand());



    $fromEmail = "maobakg@gmail.com";
    $name = "Kekaone";
    $subjectName = "TESTING LOADING FILE DIRECTLY";
    $phone = "076 176 27 29";
    $text = "HI there, this is me testing";
    $service ="Web designs";


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
			<span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">'.$text.'</span>
				<div class="container">
                <p>Subject : '.$service.'</p><br/>
                 Tell :'.$phone.'<br/>
                 Name :'.$name.'<br/><br/>
                 '.$text.'<br/><br/>
                    Regards Ba ga OS Bonolo<br/>
                  '.$fromEmail.'
				</div>
			</body>
			</html>';
    $result = mail($to, $subject, $message, $headers);

    echo "message should be send to:</br>  $to";
