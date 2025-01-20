<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

require_once 'database.php';

// Vérifier si les paramètres nécessaires sont envoyés
if (!isset($_POST['mode']) || $_POST['mode'] !== 'listBanniere') {
    echo json_encode(["error" => "Mode invalide ou absent"]);
    exit;
}

// Vérification des paramètres de date
$dt_begin = isset($_POST['DT_BEGIN']) ? $_POST['DT_BEGIN'] : null;
$dt_end = isset($_POST['DT_END']) ? $_POST['DT_END'] : null;

if (!$dt_begin || !$dt_end) {
    echo json_encode(["error" => "Les paramètres de date sont obligatoires"]);
    exit;
}

try {
    $db = new Database();
    $pdo = $db->pdo;

    // Requête SQL pour récupérer les bannières dans la plage de dates spécifiée
    $query = "SELECT 
                lg_banid AS LG_BANID,
                lg_eveid AS LG_EVEID,
                lg_ageid AS LG_AGEID,
                str_banname AS STR_BANNAME,
                str_bandescription AS STR_BANDESCRIPTION,
                DATE_FORMAT(dt_banbegin, '%d/%m/%Y') AS DT_BANBEGIN,
                DATE_FORMAT(dt_banend, '%d/%m/%Y') AS DT_BANEND,
                str_banpath AS STR_BANPATH,
                DATE_FORMAT(dt_bancreated, '%d/%m/%Y %H:%i:%s') AS DT_BANCREATED,
                bool_banevent AS BOOL_BANEVENT,
                str_banstatut AS STR_BANSTATUT
            FROM banniere 
            WHERE dt_banbegin BETWEEN :dt_begin AND :dt_end
            ORDER BY dt_bancreated DESC";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':dt_begin', $dt_begin);
    $stmt->bindParam(':dt_end', $dt_end);
    $stmt->execute();
    $banners = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Ajouter l'action HTML pour chaque bannière
    foreach ($banners as &$banner) {
        $banner["str_ACTION"] = "<span class='text-warning' title='Modification des informations de la banniere {$banner['STR_BANNAME']}'></span>";
    }

    // Réponse JSON
    echo json_encode([
        "data" => $banners,
        "recordsTotal" => count($banners),
        "recordsFiltered" => count($banners)
    ]);
} catch (PDOException $e) {
    echo json_encode(["error" => "Erreur SQL : " . $e->getMessage()]);
}

?>
