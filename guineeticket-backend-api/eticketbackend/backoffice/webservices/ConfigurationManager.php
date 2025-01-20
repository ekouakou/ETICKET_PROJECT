<?php

/**
 * Created by PhpStorm.
 * User: chaar
 * Date: 14/08/2018
 * Time: 11:31
 */
require '../services/scripts/php/lib/mailler/src/PHPMailer.php';
require '../services/scripts/php/lib/mailler/src/Exception.php';
require '../services/scripts/php/lib/mailler/src/SMTP.php';

require '../services/scripts/php/lib/mailler/SendMailLib.php';
require '../services/scripts/php/core_transaction.php';
include '../services/scripts/php/lib.php';


// Permettre l'accès depuis n'importe quelle origine (CORS)
header("Access-Control-Allow-Origin: *");

// Autoriser les méthodes HTTP spécifiées
header("Access-Control-Allow-Methods: POST");

// Autoriser certains en-têtes HTTP
header("Access-Control-Allow-Headers: Content-Type");

$arrayJson = array();
$OJson = array();
$search_value = "";
$LG_TYLID = "%";
$STR_LSTOTHERVALUE = "%";
$LG_AGEID = "";
$order = "";
$BOOL_BANEVENT = Parameters::$PROCESS_FAILED;
$STR_BANSTATUT = Parameters::$statut_delete;
$STR_UTIPIC = "";

$total = 0;
$start = 0;
$length = 25;

$ConfigurationManager = new ConfigurationManager();
$OneSignal = new OneSignal();

$mode = $_REQUEST['mode'];

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

if (isset($_REQUEST['LG_UTIID'])) {
    $LG_UTIID = $_REQUEST['LG_UTIID'];
}

if (isset($_REQUEST['LG_PROID'])) {
    $LG_PROID = $_REQUEST['LG_PROID'];
}

if (isset($_REQUEST['STR_UTITOKEN'])) {
    $STR_UTITOKEN = $_REQUEST['STR_UTITOKEN'];
}

if (isset($_REQUEST['LG_TYLID'])) {
    $LG_TYLID = $_REQUEST['LG_TYLID'];
}

if (isset($_REQUEST['STR_LSTOTHERVALUE'])) {
    $STR_LSTOTHERVALUE = $_REQUEST['STR_LSTOTHERVALUE'];
}

if (isset($_REQUEST['order'])) {
    $order = $_REQUEST['order'];
}

if (isset($_REQUEST['DT_BEGIN']) && $_REQUEST['DT_BEGIN'] != "") {
    $DT_BEGIN = $_REQUEST['DT_BEGIN'];
}

if (isset($_REQUEST['DT_END']) && $_REQUEST['DT_END'] != "") {
    $DT_END = $_REQUEST['DT_END'];
}

// Vérification des variables critiques
if (!$STR_UTITOKEN) {
    die(json_encode(["error" => "STR_UTITOKEN est manquant"]));
}

$OUtilisateur = $ConfigurationManager->getUtilisateur($STR_UTITOKEN);

if ($mode == "listTypetransaction") {
    $listTypetransaction = $ConfigurationManager->showAllOrOneTypetransaction($search_value);

    foreach ($listTypetransaction as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["TTRID"] = $value['LG_TTRID'];
        $arrayJson_chidren["TTRDESCRIPTION"] = $value['STR_TTRDESCRIPTION'];
        $arrayJson[] = $arrayJson_chidren;
    }
} else if ($mode == "listProfile") {
    $STR_PROTYPE = Parameters::$type_customer;
    if (isset($_REQUEST['STR_PROTYPE']) && $_REQUEST['STR_PROTYPE'] != "") {
        $STR_PROTYPE = $_REQUEST['STR_PROTYPE'];
    }
    $listProfile = $ConfigurationManager->showAllOrOneProfile($search_value, ($STR_PROTYPE == Parameters::$type_system ? "%" : $STR_PROTYPE));

    foreach ($listProfile as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["LG_PROID"] = $value['lg_proid'];
        $arrayJson_chidren["STR_PRONAME"] = $value['str_proname'];
        $arrayJson_chidren["STR_PRODESCRIPTION"] = $value['str_prodescription'];
        $arrayJson_chidren["STR_PROTYPE"] = ($value['str_protype'] == Parameters::$type_system ? "Système" : "Standard");
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
} else if ($mode == "listPrivilege") {
    $STR_PROTYPE = Parameters::$type_system;
    if (isset($_REQUEST['STR_PROTYPE']) && $_REQUEST['STR_PROTYPE'] != "") {
        $STR_PROTYPE = $_REQUEST['STR_PROTYPE'];
    }

    $listPrivilege = $ConfigurationManager->showAllOrOnePrivilege($search_value, ($STR_PROTYPE == Parameters::$type_system ? "%" : $STR_PROTYPE));

    foreach ($listPrivilege as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["LG_PRIID"] = $value['lg_priid'];
        $arrayJson_chidren["STR_PRINAME"] = $value['str_priname'];
        $arrayJson_chidren["STR_PRIDESCRIPTION"] = $value['str_pridescription'];
        $arrayJson_chidren["STR_PRITYPE"] = ($value['str_pritype'] == Parameters::$type_system ? "Système" : "Standard");
        $arrayJson_chidren["INT_PRIPRIORITY"] = $value['int_pripriority'];
        $arrayJson_chidren["checked"] = $ConfigurationManager->getProfilePrivilege($LG_PROID, $value['lg_priid']) != null ? true : false;
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
} else if ($mode == "listOperateur") {
    $listOperateur = $ConfigurationManager->showAllOrOneOperateur($search_value);

    foreach ($listOperateur as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["OPEID"] = $value['LG_OPEID'];
        $arrayJson_chidren["OPENAME"] = $value['STR_OPENAME'];
        $arrayJson_chidren["OPEDESCRIPTION"] = $value['STR_OPEDESCRIPTION'];
        $arrayJson_chidren["OPEPIC"] = Parameters::$rootFolderRelative . "logos/" . $value['STR_OPEPIC'];
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
} else if ($mode == "listSociete") {
    $listSociete = $ConfigurationManager->showAllOrOneSocieteLimit($search_value, $start, $length);
    $total = $ConfigurationManager->totalSociete($search_value);
    foreach ($listSociete as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["SOCID"] = $value['LG_SOCID'];
        $arrayJson_chidren["SOCNAME"] = $value['STR_SOCNAME'];
        $arrayJson_chidren["SOCDESCRIPTION"] = $value['STR_SOCDESCRIPTION'];
        $arrayJson_chidren["SOCLOGO"] = Parameters::$rootFolderRelative . "logos/" . $value['STR_SOCLOGO'];
        $arrayJson_chidren["SOCCREATED"] = $value['DT_SOCCREATED'];
        $arrayJson_chidren["SOCADDRESS"] = $value['STR_SOCADDRESS'];
        $arrayJson_chidren["SOCMAIL"] = $value['STR_SOCMAIL'];
        $arrayJson_chidren["SOCPHONE"] = $value['STR_SOCPHONE'];
        $arrayJson_chidren["SOCNOTIFICATION"] = ($value['BOOL_SOCNOTIFICATION'] == Parameters::$PROCESS_FAILED ? false : true);
        $arrayJson_chidren["SOCLASTABONNEMENT"] = ($value['DT_SOCLASTABONNEMENT'] != null ? DateToString($value['DT_SOCLASTABONNEMENT'], 'd/m/Y') : "");
        $arrayJson_chidren["str_ACTION"] = "<span class='text-warning' title='Mise à jour de la société " . $value['STR_SOCDESCRIPTION'] . "'></span>";
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
    $arrayJson["recordsTotal"] = $total;
    $arrayJson["recordsFiltered"] = $total;
} else if ($mode == "listAgence") {
    $listAgence = $ConfigurationManager->showAllOrOneAgenceLimit($search_value, $start, $length);
    $total = $ConfigurationManager->totalAgence($search_value);
    foreach ($listAgence as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["LG_AGEID"] = $value['lg_ageid'];
        $arrayJson_chidren["STR_AGENAME"] = $value['str_agename'];
        $arrayJson_chidren["STR_AGEDESCRIPTION"] = $value['str_agedescription'];
        $arrayJson_chidren["STR_AGEPHONE"] = $value['str_agephone'];
        $arrayJson_chidren["str_ACTION"] = "<span class='text-warning' title='Mise à jour de " . $value['str_agename'] . "'></span>";
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
    $arrayJson["recordsTotal"] = $total;
    $arrayJson["recordsFiltered"] = $total;
} else if ($mode == "listAgencequick") {
    $listAgence = $ConfigurationManager->showAllOrOneAgence($search_value);
    foreach ($listAgence as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["LG_AGEID"] = $value['lg_ageid'];
        $arrayJson_chidren["STR_AGENAME"] = $value['str_agename'];
        $arrayJson_chidren["STR_AGEDESCRIPTION"] = $value['str_agedescription'];
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
} else if ($mode == "listSocieteUtilisateur") {
    $LG_SOCID = "%";
    if (isset($_REQUEST['LG_SOCID']) && $_REQUEST['LG_SOCID'] != "") {
        $LG_SOCID = $_REQUEST['LG_SOCID'];
    }

    $listSocieteUtilisateur = $ConfigurationManager->showAllOrOneSocieteUtilisateur($search_value, $LG_SOCID, $LG_UTIID);

    foreach ($listSocieteUtilisateur as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["SUTID"] = $value['LG_SUTID'];
        $arrayJson_chidren["SOCNAME"] = $value['STR_SOCNAME'];
        $arrayJson_chidren["SOCDESCRIPTION"] = $value['STR_SOCDESCRIPTION'];
        $arrayJson_chidren["UTIFIRSTLASTNAME"] = $value['STR_UTIFIRSTLASTNAME'];
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
} else if ($mode == "listSocieteOperateur") {
    $LG_OPEID = "%";
    if (isset($_REQUEST['LG_OPEID']) && $_REQUEST['LG_OPEID'] != "") {
        $LG_OPEID = $_REQUEST['LG_OPEID'];
    }

    if (isset($_REQUEST['LG_SOCID'])) {
        $LG_SOCID = $_REQUEST['LG_SOCID'];
    }

    $listSocieteOperateur = $ConfigurationManager->showAllOrOneSocieteOperateur($search_value, $LG_SOCID, $LG_OPEID);

    foreach ($listSocieteOperateur as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["SOPID"] = $value['LG_SOPID'];
        $arrayJson_chidren["SOPPHONE"] = $value['STR_SOPPHONE'];
        $arrayJson_chidren["OPENAME"] = $value['STR_OPENAME'];
        $arrayJson_chidren["OPEDESCRIPTION"] = $value['STR_OPEDESCRIPTION'];
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
} else if ($mode == "listListe") {
    $listListe = $ConfigurationManager->showAllOrOneListeLimit($search_value, $LG_TYLID, $STR_LSTOTHERVALUE, $order, $start, $length);
    $total = $ConfigurationManager->totalListe($search_value, $LG_TYLID, $STR_LSTOTHERVALUE);
    foreach ($listListe as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["LG_LSTID"] = $value['lg_lstid'];
        $arrayJson_chidren["LG_TYLID"] = $value['str_tyldescription'];
        $arrayJson_chidren["STR_LSTDESCRIPTION"] = $value['str_lstdescription'];
        //$arrayJson_chidren["SOCLOGO"] = Parameters::$rootFolderRelative . "logos/" . $value['STR_SOCLOGO'];
        $arrayJson_chidren["STR_LSTDESCRIPTION_OTHER"] = strlen($value['str_lstdescription']) > 50 ? substr($value['str_lstdescription'], 0, 50) : $value['str_lstdescription'];
        $arrayJson_chidren["STR_LSTVALUE"] = $value['str_lstvalue'];
//        $arrayJson_chidren["STR_LSTVALUE_OTHER"] = $value['STR_LSTVALUE'];
        $arrayJson_chidren["STR_LSTOTHERVALUE"] = $value['str_lstothervalue'];
//        $arrayJson_chidren["STR_LSTOTHERVALUE_OTHER"] = $value['STR_LSTOTHERVALUE'];
        $arrayJson_chidren["STR_LSTOTHERVALUE1"] = $value['str_lstothervalue1'];
        $arrayJson_chidren["STR_LSTOTHERVALUE2"] = $value['str_lstothervalue2'];
        $arrayJson_chidren["STR_LSTOTHERVALUE3"] = $value['str_lstothervalue3'];
//        $arrayJson_chidren["STR_LSTOTHERVALUE2_OTHER"] = $value['STR_LSTOTHERVALUE2'];
        $arrayJson_chidren["str_ACTION"] = "<span class='text-warning' title='Mise à jour de " . $value['str_lstdescription'] . "'></span>";
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
    $arrayJson["recordsTotal"] = $total;
    $arrayJson["recordsFiltered"] = $total;
} else if ($mode == "listBanniere") {
    $LG_EVEID = "%";
    $LG_AGEID = "%";

    if (isset($_REQUEST['LG_EVEID']) && $_REQUEST['LG_EVEID'] != "") {
        $LG_EVEID = $_REQUEST['LG_EVEID'];
    }

    if (isset($_REQUEST['LG_AGEREQUESTID']) && $_REQUEST['LG_AGEREQUESTID'] != "") {
        $LG_AGEID = $_REQUEST['LG_AGEREQUESTID'];
    }

    $listBanniere = $ConfigurationManager->showAllOrOneBanniere($search_value, $LG_AGEID, $LG_EVEID, $DT_BEGIN, $DT_END, $start, $length);
    $total = $ConfigurationManager->totalBanniere($search_value, $LG_AGEID, $LG_EVEID, $DT_BEGIN, $DT_END);
    foreach ($listBanniere as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["LG_BANID"] = $value['lg_banid'];
        $arrayJson_chidren["LG_EVEID"] = $value['lg_eveid'];
        $arrayJson_chidren["LG_AGEID"] = $value['lg_ageid'];
        $arrayJson_chidren["STR_BANNAME"] = $value['str_banname'];
        $arrayJson_chidren["STR_BANDESCRIPTION"] = $value['str_bandescription'];
        $arrayJson_chidren["DT_BANBEGIN"] = DateToString($value['dt_banbegin'], 'd/m/Y');
        $arrayJson_chidren["DT_BANEND"] = DateToString($value['dt_banend'], 'd/m/Y');
        $arrayJson_chidren["STR_BANPATH"] = Parameters::$rootFolderRelative . $value['str_banpath'];
        $arrayJson_chidren["DT_BANCREATED"] = DateToString($value['dt_bancreated'], 'd/m/Y H:i:s');
        $arrayJson_chidren["BOOL_BANEVENT"] = $value['bool_banevent'];
        $arrayJson_chidren["STR_BANSTATUT"] = $value['str_banstatut'];
        $arrayJson_chidren["str_ACTION"] = "<span class='text-warning' title='Modification des informations de la banniere " . $value['str_banname'] . "'></span>";
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
    $arrayJson["recordsTotal"] = $total;
    $arrayJson["recordsFiltered"] = $total;
} else if ($mode == "listUtilisateur") {
    $LG_PROID = "%";
    $LG_AGEID = "%";

    if (isset($_REQUEST['LG_PROID']) && $_REQUEST['LG_PROID'] != "") {
        $LG_PROID = $_REQUEST['LG_PROID'];
    }

    if (isset($_REQUEST['LG_AGEREQUESTID']) && $_REQUEST['LG_AGEREQUESTID'] != "") {
        $LG_AGEID = $_REQUEST['LG_AGEREQUESTID'];
    }

    $listUtilisateur = $ConfigurationManager->showAllOrOneUtilisateur($search_value, $LG_AGEID, $LG_PROID, $start, $length);
    $total = $ConfigurationManager->totalUtilisateur($search_value, $LG_AGEID, $LG_PROID);
    foreach ($listUtilisateur as $value) {
        $arrayJson_chidren = array();
        $arrayJson_chidren["LG_UTIID"] = $value['lg_utiid'];
        $arrayJson_chidren["LG_PROID"] = $value['str_proname'];
        $arrayJson_chidren["LG_AGEID"] = $value['str_agename'];
        $arrayJson_chidren["STR_UTIFIRSTLASTNAME"] = $value['str_utifirstlastname'];
        $arrayJson_chidren["STR_UTIPHONE"] = $value['str_utiphone'];
        $arrayJson_chidren["STR_UTIMAIL"] = $value['str_utimail'];
        $arrayJson_chidren["STR_UTILOGIN"] = $value['str_utilogin'];
        $arrayJson_chidren["STR_UTIPIC"] = Parameters::$rootFolderRelative . $value['str_utipic'];
        $arrayJson_chidren["DT_UTICREATED"] = DateToString($value['dt_uticreated'], 'd/m/Y H:i:s');
        $arrayJson_chidren["STR_UTISTATUT"] = $value['str_utistatut'];
        $arrayJson_chidren["str_ACTION"] = "<span class='text-warning' title='Modification des informations de " . $value['str_utifirstlastname'] . "'></span>";
        $OJson[] = $arrayJson_chidren;
    }
    $arrayJson["data"] = $OJson;
    $arrayJson["recordsTotal"] = $total;
    $arrayJson["recordsFiltered"] = $total;
} else {
    if (isset($_REQUEST['LG_TTRID'])) {
        $LG_TTRID = $_REQUEST['LG_TTRID'];
    }

    if (isset($_REQUEST['LG_OPEID'])) {
        $LG_OPEID = $_REQUEST['LG_OPEID'];
    }

    if (isset($_REQUEST['LG_SOCID'])) {
        $LG_SOCID = $_REQUEST['LG_SOCID'];
    }

    if (isset($_REQUEST['STR_SOCNAME'])) {
        $STR_SOCNAME = $_REQUEST['STR_SOCNAME'];
    }

    if (isset($_REQUEST['STR_SOCDESCRIPTION'])) {
        $STR_SOCDESCRIPTION = $_REQUEST['STR_SOCDESCRIPTION'];
    }

    if (isset($_REQUEST['STR_SOCADDRESS'])) {
        $STR_SOCADDRESS = $_REQUEST['STR_SOCADDRESS'];
    }

    if (isset($_REQUEST['STR_SOCMAIL'])) {
        $STR_SOCMAIL = $_REQUEST['STR_SOCMAIL'];
    }

    if (isset($_REQUEST['STR_SOCPHONE'])) {
        $STR_SOCPHONE = $_REQUEST['STR_SOCPHONE'];
    }

    if (isset($_REQUEST['BOOL_SOCNOTIFICATION'])) {
        $BOOL_SOCNOTIFICATION = $_REQUEST['BOOL_SOCNOTIFICATION'];
    }

    if (isset($_REQUEST['STR_SOPPHONE'])) {
        $STR_SOPPHONE = $_REQUEST['STR_SOPPHONE'];
    }

    if (isset($_REQUEST['LG_SOPID'])) {
        $LG_SOPID = $_REQUEST['LG_SOPID'];
    }

    if (isset($_REQUEST['STR_SOPSTATUT'])) {
        $STR_SOPSTATUT = $_REQUEST['STR_SOPSTATUT'];
    }

    if (isset($_REQUEST['LG_PROID'])) {
        $LG_PROID = $_REQUEST['LG_PROID'];
    }

    if (isset($_REQUEST['LG_SUTID'])) {
        $LG_SUTID = $_REQUEST['LG_SUTID'];
    }

    if (isset($_REQUEST['STR_BANNAME'])) {
        $STR_BANNAME = $_REQUEST['STR_BANNAME'];
    }

    if (isset($_REQUEST['STR_BANDESCRIPTION'])) {
        $STR_BANDESCRIPTION = $_REQUEST['STR_BANDESCRIPTION'];
    }

    /* if (isset($_REQUEST['LG_AGEREQUESTID'])) {
      $LG_AGEID = $_REQUEST['LG_AGEREQUESTID'];
      } */

    if (isset($_FILES['STR_BANPATH'])) {
        $STR_BANPATH = uploadFile(Parameters::$path_import, $_FILES['STR_BANPATH']);
    }

    if (isset($_REQUEST['DT_BANBEGIN'])) {
        $DT_BANBEGIN = $_REQUEST['DT_BANBEGIN'];
    }

    if (isset($_REQUEST['DT_BANEND'])) {
        $DT_BANEND = $_REQUEST['DT_BANEND'];
    }

    if (isset($_REQUEST['LG_EVEID'])) {
        $LG_EVEID = $_REQUEST['LG_EVEID'];
    }

    if (isset($_REQUEST['BOOL_BANEVENT']) && $_REQUEST['BOOL_BANEVENT'] != "") {
        $BOOL_BANEVENT = $_REQUEST['BOOL_BANEVENT'];
    }

    if (isset($_REQUEST['LG_BANID'])) {
        $LG_BANID = $_REQUEST['LG_BANID'];
    }

    if (isset($_REQUEST['STR_BANSTATUT']) && $_REQUEST['STR_BANSTATUT'] != "") {
        $STR_BANSTATUT = $_REQUEST['STR_BANSTATUT'];
    }

    if (isset($_REQUEST['STR_UTIFIRSTLASTNAME'])) {
        $STR_UTIFIRSTLASTNAME = $_REQUEST['STR_UTIFIRSTLASTNAME'];
    }

    if (isset($_REQUEST['STR_UTIPHONE'])) {
        $STR_UTIPHONE = $_REQUEST['STR_UTIPHONE'];
    }

    if (isset($_REQUEST['STR_UTILOGIN'])) {
        $STR_UTILOGIN = $_REQUEST['STR_UTILOGIN'];
    }

    if (isset($_REQUEST['STR_UTIMAIL'])) {
        $STR_UTIMAIL = $_REQUEST['STR_UTIMAIL'];
    }

    if (isset($_REQUEST['LG_AGEREQUESTID']) && $_REQUEST['LG_AGEREQUESTID'] != "") {
        $LG_AGEID = $_REQUEST['LG_AGEREQUESTID'];
    }

    if (isset($_FILES['STR_UTIPIC'])) {
        $STR_UTIPIC = uploadFile(Parameters::$path_import, $_FILES['STR_UTIPIC']);
    }
    
    if (isset($_REQUEST['LG_PRIID'])) {
        $LG_PRIID = $_REQUEST['LG_PRIID'];
    }
    
    if (isset($_REQUEST['STR_PROTYPE'])) {
        $STR_PROTYPE = $_REQUEST['STR_PROTYPE'];
    }
    
    if (isset($_REQUEST['STR_PRONAME'])) {
        $STR_PRONAME = $_REQUEST['STR_PRONAME'];
    }
    
    if (isset($_REQUEST['STR_PRODESCRIPTION'])) {
        $STR_PRODESCRIPTION = $_REQUEST['STR_PRODESCRIPTION'];
    }

    if ($mode == "getTypetransaction") {
        $value = $ConfigurationManager->getTypetransaction($LG_TTRID);
        if ($value != null) {
            $arrayJson["TTRNAME"] = $value[0]['STR_TTRNAME'];
            $arrayJson["TTRDESCRIPTION"] = $value[0]['STR_TTRDESCRIPTION'];
        }
    } else if ($mode == "getOperateur") {
        $value = $ConfigurationManager->getOperateur($LG_OPEID);
        if ($value != null) {
            $arrayJson["OPENAME"] = $value[0]['STR_OPENAME'];
            $arrayJson["OPEDESCRIPTION"] = $value[0]['STR_OPEDESCRIPTION'];
            $arrayJson["OPEPIC"] = Parameters::$rootFolderRelative . "logos/" . $value[0]['STR_OPEPIC'];
        }
    } else if ($mode == "getSociete") {
        $value = $ConfigurationManager->getSociete($LG_SOCID);
        if ($value != null) {
            $arrayJson["SOCNAME"] = $value[0]['STR_SOCNAME'];
            $arrayJson["SOCDESCRIPTION"] = $value[0]['STR_SOCDESCRIPTION'];
            $arrayJson["SOCLOGO"] = Parameters::$rootFolderRelative . "logos/" . $value[0]['STR_SOCLOGO'];
            $arrayJson["SOCCREATED"] = $value[0]['DT_SOCCREATED'];
            $arrayJson["SOCADDRESS"] = $value[0]['STR_SOCADDRESS'];
            $arrayJson["SOCMAIL"] = $value[0]['STR_SOCMAIL'];
            $arrayJson["SOCPHONE"] = $value[0]['STR_SOCPHONE'];
            $arrayJson["SOCNOTIFICATION"] = ($value[0]['BOOL_SOCNOTIFICATION'] == Parameters::$PROCESS_FAILED ? false : true);
            $arrayJson["SOCLASTABONNEMENT"] = ($value[0]['DT_SOCLASTABONNEMENT'] != null ? DateToString($value[0]['DT_SOCLASTABONNEMENT'], 'd/m/Y') : "");
        }
    } else if ($mode == "getProfile") {
        $value = $ConfigurationManager->getProfile($LG_PROID);
        if ($value != null) {
            $arrayJson["PRONAME"] = $value[0]['STR_PRONAME'];
            $arrayJson["PRODESCRIPTION"] = $value[0]['STR_PRODESCRIPTION'];
            $arrayJson["PROTYPE"] = ($value[0]['STR_PROTYPE'] == Parameters::$type_system ? "Système" : "Standard");
        }
    } else if ($mode == "getSocieteOperateur") {
        $value = $ConfigurationManager->getSocieteOperateurUnique($LG_SOPID);
        if ($value != null) {
            $arrayJson["SOPPHONE"] = $value[0]['STR_SOPPHONE'];
        }
    } else if ($mode == "getBanniere") {
        $value = $ConfigurationManager->getBanniere($LG_BANID, true);
        if ($value != null) {
            $arrayJson["LG_BANID"] = $value[0]['lg_banid'];
            $arrayJson["LG_EVEID"] = $value[0]['lg_eveid'];
            $arrayJson["LG_AGEID"] = $value[0]['lg_ageid'];
            $arrayJson["STR_BANNAME"] = $value[0]['str_banname'];
            $arrayJson["STR_BANDESCRIPTION"] = $value[0]['str_bandescription'];
            $arrayJson["DT_BANBEGIN"] = DateToString($value[0]['dt_banbegin'], 'd/m/Y');
            $arrayJson["DT_BANEND"] = DateToString($value[0]['dt_banend'], 'd/m/Y');
            $arrayJson["STR_BANPATH"] = Parameters::$rootFolderRelative . $value[0]['str_banpath'];
            $arrayJson["DT_BANCREATED"] = DateToString($value[0]['dt_bancreated'], 'd/m/Y H:i:s');
            $arrayJson["BOOL_BANEVENT"] = $value[0]['bool_banevent'];
            $arrayJson["STR_BANSTATUT"] = $value[0]['str_banstatut'];
        }
    } else if ($mode == "getUtilisateur") {
        $value = $ConfigurationManager->getUtilisateur($LG_UTIID);
        if ($value != null) {
            $arrayJson["LG_PROID"] = $value[0]['lg_proid'];
            $arrayJson["LG_AGEID"] = $value[0]['lg_ageid'];
            $arrayJson["STR_UTIFIRSTLASTNAME"] = $value[0]['str_utifirstlastname'];
            $arrayJson["STR_UTIPHONE"] = $value[0]['str_utiphone'];
            $arrayJson["STR_UTIMAIL"] = $value[0]['str_utimail'];
            $arrayJson["STR_UTILOGIN"] = $value[0]['str_utilogin'];
            $arrayJson["STR_UTIPIC"] = Parameters::$rootFolderRelative . $value[0]['str_utipic'];
            $arrayJson["DT_UTICREATED"] = DateToString($value[0]['dt_uticreated'], 'd/m/Y H:i:s');
            $arrayJson["STR_UTISTATUT"] = $value[0]['str_utistatut'];
        }
    } else if ($mode == "createSociete") {
        $STR_SOCLOGO = Parameters::uploadFile(Parameters::$rootFolderRelative . "logos/");
        $ConfigurationManager->createSociete($STR_SOCNAME, $STR_SOCDESCRIPTION, $STR_SOCLOGO, $STR_SOCADDRESS, $STR_SOCMAIL, $STR_SOCPHONE, $BOOL_SOCNOTIFICATION, $OUtilisateur);
    } else if ($mode == "updateSociete") {
        $STR_SOCLOGO = Parameters::uploadFile(Parameters::$rootFolderRelative . "logos/");
        $ConfigurationManager->updateSociete($LG_SOCID, $STR_SOCNAME, $STR_SOCDESCRIPTION, $STR_SOCLOGO, $STR_SOCADDRESS, $STR_SOCMAIL, $STR_SOCPHONE, $BOOL_SOCNOTIFICATION, $OUtilisateur);
    } else if ($mode == "deleteSociete") {
        $ConfigurationManager->deleteSociete($LG_SOCID, $OUtilisateur);
    } else if ($mode == "createSocieteOperateur") {
        $ConfigurationManager->createSocieteOperateur($LG_SOCID, $LG_OPEID, $STR_SOPPHONE, $OUtilisateur);
    } else if ($mode == "updateSocieteOperateur") {
        $ConfigurationManager->updateSocieteOperateur($LG_SOPID, $STR_SOPPHONE, $OUtilisateur);
    } else if ($mode == "deleteSocieteOperateur") {
        $ConfigurationManager->deleteSocieteOperateur($LG_SOPID, $STR_SOPSTATUT, $OUtilisateur);
    } else if ($mode == "createSocieteUtilisateur") {
        $ConfigurationManager->createSocieteUtilisateur($LG_SOCID, $LG_UTIID, $OUtilisateur);
    } else if ($mode == "deleteSocieteUtilisateur") {
        $ConfigurationManager->deleteSocieteUtilisateur($LG_SUTID, $OUtilisateur);
    } else if ($mode == "createBanniere") {
        $ConfigurationManager->createBanniere($STR_BANNAME, $STR_BANDESCRIPTION, $LG_AGEID, $STR_BANPATH, $DT_BANBEGIN, $DT_BANEND, $LG_EVEID, $BOOL_BANEVENT, true, $OUtilisateur);
    } else if ($mode == "updateBanniere") {
        $ConfigurationManager->updateBanniere($LG_BANID, $STR_BANNAME, $STR_BANDESCRIPTION, $LG_AGEID, $STR_BANPATH, $DT_BANBEGIN, $DT_BANEND, $LG_EVEID, $BOOL_BANEVENT, true, $OUtilisateur);
    } else if ($mode == "updateBanniereStatut") {
        $ConfigurationManager->deleteBanniere($LG_BANID, $STR_BANSTATUT, $OUtilisateur);
    } else if ($mode == "createUtilisateur") {
        $ConfigurationManager->createUtilisateur($STR_UTIFIRSTLASTNAME, $STR_UTIPHONE, $STR_UTILOGIN, $STR_UTIMAIL, $LG_PROID, $LG_AGEID, $STR_UTIPIC, $OUtilisateur);
    } else if ($mode == "updateUtilisateur") {
        $ConfigurationManager->updateUtilisateur($LG_UTIID, $STR_UTIFIRSTLASTNAME, $STR_UTIPHONE, $STR_UTILOGIN, $STR_UTIMAIL, $LG_PROID, $LG_AGEID, $STR_UTIPIC, $OUtilisateur);
    } else if ($mode == "deleteUtilisateur") {
        $ConfigurationManager->deleteUtilisateur($LG_UTIID, $OUtilisateur);
    } else if ($mode == "createProfile") {
        $ConfigurationManager->createProfile($STR_PRONAME, $STR_PRODESCRIPTION, $STR_PROTYPE, $LG_PRIID, $OUtilisateur);
    } 

    $arrayJson["code_statut"] = Parameters::$Message;
    $arrayJson["desc_statut"] = Parameters::$Detailmessage;
}

echo json_encode($arrayJson);


