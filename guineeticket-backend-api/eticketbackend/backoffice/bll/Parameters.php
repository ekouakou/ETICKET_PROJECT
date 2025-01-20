<?php
require_once 'config.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Parameters
 *
 * @author NGBEADEGO Martial
 */
class Parameters {

    public static $host = DB_HOST;
    public static $port = DB_PORT;
    public static $user = "root";
    public static $pass = DB_PASSWORD;
    public static $db = DB_NAME;

//    public static $host = "132.148.179.241"; //online db parameters
    #__public static $host = "localhost"; //online db parameters
    #__public static $user = "clinic_db"; //environnement de godaddy
    #__public static $pass = "nkmclinic"; //environnement de dev
//    public static $pass = "M@rtial_13061988";//environnement prod vps
    #__public static $port = "8889";
//    public static $port = "3306";//environnement prod godaddy
    public static $onesignal_appid = "0d39b660-bd77-4762-8a4c-4fa258cb827c";
    public static $onesignal_rest_apikey = "OGJhZDU1ZDgtYTk5Mi00MmI5LWE3MjItY2Q1MmMzNGYxOGQ5";

    /* public static $host = "marco.local"; //local db parameters
      public static $user = "root";
      public static $pass = "admin"; */
    #__public static $db = "eticket_db";


    public static $statut_process = "process";
    public static $statut_enable = "enable";
    public static $statut_closed = "closed";
    public static $statut_delete = "delete";
    public static $statut_waiting = "waiting";
    public static $statut_scanned = "scanned";
    public static $Message = "0";
    public static $Detailmessage = "Aucune opération en cours";
    public static $type_activite = "activite";
    public static $type_publication = "publication";
    public static $default_picture = "default.png";
    public static $default_user = "1";
    public static $default_agence = "1";
    public static $default_agencename = "Guinée Ticket";
    public static $default_societe = "1";
    public static $default_indicatif = "224";
    public static $file_log = "../reports/import/images/publications/mylog.log";
//    public static $rootFolderPictureUser = "http://vps694144.ovh.net/amermoz/reports/import/images/users/";
    public static $rootFolderRelative = "images/product/";
    public static $rootFolderPictureUser = "http://localhost/cashtracking/images/avatar/";
    public static $rootFolderPicturePublication = "http://vps694144.ovh.net/amermoz/reports/import/images/publications/";
    public static $urlOnesignal = "https://onesignal.com/api/v1/notifications";
    public static $type_customer = "customer";
    public static $P_MSG_VALIDATE_CASH = "MSG_VALIDATE_CASH";
    public static $PROCESS_FAILED = "0";
    public static $PROCESS_SUCCESS = "1";
    public static $type_system = "system";
//    public static $path_import = "/Applications/MAMP/htdocs/eticketbackend/backoffice/images/product/"; //chemin en local
    public static $path_import = "/home/zkmoqvh01qh6/public_html/guineeticket.com/eticketbackend/backoffice/images/product/"; //chemin prod godaddy
    public static $typelisteValue = array("ACTIVITE", "CATEGORIE", "EVENTPLACE");
    public static $listeValue = array("URL_BACKOFFICE", "URL_FRONTOFFICE");
    public static $listeParameter = array("[P1]", "[P2]");
    public static $typelisteKey = array("4", "5", "7");
    public static $listePrivilege = array("50");
    public static $currencyDev = "OUV";
    public static $currencyProd = "GNF";
    public static $credit = "C";
    public static $debit = "D";
    public static $separator_space = " ";
    public static $host_smtp = "pro1.mail.ovh.net";
    public static $username_smtp = "infos@nkm-technology.net";
    public static $password_smtp = "M@rtial_13061988";
    public static $usernameinfos_smtp = "INFORMATIONS NKM-TECHNOLOGY";
    public static $guineeticket = "Guinée Ticket";

    /* public static $host_smtp = "smtp.gmail.com";    
      public static $username_smtp = "ngbeadego.martial@gmail.com";
      public static $password_smtp = "vbjaquwfelqosmhv"; */
    //API Orange Money
    public static $urlOrangemoneyToken = "https://api.orange.com/oauth/v3/token";
    /* public static $urlOrangemoneyPayment = "https://api.orange.com/orange-money-webpay/dev/v1"; //environnement de dev
      public static $authentificationBasicOrangemoney = "cWNBYmhlNDNzOHdPVHdETXV3THE4QkczM2cyd2VtcEk6UW5meWExSmJYTXN6WXlpcQ==";
      public static $merchantKey = "9e57bf53"; */
    public static $urlOrangemoneyPayment = "https://api.orange.com/orange-money-webpay/gn/v1";
    public static $authentificationBasicOrangemoney = "ekVyQWVaSWNjTjNmT09RRDZ4ZGo1REtOcWo1Z2ZrVHA6RXR2ZTZwOExRWklHbFQyQQ==";
    public static $merchantKey = "3e8f5cd7";
//    public static $urlResponseOrangemoney = "http://vps-0a57406f.vps.ovh.net/eticketbackend/backoffice/webservices/PaymentManager.php";
    public static $urlResponseOrangemoney = "http://www.guineeticket.com/backoffice/webservices/PaymentManager.php";
    //API MTN Money
    public static $urlMtnmoneyToken = "https://proxy.momoapi.mtn.com/collection/token/";
    public static $urlMtnmoneyPayment = "https://proxy.momoapi.mtn.com/collection/v1_0/requesttopay";
    public static $authentificationBasicMtnmoney = "NDIzNjEzNDEtNTMwOC00YWM4LWI5YWMtNGE3NWU1ZGRlNDhjOmQ1ZmRmZmUxZmE0NjQ2YjRiN2YzMGE3ZmQyZDUyOTAx";
    public static $primaryKeyMtnmoney = "78d6f426a9804debb2d4af42dece3451";
    public static $environmentMtnmoney = "mtnguineaconakry";
    /*public static $template_mailling = "/Applications/MAMP/htdocs/eticketbackend/backoffice/reports/mailling/template_inscription.html";
    public static $alternativetemplate_mailling = "/Applications/MAMP/htdocs/eticketbackend/backoffice/reports/mailling/alternative_template.txt";
    public static $path_maillangage = "/Applications/MAMP/htdocs/eticketbackend/backoffice/services/scripts/php/lib/mailler/language/";*/
    public static $template_mailling = "/home/zkmoqvh01qh6/public_html/guineeticket.com/eticketbackend/backoffice/reports/mailling/template_inscription.html";
    public static $alternativetemplate_mailling = "/home/zkmoqvh01qh6/public_html/guineeticket.com/eticketbackend/backoffice/reports/mailling/alternative_template.txt";
    public static $path_maillangage = "/home/zkmoqvh01qh6/public_html/guineeticket.com/eticketbackend/backoffice/services/scripts/php/lib/mailler/language/";
    
     //API envoi de SMS
    public static $urlBrokerSMS = "https://api.nimbasms.com/v1/messages";
    public static $authentificationBasicBrokerSMS = "N2MxNTEyZDcyZjAwMzc5Mzc2MTY0NjU4NjdhMGI3YWM6aXgxVThWSjRaQ0RmVllfU2lwVTVRLWlrVmZyeXJfQmZ3eDFxMmRxMjdWMi12YktuSWtwVFNIY2tjNlVJaHFhTzU5bkJxY2hlV0FJcXpQa0NmVHJ0ZlVDTWZOMlRuZUxBQ0FndjlFcmQxOFE=";
    public static $senderSMS = "GuineeTiket";

    public static function buildErrorMessage($description) {
        Parameters::$Message = "0";
        Parameters::$Detailmessage = $description;
    }

    public static function buildSuccessMessage($description) {
        Parameters::$Message = "1";
        Parameters::$Detailmessage = $description;
    }

    public static function buildSpecificMessage($code, $description) {
        Parameters::$Message = $code;
        Parameters::$Detailmessage = $description;
    }

    //transforme une chaine en date
    public static function StringToDate($format, $datestring) {
        return date($format, strtotime($datestring));
    }

    public static function StringToDateNew($format, $datestring) {
        $date = DateTime::createFromFormat('d/m/Y', $datestring);
        return $date->format("Y-m-d");
    }

    public static function RevertStringToDateNew($datestring) {
        $date = DateTime::createFromFormat('Y-m-d', $datestring);
        return $date->format("d/m/Y");
    }

    public static function uploadFile($rootPath, $filename = null) {
        $pic = "";
        try {
            // a decommenter en cas de probleme
            if ($_FILES["file"]["size"] > 1000000) { //gère uniquement les fichiers de 1Mo
                Parameters::buildErrorMessage("Echec de chargement de la photo. Vérifiez la taille du fichier");
                return $pic;
            }
            $filename = ($filename != null ? $filename : "") . time() . '-' . $_FILES['file']['name'];
            //            $targetFile = $rootPath . pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION) . "/" . $filename;
            $targetFile = $rootPath . "/" . $filename;
            if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFile)) {
                $pic = $filename;
            }

            /* $img = $_POST['file'];
              $img = str_replace('data:image/png;base64,', '', $img);
              $img = str_replace(' ', '+', $img);
              $data = base64_decode($img);
              $file = $rootPath . "/" . uniqid() . '.png';
              $pic = file_put_contents($file, $data);
              $path_parts = pathinfo($file);
              $pic = $path_parts['basename']; */
        } catch (Exception $ex) {
            $ex->getMessage();
        }
        return $pic;
    }

    public static function writeLog($filename, $data, $mode) {
        file_put_contents($filename, $data, $mode);
    }

}
