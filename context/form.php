<?php

function IsChecked($chkname,$value)
{
	if(!empty($_POST[$chkname]))
	{
		foreach($_POST[$chkname] as $chkval)
		{
			if($chkval == $value)
			{
				return true;
			}
		}
	}
	return false;
}

$sendto   = "viirall@yandex.ru";
$name = $_POST['name1'];
$phone = $_POST['phone1'];
$mail = $_POST['mail1'];
$message = $_POST['message1'];
$sign = $_POST['sign1'];
// Формирование заголовка письма
$subject  = "Заявка на звонок";
$headers  = "From: " . strip_tags($name) . "\r\n";
$headers .= "Reply-To: ". strip_tags($name) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Оставить заявку</h2>\r\n";
$msg .= "<p><strong>От кого:</strong> ".$name."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$mail."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>Сообщение:</strong> ".$message."</p>\r\n";
$msg .= "<p><strong>Подписан:</strong> ".$sign."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>