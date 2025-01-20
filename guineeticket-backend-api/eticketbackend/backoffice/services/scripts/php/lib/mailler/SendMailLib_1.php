<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require './src/PHPMailer.php';
require './src/Exception.php';
require './src/SMTP.php';

function sendMail() {
    try {
        //Create an instance; passing `true` enables exceptions
        $mail = new PHPMailer(true);

        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host = 'smtp.gmail.com'; // Spécifiez le serveur SMTP de Gmail
        $mail->SMTPAuth = true;                                   //Enable SMTP authentication
        $mail->Username = 'ngbeadego.martial@gmail.com'; // Votre adresse e-mail Gmail
        $mail->Password = 'vbjaquwfelqosmhv'; // Votre mot de passe Gmail (ou mot de passe d'application)
//    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
//    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Activer le chiffrement TLS
        $mail->Port = 587; // Port TCP pour TLS
        //Recipients
        $mail->setFrom("ngbeadego.martial@gmail.com", 'Mailer');
        $mail->addAddress("ngbeadego.martial@gmail.com", 'Joe User');     //Add a recipient
        $mail->addAddress("martial.ngbeadego@nkm-technology.net");               //Name is optional
        $mail->addReplyTo('info@example.com', 'Information');
        $mail->addCC("edmond.kouakou@nkm-technology.net");
        //$mail->addBCC('bcc@example.com');
        //Attachments
        $mail->addAttachment("/Users/MAC/Downloads/Facture Inventaire 10082024.pdf");         //Add attachments
        $mail->addAttachment('/Users/MAC/Downloads/SUPPOSITOIRES.xlsx', 'SUPPOSITOIRES NEW.xlsx');    //Optional name
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Here is the subject';
        $mail->Body = 'This is the HTML message body <b>in bold!</b>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}

sendMail();