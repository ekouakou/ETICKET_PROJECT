<?php

/**
 * Created by PhpStorm.
 * User: chaar
 * Date: 14/08/2018
 * Time: 11:31
 */
require '../services/scripts/php/core_transaction.php';
include '../services/scripts/php/lib.php';


// Permettre l'accès depuis n'importe quelle origine (CORS)
header("Access-Control-Allow-Origin: *");

// Autoriser les méthodes HTTP spécifiées
header("Access-Control-Allow-Methods: POST");

// Autoriser certains en-têtes HTTP
header("Access-Control-Allow-Headers: Content-Type");

$arrayJson = array();

$ConfigurationManager = new ConfigurationManager();
$OneSignal = new OneSignal();

$mode = $_REQUEST['mode'];


if (isset($_REQUEST['STR_CLILOGIN'])) {
    $STR_CLILOGIN = $_REQUEST['STR_CLILOGIN'];
}

if (isset($_REQUEST['STR_CLIPASSWORD'])) {
    $STR_CLIPASSWORD = $_REQUEST['STR_CLIPASSWORD'];
}

if (isset($_REQUEST['STR_CLITOKEN'])) {
    $STR_CLITOKEN = $_REQUEST['STR_CLITOKEN'];
}

if ($mode == "doConnexion") {
    $value = $ConfigurationManager->doConnexionClient($STR_CLILOGIN, $STR_CLIPASSWORD);
    if ($value != null) {
        $arrayJson["LG_CLIID"] = $value[0]['lg_cliid'];
        $arrayJson["STR_CLIFIRSTLASTNAME"] = $value[0]['str_clifirstlastname'];
        $arrayJson["STR_CLIPHONE"] = $value[0]['str_cliphone'];
        $arrayJson["STR_CLIMAIL"] = $value[0]['str_climail'];
        $arrayJson["STR_CLILOGIN"] = $value[0]['str_clilogin'];
//        $arrayJson["CLIPIC"] = Parameters::$rootFolderPictureUser . $value[0]['STR_CLIPIC'];
        $arrayJson["STR_CLIPIC"] = $value[0]['str_clipic'];
        $arrayJson["STR_CLITOKEN"] = $value[0]['str_clitoken'];
    }
} else if ($mode == "doDisConnexion") {
    $ConfigurationManager->doDisConnexionClient($STR_CLITOKEN);
}  

$arrayJson["code_statut"] = Parameters::$Message;
$arrayJson["desc_statut"] = Parameters::$Detailmessage;

//var_dump($arrayJson);

echo json_encode($arrayJson);


