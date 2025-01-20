<?php

interface PaymentInterface {

    public function doPayment($STR_PROVIDER, $data, $currency);

    public function verifyPayment($STR_PROVIDER, $data);

    //public function doPayment($STR_PROVIDER, $DBL_AMOUNT, $STR_REFERENCE, $STR_PHONE, $STR_MESSAGE, $currency);

    public function generateTokenOrangemoney();

//    public function doPaymentOrangemoney($DBL_AMOUNT, $STR_REFERENCE, $STR_PHONE, $STR_MESSAGE, $currency);
    public function doPaymentOrangemoney($data, $currency);

    public function verifyPaymentOrangemoney($data);

    public function generateTokenMtnmoney();

//    public function doPaymentMtnmoney($DBL_AMOUNT, $STR_REFERENCE, $STR_PHONE, $STR_MESSAGE, $currency);
    public function doPaymentMtnmoney($data, $currency);

    public function verifyPaymentMtnmoney($STR_REFERENCE);
}

class PaymentManager implements PaymentInterface {

    private $OCashtransaction = array();
    private $dbconnnexion;

    //constructeur de la classe 
    public function __construct() {
        $this->dbconnnexion = DoConnexionPDO(Parameters::$host, Parameters::$user, Parameters::$pass, Parameters::$db, Parameters::$port);
    }

    public function doPayment($STR_PROVIDER, $data, $currency) {
        $validation = false;
        try {
            if ($STR_PROVIDER == "orangemoney") {
//                $validation = $this->doPaymentOrangemoney($DBL_AMOUNT, $STR_REFERENCE, $STR_PHONE, $STR_MESSAGE, $currency); //a decommenter en cas de probleme
                $validation = $this->doPaymentOrangemoney($data, $currency);
            } else if ($STR_PROVIDER == "mtnmoney") {
//                $validation = $this->doPaymentMtnmoney($DBL_AMOUNT, $STR_REFERENCE, $STR_PHONE, $STR_MESSAGE, $currency);
                $validation = $this->doPaymentMtnmoney($data, $currency);
            }
        } catch (Exception $ex) {
            var_dump($ex->getTraceAsString());
        }
        return $validation;
    }

    public function verifyPayment($STR_PROVIDER, $data) {
        $validation = null;
        $CashManager = new CashManager();
        try {
            if ($STR_PROVIDER == "orangemoney") {
                $validation = $this->verifyPaymentOrangemoney($data);
            } else if ($STR_PROVIDER == "mtnmoney") {
                $validation = $this->verifyPaymentMtnmoney($data[0][1]);
            }
        } catch (Exception $exc) {
            //echo $exc->getTraceAsString();
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de verification de la transaction. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    /* public function doPayment($STR_PROVIDER, $DBL_AMOUNT, $STR_REFERENCE, $STR_PHONE, $STR_MESSAGE, $currency) {
      $validation = false;
      try {
      if ($STR_PROVIDER == "orangemoney") {
      $validation = $this->doPaymentOrangemoney($DBL_AMOUNT, $STR_REFERENCE, $STR_PHONE, $STR_MESSAGE, $currency);
      } else if ($STR_PROVIDER == "mtnmoney") {
      $validation = $this->doPaymentMtnmoney($DBL_AMOUNT, $STR_REFERENCE, $STR_PHONE, $STR_MESSAGE, $currency);
      }
      } catch (Exception $ex) {
      var_dump($ex->getTraceAsString());
      }
      return $validation;
      } */

    public function generateTokenOrangemoney() {
        $validation = "";
        try {
            // URL de l'API
            $url = Parameters::$urlOrangemoneyToken;

// Headers de la requête
            $headers = array(
                'Accept: application/json',
                'Content-Type: application/x-www-form-urlencoded',
                "Authorization: Basic " . Parameters::$authentificationBasicOrangemoney
            );

// Données à envoyer
            $data = array(
                'grant_type' => 'client_credentials'
            );

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

            $validation = $obj->access_token;
            // Accéder aux propriétés de l'objet JSON
            /* echo "ID: " . $obj->id . "<br>";
              echo "Name: " . $obj->name . "<br>";
              echo "Age: " . $obj->age . "<br>";
              echo "Email: " . $obj->email . "<br>"; */

// Affichage de la réponse
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            $exc->getTraceAsString();
//            Parameters::buildErrorMessage("Echec de l'opération. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

//    public function doPaymentOrangemoney($DBL_AMOUNT, $STR_REFERENCE, $STR_PHONE, $STR_MESSAGE, $currency) {
    public function doPaymentOrangemoney($data, $currency) {
        $validation = "";
        $token = "";
        $orderId = "";
        try {
            $token = $this->generateTokenOrangemoney();
            if ($token == "") {
                Parameters::buildErrorMessage("Echec du paiement. Veuillez réessayer dans quelques instants");
                return $validation;
            }
            //echo "token======>" . $token;
//            $url = 'https://api.orange.com/orange-money-webpay/dev/v1/webpayment';
            $url = Parameters::$urlOrangemoneyPayment . "/webpayment";
            $headers = array(
                'Accept: application/json',
                'Content-Type: application/json',
                "Authorization: Bearer " . $token,
            );

            /* $data = array(
              'merchant_key' => '9e57bf53',
              'currency' => 'OUV',
              //              'order_id' => '1234567890',
              'order_id' => $param->lg_ticid,
              'amount' => 10,
              'return_url' => 'http://www.merchant-example.org/return',
              'cancel_url' => 'http://www.merchant-example.org/cancel',
              'notif_url' => 'http://www.merchant-example.org/notif',
              'lang' => 'fr',
              'reference' => 'ref-xyz.456',
              ); */

            //var_dump($param);

            $data = json_decode(json_encode($data));

            $dataSend = array(
                'merchant_key' => Parameters::$merchantKey,
                //                        'currency' => 'OUV', //devise utilisee lors des tests
                'currency' => $currency,
                'order_id' => $data->externalId, //STR_CTRNAME: Id de Cashtransaction a la fin des developpement
                'amount' => $data->DBL_AMOUNT,
                'return_url' => Parameters::$urlResponseOrangemoney . "?mode=return",
                'cancel_url' => Parameters::$urlResponseOrangemoney . "?mode=cancel",
                'notif_url' => Parameters::$urlResponseOrangemoney . "?mode=notification",
                'lang' => 'fr',
//                'reference' => $data->externalId
                'reference' => Parameters::$guineeticket
            );

//            var_dump(json_encode($dataSend));
            //echo json_encode($dataSend);
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($dataSend));

            $response = curl_exec($ch);
            curl_close($ch);


            $obj = json_decode($response);
//            var_dump($obj);
// Vérifier si la conversion a réussi
            if ($obj === null && json_last_error() !== JSON_ERROR_NONE) {
                die('Erreur lors du décodage JSON');
            }

            //$validation = ($obj->message == "OK" ? true : false); //a decommenter en cas de probleme
            // Accéder aux propriétés de l'objet JSON
            /* echo "ID: " . $obj->id . "<br>";
              echo "Name: " . $obj->name . "<br>";
              echo "Age: " . $obj->age . "<br>";
              echo "Email: " . $obj->email . "<br>";
             * 
             */
            $validation = $obj;
//            var_dump($validation);
        } catch (Exception $ex) {
            echo $ex->getTraceAsString();
        }
        return $validation;
    }

    public function verifyPaymentOrangemoney($data) {
        $validation = null;
        $token = "";
        $arrayJson = array();
        try {
            $token = $this->generateTokenOrangemoney();
            if ($token == "") {
                Parameters::buildErrorMessage("Echec de vérification du paiement. Veuillez réessayer dans quelques instants");
                return $validation;
            }
//            echo "token======>" . $token;
            $url = Parameters::$urlOrangemoneyPayment . "/transactionstatus";
            $headers = array(
                'Accept: application/json',
                'Content-Type: application/json',
                "Authorization: Bearer " . $token,
            );

            //$data = json_decode(json_encode($data));

            $dataSend = array(
                'order_id' => $data[0][0], //STR_CTRNAME: Id de Cashtransaction a la fin des developpement
                'amount' => $data[0][2],
                'pay_token' => $data[0][13]
            );

//            echo json_encode($dataSend);
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($dataSend));

            $response = curl_exec($ch);
            curl_close($ch);


            $obj = json_decode($response);
            //var_dump($obj);
// Vérifier si la conversion a réussi
            if ($obj === null && json_last_error() !== JSON_ERROR_NONE) {
                die('Erreur lors du décodage JSON');
            }

            //$validation = ($obj->message == "OK" ? true : false); //a decommenter en cas de probleme
            // Accéder aux propriétés de l'objet JSON
            /* echo "ID: " . $obj->id . "<br>";
              echo "Name: " . $obj->name . "<br>";
              echo "Age: " . $obj->age . "<br>";
              echo "Email: " . $obj->email . "<br>";
             * 
             */
//            $validation = $obj;

            $arrayJson["LG_CTROPERATEURID"] = $obj->txnid;

            if ($obj->status == "FAILED" || $obj->status == "EXPIRED") {
                Parameters::buildErrorMessage("Echec de paiement. Veuillez reessayer a nouveau");
            } else if ($obj->status == "PENDING" || $obj->status == "INITIATED") {
                Parameters::buildSpecificMessage("2", "Paiement en cours");
            } else if ($obj->status == "SUCCESS") {
                Parameters::buildSuccessMessage("Paiement effectué avec succès. Référence de paiement: " . $obj->txnid);
            }

            //verification du statut du paiement
            //$validation = $this->verifyPaymentMtnmoney($token, $data->orderId);  

            $validation = json_decode(json_encode($arrayJson));
        } catch (Exception $ex) {
            echo $ex->getTraceAsString();
        }
        return $validation;
    }

    public function generateTokenMtnmoney() {
        $validation = "";
        try {
            // URL de l'API
            $url = Parameters::$urlMtnmoneyToken;
            // Headers de la requête
            $headers = array(
                'Accept: application/json',
                'Content-Type: application/x-www-form-urlencoded',
                "Authorization: Basic " . Parameters::$authentificationBasicMtnmoney,
                "Ocp-Apim-Subscription-Key: " . Parameters::$primaryKeyMtnmoney
            );

            // Données à envoyer
            $data = array();

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
            $validation = $obj->access_token;
            // Accéder aux propriétés de l'objet JSON
            /* echo "ID: " . $obj->id . "<br>";
              echo "Name: " . $obj->name . "<br>";
              echo "Age: " . $obj->age . "<br>";
              echo "Email: " . $obj->email . "<br>"; */

// Affichage de la réponse
        } catch (Exception $exc) {
            var_dump($exc->getTraceAsString());
            $exc->getTraceAsString();
//            Parameters::buildErrorMessage("Echec de l'opération. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

//    public function doPaymentMtnmoney($DBL_AMOUNT, $STR_REFERENCE, $STR_PHONE, $STR_MESSAGE, $currency) {
    public function doPaymentMtnmoney($data, $currency) {
        $validation = array();
        $arrayJson = array();
        $token = "";
        try {
            $token = $this->generateTokenMtnmoney(); //a decommenter en urgence
            if ($token == "") {
                Parameters::buildErrorMessage("Echec du paiement. Veuillez réessayer dans quelques instants");
                return $validation;
            }

            $data = json_decode(json_encode($data));

            $url = Parameters::$urlMtnmoneyPayment;
            $headers = array(
                "Accept: application/json",
                "Content-Type: application/json",
                "Authorization: Bearer " . $token,
                "Ocp-Apim-Subscription-Key: " . Parameters::$primaryKeyMtnmoney,
                "X-Target-Environment: " . Parameters::$environmentMtnmoney,
                "X-Reference-Id: " . $data->orderId //STR_CTRNAME
            );

            $payer = array(
                "partyIdType" => "MSISDN",
                "partyId" => $data->STR_PHONE
            );

            $dataSend = array(
//                'merchant_key' => Parameters::$merchantKey,
                "currency" => $currency,
                "externalId" => $data->externalId, //LG_CTRID: Id de Cashtransaction a la fin des developpement
                "amount" => (string) $data->DBL_AMOUNT,
                "payer" => $payer,
                "payerMessage" => $data->STR_MESSAGE,
                "payeeNote" => $data->STR_MESSAGE,
            );

            //echo $data->orderId;
            //var_dump($headers);
            //echo json_encode($dataSend);

            $ch = curl_init($url); //a decommenter en urgence
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($dataSend));

            $response = curl_exec($ch);

            // Obtenir le code de retour HTTP
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

            if ($httpCode != 202) {
                die("Echec du paiement. Veuillez reessayer svp!");
                Parameters::buildErrorMessage("Echec du paiement. Veuillez reessayer svp!");
            }
            //echo "===" . $httpCode;
            curl_close($ch);

            $arrayJson["payment_url"] = $url;
            $arrayJson["pay_token"] = $token;
            $arrayJson["message"] = "OK";
            //verification du statut du paiement
            //$validation = $this->verifyPaymentMtnmoney($token, $data->orderId);  

            $validation = json_decode(json_encode($arrayJson));
            //echo $validation;
        } catch (Exception $ex) {
            echo $ex->getTraceAsString();
        }
        return $validation;
    }

    public function verifyPaymentMtnmoney($STR_REFERENCE) {
        $validation = null;
        $token = "";
        $arrayJson = array();
        try {
            $token = $this->generateTokenMtnmoney(); //a decommenter en urgence
            if ($token == "") {
                Parameters::buildErrorMessage("Echec du paiement. Veuillez réessayer dans quelques instants");
                return $validation;
            }

            $url = Parameters::$urlMtnmoneyPayment . "/" . $STR_REFERENCE;
            $headers = array(
                "Authorization: Bearer " . $token,
                "Ocp-Apim-Subscription-Key: " . Parameters::$primaryKeyMtnmoney,
                "X-Target-Environment: " . Parameters::$environmentMtnmoney
            );

            //echo $data->orderId;
//            var_dump($headers);
//            echo json_encode($dataSend);
            // Initialisation de cURL
            $ch = curl_init($url);

            // Configuration de cURL
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

            $response = curl_exec($ch);
            curl_close($ch);

            $obj = json_decode($response);
            //var_dump($obj);
            // Vérifier si la conversion a réussi
            if ($obj === null && json_last_error() !== JSON_ERROR_NONE) {
                die('Erreur lors du décodage JSON');
            }

//            var_dump($obj);
//            $validation = $obj;
//            var_dump($validation);

            $arrayJson["LG_CTROPERATEURID"] = $obj->financialTransactionId;

            if ($obj->status == "FAILED") {
                Parameters::buildErrorMessage("Echec de paiement. Veuillez reessayer a nouveau");
            } else if ($obj->status == "PENDING") {
                Parameters::buildSpecificMessage("2", "Paiement en cours");
            } else if ($obj->status == "SUCCESSFUL") {
                Parameters::buildSuccessMessage("Paiement effectué avec succès. Référence de paiement: " . $obj->financialTransactionId);
            }

            //verification du statut du paiement
            //$validation = $this->verifyPaymentMtnmoney($token, $data->orderId);  

            $validation = json_decode(json_encode($arrayJson));
        } catch (Exception $ex) {
            echo $ex->getTraceAsString();
        }
        return $validation;
    }

}
