<?php

interface CashInterface {

    public function createCashtransaction($LG_CTRID, $STR_CTRREF, $DBL_CTRAMOUNT, $DBL_CTRRECEIVE, $DBL_CTRMONNAIE, $STR_CTRSENSOPERATION, $STR_REFMOYENPAIEMENT, $LG_AGEID, $STR_CTRNAME, $OUtilisateur);

    public function updCashtransaction($LG_CTRID, $STR_CTRNAME, $STR_CTRSTATUT);
    
    public function getCashtransaction($LG_CTRID, $displayMessage);
    
    public function showAllOrOneCashtransaction($search_value, $LG_AGEID, $DT_BEGIN, $DT_END, $start, $limit);

    public function totalCashtransaction($search_value, $LG_AGEID, $DT_BEGIN, $DT_END);
    
    public function verifystatutpayment($LG_CTRID, $STR_PROVIDER);
    //fin gestion des bannieres
    
}

class CashManager implements CashInterface {

    private $Cashtransaction = 'cashtransaction';
    private $OCashtransaction = array();
    private $dbconnnexion;

    //constructeur de la classe 
    public function __construct() {
        $this->dbconnnexion = DoConnexionPDO(Parameters::$host, Parameters::$user, Parameters::$pass, Parameters::$db, Parameters::$port);
    }
    
    public function createCashtransaction($LG_CTRID, $STR_CTRREF, $DBL_CTRAMOUNT, $DBL_CTRRECEIVE, $DBL_CTRMONNAIE, $STR_CTRSENSOPERATION, $STR_REFMOYENPAIEMENT, $LG_AGEID, $STR_CTRNAME, $OUtilisateur) {
        $validation = false;
        //$LG_CTRID = generateRandomString(20);
        try {
            $params = array("lg_ctrid" => $LG_CTRID, "str_ctrref" => $STR_CTRREF, "dbl_ctramount" => (double) $DBL_CTRAMOUNT, "dbl_ctrreceive" => (double) $DBL_CTRRECEIVE, 
                "dbl_ctrmonnaie" => (double) $DBL_CTRMONNAIE, "str_ctrsensoperation" => $STR_CTRSENSOPERATION, "str_refmoyenpaiement" => $STR_REFMOYENPAIEMENT, 
                "str_ctrstatut" => Parameters::$statut_waiting, "dt_ctrcreated" => get_now(), "lg_uticreatedid" => ($OUtilisateur != null ? $OUtilisateur[0][0] : Parameters::$default_user), "str_ctrname" => $STR_CTRNAME, "lg_ageid" => $LG_AGEID);
            if ($this->dbconnnexion != null) {
                if (Persist($this->Cashtransaction, $params, $this->dbconnnexion)) {
                    $validation = true;
                    //Parameters::buildSuccessMessage("Opération effectuée avec succès.");
                } else {
                    Parameters::buildErrorMessage("Echec d'encaissement. Veuillez reessayer svp");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec d'encaissement. Veuillez contacter votre administrateur");
        }
        return $validation;
    }
    
    public function updCashtransaction($LG_CTRID, $STR_CTRNAME, $STR_CTRSTATUT) {
        $validation = false;
        try {
            $params_condition = array("lg_ctrid" => $LG_CTRID);
            $params_to_update = array("str_ctrname" => $STR_CTRNAME, "str_ctrstatut" => $STR_CTRSTATUT, "dt_ctrupdated" => get_now());

            if ($this->dbconnnexion != null) {
                if (Merge($this->Cashtransaction, $params_to_update, $params_condition, $this->dbconnnexion)) {
                    $validation = true;
                } else {
                    Parameters::buildErrorMessage("Echec de la transaction. Veillez réessayer svp!");
                }
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de la transaction. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function getCashtransaction($LG_CTRID, $displayMessage) {
        $validation = null;
        try {
            $params_condition = array("lg_ctrid" => $LG_CTRID, "str_ctrref" => $LG_CTRID, "str_ctrname" => $LG_CTRID);
            //var_dump($params_condition);
            $this->OCashtransaction = Find($this->Cashtransaction, $params_condition, $this->dbconnnexion, "OR");
            
            if($displayMessage) {
                if ($this->OCashtransaction == null) {
                    Parameters::buildErrorMessage("Encaissement inexistant");
                    return $validation;
                }
                Parameters::buildSuccessMessage("Encaissement " . $this->OCashtransaction[0][1] . " trouvé");
            }
            
            $validation = $this->OCashtransaction;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function showAllOrOneCashtransaction($search_value, $LG_AGEID, $DT_BEGIN, $DT_END, $start, $limit) {
        $arraySql = array();
        try {
            $query = "SELECT * FROM cashtransaction t WHERE (t.str_ctrref like :search_value or t.str_ctrname like :search_value or t.str_refmoyenpaiement like :search_value) and (t.dt_ctrcreated BETWEEN :DT_BEGIN AND :DT_END) and t.lg_ageid like :LG_AGEID and t.str_ctrstatut = :STR_STATUT order by t.dt_ctrcreated DESC LIMIT " . $start . "," . $limit;
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'LG_AGEID' => $LG_AGEID, 'STR_STATUT' => Parameters::$statut_enable, "DT_BEGIN" => $DT_BEGIN, "DT_END" => $DT_END));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    public function totalCashtransaction($search_value, $LG_AGEID, $DT_BEGIN, $DT_END) {
        $result = 0;
        try {
            $query = "SELECT COUNT(t.lg_ctrid) NOMBRE FROM cashtransaction t WHERE (t.str_ctrref like :search_value or t.str_ctrname like :search_value or t.str_refmoyenpaiement like :search_value) and (t.dt_ctrcreated BETWEEN :DT_BEGIN AND :DT_END) and t.lg_ageid like :LG_AGEID and t.str_ctrstatut = :STR_STATUT";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'LG_AGEID' => $LG_AGEID, 'STR_STATUT' => Parameters::$statut_enable, "DT_BEGIN" => $DT_BEGIN, "DT_END" => $DT_END));
            
            while ($rowObj = $res->fetch()) {
                $result = $rowObj["NOMBRE"];
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $result;
    }

    public function verifystatutpayment($LG_CTRID, $STR_PROVIDER) {
        $validation = null;
        $PaymentManager = new PaymentManager();
        $TicketManager = new TicketManager();
        try {
            //echo "===" . $LG_CTRID . "++++";
            $this->OCashtransaction = $this->getCashtransaction($LG_CTRID, false);

            if ($this->OCashtransaction == null) {
                Parameters::buildErrorMessage("Echec de verification. Paiement inexistant");
                return $validation;
            }

            $validation = $PaymentManager->verifyPayment($STR_PROVIDER, $this->OCashtransaction); //a decommenter en urgence
            if(Parameters::$Message == Parameters::$PROCESS_SUCCESS) {
                $TicketManager->updateTicketGlobal($this->OCashtransaction[0]["str_ctrref"]);
            }
        } catch (Exception $exc) {
            //echo $exc->getTraceAsString();
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de verification de paiement. Veuillez contacter votre administrateur");
        }
        return $validation;
    }
}
