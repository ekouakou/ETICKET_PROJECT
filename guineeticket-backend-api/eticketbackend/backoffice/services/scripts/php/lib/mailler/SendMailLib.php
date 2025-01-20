<?php

//
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

//require './src/PHPMailer.php';
//require './src/Exception.php';
//require './src/SMTP.php';

function sendMail($arrayAddressDestinataire, $arrayAddressCopy, $arrayAttachment, $subject, $body, $alternativeBody) {
    try {
        //Create an instance; passing `true` enables exceptions
        $mail = new PHPMailer(true);

        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host = Parameters::$host_smtp; // Spécifiez le serveur SMTP de Gmail
        $mail->SMTPAuth = true;                                   //Enable SMTP authentication
        $mail->Username = Parameters::$username_smtp; // Votre adresse e-mail Gmail
        $mail->Password = Parameters::$password_smtp; // Votre mot de passe Gmail (ou mot de passe d'application)
//    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
//    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Activer le chiffrement TLS
        $mail->Port = 587; // Port TCP pour TLS
        //To load the French version
        $mail->setLanguage('fr', Parameters::$path_maillangage);
        //Recipients
//        $mail->setFrom("ngbeadego.martial@gmail.com", 'Mailer'); //
        $mail->setFrom(Parameters::$username_smtp, Parameters::$usernameinfos_smtp);

        //var_dump($arrayAddressDestinataire);

        foreach ($arrayAddressDestinataire as $value) {
//            echo $value->mail_address . "====" . $value->mail_infos;
            $mail->addAddress($value->mail_address, $value->mail_infos);
        }

        /* $mail->addAddress("ngbeadego.martial@gmail.com", 'Joe User');     //Add a recipient
          $mail->addAddress("martial.ngbeadego@nkm-technology.net"); */          //Name is optional
        //$mail->addReplyTo('info@example.com', 'Information');

        foreach ($arrayAddressCopy as $value) {
            $mail->addCC($value->mail_address, $value->mail_infos);
        }
        //$mail->addCC("edmond.kouakou@nkm-technology.net");
        //$mail->addBCC('bcc@example.com');

        foreach ($arrayAttachment as $value) {      //Add attachments
            $mail->addAttachment($value->absolute_path, $value->filename);    //Optional name
        }
        //Attachments
        /* $mail->addAttachment("/Users/MAC/Downloads/Facture Inventaire 10082024.pdf");         //Add attachments
          $mail->addAttachment('/Users/MAC/Downloads/SUPPOSITOIRES.xlsx', 'SUPPOSITOIRES NEW.xlsx'); */    //Optional name
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->CharSet = 'UTF-8'; // Définir l'encodage des caractères à UTF-8
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->AltBody = $alternativeBody;

        if($mail->send()) {
            Parameters::buildSuccessMessage("Mail envoyé avec succès");
//            echo "Mail envoyé avec succès";
        } else {
            Parameters::buildErrorMessage("Echec d'envoi de mail");
        }
//        echo 'Message has been sent';
    } catch (Exception $e) {
        Parameters::buildErrorMessage("Echec d'envoi de mail. Erreur du mail: {$mail->ErrorInfo}");
    }
}

//sendMail();