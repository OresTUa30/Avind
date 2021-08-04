<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$name = trim($_POST["name"]);
	$phone  = trim($_POST["phone"]);
	

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "name" && $key != "phone") {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}
} else if ( $method === 'GET' ) {

	$name = trim($_GET["name"]);
	$phone  = trim($_GET["phone"]);
	

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "name" && $key != "phone" &&) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($name).' <'.$phone.'>' . PHP_EOL .
'Reply-To: '.$phone.'' . PHP_EOL;

// mail($phone, adopt($form_subject), $message, $headers );
