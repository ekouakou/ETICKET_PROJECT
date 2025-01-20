<?php

interface TicketInterface {

    public function createEvenement($LG_LSTID, $STR_EVENAME, $STR_EVEDESCRIPTION, $LG_LSTPLACEID, $DT_EVEBEGIN, $DT_EVEEND, $HR_EVEBEGIN, $HR_EVEEND, $STR_EVEPIC, $STR_EVEBANNER, $STR_EVEANNONCEUR, $LG_AGEID, $STR_EVEDISPLAYROOM, $STR_EVESTATUTFREE, $LG_LSTCATEGORIEPLACEID, $STR_EVEANNONCEURPIC, $STR_ANNONCEUR, $OUtilisateur);

    public function updateEvenement($LG_EVEID, $LG_LSTID, $STR_EVENAME, $STR_EVEDESCRIPTION, $LG_LSTPLACEID, $DT_EVEBEGIN, $DT_EVEEND, $HR_EVEBEGIN, $HR_EVEEND, $STR_EVEPIC, $STR_EVEBANNER, $STR_EVEANNONCEUR, $LG_AGEID, $STR_EVEDISPLAYROOM, $STR_EVESTATUTFREE, $LG_LSTCATEGORIEPLACEID, $STR_EVEANNONCEURPIC, $STR_ANNONCEUR, $OUtilisateur);

    public function getEvenement($LG_EVEID);

    public function deleteEvenement($LG_EVEID, $STR_EVESTATUT, $OUtilisateur);

    public function showAllOrOneEvenement($search_value, $LG_AGEID, $LG_LSTID, $DT_BEGIN, $DT_END, $start, $limit, $statistique = false);

    public function showAllOrOneEvenementFront($search_value, $LG_AGEID, $LG_LSTID, $DT_BEGIN, $DT_END, $start, $limit);

    public function showAllOrOneEvenementNews($search_value);

    public function totalEvenement($search_value, $LG_AGEID, $LG_LSTID, $DT_BEGIN, $DT_END, $statistique = false);

//    public function createTicketGlobal($LG_EVEID, $STR_TICPHONE, $STR_TICMAIL, $LG_LSTCATEGORIEPLACEID, $STR_CURRENCY, $STR_PROVIDER);

    public function createTicketGlobal($LG_EVEGLOBALID, $STR_TICPHONE, $STR_TICMAIL, $STR_CURRENCY, $STR_PROVIDER, $STR_CLIFIRSTLASTNAME = null);

    public function createTicket($LG_EVEID, $LG_LSTID, $STR_TICPHONE, $STR_TICMAIL, $DBL_TICAMOUNT, $STR_CURRENCY, $STR_PROVIDER, $LG_CLIID, $STR_TICUUID = null);

    public function updateTicketGlobal($STR_TICUUID);

    public function updateTicket($STR_TICUUID, $STR_TICSTATUT);

    public function getTicket($LG_TICID);

    public function getTicketWithName($LG_TICID, $STR_TICNAME);

    public function verifyTicket($LG_TICID, $STR_TICNAME, $OUtilisateur);

    public function showAllOrOneTicket($search_value, $LG_EVEID, $LG_LSTID, $LG_AGEID, $LG_CLIID, $LG_UTIID, $STR_TICSTATUT, $DT_BEGIN, $DT_END, $start, $limit);

    public function showAllOrOneTicketByPayment($search_value, $STR_TICUUID, $STR_TICSTATUT);

    public function totalTicket($search_value, $LG_EVEID, $LG_LSTID, $LG_AGEID, $LG_CLIID, $LG_UTIID, $STR_TICSTATUT, $DT_BEGIN, $DT_END);

    public function createCategorieplaceEvenement($LG_EVEID, $LG_LSTID, $INT_ELINUMBER, $INT_ELINUMBERMAX, $DBL_ELIAMOUNT, $OUtilisateur);

    public function getCategorieplaceEvenement($LG_EVEID, $LG_LSTID);

    public function deleteCategorieplaceEvenement($LG_EVEID, $OUtilisateur);

    public function deleteGlobalCategorieplaceEvenement($LG_EVEID, $OUtilisateur);

    public function showAllOrOneCategorieplaceEvenement($search_value, $LG_EVEID);

    public function totalVenteTicket($search_value, $LG_EVEID, $LG_LSTID, $LG_AGEID, $LG_CLIID, $LG_UTIID, $STR_TICSTATUT, $DT_BEGIN, $DT_END);

    public function totalTicketByEvenement($LG_EVEID, $LG_LSTID);
}

class TicketManager implements TicketInterface {

    private $Ticket = 'ticket';
    private $Evenement = 'evenement';
    private $Liste = 'liste';
    private $Eveliste = 'eveliste';
    private $Banniere = 'banniere';
    private $OTicket = array();
    private $OEvenement = array();
    private $OListe = array();
    private $OEveliste = array();
    private $OClient = array();
    private $dbconnnexion;

    //constructeur de la classe 
    public function __construct() {
//        echo Parameters::$host . "===" . Parameters::$user . "====" . Parameters::$pass . "+++++" . Parameters::$db . "-----" . Parameters::$port;
        $this->dbconnnexion = DoConnexionPDO(Parameters::$host, Parameters::$user, Parameters::$pass, Parameters::$db, Parameters::$port);
    }

    //gestion des evenements
    public function createEvenement($LG_LSTID, $STR_EVENAME, $STR_EVEDESCRIPTION, $LG_LSTPLACEID, $DT_EVEBEGIN, $DT_EVEEND, $HR_EVEBEGIN, $HR_EVEEND, $STR_EVEPIC, $STR_EVEBANNER, $STR_EVEANNONCEUR, $LG_AGEID, $STR_EVEDISPLAYROOM, $STR_EVESTATUTFREE, $LG_LSTCATEGORIEPLACEID, $STR_EVEANNONCEURPIC, $STR_ANNONCEUR, $OUtilisateur) {
        $validation = "";
        $LG_EVEID = generateRandomString(40);
        $ConfigurationManager = new ConfigurationManager();
        try {
            $this->OListe = $ConfigurationManager->getListe($LG_LSTID);
            if ($this->OListe == null) {
                Parameters::buildErrorMessage("Echec d'enregistrement de l'evenement. Categorie inexistante");
                return $validation;
            }

            $this->OEvenement = $this->getEvenement($STR_EVENAME);
            if ($this->OEvenement != null) {
                Parameters::buildErrorMessage("Echec d'enregistrement de l'evenement. Cet évènement existe déjà");
                return $validation;
            }

            $params = array("lg_eveid" => $LG_EVEID, "lg_lstid" => $this->OListe[0][0], "str_evename" => $STR_EVENAME, "str_evedescription" => $STR_EVEDESCRIPTION, "lg_lstplaceid" => $LG_LSTPLACEID, "dt_evebegin" => $DT_EVEBEGIN, "dt_eveend" => $DT_EVEEND, "hr_evebegin" => $HR_EVEBEGIN,
                "hr_eveend" => $HR_EVEEND, "str_evepic" => $STR_EVEPIC, "str_evebanner" => $STR_EVEBANNER,
                "str_eveannonceur" => $STR_EVEANNONCEUR, "lg_ageid" => $LG_AGEID, "str_evedisplayroom" => $STR_EVEDISPLAYROOM, "str_evestatutfree" => $STR_EVESTATUTFREE,
                "lg_uticreatedid" => $OUtilisateur[0][0], "str_evestatut" => Parameters::$statut_process, "dt_evecreated" => get_now(), "int_evenumberread" => 0, "str_eveannonceurpic" => $STR_EVEANNONCEURPIC, "str_annonceur" => $STR_ANNONCEUR);
//            var_dump($params);
            if ($this->dbconnnexion != null) {
                if (Persist($this->Evenement, $params, $this->dbconnnexion)) {
                    foreach ($LG_LSTCATEGORIEPLACEID as $obj) {
                        $this->createCategorieplaceEvenement($LG_EVEID, $obj->LG_LSTID, $obj->INT_ELINUMBER, $obj->INT_ELINUMBERMAX, $obj->DBL_ELIAMOUNT, $OUtilisateur);
                    }
                    $validation = $LG_EVEID;
//                    echo "**********" . $validation . "+++++++++++";
                    Parameters::buildSuccessMessage("Evenement " . $STR_EVENAME . " enregistre avec succès.");
                } else {
                    Parameters::buildErrorMessage("Echec d'enregistrement de l'evenement");
                }
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec d'enregistrement de l'evenement. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function updateEvenement($LG_EVEID, $LG_LSTID, $STR_EVENAME, $STR_EVEDESCRIPTION, $LG_LSTPLACEID, $DT_EVEBEGIN, $DT_EVEEND, $HR_EVEBEGIN, $HR_EVEEND, $STR_EVEPIC, $STR_EVEBANNER, $STR_EVEANNONCEUR, $LG_AGEID, $STR_EVEDISPLAYROOM, $STR_EVESTATUTFREE, $LG_LSTCATEGORIEPLACEID, $STR_EVEANNONCEURPIC, $STR_ANNONCEUR, $OUtilisateur) {
        $validation = false;
        $ConfigurationManager = new ConfigurationManager();
        try {
            $this->OEvenement = $this->getEvenement($LG_EVEID);

            if ($this->OEvenement == null) {
                Parameters::buildErrorMessage("Echec de mise à jour. Evenement inexistant");
                return $validation;
            }

            $this->OListe = $ConfigurationManager->getListe($LG_LSTID);
            if ($this->OListe == null) {
                Parameters::buildErrorMessage("Echec d'enregistrement de l'evenement. Categorie inexistante");
                return $validation;
            }

            $params_condition = array("lg_eveid" => $this->OEvenement[0][0]);
            $params_to_update = array("lg_lstid" => $this->OListe[0][0], "str_evename" => $STR_EVENAME, "str_evedescription" => $STR_EVEDESCRIPTION, "lg_lstplaceid" => $LG_LSTPLACEID, "dt_evebegin" => $DT_EVEBEGIN, "dt_eveend" => $DT_EVEEND, "hr_evebegin" => $HR_EVEBEGIN,
                "hr_eveend" => $HR_EVEEND, "str_evepic" => $STR_EVEPIC, "str_evebanner" => $STR_EVEBANNER,
                "str_eveannonceur" => $STR_EVEANNONCEUR, "lg_ageid" => $LG_AGEID, "str_evedisplayroom" => $STR_EVEDISPLAYROOM, "str_evestatutfree" => $STR_EVESTATUTFREE, "str_eveannonceurpic" => $STR_EVEANNONCEURPIC, "str_annonceur" => $STR_ANNONCEUR,
                "lg_utiupdatedid" => $OUtilisateur[0][0], "dt_eveupdated" => get_now());

            if ($this->dbconnnexion != null) {
                if (Merge($this->Evenement, $params_to_update, $params_condition, $this->dbconnnexion)) {
                    $this->deleteGlobalCategorieplaceEvenement($this->OEvenement[0][0], $OUtilisateur);
                    foreach ($LG_LSTCATEGORIEPLACEID as $obj) {
                        $this->createCategorieplaceEvenement($this->OEvenement[0][0], $obj->LG_LSTID, $obj->INT_ELINUMBER, $obj->INT_ELINUMBERMAX, $obj->DBL_ELIAMOUNT, $OUtilisateur);
                    }
                    $validation = true;
                    Parameters::buildSuccessMessage("Evenement " . $STR_EVENAME . " mise a jour avec succès.");
                } else {
                    Parameters::buildErrorMessage("Echec de mise a jour de l'evenement");
                }
            }
        } catch (Exception $exc) {
            //echo $exc->getTraceAsString();
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de mise a jour de l'evenement. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function getEvenement($LG_EVEID) {
        $validation = null;
        Parameters::buildErrorMessage("Evenement inexistant");
        try {
            $params_condition = array("LG_EVEID" => $LG_EVEID, "STR_EVENAME" => $LG_EVEID);
            $validation = $this->OEvenement = Find($this->Evenement, $params_condition, $this->dbconnnexion, "OR");

            if ($this->OEvenement == null) {
                return $validation;
            }
            Parameters::buildSuccessMessage("Evenement " . $this->OEvenement[0][2] . " trouvé");
            $validation = $this->OEvenement;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function deleteEvenement($LG_EVEID, $STR_EVESTATUT, $OUtilisateur) {
        $validation = false;
        try {
            $this->OEvenement = $this->getEvenement($LG_EVEID);

            if ($this->OEvenement == null) {
                Parameters::buildErrorMessage("Echec de l'operation. Evenement inexistant");
                return $validation;
            }

            $params_condition = array("lg_eveid" => $this->OEvenement[0][0]);
            $params_to_update = array("lg_utiupdatedid" => $OUtilisateur[0][0], "str_evestatut" => $STR_EVESTATUT, "dt_eveupdated" => get_now());

            if ($this->dbconnnexion != null) {
                if (Merge($this->Evenement, $params_to_update, $params_condition, $this->dbconnnexion)) {
                    $validation = true;
                    Parameters::buildSuccessMessage("Operation effectuee avec succès.");
                } else {
                    Parameters::buildErrorMessage("Echec de l'opération. Veuillez réessayer svp");
                }
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de l'opération. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function showAllOrOneEvenement($search_value, $LG_AGEID, $LG_LSTID, $DT_BEGIN, $DT_END, $start, $limit, $statistique = false) {
        $arraySql = array();
        try {
            $query = "SELECT t.*, p.str_lstdescription lg_lstplaceid, (select b.lg_banid from " . $this->Banniere . " b WHERE b.lg_eveid = t.lg_eveid) str_evetobanner FROM " . $this->Evenement . " t, (select * from " . $this->Liste . " li where li.lg_tylid = :LG_TYLID) p WHERE p.lg_lstid = t.lg_lstplaceid AND (t.str_evename like :search_value or t.str_evedescription like :search_value or t.str_eveannonceur like :search_value) and t.lg_lstid like :LG_LSTID and t.str_evestatut != :STR_STATUT and (" . ($statistique ? "t.dt_evebegin" : "t.dt_evecreated") . " BETWEEN :DT_BEGIN AND :DT_END) AND t.lg_ageid LIKE :LG_AGEID ORDER BY " . ($statistique ? "CONCAT(t.dt_evebegin, ' ', hr_evebegin)" : "t.dt_evecreated DESC") . " LIMIT " . $start . "," . $limit;
            $res = $this->dbconnnexion->prepare($query);
//            echo $query;
            //exécution de la requête
            $res->execute(array('search_value' => "%" . $search_value . "%", "LG_LSTID" => $LG_LSTID, "DT_BEGIN" => $DT_BEGIN, "DT_END" => $DT_END, 'STR_STATUT' => Parameters::$statut_delete, 'LG_TYLID' => Parameters::$typelisteKey[2], "LG_AGEID" => $LG_AGEID));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    public function showAllOrOneEvenementNews($search_value) {
        $arraySql = array();
        try {
            $query = "select * from (SELECT * from v_topsell ts UNION (SELECT * FROM v_eventcoming ec) UNION (SELECT * FROM v_eventview ev)) t where (t.str_evename like :search_value or t.str_evedescription like :search_value)";
            $res = $this->dbconnnexion->prepare($query);
            //echo $query;
            //exécution de la requête
            $res->execute(array('search_value' => "%" . $search_value . "%"));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    public function showAllOrOneEvenementFront($search_value, $LG_AGEID, $LG_LSTID, $DT_BEGIN, $DT_END, $start, $limit) {
        $arraySql = array();
        try {
            //echo $search_value . "===" . $LG_LSTID . "+++" . $DT_BEGIN . "---" . $DT_END . "===" . $start . "***" . $limit;
            $query = "SELECT t.*, l.lg_lstid, l.str_lstdescription, p.str_lstdescription lg_lstplaceid FROM " . $this->Evenement . " t, " . $this->Liste . " l, (select * from " . $this->Liste . " li where li.lg_tylid = :LG_TYLID) p WHERE t.lg_lstid = l.lg_lstid and p.lg_lstid = t.lg_lstplaceid and (t.str_evename like :search_value or t.str_evedescription like :search_value or t.str_eveannonceur like :search_value) and l.str_lstothervalue like :LG_LSTID and t.str_evestatut = :STR_STATUT and (t.dt_evebegin BETWEEN :DT_BEGIN AND :DT_END) AND t.lg_ageid LIKE :LG_AGEID LIMIT " . $start . "," . $limit;
            $res = $this->dbconnnexion->prepare($query);
            //echo $query;
            //exécution de la requête
            $res->execute(array('search_value' => "%" . $search_value . "%", "LG_LSTID" => $LG_LSTID, "DT_BEGIN" => $DT_BEGIN, "DT_END" => $DT_END, 'STR_STATUT' => Parameters::$statut_enable, 'LG_TYLID' => Parameters::$typelisteKey[2], "LG_AGEID" => $LG_AGEID));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    public function totalEvenement($search_value, $LG_AGEID, $LG_LSTID, $DT_BEGIN, $DT_END, $statistique = null) {
        $result = 0;
        try {
            $query = "SELECT COUNT(t.lg_eveid) NOMBRE FROM " . $this->Evenement . " t WHERE (t.str_evename like :search_value or t.str_evedescription like :search_value or t.str_eveannonceur like :search_value) and t.lg_lstid like :LG_LSTID and t.str_evestatut != :STR_STATUT and (" . ($statistique ? "t.dt_evebegin" : "t.dt_evecreated") . " BETWEEN :DT_BEGIN AND :DT_END) AND t.lg_ageid LIKE :LG_AGEID";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => "%" . $search_value . "%", "LG_LSTID" => $LG_LSTID, "DT_BEGIN" => $DT_BEGIN, "DT_END" => $DT_END, 'STR_STATUT' => Parameters::$statut_delete, "LG_AGEID" => $LG_AGEID));
            while ($rowObj = $res->fetch()) {
                $result = $rowObj["NOMBRE"];
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $result;
    }

    /* public function createTicketGlobal($LG_EVEID, $STR_TICPHONE, $STR_TICMAIL, $LG_LSTCATEGORIEPLACEID, $STR_CURRENCY, $STR_PROVIDER) { //derniere bonne version
      $validation = array();
      $data = array();
      $LG_CTRID = generateRandomString(20);
      $DBL_CTRAMOUNT = 0;
      $INT_NUMBER = 0;
      $LG_CLIID = "";
      $STR_CTRREF = generate_uuid();
      $PaymentManager = new PaymentManager();
      $CashManager = new CashManager();
      $ConfigurationManager = new ConfigurationManager();
      try {
      $this->OEvenement = $this->getEvenement($LG_EVEID);
      if ($this->OEvenement == null) {
      Parameters::buildErrorMessage("Echec de l'operation. Evenement inexistant");
      return $validation;
      }

      $this->OClient = $ConfigurationManager->getClient($STR_TICPHONE);
      if ($this->OClient == null) {
      $LG_CLIID = $ConfigurationManager->createClient($STR_TICPHONE, $STR_TICPHONE, $STR_TICPHONE, $STR_TICMAIL);
      } else {
      $LG_CLIID = $this->OClient[0][0];
      }

      foreach ($LG_LSTCATEGORIEPLACEID as $obj) {
      $this->OEveliste = $this->getCategorieplaceEvenement($LG_EVEID, $obj->LG_LSTID);
      for ($index = 0; $index < $obj->INT_ELINUMBER; $index++) {
      if ($this->OEveliste != null) {
      if ($this->createTicket($LG_EVEID, $this->OEveliste[0][2], $STR_TICPHONE, $STR_TICMAIL, $this->OEveliste[0][5], $STR_CURRENCY, $STR_PROVIDER, $LG_CLIID, $STR_CTRREF)) {
      $INT_NUMBER++;
      }
      }
      }
      $DBL_CTRAMOUNT = $DBL_CTRAMOUNT + ($this->OEveliste[0][2] * $INT_NUMBER);
      $INT_NUMBER = 0;
      }

      $data = array("externalId" => $LG_CTRID, "orderId" => $STR_CTRREF, "DBL_AMOUNT" => $DBL_CTRAMOUNT, "STR_MESSAGE" => "Achat de ticket pour le compte de " . $STR_TICPHONE, "STR_PHONE" => $STR_TICPHONE);
      //            var_dump($data);
      //            $DBL_CTRAMOUNT = 10;
      if ($CashManager->createCashtransaction($LG_CTRID, $STR_CTRREF, $DBL_CTRAMOUNT, $DBL_CTRAMOUNT, 0, Parameters::$credit, $STR_TICPHONE, $this->OEvenement[0][4], " ", null)) {
      //                $validation = $PaymentManager->doPayment($STR_PROVIDER, $DBL_CTRAMOUNT, $LG_CTRID, $STR_TICPHONE, "Achat de ticket(s) pour le compte de " . $STR_TICPHONE, $STR_CURRENCY); // a decommenter en cas de probleme
      $validation = $PaymentManager->doPayment($STR_PROVIDER, $data, $STR_CURRENCY);
      if ($validation != null && $validation->message == "OK") {
      $CashManager->updCashtransaction($LG_CTRID, $validation->notif_token, Parameters::$statut_waiting);
      Parameters::buildSuccessMessage("Lien de paiement généré avec succès.");
      }
      }

      //            $validation = true;
      } catch (Exception $exc) {
      $exc->getTraceAsString();
      Parameters::buildErrorMessage("Echec de paiement. Veuillez reessayer ulterieurement");
      }
      return $validation;
      } */

    public function createTicketGlobal($LG_EVEGLOBALID, $STR_TICPHONE, $STR_TICMAIL, $STR_CURRENCY, $STR_PROVIDER, $STR_CLIFIRSTLASTNAME = null) {
        $validation = array();
        $data = array();
        $LG_CTRID = generateRandomString(20);
        $DBL_CTRAMOUNT = 0;
        $INT_NUMBER = 0;
        $LG_CLIID = "";
        $STR_CTRREF = generate_uuid();
        $PaymentManager = new PaymentManager();
        $CashManager = new CashManager();
        $ConfigurationManager = new ConfigurationManager();
        try {
            //code ajouté
            $STR_TICPHONE = str_replace(" ","", str_replace("+", "", $STR_TICPHONE));
            $STR_TICPHONE = strlen($STR_TICPHONE) == 9 ? Parameters::$default_indicatif . $STR_TICPHONE : $STR_TICPHONE;
            //fin code ajouté
            
            $this->OClient = $ConfigurationManager->getClient($STR_TICPHONE);
            if ($this->OClient == null) {
                $LG_CLIID = $ConfigurationManager->createClient(($STR_CLIFIRSTLASTNAME == null ? $STR_TICPHONE : $STR_CLIFIRSTLASTNAME), $STR_TICPHONE, $STR_TICPHONE, $STR_TICMAIL);
            } else {
                $LG_CLIID = $this->OClient[0][0];
            }

            //var_dump($LG_EVEGLOBALID);
            foreach ($LG_EVEGLOBALID as $obj) {
                $this->OEvenement = $this->getEvenement($obj->LG_EVEID);
//                echo "====" . $this->OEvenement[0][0] . "-----" . $obj->LG_LSTID . "+++++";
                if ($this->OEvenement != null) {
                    $this->OEveliste = $this->getCategorieplaceEvenement($this->OEvenement[0][0], $obj->LG_LSTID);
                    for ($index = 0; $index < $obj->INT_ELINUMBER; $index++) {
                        if ($this->OEveliste != null) {
                            if ($this->createTicket($this->OEvenement[0][0], $this->OEveliste[0][2], $STR_TICPHONE, $STR_TICMAIL, $this->OEveliste[0][5], $STR_CURRENCY, $STR_PROVIDER, $LG_CLIID, $STR_CTRREF)) {
                                $INT_NUMBER++;
                            }
                        }
                    }
                    $DBL_CTRAMOUNT = $DBL_CTRAMOUNT + ($this->OEveliste[0][5] * $INT_NUMBER);
                    $INT_NUMBER = 0;
                }
            }

//            echo $DBL_CTRAMOUNT;

            $data = array("externalId" => $LG_CTRID, "orderId" => $STR_CTRREF, "DBL_AMOUNT" => $DBL_CTRAMOUNT, "STR_MESSAGE" => "Achat de ticket pour le compte de " . $STR_TICPHONE, "STR_PHONE" => $STR_TICPHONE);

            if ($DBL_CTRAMOUNT > 0) {
                if ($CashManager->createCashtransaction($LG_CTRID, $STR_CTRREF, $DBL_CTRAMOUNT, $DBL_CTRAMOUNT, 0, Parameters::$credit, $STR_TICPHONE, Parameters::$default_agence, " ", null)) {
//                $validation = $PaymentManager->doPayment($STR_PROVIDER, $DBL_CTRAMOUNT, $LG_CTRID, $STR_TICPHONE, "Achat de ticket(s) pour le compte de " . $STR_TICPHONE, $STR_CURRENCY); // a decommenter en cas de probleme
                    $validation = $PaymentManager->doPayment($STR_PROVIDER, $data, $STR_CURRENCY);
                    if ($validation != null && $validation->message == "OK") {
                        $CashManager->updCashtransaction($LG_CTRID, $validation->pay_token, Parameters::$statut_waiting);
                        Parameters::buildSuccessMessage("Lien de paiement généré avec succès.");
                    }
                }
            } else {
                Parameters::buildSuccessMessage("Ticket(s) gratuit(s) acheté(s) avec succès.");
            }

//            $validation = true;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de paiement. Veuillez reessayer ulterieurement");
        }
        return $validation;
    }

    public function createTicket($LG_EVEID, $LG_LSTID, $STR_TICPHONE, $STR_TICMAIL, $DBL_TICAMOUNT, $STR_CURRENCY, $STR_PROVIDER, $LG_CLIID, $STR_TICUUID = null) {
        $validation = false;
        $LG_TICID = generateRandomString(20);
        $STR_TICNAME = generateRandomString(5);
        $STR_TICBARECODE = "";
        $ConfigurationManager = new ConfigurationManager();
        //$PaymentManager = new PaymentManager();
        try {
            $this->OEvenement = $this->getEvenement($LG_EVEID);
            if ($this->OEvenement == null) {
                Parameters::buildErrorMessage("Echec de l'operation. Evenement inexistant");
                return $validation;
            }

            $this->OListe = $ConfigurationManager->getListe($LG_LSTID);
            if ($this->OListe == null) {
                Parameters::buildErrorMessage("Echec de l'operation. Categorie de siege inexistante");
                return $validation;
            }

            $text = ($STR_TICUUID == null ? generate_uuid() : $STR_TICUUID) . "#" . $STR_TICNAME;
            $STR_TICUUID = ($STR_TICUUID == null ? $text : $STR_TICUUID); //a decommenter en cas de probleme
            $STR_TICBARECODE = $LG_TICID . ".png";
            generate_qr_code($text, Parameters::$path_import . $LG_TICID . ".png"); //generation de code barre

            $params = array("lg_ticid" => $LG_TICID, "lg_eveid" => $this->OEvenement[0][0], "lg_lstid" => $this->OListe[0][0], "str_ticname" => $STR_TICNAME, "str_ticphone" => $STR_TICPHONE, "str_ticmail" => $STR_TICMAIL, "str_ticbarecode" => $STR_TICBARECODE, "dt_ticcreated" => get_now(),
                "lg_cliid" => $LG_CLIID, "dbl_ticamount" => (float) $DBL_TICAMOUNT, "str_ticuuid" => $STR_TICUUID, "str_ticstatut" => Parameters::$statut_waiting, "lg_utivalidatedid" => Parameters::$separator_space);
            if ($this->dbconnnexion != null) {
                if (Persist($this->Ticket, $params, $this->dbconnnexion)) {
                    $validation = true;

                    /* $validation = $PaymentManager->doPayment($STR_PROVIDER, $params, $STR_CURRENCY);
                      if ($validation) {
                      Parameters::buildSuccessMessage("Paiement effectue avec succès.");
                      } else {
                      Parameters::buildErrorMessage("Echec de paiement. Veuillez reessayer svp");
                      } */
                } else {
                    Parameters::buildErrorMessage("Echec de paiement. Veuillez reessayer svp");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de paiement. Veuillez reessayer ulterieurement");
        }
        return $validation;
    }

    public function getTicket($LG_TICID) {
        $validation = null;
        Parameters::buildErrorMessage("Ticket inexistant");
        try {
            $params_condition = array("lg_ticid" => $LG_TICID, "str_ticuuid" => $LG_TICID);
            $validation = $this->OTicket = Find($this->Ticket, $params_condition, $this->dbconnnexion, "OR");

            if ($this->OTicket == null) {
                return $validation;
            }
            Parameters::buildSuccessMessage("Ticket " . $this->OTicket[0][4] . " trouvée");
            $validation = $this->OTicket;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function getTicketWithName($LG_TICID, $STR_TICNAME) {
        $validation = null;
        try {
            $query = "SELECT ti.*, t.str_evename, t.str_evedescription, t.str_evepic, t.str_evebanner, t.str_eveannonceur, l.lg_lstid, l.str_lstdescription, p.str_lstdescription lg_lstplaceid, t.dt_evebegin, t.dt_eveend FROM " . $this->Evenement . " t, " . $this->Ticket . " ti, " . $this->Liste . " l, (select * from " . $this->Liste . " li where li.lg_tylid = :LG_TYLID) p "
                    . "WHERE t.lg_eveid = ti.lg_eveid and t.lg_lstid = l.lg_lstid and p.lg_lstid = t.lg_lstplaceid and (ti.lg_ticid = :LG_TICID or (ti.str_ticuuid = :LG_TICID and ti.str_ticname = :STR_TICNAME)) and ti.str_ticstatut != :STR_STATUT";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('LG_TYLID' => Parameters::$typelisteKey[2], "LG_TICID" => $LG_TICID, "STR_TICNAME" => $STR_TICNAME, 'STR_STATUT' => Parameters::$statut_delete));
            while ($rowObj = $res->fetch()) {
                $validation[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function verifyTicket($LG_TICID, $STR_TICNAME, $OUtilisateur) {
        $validation = null;
        try {
//            sendMail();

            $now = DateToString(get_now(), "Y-m-d");

            $this->OTicket = $this->getTicketWithName($LG_TICID, $STR_TICNAME);
            if ($this->OTicket == null) {
                Parameters::buildErrorMessage("Ticket inexistant");
                return $validation;
            }

            if ($this->OTicket[0][11] == Parameters::$statut_scanned) {
                Parameters::buildErrorMessage("Ticket " . $this->OTicket[0][4] . " déjà scanné");
                return $validation;
            }

//            echo $this->OTicket[0][23] . "======" . $now;
            if ($this->OTicket[0][23] > $now) {
                Parameters::buildErrorMessage("La date de l'évènement n'est pas encore arrivée");
                return $validation;
            }

            if ($this->OTicket[0][24] < $now) {
                Parameters::buildErrorMessage("L'évènement est déjà dépassé");
                return $validation;
            }

            $params_condition = array("lg_ticid" => $this->OTicket[0][0]);
            $params_to_update = array("lg_utiupdatedid" => $OUtilisateur[0][0], "dt_ticupdated" => get_now(), "dt_ticvalidated" => get_now(), "str_ticstatut" => Parameters::$statut_scanned, "lg_utivalidatedid" => $OUtilisateur[0][0]);

            if ($this->dbconnnexion != null) {
                if (Merge($this->Ticket, $params_to_update, $params_condition, $this->dbconnnexion)) {
                    $validation = $this->OTicket;
                    Parameters::buildSuccessMessage("Ticket " . $this->OTicket[0][4] . " scanné avec succès.");
                } else {
                    Parameters::buildErrorMessage("Echec de scan du ticket " . $this->OTicket[0][4] . ". Veuillez reessayer svp!");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function showAllOrOneTicket($search_value, $LG_EVEID, $LG_LSTID, $LG_AGEID, $LG_CLIID, $LG_UTIID, $STR_TICSTATUT, $DT_BEGIN, $DT_END, $start, $limit) {
        $arraySql = array();
        try {
            //echo $search_value ."==". $LG_EVEID ."==". $LG_LSTID ."==". $LG_AGEID ."==". $LG_CLIID ."==". $DT_BEGIN ."==". $DT_END . "----" . $LG_UTIID;
            /* $query = "SELECT t.*, e.*, l.str_lstdescription FROM " . $this->Ticket . " t, " . $this->Evenement . " e, " . $this->Liste . " l WHERE t.lg_eveid = e.lg_eveid and t.lg_lstid = l.lg_lstid and (t.str_ticname like :search_value or t.str_ticphone like :search_value or t.str_ticmail like :search_value or e.str_evename like :search_value) "
              . "and t.lg_eveid like :LG_EVEID and t.lg_lstid like :LG_LSTID and e.lg_ageid LIKE :LG_AGEID "//and t.lg_cliid like :LG_CLIID "
              . "and t.str_ticstatut like :STR_STATUT and (t.t.dt_ticcreated BETWEEN :DT_BEGIN AND :DT_END) order by t.t.dt_ticcreated DESC LIMIT " . $start . "," . $limit; */
            $query = "SELECT t.*, e.*, l.str_lstdescription FROM " . $this->Ticket . " t, " . $this->Evenement . " e, " . $this->Liste . " l WHERE t.lg_eveid = e.lg_eveid and t.lg_lstid = l.lg_lstid and (t.str_ticname like :search_value or t.str_ticphone like :search_value or t.str_ticmail like :search_value or e.str_evename like :search_value) and t.lg_eveid like :LG_EVEID and t.lg_lstid like :LG_LSTID and
            e.lg_ageid LIKE :LG_AGEID and t.str_ticstatut like :STR_STATUT and t.str_ticstatut != :STR_STATUT_DELETE and (t.lg_cliid like :LG_CLIID or t.str_ticphone like :LG_CLIID) and (date(t.dt_ticcreated) BETWEEN :DT_BEGIN AND :DT_END) and t.lg_utivalidatedid LIKE :LG_UTIID order by t.dt_ticcreated DESC LIMIT " . $start . "," . $limit;
            //echo $query;
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            /* $res->execute(array('search_value' => "%" . $search_value . "%", "LG_EVEID" => $LG_EVEID, "LG_LSTID" => $LG_LSTID, "LG_AGEID" => $LG_AGEID, // "LG_CLIID" => $LG_CLIID, 
              "DT_BEGIN" => $DT_BEGIN, "DT_END" => $DT_END, 'STR_STATUT' => Parameters::$statut_enable)); */
            $res->execute(array('search_value' => "%" . $search_value . "%", "LG_EVEID" => $LG_EVEID, "LG_LSTID" => $LG_LSTID, "LG_AGEID" => $LG_AGEID, 'STR_STATUT' => $STR_TICSTATUT, 'STR_STATUT_DELETE' => Parameters::$statut_waiting, "LG_CLIID" => $LG_CLIID, "DT_BEGIN" => $DT_BEGIN, "DT_END" => $DT_END, "LG_UTIID" => $LG_UTIID));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            var_dump($exc->getTraceAsString());
        }
        return $arraySql;
    }

    public function totalTicket($search_value, $LG_EVEID, $LG_LSTID, $LG_AGEID, $LG_CLIID, $LG_UTIID, $STR_TICSTATUT, $DT_BEGIN, $DT_END) {
        $result = 0;
        try {
            $query = "SELECT COUNT(t.lg_ticid) NOMBRE FROM " . $this->Ticket . " t, " . $this->Evenement . " e, " . $this->Liste . " l WHERE t.lg_eveid = e.lg_eveid and t.lg_lstid = l.lg_lstid and (t.str_ticname like :search_value or t.str_ticphone like :search_value or t.str_ticmail like :search_value or e.str_evename like :search_value) and t.lg_eveid like :LG_EVEID and t.lg_lstid like :LG_LSTID and
            e.lg_ageid LIKE :LG_AGEID and t.str_ticstatut like :STR_STATUT and t.str_ticstatut != :STR_STATUT_DELETE and (t.lg_cliid like :LG_CLIID or t.str_ticphone like :LG_CLIID) and (date(t.dt_ticcreated) BETWEEN :DT_BEGIN AND :DT_END) and t.lg_utivalidatedid LIKE :LG_UTIID";
            //$query = "SELECT COUNT(t.lg_ticid) NOMBRE FROM " . $this->Ticket . " t, " . $this->Evenement . " e, " . $this->Liste . " l WHERE t.lg_eveid = e.lg_eveid and t.lg_lstid = l.lg_lstid and (t.str_ticname like :search_value or t.str_ticphone like :search_value or t.str_ticmail like :search_value or e.str_evename like :search_value) and t.lg_eveid like :LG_EVEID and t.lg_lstid like :LG_LSTID and e.lg_ageid LIKE :LG_AGEID and t.lg_cliid like :LG_CLIID and t.str_ticstatut like :STR_STATUT and (t.t.dt_ticcreated BETWEEN :DT_BEGIN AND :DT_END)";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => "%" . $search_value . "%", "LG_EVEID" => $LG_EVEID, "LG_LSTID" => $LG_LSTID, "LG_AGEID" => $LG_AGEID, "LG_CLIID" => $LG_CLIID, "DT_BEGIN" => $DT_BEGIN, "DT_END" => $DT_END, 'STR_STATUT' => $STR_TICSTATUT, 'STR_STATUT_DELETE' => Parameters::$statut_waiting, "LG_UTIID" => $LG_UTIID));
            while ($rowObj = $res->fetch()) {
                $result = $rowObj["NOMBRE"];
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $result;
    }

    public function createCategorieplaceEvenement($LG_EVEID, $LG_LSTID, $INT_ELINUMBER, $INT_ELINUMBERMAX, $DBL_ELIAMOUNT, $OUtilisateur) {
        $validation = false;
        $LG_ELIID = generateRandomString(40);
        $ConfigurationManager = new ConfigurationManager();
        try {
            $this->OListe = $ConfigurationManager->getListe($LG_LSTID);
            if ($this->OListe == null) {
                Parameters::buildErrorMessage("Echec de l'operation. Categorie de siege inexistante");
                return $validation;
            }

            $params = array("lg_eliid" => $LG_ELIID, "lg_eveid" => $LG_EVEID, "lg_lstid" => $this->OListe[0][0], "int_elinumber" => $INT_ELINUMBER, "int_elinumbermax" => $INT_ELINUMBERMAX, "dbl_eliamount" => $DBL_ELIAMOUNT, "dt_elicreated" => get_now(),
                "dbl_eliamount" => (float) $DBL_ELIAMOUNT, "str_elistatut" => Parameters::$statut_enable, "lg_uticreatedid" => $OUtilisateur[0][0]);

            if ($this->dbconnnexion != null) {
                if (Persist($this->Eveliste, $params, $this->dbconnnexion)) {
                    $validation = true;
//                    Parameters::buildSuccessMessage("Operation effectuee avec succès.");
                } else {
                    Parameters::buildErrorMessage("Echec de l'operation. Veuillez reessayer svp");
                }
            }
        } catch (Exception $exc) {
            var_dump($exc);
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de l'operation. Veuillez reessayer ulterieurement");
        }
        return $validation;
    }

    public function getCategorieplaceEvenement($LG_EVEID, $LG_LSTID) {
        $validation = null;
        try {
            $params_condition = array("lg_eveid" => $LG_EVEID, "lg_lstid" => $LG_LSTID);
            $validation = $this->OEveliste = Find($this->Eveliste, $params_condition, $this->dbconnnexion);

            if ($this->OEveliste == null) {
                return $validation;
            }
            $validation = $this->OEveliste;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function deleteCategorieplaceEvenement($LG_ELIID, $OUtilisateur) {
        $validation = false;
        try {
            /* $params_condition = array("lg_eveid" => $LG_EVEID);
              $this->OEveliste = Find($this->Eveliste, $params_condition, $this->dbconnnexion);

              if ($this->OEveliste == null) {
              Parameters::buildErrorMessage("Echec de suppression. Evenement inexistant");
              return $validation;
              } */

            $params_condition = array("lg_eliid" => $LG_ELIID);

            if ($this->dbconnnexion != null) {
                if (Remove($this->Eveliste, $params_condition, $this->dbconnnexion)) {
                    $validation = true;
                    //Parameters::buildSuccessMessage("Suppression effectuee avec succès");
                } else {
                    Parameters::buildErrorMessage("Echec de l'operation. Veuillez reessayer svp");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de suppression. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function deleteGlobalCategorieplaceEvenement($LG_EVEID, $OUtilisateur) {
        $validation = false;
        try {
            $listEveliste = $this->showAllOrOneCategorieplaceEvenement("", $LG_EVEID);
            foreach ($listEveliste as $value) {
                if (!$this->deleteCategorieplaceEvenement($value['lg_eliid'], $OUtilisateur)) {
                    return $validation;
                }
            }
            $validation = true;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de l'operation. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function showAllOrOneCategorieplaceEvenement($search_value, $LG_EVEID) {
        $arraySql = array();
        try {
            $query = "SELECT t.*, l.str_lstvalue, l.str_lstdescription FROM eveliste t, liste l WHERE t.lg_lstid = l.lg_lstid and l.str_lstdescription LIKE :search_value and t.lg_eveid LIKE :LG_EVEID and t.str_elistatut = :STR_STATUT";
            //echo $query;
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => "%" . $search_value . "%", "LG_EVEID" => $LG_EVEID, 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    //fin gestion des evenements

    public function totalVenteTicket($search_value, $LG_EVEID, $LG_LSTID, $LG_AGEID, $LG_CLIID, $LG_UTIID, $STR_TICSTATUT, $DT_BEGIN, $DT_END) {
        $arraySql = array();
        try {
            $query = "SELECT COUNT(t.lg_ticid) NOMBRE, (case when SUM(t.dbl_ticamount) is null then 0 else SUM(t.dbl_ticamount) end) MONTANT FROM " . $this->Ticket . " t, " . $this->Evenement . " e, " . $this->Liste . " l WHERE t.lg_eveid = e.lg_eveid and t.lg_lstid = l.lg_lstid and (t.str_ticname like :search_value or t.str_ticphone like :search_value or t.str_ticmail like :search_value or e.str_evename like :search_value) and t.lg_eveid like :LG_EVEID and t.lg_lstid like :LG_LSTID and
            e.lg_ageid LIKE :LG_AGEID and t.str_ticstatut like :STR_STATUT and t.str_ticstatut != :STR_STATUT_DELETE and (t.lg_cliid like :LG_CLIID or t.str_ticphone like :LG_CLIID) and (date(t.dt_ticcreated) BETWEEN :DT_BEGIN AND :DT_END) and t.lg_utivalidatedid LIKE :LG_UTIID";
            
            //$query = "SELECT COUNT(t.lg_ticid) NOMBRE FROM " . $this->Ticket . " t, " . $this->Evenement . " e, " . $this->Liste . " l WHERE t.lg_eveid = e.lg_eveid and t.lg_lstid = l.lg_lstid and (t.str_ticname like :search_value or t.str_ticphone like :search_value or t.str_ticmail like :search_value or e.str_evename like :search_value) and t.lg_eveid like :LG_EVEID and t.lg_lstid like :LG_LSTID and e.lg_ageid LIKE :LG_AGEID and t.lg_cliid like :LG_CLIID and t.str_ticstatut like :STR_STATUT and (t.t.dt_ticcreated BETWEEN :DT_BEGIN AND :DT_END)";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
//            var_dump(array('search_value' => "%" . $search_value . "%", "LG_EVEID" => $LG_EVEID, "LG_LSTID" => $LG_LSTID, "LG_AGEID" => $LG_AGEID, "LG_CLIID" => $LG_CLIID, "DT_BEGIN" => $DT_BEGIN, "DT_END" => $DT_END, 'STR_STATUT' => $STR_TICSTATUT, 'STR_STATUT_DELETE' => Parameters::$statut_waiting, "LG_UTIID" => $LG_UTIID));

            $res->execute(array('search_value' => "%" . $search_value . "%", "LG_EVEID" => $LG_EVEID, "LG_LSTID" => $LG_LSTID, "LG_AGEID" => $LG_AGEID, "LG_CLIID" => $LG_CLIID, "DT_BEGIN" => $DT_BEGIN, "DT_END" => $DT_END, 'STR_STATUT' => $STR_TICSTATUT, 'STR_STATUT_DELETE' => Parameters::$statut_waiting, "LG_UTIID" => $LG_UTIID));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            var_dump($exc);
        }
        return $arraySql;
    }

    public function totalTicketByEvenement($LG_EVEID, $LG_LSTID) {
        $result = 0;
        try {
            $query = "SELECT COUNT(t.lg_ticid) NOMBRE FROM " . $this->Ticket . " t WHERE t.lg_eveid = :LG_EVEID and t.lg_lstid like :LG_LSTID and t.str_ticstatut != :STR_STATUT";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array("LG_EVEID" => $LG_EVEID, "LG_LSTID" => $LG_LSTID, 'STR_STATUT' => Parameters::$statut_waiting));
            while ($rowObj = $res->fetch()) {
                $result = $rowObj["NOMBRE"];
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $result;
    }

    public function showAllOrOneTicketByPayment($search_value, $STR_TICUUID, $STR_TICSTATUT) {
        $arraySql = array();
        try {
            $query = "SELECT * FROM " . $this->Ticket . " t WHERE t.str_ticname LIKE :search_value and t.str_ticuuid like :STR_TICUUID and t.str_ticstatut = :STR_STATUT";
            //echo $query;
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array("search_value" => "%" . $search_value . "%", "STR_TICUUID" => $STR_TICUUID, 'STR_STATUT' => $STR_TICSTATUT));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            var_dump($exc->getTraceAsString());
        }
        return $arraySql;
    }

    public function updateTicket($STR_TICUUID, $STR_TICSTATUT) {
        $validation = false;
        try {
            $params_condition = array("str_ticuuid" => $STR_TICUUID);
            $params_to_update = array("str_ticstatut" => $STR_TICSTATUT, "dt_ticupdated" => get_now());

            if ($this->dbconnnexion != null) {
                if (Merge($this->Ticket, $params_to_update, $params_condition, $this->dbconnnexion)) {
                    $validation = true;
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function updateTicketGlobal($STR_TICUUID) {
        $validation = false;
        $counter = 1;
        $maxrow = 0;
        $STR_MESSAGE = "";
        $listTicket = array();
        $NotificationManager = new NotificationManager();
        $ConfigurationManager = new ConfigurationManager();
        try {
            $this->OListe = $ConfigurationManager->getListe(Parameters::$P_MSG_VALIDATE_CASH);
            $STR_MESSAGE = $this->OListe != null ? $this->OListe[0]["str_lstvalue"] : "";
            //echo "===".$STR_TICUUID."++=".$STR_MESSAGE;
            $listTicket = $this->showAllOrOneTicketByPayment("", $STR_TICUUID, Parameters::$statut_process);
            $maxrow = count($listTicket) > 2 ? 2: count($listTicket);
            //echo count($listTicket);
//            if ($this->updateTicket($STR_TICUUID, Parameters::$statut_enable)) {
            if ($this->updateTicket($STR_TICUUID, Parameters::$statut_process)) {
                if ($maxrow < 3) {
                   // echo $maxrow;
                    for ($i = 0; $i < $maxrow; $i++) {
                        $value = $listTicket[$i];
                        //echo ($value["str_ticphone"]);
                        $NotificationManager->sendSMS(str_replace(Parameters::$listeParameter[0], $value["str_ticbarecode"], $STR_MESSAGE), $value["str_ticphone"]);
                        $counter++;
                    }
                }
            }
        } catch (Exception $exc) {
            var_dump($exc);//$exc->getTraceAsString();
//            Parameters::buildErrorMessage("Echec de paiement. Veuillez reessayer ulterieurement");
        }
        return $validation;
    }

}
