<?php

/**
 * Created by PhpStorm.
 * User: chaar
 * Date: 14/08/2018
 * Time: 11:31
 */
require '../services/scripts/php/core_transaction.php';
include '../services/scripts/php/lib.php';
require '../services/scripts/php/lib/phpqrcode/qrlib.php';


// Permettre l'accès depuis n'importe quelle origine (CORS)
header("Access-Control-Allow-Origin: *");

// Autoriser les méthodes HTTP spécifiées
header("Access-Control-Allow-Methods: POST");

// Autoriser certains en-têtes HTTP
header("Access-Control-Allow-Headers: Content-Type");

$arrayJson = array();
$OJson = array();
$search_value = "";

$total = 0;
$start = 0;
$length = 25;
$DBL_TICAMOUNT = 5;
$STR_EVEDISPLAYROOM = Parameters::$PROCESS_FAILED;
$STR_EVESTATUTFREE = Parameters::$PROCESS_SUCCESS;
$LG_LSTCATEGORIEPLACEID = "";
$STR_CURRENCY = Parameters::$currencyDev;
$LG_EVEID = "";
$STR_EVEBANNER = "";

$TicketManager = new TicketManager();
$ConfigurationManager = new ConfigurationManager();
$CashManager = new CashManager();

$mode = $_REQUEST['mode'];


//$OneSignal = new OneSignal();


if (isset($_REQUEST['start'])) {
    $start = $_REQUEST['start'];
}

if (isset($_REQUEST['length'])) {
    $length = $_REQUEST['length'];
}

if (isset($_REQUEST['search_value'])) {
    $search_value = $_REQUEST['search_value'];
}

if (isset($_REQUEST['search_value[value]'])) {
    $search_value = $_REQUEST['search_value[value]'];
}

if (isset($_REQUEST['query'])) {
    $search_value = $_REQUEST['query'];
}

if (isset($_REQUEST['STR_UTITOKEN'])) {
    $STR_UTITOKEN = $_REQUEST['STR_UTITOKEN'];
    $OUtilisateur = $ConfigurationManager->getUtilisateur($STR_UTITOKEN);
}

if (isset($_REQUEST['DT_BEGIN']) && $_REQUEST['DT_BEGIN'] != "") {
    $DT_BEGIN = $_REQUEST['DT_BEGIN'];
}

if (isset($_REQUEST['DT_END']) && $_REQUEST['DT_END'] != "") {
    $DT_END = $_REQUEST['DT_END'];
}

//echo "===".$OUtilisateur[0][1];

if ($mode == "listCashtransaction") {
    $LG_LSTID = "%";
    if (isset($_REQUEST['LG_LSTID']) && $_REQUEST['LG_LSTID'] != "") {
        $LG_LSTID = $_REQUEST['LG_LSTID'];
    }

    $listEvenement = $TicketManager->showAllOrOneEvenement($search_value, $LG_LSTID, $DT_BEGIN, $DT_END, $start, $length);
    $total = $TicketManager->totalEvenement($search_value, $LG_LSTID, $DT_BEGIN, $DT_END);
    foreach ($listEvenement as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["LG_EVEID"] = $value['lg_eveid'];
        $arrayJson_chidren["LG_LSTID"] = $value['lg_lstid'];
        $arrayJson_chidren["STR_EVENAME"] = $value['str_evename'];
        $arrayJson_chidren["STR_EVEDESCRIPTION"] = $value['str_evedescription'];
        $arrayJson_chidren["LG_LSTPLACEID"] = $value['lg_lstplaceid'];

//        $arrayJson_chidren["OPEPIC"] = Parameters::$rootFolderRelative . "logos/" . $value['STR_OPEPIC']; //a decommenter en cas de probleme
//        $arrayJson_chidren["TRACREATED"] = DateToString($value['dt_evebegin'], 'd/m/Y H:i:s'); //a decommenter en cas de probleme
        $arrayJson_chidren["DT_EVEBEGIN"] = DateToString($value['dt_evebegin'], 'd/m/Y');
        $arrayJson_chidren["DT_EVEEND"] = DateToString($value['dt_eveend'], 'd/m/Y');
        $arrayJson_chidren["HR_EVEBEGIN"] = $value['hr_evebegin'];
        $arrayJson_chidren["HR_EVEEND"] = $value['hr_eveend'];
        $arrayJson_chidren["STR_EVEPIC"] = Parameters::$rootFolderRelative . $value['str_evepic'];
        $arrayJson_chidren["STR_EVEBANNER"] = Parameters::$rootFolderRelative . $value['str_evebanner'];
        $arrayJson_chidren["DT_EVECREATED"] = DateToString($value['dt_evecreated'], 'd/m/Y H:i:s');
        $arrayJson_chidren["DT_EVEUPDATED"] = $value['dt_eveupdated'] != null ? DateToString($value['dt_eveupdated'], 'd/m/Y H:i:s') : "";
        $arrayJson_chidren["STR_EVEANNONCEUR"] = $value['str_eveannonceur'];
        $arrayJson_chidren["LG_UTICREATEDID"] = $value['lg_utcreatedid'];
        $arrayJson_chidren["LG_AGEID"] = $value['lg_ageid'];
        $arrayJson_chidren["STR_EVEDISPLAYROOM"] = $value['str_evedisplayroom'];
        $arrayJson_chidren["STR_EVESTATUTFREE"] = $value['str_evestatutfree'];
        $arrayJson_chidren["str_ACTION"] = "<span class='text-primary' title='Consultation de l'evenement " . $value['str_evename'] . "'></span>";
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
    $arrayJson["recordsTotal"] = $total;
    $arrayJson["recordsFiltered"] = $total;
} else {
    if (isset($_REQUEST['LG_CTRID'])) {
        $LG_CTRID = $_REQUEST['LG_CTRID'];
    }

    if (isset($_REQUEST['STR_PROVIDER'])) {
        $STR_PROVIDER = $_REQUEST['STR_PROVIDER'];
    }

    if ($mode == "getCashtransaction") {
        $value = $TicketManager->getTicket($LG_TICID);
        if ($value != null) {
            $arrayJson["LG_TICID"] = $value[0]['lg_ticid'];
            $arrayJson["STR_TICNAME"] = $value[0]['str_ticname'];
            $arrayJson["STR_TICPHONE"] = $value[0]['str_ticphone'];
            $arrayJson["STR_TICMAIL"] = $value[0]['str_ticmail'];
            $arrayJson["STR_TICBARECODE"] = Parameters::$rootFolderRelative . $value[0]['str_ticbarecode'];
            $arrayJson["DT_TCICREATED"] = DateToString($value[0]['dt_ticcreated'], 'd/m/Y H:i:s');
            $arrayJson["DT_TCIVALIDATED"] = $value[0]['dt_ticvalidated'] != null ? DateToString($value[0]['dt_ticvalidated'], 'd/m/Y') : "";
            $arrayJson["STR_EVENAME"] = $value[0]['str_evename'];
            $arrayJson["STR_EVEDESCRIPTION"] = $value[0]['str_evedescription'];
            $arrayJson["STR_EVEPIC"] = Parameters::$rootFolderRelative . $value[0]['str_evepic'];
            $arrayJson["STR_EVEBANNER"] = Parameters::$rootFolderRelative . $value[0]['str_evebanner'];
            $arrayJson["STR_EVEANNONCEUR"] = $value[0]['str_eveannonceur'];
            $arrayJson["LG_LSTPLACEID"] = $value[0]['lg_lstplaceid'];
        }
    } else if ($mode == "verifypayment") {
        $CashManager->verifystatutpayment($LG_CTRID, $STR_PROVIDER);
    }

    $arrayJson["code_statut"] = Parameters::$Message;
    $arrayJson["desc_statut"] = Parameters::$Detailmessage;
}

//$arrayJson["filename"] = $file;

echo json_encode($arrayJson);


