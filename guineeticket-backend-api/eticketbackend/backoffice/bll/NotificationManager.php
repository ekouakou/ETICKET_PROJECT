<?php

interface NotificationInterface {

    public function sendSMS($STR_MESSAGE, $STR_PHONE);
}

class NotificationManager implements NotificationInterface {

    private $Notification = 'notification';
    private $ONotification = array();
    private $dbconnnexion;

    //constructeur de la classe 
    public function __construct() {
        $this->dbconnnexion = DoConnexionPDO(Parameters::$host, Parameters::$user, Parameters::$pass, Parameters::$db, Parameters::$port);
    }

    public function sendSMS($STR_MESSAGE, $STR_PHONE) {
        $validation = "";
        try {
            // URL de l'API
            $url = Parameters::$urlBrokerSMS;

// Headers de la requête
            $headers = array(
                'Accept: application/json',
                "Authorization: Basic " . Parameters::$authentificationBasicBrokerSMS
            );

// Données à envoyer
            $data = array(
                "sender_name" => Parameters::$senderSMS,
                "to" => array($STR_PHONE),
                "message" => $STR_MESSAGE
            );
            
            //var_dump($data);

// Initialisation de cURL
            $ch = curl_init();

// Configuration de cURL
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Exécution de la requête
            $response = curl_exec($ch);

// Vérification des erreurs
            if (curl_errno($ch)) {
                echo 'Erreur cURL : ' . curl_error($ch);
            }

// Fermeture de la session cURL
            curl_close($ch);

//            echo $response;
            // Convertir le JSON en objet PHP
            $obj = json_decode($response);

// Vérifier si la conversion a réussi
            if ($obj === null && json_last_error() !== JSON_ERROR_NONE) {
                die('Erreur lors du décodage JSON');
            }
            
            var_dump($obj);

            $validation = $obj->messageid;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
        return $validation;
    }
}
