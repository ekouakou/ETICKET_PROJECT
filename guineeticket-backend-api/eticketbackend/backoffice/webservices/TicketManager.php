<?php

/**
 * Created by PhpStorm.
 * User: chaar
 * Date: 14/08/2018
 * Time: 11:31
 */
//use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\Exception;
//use PHPMailer\PHPMailer\SMTP;

require '../services/scripts/php/lib/mailler/src/PHPMailer.php';
require '../services/scripts/php/lib/mailler/src/Exception.php';
require '../services/scripts/php/lib/mailler/src/SMTP.php';

//require '../services/scripts/php/lib/mailler/vendor/phpmailer/phpmailer/src/PHPMailer.php';
//require '../services/scripts/php/lib/mailler/SMTP.php';
require '../services/scripts/php/lib/mailler/SendMailLib.php';
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
$STR_EVEANNONCEURPIC = Parameters::$default_picture;


$TicketManager = new TicketManager();
$ConfigurationManager = new ConfigurationManager();
$NotificationManager = new NotificationManager();

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

if (isset($_REQUEST['LG_EVEID'])) {
    $LG_EVEID = $_REQUEST['LG_EVEID'];
}

//echo "===".$OUtilisateur[0][1];

if ($mode == "listEvenement") {
    $LG_LSTID = "%";
    $LG_AGEID = "";
    $statistique = false;
    if (isset($_REQUEST['LG_LSTID']) && $_REQUEST['LG_LSTID'] != "") {
        $LG_LSTID = $_REQUEST['LG_LSTID'];
    }

    if (isset($_REQUEST['LG_AGEREQUESTID']) && $_REQUEST['LG_AGEREQUESTID'] != "") {
        $LG_AGEID = $_REQUEST['LG_AGEREQUESTID'];
    }

    if (isset($_REQUEST['statistique']) && $_REQUEST['statistique'] != "") {
        $statistique = (bool) $_REQUEST['statistique'];
    }

    $OPrivilege = $ConfigurationManager->getProfilePrivilege($OUtilisateur[0]["lg_proid"], Parameters::$listePrivilege[0]);
    $LG_AGEID = ($LG_AGEID == "" ? ($OPrivilege != null ? "%" : $OUtilisateur[0]["lg_ageid"]) : $LG_AGEID);

    $listEvenement = $TicketManager->showAllOrOneEvenement($search_value, $LG_AGEID, $LG_LSTID, $DT_BEGIN, $DT_END, $start, $length, $statistique);
    $total = $TicketManager->totalEvenement($search_value, $LG_AGEID, $LG_LSTID, $DT_BEGIN, $DT_END, $statistique);
    foreach ($listEvenement as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["LG_EVEID"] = $value['lg_eveid'];
        $arrayJson_chidren["LG_LSTID"] = $value['lg_lstid'];
        $arrayJson_chidren["STR_EVENAME"] = $value['str_evename'];
        $arrayJson_chidren["STR_EVEDESCRIPTION"] = $value['str_evedescription'];
        $arrayJson_chidren["LG_LSTPLACEID"] = $value['lg_lstplaceid'];
        $arrayJson_chidren["STR_EVETOBANNER"] = $value['str_evetobanner'] != null ? Parameters::$PROCESS_SUCCESS : Parameters::$PROCESS_FAILED;

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
        $arrayJson_chidren["LG_UTICREATEDID"] = $value['lg_uticreatedid'];
        $arrayJson_chidren["LG_AGEID"] = $value['lg_ageid'];
        $arrayJson_chidren["STR_EVESTATUT"] = $value['str_evestatut'];
        $arrayJson_chidren["STR_EVEDISPLAYROOM"] = $value['str_evedisplayroom'];
        $arrayJson_chidren["STR_EVESTATUTFREE"] = $value['str_evestatutfree'];
        $arrayJson_chidren["str_ACTION"] = "<span class='text-primary' title='Consultation de l'evenement " . $value['str_evename'] . "'></span>";

        $listCategorieplaceEvenement = $TicketManager->showAllOrOneCategorieplaceEvenement($search_value, $value['lg_eveid']);
        foreach ($listCategorieplaceEvenement as $Categorieplace) {
            $arrayJson_chidrenother = array();
            $arrayJson_chidrenother["STR_LSTDESCRPTION"] = $Categorieplace['str_lstdescription'];
            $arrayJson_chidrenother["INT_ELINUMBER"] = $Categorieplace['int_elinumber'];
            $arrayJson_chidrenother["INT_ELINUMBERMAX"] = $Categorieplace['int_elinumbermax'];
            $arrayJson_chidrenother["DBL_ELIAMOUNT"] = $Categorieplace['dbl_eliamount'];
            if ($statistique) {
                $arrayJson_chidrenother["INT_TICNUMBERSELL"] = $TicketManager->totalTicketByEvenement($Categorieplace['lg_eveid'], $Categorieplace['lg_lstid']);
                $arrayJson_chidrenother["INT_TICNUMBERREST"] = (int) $arrayJson_chidrenother["INT_ELINUMBER"] - (int) $arrayJson_chidrenother["INT_TICNUMBERSELL"];
                $arrayJson_chidrenother["DBL_ELIAMOUNTSELL"] = (int) $arrayJson_chidrenother["DBL_ELIAMOUNT"] * (int) $arrayJson_chidrenother["INT_TICNUMBERSELL"];
            }
            $OJsonother[] = $arrayJson_chidrenother;
        }
        $arrayJson_chidren["categorie"] = $OJsonother;
        $OJsonother = array();

        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
    $arrayJson["recordsTotal"] = $total;
    $arrayJson["recordsFiltered"] = $total;
} else if ($mode == "listEvenementFront") {
    $LG_LSTID = "%";
    $totalEvent = 0;
    if (isset($_REQUEST['LG_LSTID']) && $_REQUEST['LG_LSTID'] != "") {
        $LG_LSTID = $_REQUEST['LG_LSTID'];
    }

    $listActivity = $ConfigurationManager->showAllOrOneListe($search_value, Parameters::$typelisteValue[0], "%", "");
    foreach ($listActivity as $activity) {
        $arrayJson_parent = array();
        $arrayJson_parent["LG_LSTID"] = $activity['lg_lstid'];
        $arrayJson_parent["STR_LSTDESCRIPTION"] = $activity['str_lstdescription'];
        $listEvenement = $TicketManager->showAllOrOneEvenementFront($search_value, "%", $activity['lg_lstid'], $DT_BEGIN, $DT_END, $start, $length);
        $totalEvent += count($listEvenement);
        foreach ($listEvenement as $value) {
            $arrayJson_chidren = array();
            $arrayJson_chidren["LG_EVEID"] = $value['lg_eveid'];
            $arrayJson_chidren["LG_LSTID"] = $value['str_lstdescription'];
            $arrayJson_chidren["STR_EVENAME"] = $value['str_evename'];
            $arrayJson_chidren["STR_EVEDESCRIPTION"] = $value['str_evedescription'];
            $arrayJson_chidren["LG_LSTPLACEID"] = $value['lg_lstplaceid'];
            $arrayJson_chidren["DT_EVEBEGIN"] = DateToString($value['dt_evebegin'], 'd/m/Y');
            $arrayJson_chidren["DT_EVEEND"] = DateToString($value['dt_eveend'], 'd/m/Y');
            $arrayJson_chidren["HR_EVEBEGIN"] = $value['hr_evebegin'];
            $arrayJson_chidren["HR_EVEEND"] = $value['hr_eveend'];
            $arrayJson_chidren["STR_EVEPIC"] = Parameters::$rootFolderRelative . $value['str_evepic'];
            $arrayJson_chidren["STR_EVEBANNER"] = Parameters::$rootFolderRelative . $value['str_evebanner'];
            $arrayJson_chidren["DT_EVECREATED"] = DateToString($value['dt_evecreated'], 'd/m/Y H:i:s');
            $arrayJson_chidren["DT_EVEUPDATED"] = $value['dt_eveupdated'] != null ? DateToString($value['dt_eveupdated'], 'd/m/Y H:i:s') : "";
            $arrayJson_chidren["STR_EVEANNONCEUR"] = $value['str_eveannonceur'];
            $arrayJson_chidren["LG_UTICREATEDID"] = $value['lg_uticreatedid'];
            $arrayJson_chidren["LG_AGEID"] = $value['lg_ageid'];
            $arrayJson_chidren["STR_EVEDISPLAYROOM"] = $value['str_evedisplayroom'];
            $arrayJson_chidren["STR_EVESTATUTFREE"] = $value['str_evestatutfree'];
//            $arrayJson_chidren["str_ACTION"] = "<span class='text-primary' title='Consultation de l'evenement " . $value['str_evename'] . "'></span>";
            $OJson[] = $arrayJson_chidren;
        }
        $arrayJson_parent["evenements"] = $OJson;
        $OJsonParent[] = $arrayJson_parent;
        $OJson = array();
    }
    $arrayJson["data"] = $OJsonParent;
    $arrayJson["recordsTotal"] = $totalEvent;
    $arrayJson["recordsFiltered"] = $totalEvent;
} else if ($mode == "listNewsEvenement") {
    $totalEvent = 0;
    $listEvenement = $TicketManager->showAllOrOneEvenementNews($search_value);
    $totalEvent += count($listEvenement);
    foreach ($listEvenement as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["LG_EVEID"] = $value['lg_eveid'];
        $arrayJson_chidren["LG_LSTID"] = $value['str_lstdescription'];
        $arrayJson_chidren["STR_EVENAME"] = $value['str_evename'];
        $arrayJson_chidren["STR_EVEDESCRIPTION"] = $value['str_evedescription'];
        $arrayJson_chidren["LG_LSTPLACEID"] = $value['str_lstdescriptionplace'];
        $arrayJson_chidren["DT_EVEBEGIN"] = DateToString($value['dt_evebegin'], 'd/m/Y');
        $arrayJson_chidren["DT_EVEEND"] = DateToString($value['dt_eveend'], 'd/m/Y');
        $arrayJson_chidren["HR_EVEBEGIN"] = $value['hr_evebegin'];
        $arrayJson_chidren["HR_EVEEND"] = $value['hr_eveend'];
        $arrayJson_chidren["STR_EVEPIC"] = Parameters::$rootFolderRelative . $value['str_evepic'];
        $arrayJson_chidren["STR_EVEBANNER"] = Parameters::$rootFolderRelative . $value['str_evebanner'];
        $arrayJson_chidren["STR_EVEANNONCEUR"] = $value['str_eveannonceur'];
        $arrayJson_chidren["STR_EVETYPE"] = $value['str_evetype'];
        $arrayJson_chidren["NOMBRE"] = $value['nombre'];
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
    $arrayJson["recordsTotal"] = $totalEvent;
    $arrayJson["recordsFiltered"] = $totalEvent;
} else if ($mode == "listTicket") {
    $LG_LSTID = "%";
    $LG_EVEID = "%";
    $LG_AGEID = "%";
    $LG_CLIID = $OUtilisateur != null ? "%" : "";
    $LG_UTIID = "%";
    $STR_TICSTATUT = "%";
    if (isset($_REQUEST['LG_LSTID']) && $_REQUEST['LG_LSTID'] != "") {
        $LG_LSTID = $_REQUEST['LG_LSTID'];
    }

    if (isset($_REQUEST['LG_EVEID']) && $_REQUEST['LG_EVEID'] != "") {
        $LG_EVEID = $_REQUEST['LG_EVEID'];
    }

    if (isset($_REQUEST['LG_AGEREQUESTID']) && $_REQUEST['LG_AGEREQUESTID'] != "") {
        $LG_AGEID = $_REQUEST['LG_AGEREQUESTID'];
    }

    if (isset($_REQUEST['LG_CLIID']) && $_REQUEST['LG_CLIID'] != "") {
        $LG_CLIID = $_REQUEST['LG_CLIID'];
    }

    if (isset($_REQUEST['LG_UTIID']) && $_REQUEST['LG_UTIID'] != "") {
        $LG_UTIID = $_REQUEST['LG_UTIID'];
    }

    if (isset($_REQUEST['STR_TICSTATUT']) && $_REQUEST['STR_TICSTATUT'] != "") {
        $STR_TICSTATUT = $_REQUEST['STR_TICSTATUT'];
    }

    $listTicket = $TicketManager->showAllOrOneTicket($search_value, $LG_EVEID, $LG_LSTID, $LG_AGEID, $LG_CLIID, $LG_UTIID, $STR_TICSTATUT, $DT_BEGIN, $DT_END, $start, $length);
    $total = $TicketManager->totalTicket($search_value, $LG_EVEID, $LG_LSTID, $LG_AGEID, $LG_CLIID, $LG_UTIID, $STR_TICSTATUT, $DT_BEGIN, $DT_END);
    foreach ($listTicket as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["LG_TICID"] = $value['lg_ticid'];
        $arrayJson_chidren["STR_TICNAME"] = $value['str_ticname'];
        $arrayJson_chidren["STR_TICPHONE"] = $value['str_ticphone'];
        $arrayJson_chidren["STR_TICMAIL"] = $value['str_ticmail'];
        $arrayJson_chidren["STR_TICBARECODE"] = Parameters::$rootFolderRelative . $value['str_ticbarecode'];
        $arrayJson_chidren["DT_TCICREATED"] = DateToString($value['dt_ticcreated'], 'd/m/Y H:i:s');
        $arrayJson_chidren["DT_TCIVALIDATED"] = $value['dt_ticvalidated'] != null ? DateToString($value['dt_ticvalidated'], 'd/m/Y') : "";
        $arrayJson_chidren["STR_EVENAME"] = $value['str_evename'];
        $arrayJson_chidren["STR_EVEDESCRIPTION"] = $value['str_evedescription'];
        $arrayJson_chidren["STR_EVEPIC"] = Parameters::$rootFolderRelative . $value['str_evepic'];
        $arrayJson_chidren["STR_EVEBANNER"] = Parameters::$rootFolderRelative . $value['str_evebanner'];
        $arrayJson_chidren["DT_EVECREATED"] = DateToString($value['dt_evecreated'], 'd/m/Y H:i:s');
        $arrayJson_chidren["DT_EVEUPDATED"] = $value['dt_eveupdated'] != null ? DateToString($value['dt_eveupdated'], 'd/m/Y H:i:s') : "";
        $arrayJson_chidren["STR_EVEANNONCEUR"] = $value['str_eveannonceur'];
        $arrayJson_chidren["LG_LSTPLACEID"] = $value['lg_lstplaceid'];
        $arrayJson_chidren["str_ACTION"] = "<span class='text-primary' title='Consultation de l'evenement " . $value['str_evename'] . "'></span>";
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
    $arrayJson["recordsTotal"] = $total;
    $arrayJson["recordsFiltered"] = $total;
} else if ($mode == "listCategorieplaceEvenement") {
    $listCategorieplaceEvenement = $TicketManager->showAllOrOneCategorieplaceEvenement($search_value, $LG_EVEID);
    foreach ($listCategorieplaceEvenement as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["LG_ELIID"] = $value['lg_eliid'];
        $arrayJson_chidren["LG_EVEID"] = $value['lg_eveid'];
        $arrayJson_chidren["LG_LSTID"] = $value['lg_lstid'];
        $arrayJson_chidren["STR_LSTDESCRPTION"] = $value['str_lstdescription'];
        $arrayJson_chidren["INT_ELINUMBER"] = $value['int_elinumber'];
        $arrayJson_chidren["INT_ELINUMBERMAX"] = $value['int_elinumbermax'];
        $arrayJson_chidren["DBL_ELIAMOUNT"] = $value['dbl_eliamount'];
        $arrayJson_chidren["str_ACTION"] = "<span class='text-primary' title='Modifier les informations'></span><span class='text-danger' title='Supprimer la ligne de la place'></span>";
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
} else if ($mode == "totalVenteTicket") {
    $LG_LSTID = "%";
    $LG_EVEID = "%";
    $LG_AGEID = "";
    $LG_CLIID = $OUtilisateur != null ? "%" : "";
    $LG_UTIID = "%";
    $STR_TICSTATUT = "%";
    $OPrivilege = array();
    if (isset($_REQUEST['LG_LSTID']) && $_REQUEST['LG_LSTID'] != "") {
        $LG_LSTID = $_REQUEST['LG_LSTID'];
    }

    if (isset($_REQUEST['LG_EVEID']) && $_REQUEST['LG_EVEID'] != "") {
        $LG_EVEID = $_REQUEST['LG_EVEID'];
    }

    if (isset($_REQUEST['LG_AGEREQUESTID']) && $_REQUEST['LG_AGEREQUESTID'] != "") {
        $LG_AGEID = $_REQUEST['LG_AGEREQUESTID'];
    }

    if (isset($_REQUEST['LG_CLIID']) && $_REQUEST['LG_CLIID'] != "") {
        $LG_CLIID = $_REQUEST['LG_CLIID'];
    }

    if (isset($_REQUEST['LG_UTIID']) && $_REQUEST['LG_UTIID'] != "") {
        $LG_UTIID = $_REQUEST['LG_UTIID'];
    }

    if (isset($_REQUEST['STR_TICSTATUT']) && $_REQUEST['STR_TICSTATUT'] != "") {
        $STR_TICSTATUT = $_REQUEST['STR_TICSTATUT'];
    }

    $OPrivilege = $ConfigurationManager->getProfilePrivilege($OUtilisateur[0]["lg_proid"], Parameters::$listePrivilege[0]);
    $LG_AGEID = ($LG_AGEID == "" ? ($OPrivilege != null ? "%" : $OUtilisateur[0]["lg_ageid"]) : $LG_AGEID);

    $object = $TicketManager->totalVenteTicket($search_value, $LG_EVEID, $LG_LSTID, $LG_AGEID, $LG_CLIID, $LG_UTIID, $STR_TICSTATUT, $DT_BEGIN, $DT_END);
    foreach ($object as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["NOMBRE"] = $value['NOMBRE'];
        $arrayJson_chidren["DBL_AMOUNT"] = $value['MONTANT'] != null ? $value['MONTANT'] : 0;
        $arrayJson_chidren["DBL_AMOUNTMOYEN"] = (int) ((int) $arrayJson_chidren["DBL_AMOUNT"] / (int) $arrayJson_chidren["NOMBRE"]);
        $arrayJson[] = $arrayJson_chidren;
    }
} else {
    if (isset($_REQUEST['LG_LSTID'])) {
        $LG_LSTID = $_REQUEST['LG_LSTID'];
    }

    if (isset($_REQUEST['STR_EVENAME'])) {
        $STR_EVENAME = $_REQUEST['STR_EVENAME'];
    }

    if (isset($_REQUEST['STR_EVEDESCRIPTION'])) {
        $STR_EVEDESCRIPTION = $_REQUEST['STR_EVEDESCRIPTION'];
    }

    if (isset($_REQUEST['LG_LSTPLACEID'])) {
        $LG_LSTPLACEID = $_REQUEST['LG_LSTPLACEID'];
    }

    if (isset($_REQUEST['DT_EVEBEGIN'])) {
        $DT_EVEBEGIN = $_REQUEST['DT_EVEBEGIN'];
    }

    if (isset($_REQUEST['DT_EVEEND'])) {
        $DT_EVEEND = $_REQUEST['DT_EVEEND'];
    }

    if (isset($_REQUEST['HR_EVEBEGIN'])) {
        $HR_EVEBEGIN = $_REQUEST['HR_EVEBEGIN'];
    }

    if (isset($_REQUEST['HR_EVEEND'])) {
        $HR_EVEEND = $_REQUEST['HR_EVEEND'];
    }

    if (isset($_FILES['STR_EVEBANNER'])) {
        $STR_EVEBANNER = uploadFile(Parameters::$path_import, $_FILES['STR_EVEBANNER'], false);
    }

    if (isset($_FILES['STR_EVEPIC'])) {
        //$STR_EVEPIC = $_FILES['STR_EVEPIC'];
        $STR_EVEPIC = uploadFile(Parameters::$path_import, $_FILES['STR_EVEPIC'], false);
    }
    
    if (isset($_FILES['STR_EVEANNONCEURPIC'])) {
        $STR_EVEANNONCEURPIC = uploadFile(Parameters::$path_import, $_FILES['STR_EVEANNONCEURPIC'], false);
    }

    if (isset($_REQUEST['STR_ANNONCEUR'])) {
        $STR_ANNONCEUR = $_REQUEST['STR_ANNONCEUR'];
    }
    
    if (isset($_REQUEST['STR_EVEANNONCEUR'])) {
        $STR_EVEANNONCEUR = $_REQUEST['STR_EVEANNONCEUR'];
    }

    if (isset($_REQUEST['LG_EVEID'])) {
        $LG_EVEID = $_REQUEST['LG_EVEID'];
    }

    if (isset($_REQUEST['STR_TICPHONE'])) {
        $STR_TICPHONE = $_REQUEST['STR_TICPHONE'];
    }

    if (isset($_REQUEST['STR_TICMAIL'])) {
        $STR_TICMAIL = $_REQUEST['STR_TICMAIL'];
    }

    if (isset($_REQUEST['DBL_TICAMOUNT'])) {
        $DBL_TICAMOUNT = $_REQUEST['DBL_TICAMOUNT'];
    }

    if (isset($_REQUEST['LG_AGEREQUESTID'])) {
        $LG_AGEID = $_REQUEST['LG_AGEREQUESTID'];
    }

    if (isset($_REQUEST['STR_EVEDISPLAYROOM']) && $_REQUEST['STR_EVEDISPLAYROOM'] != "") {
        $STR_EVEDISPLAYROOM = $_REQUEST['STR_EVEDISPLAYROOM'];
    }

    if (isset($_REQUEST['STR_EVESTATUTFREE']) && $_REQUEST['STR_EVESTATUTFREE'] != "") {
        $STR_EVESTATUTFREE = $_REQUEST['STR_EVESTATUTFREE'];
    }

    if (isset($_REQUEST['STR_EVESTATUT'])) {
        $STR_EVESTATUT = $_REQUEST['STR_EVESTATUT'];
    }

    if (isset($_REQUEST['STR_PROVIDER'])) {
        $STR_PROVIDER = $_REQUEST['STR_PROVIDER'];
    }

    if (isset($_REQUEST['LG_TICID'])) {
        $LG_TICID = $_REQUEST['LG_TICID'];
    }

    if (isset($_REQUEST['STR_TICNAME'])) {
        $STR_TICNAME = $_REQUEST['STR_TICNAME'];
    }

    if (isset($_REQUEST['LG_LSTCATEGORIEPLACEID']) && $_REQUEST['LG_LSTCATEGORIEPLACEID'] != "") {
        $LG_LSTCATEGORIEPLACEID = json_decode($_REQUEST['LG_LSTCATEGORIEPLACEID']);
    }

    if (isset($_REQUEST['STR_CURRENCY']) && $_REQUEST['STR_CURRENCY'] != "") {
        $STR_CURRENCY = $_REQUEST['STR_CURRENCY'];
    }

    if (isset($_REQUEST['STR_CLIFIRSTLASTNAME'])) {
        $STR_CLIFIRSTLASTNAME = $_REQUEST['STR_CLIFIRSTLASTNAME'];
    }

    if (isset($_REQUEST['LG_EVEGLOBALID']) && $_REQUEST['LG_EVEGLOBALID'] != "") {
        $LG_EVEGLOBALID = json_decode($_REQUEST['LG_EVEGLOBALID']);
    }

    if (isset($_REQUEST['DT_BANBEGIN'])) {
        $DT_BANBEGIN = $_REQUEST['DT_BANBEGIN'];
    }

    if (isset($_REQUEST['DT_BANEND'])) {
        $DT_BANEND = $_REQUEST['DT_BANEND'];
    }

    if ($mode == "getTicket") {
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
    } else if ($mode == "verifyTicket") {
        $value = $TicketManager->verifyTicket($LG_TICID, $STR_TICNAME, $OUtilisateur);
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
    } else if ($mode == "getEvenement") {
        $value = $TicketManager->getEvenement($LG_EVEID);
        if ($value != null) {
            $banniere = $ConfigurationManager->getBanniere($value[0]['lg_eveid'], false);
            $arrayJson["LG_EVEID"] = $value[0]['lg_eveid'];
            $arrayJson["LG_LSTID"] = $value[0]['lg_lstid'];
            $arrayJson["STR_EVENAME"] = $value[0]['str_evename'];
            $arrayJson["STR_EVEDESCRIPTION"] = $value[0]['str_evedescription'];
            $arrayJson["LG_LSTPLACEID"] = $value[0]['lg_lstplaceid'];
            $arrayJson["DT_EVEBEGIN"] = DateToString($value[0]['dt_evebegin'], 'd/m/Y');
            $arrayJson["DT_EVEEND"] = DateToString($value[0]['dt_eveend'], 'd/m/Y');
            $arrayJson["HR_EVEBEGIN"] = $value[0]['hr_evebegin'];
            $arrayJson["HR_EVEEND"] = $value[0]['hr_eveend'];
            $arrayJson["STR_EVETOBANNER"] = $banniere != null ? Parameters::$PROCESS_SUCCESS : Parameters::$PROCESS_FAILED;
            $arrayJson["DT_BANBEGIN"] = $banniere != null ? DateToString($banniere[0]['dt_banbegin'], 'd/m/Y') : "";
            $arrayJson["DT_BANEND"] = $banniere != null ? DateToString($banniere[0]['dt_banend'], 'd/m/Y') : "";
            $arrayJson["STR_EVEPIC"] = Parameters::$rootFolderRelative . $value[0]['str_evepic'];
            $arrayJson["STR_EVEBANNER"] = Parameters::$rootFolderRelative . $value[0]['str_evebanner'];
            $arrayJson["STR_EVEANNONCEURPIC"] = Parameters::$rootFolderRelative . $value[0]['str_eveannonceurpic'];
            $arrayJson["STR_ANNONCEUR"] = $value[0]['str_annonceur'];
            $arrayJson["DT_EVECREATED"] = DateToString($value[0]['dt_evecreated'], 'd/m/Y H:i:s');
            $arrayJson["DT_EVEUPDATED"] = $value[0]['dt_eveupdated'] != null ? DateToString($value[0]['dt_eveupdated'], 'd/m/Y H:i:s') : "";
            $arrayJson["STR_EVEANNONCEUR"] = $value[0]['str_eveannonceur'];
            $arrayJson["LG_UTICREATEDID"] = $value[0]['lg_uticreatedid'];
            $arrayJson["LG_AGEID"] = $value[0]['lg_ageid'];
            $arrayJson["STR_EVEDISPLAYROOM"] = $value[0]['str_evedisplayroom'];
            $arrayJson["STR_EVESTATUTFREE"] = $value[0]['str_evestatutfree'];
        }
    } else if ($mode == "createEvenement") {
        $LG_EVEID = $TicketManager->createEvenement($LG_LSTID, $STR_EVENAME, $STR_EVEDESCRIPTION, $LG_LSTPLACEID, $DT_EVEBEGIN, $DT_EVEEND, $HR_EVEBEGIN, $HR_EVEEND, $STR_EVEPIC, $STR_EVEBANNER, $STR_EVEANNONCEUR, $LG_AGEID, $STR_EVEDISPLAYROOM, $STR_EVESTATUTFREE, $LG_LSTCATEGORIEPLACEID, $STR_EVEANNONCEURPIC, $STR_ANNONCEUR, $OUtilisateur);
        if ($LG_EVEID != "" && $STR_EVEBANNER != "") {
            $ConfigurationManager->createBanniere($STR_EVENAME, $STR_EVEDESCRIPTION, $LG_AGEID, $STR_EVEBANNER, $DT_BANBEGIN, $DT_BANEND, $LG_EVEID, Parameters::$PROCESS_FAILED, false, $OUtilisateur);
        }
    } else if ($mode == "updateEvenement") {
        $TicketManager->updateEvenement($LG_EVEID, $LG_LSTID, $STR_EVENAME, $STR_EVEDESCRIPTION, $LG_LSTPLACEID, $DT_EVEBEGIN, $DT_EVEEND, $HR_EVEBEGIN, $HR_EVEEND, $STR_EVEPIC, $STR_EVEBANNER, $STR_EVEANNONCEUR, $LG_AGEID, $STR_EVEDISPLAYROOM, $STR_EVESTATUTFREE, $LG_LSTCATEGORIEPLACEID, $STR_EVEANNONCEURPIC, $STR_ANNONCEUR, $OUtilisateur);
        if ($LG_EVEID != "" && $STR_EVEBANNER != "") {
            $ConfigurationManager->updateBanniere($LG_EVEID, $STR_EVENAME, $STR_EVEDESCRIPTION, $LG_AGEID, $STR_EVEBANNER, $DT_BANBEGIN, $DT_BANEND, $LG_EVEID, Parameters::$PROCESS_FAILED, false, $OUtilisateur);
        }
    } else if ($mode == "deleteEvenement") {
        $TicketManager->deleteEvenement($LG_EVEID, $STR_EVESTATUT, $OUtilisateur);
    } else if ($mode == "createTicket") {
        //$TicketManager->createTicket($LG_EVEID, $LG_LSTID, $STR_TICPHONE, $STR_TICMAIL, $DBL_TICAMOUNT, $STR_CURRENCY, $STR_PROVIDER);
        //$OJson = $TicketManager->createTicketGlobal($LG_EVEID, $STR_TICPHONE, $STR_TICMAIL, $LG_LSTCATEGORIEPLACEID, $STR_CURRENCY, $STR_PROVIDER); //ancien bon codde. a decommenter en cas de probleme
        $OJson = $TicketManager->createTicketGlobal($LG_EVEGLOBALID, $STR_TICPHONE, $STR_TICMAIL, $STR_CURRENCY, $STR_PROVIDER, $STR_CLIFIRSTLASTNAME);
        $arrayJson["payment_url"] = $OJson->payment_url;
        $arrayJson["token_notification"] = $OJson->pay_token;
        //var_dump($OJson);
    } else if ($mode == "deleteTicket") {
        $TicketManager->deleteTicket($LG_TRAID, $OUtilisateur);
    } else if ($mode == "uploadfile") {
        //uploadFile(Parameters::$path_import, $STR_EVEPIC);
        // Exemple d'utilisation
        $text = "Bonjour, voici un exemple de QR code généré en PHP !";
        $file_name = Parameters::$path_import . "qr_code_example.png";
        generate_qr_code($text, $file_name);
    } else if ($mode == "sendmail") {
        //echo "Bonjour les gars";

        $arrayAddressDestinataire = json_decode('[{"mail_address":"ngbeadego.martial@gmail.com","mail_infos":"Martial NGBEADEGO"},{"mail_address":"ekouakou1@gmail.com","mail_infos":""}]');
        $arrayAddressCopy = json_decode('[{"mail_address":"martial.ngbeadego@nkm-technology.net","mail_infos":"Martial"}]');
        $arrayAttachment = json_decode('[{"absolute_path":"/Users/MAC/Downloads/Facture Inventaire 10082024.pdf","filename":"Facture Inventaire 10082024.pdf"}]');

        sendMail($arrayAddressDestinataire, $arrayAddressCopy, $arrayAttachment, "Test dynamique", readFilename(Parameters::$template_mailling), readFilename(Parameters::$alternativetemplate_mailling));
        //sendMail("", "", "", "Test dynamique", "<div style='color:red'>Bonjour 2024</div>", "Bonjour 2024");
        //sendMail();
//        sendBasicMail();
    } else if ($mode == "sendsms") {
        $NotificationManager->sendSMS("Bonjour depuis mon code", "224622888069");
    }

    $arrayJson["code_statut"] = Parameters::$Message;
    $arrayJson["desc_statut"] = Parameters::$Detailmessage;
}

//$arrayJson["filename"] = $file;

echo json_encode($arrayJson);


