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
$search_value = "";
$mode = "";
$STR_PROVIDER = "";
$data = "";

$PaymentManager = new PaymentManager();

if (isset($_REQUEST['mode'])) {
    //$mode = json_decode($_REQUEST['mode'], true);
    $mode = $_REQUEST['mode'];

    if (isset($_REQUEST['provider']) && $_REQUEST['provider'] != "") {
        $STR_PROVIDER = $_REQUEST['provider'];
    }

    if (isset($_REQUEST['data']) && $_REQUEST['data'] != "") {
        $data = $_REQUEST['data'];
    }

    if ($mode == "doPayment") {
        $PaymentManager->doPayment($STR_PROVIDER, $data->amount, $data->order_id, $data->phone, $data->message, $data->currency);
    } else {
        $obj = json_decode(file_get_contents('php://input'));
//        var_dump($obj);
       // echo "notif_token: " . $obj->notif_token . "<br>";
       // echo "status: " . $obj->status . "<br>";
        writeInFile(file_get_contents('php://input'), $mode . ".txt");
    }
}

//$arrayJson["filename"] = $file;

echo json_encode($arrayJson);


