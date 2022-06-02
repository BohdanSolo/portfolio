<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;
$mail->Username = 'for.portfolio@ukr.net';
$mail->Password = 'or.portfolio2022';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('for.portfolio@ukr.net');
$mail->addAddress('solomakha.bohdan@gmail.com');
$mail->isHTML(true);

$mail->Subject = 'Лист з портфоліо';
$mail->Body    = '' .$name . ' відправив лист, з пошти ' .$email. '<br>Текст листа: ' .$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
}
?>