<?php
//error_reporting(0);

/*
*отправка мейла
*на входе: шаблон, тема и параметры
*/
function sendMail($template, $subject, $params = array())
{

		/* получатели */
		$to= "q11211121@yandex.ru";
		
		/* тема/subject */
		foreach($params as $key=>$value)
		{
			$template = str_replace('['.$key.']', $value, $template);
		}


		/* Для отправки HTML-почты вы можете установить шапку Content-type. */
		$headers= "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf8\r\n";

		/* дополнительные шапки */
		$headers .= "From: ".$_SERVER['HTTP_HOST']."\r\n";

		/* и теперь отправим из */
		if(mail($to, $subject, $template, $headers))
		{
			header('Location: http://'.$_SERVER['SERVER_NAME'].'/?success=1');
			die();
		}
		else
		{
			header('Location: http://'.$_SERVER['SERVER_NAME'].'/?error=1');
			die();
		}
}

if(isset($_POST['resereve']))
{
	$template = '<html>
				<head>
				 <title>Бронирование</title>
				</head>
				<body>
				<table border="1">
				 <tr>
				<td>Имя: </td><td> [name] </td>
				 <tr>
				<td>Номер телефона: </td><td> [phone] </td>
				 </tr>
				 <tr>
				<td>Квартира: </td><td> [flat] </td>
				 </tr>
				</table>
				</body>
				</html>';
	$params = array(
					'name'=>(isset($_POST['name']) ? $_POST['name'] : ''),
					'phone'=>(isset($_POST['phone']) ? $_POST['phone'] : ''),
					'flat'=>(isset($_POST['flat']) ? $_POST['flat'] : ''),
					);
	$subject = 'Бронирование';
	sendMail($template, $subject, $params);
}

if(isset($_POST['recall']))
{
	$template = '<html>
				<head>
				 <title>Обратный звонок</title>
				</head>
				<body>
				<table border="1">
				 <tr>
				<td>Имя: </td><td> [name] </td>
				 <tr>
				<td>phone: </td><td> [phone] </td>
				 </tr>
				</table>
				</body>
				</html>';
	$params = array(
					'name'=>(isset($_POST['name']) ? $_POST['name'] : ''),
					'phone'=>(isset($_POST['phone']) ? $_POST['phone'] : ''),
					);
	$subject = 'Обратный звонок';
	sendMail($template, $subject, $params);
}

if(isset($_POST['question']))
{
	$template = '<html>
				<head>
				 <title>Вопрос специалисту</title>
				</head>
				<body>
				<table border="1">
				 <tr>
				<td>Имя: </td><td> [name] </td>
				 <tr>
				<td>Номер телефона: </td><td> [phone] </td>
				 </tr>
				 <tr>
				<td>Email: </td><td> [email] </td>
				 </tr>
				 <tr>
				<td>Сообщение: </td><td> [message] </td>
				 </tr>
				</table>
				</body>
				</html>';
	$params = array(
					'name'=>(isset($_POST['name']) ? $_POST['name'] : ''),
					'phone'=>(isset($_POST['phone']) ? $_POST['phone'] : ''),
					'email'=>(isset($_POST['email']) ? $_POST['email'] : ''),
					'message'=>(isset($_POST['message']) ? $_POST['message'] : ''),
					);
	$subject = 'Вопрос специалисту';
	sendMail($template, $subject, $params);
}
header('Location: http://'.$_SERVER['SERVER_NAME']);