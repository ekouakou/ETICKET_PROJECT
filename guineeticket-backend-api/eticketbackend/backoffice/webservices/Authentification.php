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


if (isset($_REQUEST['STR_UTILOGIN'])) {
    $STR_UTILOGIN = $_REQUEST['STR_UTILOGIN'];
}

if (isset($_REQUEST['STR_UTIPASSWORD'])) {
    $STR_UTIPASSWORD = $_REQUEST['STR_UTIPASSWORD'];
}

if (isset($_REQUEST['STR_UTILOGIN'])) {
    $STR_UTILOGIN = $_REQUEST['STR_UTILOGIN'];
}

if (isset($_REQUEST['STR_SOCCODE'])) {
    $STR_SOCCODE = $_REQUEST['STR_SOCCODE'];
}

if (isset($_REQUEST['STR_UTITOKEN'])) {
    $STR_UTITOKEN = $_REQUEST['STR_UTITOKEN'];
}

if ($mode == "doConnexion") {
//    $value = $ConfigurationManager->doConnexion($STR_UTILOGIN, $STR_UTIPASSWORD, $STR_SOCCODE); //a decommenter en cas de probleme
    $value = $ConfigurationManager->doConnexion($STR_UTILOGIN, $STR_UTIPASSWORD);
    if ($value != null) {
        $arrayJson["LG_UTIID"] = $value[0]['lg_utiid'];
        $arrayJson["STR_UTIFIRSTLASTNAME"] = $value[0]['str_utifirstlastname'];
        $arrayJson["STR_UTIPHONE"] = $value[0]['str_utiphone'];
        $arrayJson["STR_UTIMAIL"] = $value[0]['str_utimail'];
        $arrayJson["STR_UTILOGIN"] = $value[0]['str_utilogin'];
//        $arrayJson["UTIPIC"] = Parameters::$rootFolderPictureUser . $value[0]['STR_UTIPIC'];
        $arrayJson["STR_UTIPIC"] = $value[0]['str_utipic'];
        $arrayJson["STR_UTITOKEN"] = $value[0]['str_utitoken'];
        $arrayJson["STR_PRODESCRIPTION"] = $value[0]['str_prodescription'];
        $arrayJson["LG_PROID"] = $value[0]['lg_proid'];
        $arrayJson["STR_PROTYPE"] = $value[0]['str_protype'];
        $arrayJson["STR_SOCNAME"] = $value[0]['str_socname'];
        $arrayJson["STR_SOCDESCRIPTION"] = $value[0]['str_socdescription'];
        $arrayJson["STR_SOCLOGO"] = $value[0]['str_soclogo'];
        $arrayJson["LG_SOCID"] = $value[0]['lg_socid'];
        $arrayJson["LG_AGEID"] = $value[0]['lg_ageid'];
        $arrayJson["groupmenu"] = $ConfigurationManager->generateMenu($value[0]['lg_proid']);
    }
} else if ($mode == "doDisConnexion") {
    $ConfigurationManager->doDisConnexion($STR_UTITOKEN);
}
$arrayJson["code_statut"] = Parameters::$Message;
$arrayJson["desc_statut"] = Parameters::$Detailmessage;

echo json_encode($arrayJson);


