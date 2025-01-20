<?php

interface ConfigurationInterface {

    //code ajouté
//    public function doConnexion($STR_UTILOGIN, $STR_UTIPASSWORD, $STR_SOCCODE); //a decommenter en cas de probleme
    public function doConnexion($STR_UTILOGIN, $STR_UTIPASSWORD);

    public function doDisConnexion($STR_UTITOKEN);

    public function updateTokenUtilisateur($OUtilisateur, $STR_UTITOKEN);
    
    public function createProfile($STR_PRONAME, $STR_PRODESCRIPTION, $STR_PROTYPE, $LG_PRIID, $OUtilisateur);
    
    public function updateProfile($LG_PROID, $STR_PRONAME, $STR_PRODESCRIPTION, $STR_PROTYPE, $LG_PRIID, $OUtilisateur);
    
    public function deleteProfile($LG_PROID, $OUtilisateur);

    public function getProfile($LG_PROID);

    public function showAllOrOneProfile($search_value, $STR_PROTYPE);

    public function getProfilePrivilege($LG_PROID, $LG_PRIID);

    public function getTypetransaction($LG_TTRID);

    public function showAllOrOneTypetransaction($search_value);

    public function getOperateur($LG_OPEID);

    public function showAllOrOneOperateur($search_value);

    public function createSociete($STR_SOCNAME, $STR_SOCDESCRIPTION, $STR_SOCLOGO, $STR_SOCADDRESS, $STR_SOCMAIL, $STR_SOCPHONE, $BOOL_SOCNOTIFICATION, $OUtilisateur);

    public function updateSociete($LG_SOCID, $STR_SOCNAME, $STR_SOCDESCRIPTION, $STR_SOCLOGO, $STR_SOCADDRESS, $STR_SOCMAIL, $STR_SOCPHONE, $BOOL_SOCNOTIFICATION, $OUtilisateur);

    public function getSociete($LG_SOCID);

    public function deleteSociete($LG_SOCID, $OUtilisateur);

    public function showAllOrOneSociete($search_value);

    public function showAllOrOneSocieteLimit($search_value, $start, $limit);

    public function totalSociete($search_value);

    public function createSocieteOperateur($LG_SOCID, $LG_OPEID, $STR_SOPPHONE, $OUtilisateur);

    public function updateSocieteOperateur($LG_SOPID, $STR_SOPPHONE, $OUtilisateur);

    public function getSocieteOperateur($LG_SOCID, $LG_OPEID);

    public function getSocieteOperateurUnique($LG_SOPID);

    public function deleteSocieteOperateur($LG_SOPID, $STR_SOPSTATUT, $OUtilisateur);

    public function showAllOrOneSocieteOperateur($search_value, $LG_SOCID, $LG_OPEID);

    public function createSocieteUtilisateur($LG_SOCID, $LG_UTIID, $OUtilisateur);

    public function getSocieteUtilisateur($LG_SOCID, $LG_UTIID);

    public function deleteSocieteUtilisateur($LG_SUTID, $OUtilisateur);

    public function showAllOrOneSocieteUtilisateur($search_value, $LG_SOCID, $LG_UTIID);

    public function showAllOrOneSocieteUtilisateurLimit($search_value, $LG_SOCID, $LG_UTIID, $start, $limit);

    public function totalSocieteUtilisateur($search_value, $LG_SOCID, $LG_UTIID);

    public function getAgence($LG_AGEID);
    
    public function showAllOrOneAgence($search_value);
    
    public function showAllOrOneAgenceLimit($search_value, $start, $limit);
    
    public function totalAgence($search_value);

    public function getListe($LG_LSTID, $displayMessage = false);

    public function showAllOrOneListe($search_value, $LG_TYLID, $STR_LSTOTHERVALUE, $order);

    public function showAllOrOneListeLimit($search_value, $LG_TYLID, $STR_LSTOTHERVALUE, $order, $start, $limit);

    public function totalListe($search_value, $LG_TYLID, $STR_LSTOTHERVALUE);

    //gestion des bannieres
    public function createBanniere($STR_BANNAME, $STR_BANDESCRIPTION, $LG_AGEID, $STR_BANPATH, $DT_BANBEGIN, $DT_BANEND, $LG_EVEID, $BOOL_BANEVENT, $displayMessage, $OUtilisateur);

    public function updateBanniere($LG_BANID, $STR_BANNAME, $STR_BANDESCRIPTION, $LG_AGEID, $STR_BANPATH, $DT_BANBEGIN, $DT_BANEND, $LG_EVEID, $BOOL_BANEVENT, $displayMessage, $OUtilisateur);

    public function getBanniere($LG_BANID, $displayMessage);

    public function deleteBanniere($LG_BANID, $STR_BANSTATUT, $OUtilisateur);

    public function showAllOrOneBanniere($search_value, $LG_AGEID, $LG_EVEID, $DT_BEGIN, $DT_END, $start, $limit);

    public function totalBanniere($search_value, $LG_AGEID, $LG_EVEID, $DT_BEGIN, $DT_END);

    //fin gestion des bannieres
    //gestion des clients
    public function createClient($STR_CLIFIRSTLASTNAME, $STR_CLIPHONE, $STR_CLILOGIN, $STR_CLIMAIL);

    public function getClient($LG_CLIID, $displayMessage = false);

    public function doConnexionClient($STR_CLILOGIN, $STR_CLIPASSWORD);

    public function doDisConnexionClient($STR_CLITOKEN);

    public function updateTokenClient($OClient, $STR_CLITOKEN);

    //fin gestion des clients
    //gestion des utilisateurs
    public function createUtilisateur($STR_UTIFIRSTLASTNAME, $STR_UTIPHONE, $STR_UTILOGIN, $STR_UTIMAIL, $LG_PROID, $LG_AGEID, $STR_UTIPIC, $OUtilisateur);

    public function updateUtilisateur($LG_UTIID, $STR_UTIFIRSTLASTNAME, $STR_UTIPHONE, $STR_UTILOGIN, $STR_UTIMAIL, $LG_PROID, $LG_AGEID, $STR_UTIPIC, $OUtilisateur);

    public function getUtilisateur($LG_UTIID);

    public function deleteUtilisateur($LG_UTIID, $OUtilisateur);

    public function showAllOrOneUtilisateur($search_value, $LG_AGEID, $LG_PROID, $start, $limit);

    public function totalUtilisateur($search_value, $LG_AGEID, $LG_PROID);
    //fin gestion des utilisateurs
    
    //gestion des privileges utilisateur
    public function showAllOrOneProfilePrivilege($LG_PROID, $LG_PRIID, $STR_PRIKIND, $LG_PRIPARENTID, $LG_PRIGROUPID);

    public function generateMenu($LG_PROID);
    
    //gestion des privileges    
    public function showAllOrOnePrivilege($search_value, $STR_PRITYPE);
    //fin gestion des privileges
}

class ConfigurationManager implements ConfigurationInterface {

    private $Typetransaction = 'TYPETRANSACTION';
    private $OTypetransaction = array();
    private $Operateur = 'OPERATEUR';
    private $OOperateur = array();
    private $Societe = 'societe';
    private $OSociete = array();
    private $Utilisateur = 'utilisateur';
    private $OUtilisateur = array();
    private $SocieteOperateur = 'SOCIETE_OPERATEUR';
    private $OSocieteOperateur = array();
    private $SocieteUtilisateur = 'SOCIETE_UTILISATEUR';
    private $OSocieteUtilisateur = array();
    private $ProfilePrivilege = 'profile_privilege';
    private $OProfilePrivilege = array();
    private $Profile = 'profile';
    private $OProfile = array();
    private $Privilege = 'privilege';
    private $OPrivilege = array();
    private $Liste = 'liste';
    private $OListe = array();
    private $Agence = 'agence';
    private $OAgence = array();
    private $Banniere = 'banniere';
    private $OBanniere = array();
    private $Client = 'client';
    private $OClient = array();
    private $dbconnnexion;

    //constructeur de la classe 
    public function __construct() {
//        echo Parameters::$host . "===" . Parameters::$user . "+++" . Parameters::$pass . "---" . Parameters::$db . "***" . Parameters::$port . "===";
        $this->dbconnnexion = DoConnexionPDO(Parameters::$host, Parameters::$user, Parameters::$pass, Parameters::$db, Parameters::$port);
    }

    //connexion d'un utilisateur
//    public function doConnexion($STR_UTILOGIN, $STR_UTIPASSWORD, $STR_SOCCODE) { //a decommenter en cas de probleme
    public function doConnexion($STR_UTILOGIN, $STR_UTIPASSWORD) {
        $validation = array();
        $Object = null;
        $STR_UTITOKEN = generateRandomString(20);
        Parameters::buildErrorMessage("Echec de connexion. Identifiant ou mot de passe incorrecte");
        try {
            //$query = "SELECT t.*, p.STR_PRODESCRIPTION, p.STR_PROTYPE, s.LG_SOCID, s.STR_SOCNAME, s.STR_SOCDESCRIPTION, s.STR_SOCLOGO FROM " . $this->Utilisateur . " t, " . $this->Profile . " p, " . $this->Societe . " s WHERE t.LG_PROID = p.LG_PROID AND t.STR_UTILOGIN = :STR_UTILOGIN AND t.STR_UTIPASSWORD = :STR_UTIPASSWORD AND t.STR_UTISTATUT = :STR_UTISTATUT LIMIT 1";
            $query = "SELECT t.*, p.str_prodescription, p.str_protype, s.lg_socid, s.str_socname, s.str_socdescription, s.str_soclogo FROM " . $this->Utilisateur . " t, " . $this->Profile . " p, " . $this->Societe . " s where t.lg_proid = p.lg_proid and t.str_utilogin = :STR_UTILOGIN and t.str_utipassword = :STR_UTIPASSWORD and t.str_utistatut = :STR_UTISTATUT limit 1";
//            var_dump($query);
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('STR_UTILOGIN' => $STR_UTILOGIN, 'STR_UTIPASSWORD' => sha1($STR_UTIPASSWORD), 'STR_UTISTATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $Object[] = $rowObj;
            }

            $this->OUtilisateur = $Object;
//            var_dump($this->OUtilisateur);

            if ($this->OUtilisateur == null) {
                return $validation;
            }

            $this->updateTokenUtilisateur($this->OUtilisateur, $STR_UTITOKEN);
            $this->OUtilisateur[0]["str_utitoken"] = $STR_UTITOKEN;
            Parameters::buildSuccessMessage("Bienvenu " . $this->OUtilisateur[0][1]);
            $validation = $this->OUtilisateur;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    //fin connexion d'un utilisateur
    //déconnexion d'un utilisateur
    public function doDisConnexion($STR_UTITOKEN) {
        $validation = false;
        Parameters::buildErrorMessage("Echec de déconnexion. Veuillez réessayer svp!");
        try {
            $params_condition = array('str_utitoken' => $STR_UTITOKEN);
            $this->OUtilisateur = Find($this->Utilisateur, $params_condition, $this->dbconnnexion);

            if ($this->OUtilisateur == null) {
                return $validation;
            }
            $this->updateTokenUtilisateur($this->OUtilisateur, "");
            Parameters::buildSuccessMessage("Déconnexion de " . $this->OUtilisateur[0][1] . " effectuée avec succès");
            $validation = true;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    //fin déconnexion d'un utilisateur
    //mise à jour de token de l'utilisateur
    public function updateTokenUtilisateur($OUtilisateur, $STR_UTITOKEN) {
        $validation = false;
        try {
            $params_condition = array("LG_UTIID" => $OUtilisateur[0][0]);
            $params_to_update = array("STR_UTITOKEN" => $STR_UTITOKEN, "DT_UTILASTCONNECTED" => get_now());

            if (Merge($this->Utilisateur, $params_to_update, $params_condition, $this->dbconnnexion)) {
                $validation = true;
            }
        } catch (Exception $ex) {
            $exc->getTraceAsString();
            var_dump($exc);
        }
    }

    //recherche d'un utilisateur
    public function getUtilisateur($LG_UTIID) {
        $validation = null;
        Parameters::buildErrorMessage("Utilisateur inexistant");
        try {
            $params_condition = array("LG_UTIID" => $LG_UTIID, "STR_UTITOKEN" => $LG_UTIID);
            $validation = $this->OUtilisateur = Find($this->Utilisateur, $params_condition, $this->dbconnnexion, "OR");
//            var_dump($validation);
            if ($this->OUtilisateur == null) {
                return $validation;
            }
            Parameters::buildSuccessMessage("Utilisateur " . $this->OUtilisateur[0][1] . " trouvé");
            $validation = $this->OUtilisateur;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    //fin gestion des utilisateurs
    //gestion des profils
    
    public function createProfile($STR_PRONAME, $STR_PRODESCRIPTION, $STR_PROTYPE, $LG_PRIID, $OUtilisateur) {
        $validation = "";
        $LG_PROID = generateRandomString(20);
        try {
            $params = array("lg_proid" => $LG_PROID, "str_proname" => $STR_PRONAME, "str_prodescription" => $STR_PRODESCRIPTION, "str_protype" => $STR_PROTYPE,
                "lg_priid" => $LG_PRIID, "str_prostatut" => Parameters::$statut_enable, "dt_procreated" => get_now(),
                "lg_uticreatedid" => $OUtilisateur[0][0]);

            if ($this->dbconnnexion != null) {
                if (Persist($this->Profile, $params, $this->dbconnnexion)) {
                    $validation = $LG_PROID;
                    Parameters::buildSuccessMessage("Profil " . $STR_PRODESCRIPTION . " créé avec succès.");
                } else {
                    Parameters::buildErrorMessage("Echec de création du profil");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de création du profil. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function deleteProfile($LG_PROID, $OUtilisateur) {
        
    }

    public function updateProfile($LG_PROID, $STR_PRONAME, $STR_PRODESCRIPTION, $STR_PROTYPE, $LG_PRIID, $OUtilisateur) {
        
    }
    //recherche de profil
    public function getProfile($LG_PROID) {
        $validation = null;
        Parameters::buildErrorMessage("Profil inexistant");
        try {
            $params_condition = array("LG_PROID" => $LG_PROID, "STR_PRODESCRIPTION" => $LG_PROID);
            $validation = $this->OProfile = Find($this->Profile, $params_condition, $this->dbconnnexion, "OR");

            if ($this->OProfile == null) {
                return $validation;
            }
            Parameters::buildSuccessMessage("Profil " . $this->OProfile[0][2] . " trouvé");
            $validation = $this->OProfile;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    //liste de profils
    public function showAllOrOneProfile($search_value, $STR_PROTYPE) {
        $arraySql = array();
        try {
            $query = "SELECT * FROM " . $this->Profile . " t WHERE (t.str_proname LIKE :search_value OR t.str_prodescription LIKE :search_value) AND t.str_protype LIKE :STR_PROTYPE AND t.str_prostatut = :STR_STATUT ORDER BY t.str_prodescription";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'STR_PROTYPE' => $STR_PROTYPE, 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    //fin gestion des profils
    //gestion des privileges
    public function getProfilePrivilege($LG_PROID, $LG_PRIID) {
        $validation = null;
        try {
            $params_condition = array("lg_proid" => $LG_PROID, "lg_priid" => $LG_PRIID);
            $validation = $this->OProfilePrivilege = Find($this->ProfilePrivilege, $params_condition, $this->dbconnnexion);

            if ($this->OProfilePrivilege == null) {
                return $validation;
            }
            $validation = $this->OProfilePrivilege;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    //fin gestion des privileges
    //Gestion des types de transactions
    public function getTypetransaction($LG_TTRID) {
        $validation = null;
        Parameters::buildErrorMessage("Type de transaction inexistante");
        try {
            $params_condition = array("LG_TTRID" => $LG_TTRID, "STR_TTRDESCRIPTION" => $LG_TTRID);
            $validation = $this->OTypetransaction = Find($this->Typetransaction, $params_condition, $this->dbconnnexion, "OR");

            if ($this->OTypetransaction == null) {
                return $validation;
            }
            Parameters::buildSuccessMessage("Type de transaction " . $this->OTypetransaction[0][2] . " trouvé");
            $validation = $this->OTypetransaction;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function showAllOrOneTypetransaction($search_value) {
        $arraySql = array();
        try {
            $query = "SELECT * FROM " . $this->Typetransaction . " t WHERE (t.STR_TTRNAME LIKE :search_value OR t.STR_TTRDESCRIPTION LIKE :search_value) AND t.STR_TTRSTATUT = :STR_STATUT ORDER BY t.STR_TTRDESCRIPTION";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    //fin gestion des types de transaction
    //gestion des opérateurs
    public function getOperateur($LG_OPEID) {
        $validation = null;
        Parameters::buildErrorMessage("Opérateur inexistant");
        try {
            $params_condition = array("LG_OPEID" => $LG_OPEID, "STR_OPEDESCRIPTION" => $LG_OPEID);
            $validation = $this->OOperateur = Find($this->Operateur, $params_condition, $this->dbconnnexion, "OR");

            if ($this->OOperateur == null) {
                return $validation;
            }
            Parameters::buildSuccessMessage("Opérateur " . $this->OOperateur[0][2] . " trouvé");
            $validation = $this->OOperateur;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function showAllOrOneOperateur($search_value) {
        $arraySql = array();
        try {
            $query = "SELECT * FROM " . $this->Operateur . " t WHERE (t.STR_OPENAME LIKE :search_value OR t.STR_OPEDESCRIPTION LIKE :search_value) AND t.STR_OPESTATUT = :STR_STATUT ORDER BY t.STR_OPEDESCRIPTION";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    //fin gestion des opérateurs
    //gestion des sociétés
    //creation d'une société
    public function createSociete($STR_SOCNAME, $STR_SOCDESCRIPTION, $STR_SOCLOGO, $STR_SOCADDRESS, $STR_SOCMAIL, $STR_SOCPHONE, $BOOL_SOCNOTIFICATION, $OUtilisateur) {
        $validation = false;
        $LG_SOCID = generateRandomString(20);
        try {
            $params = array("LG_SOCID" => $LG_SOCID, "STR_SOCNAME" => $STR_SOCNAME, "STR_SOCDESCRIPTION" => $STR_SOCDESCRIPTION, "STR_SOCLOGO" => $STR_SOCLOGO, "STR_SOCCODE" => sha1(generateRandomNumber(5)), //"STR_SOCCODE" => generate_uuid(),
                "STR_SOCADDRESS" => $STR_SOCADDRESS, "STR_SOCSTATUT" => Parameters::$statut_enable, "STR_SOCMAIL" => $STR_SOCMAIL, "STR_SOCPHONE" => $STR_SOCPHONE, "DT_SOCCREATED" => get_now(),
                "LG_UTICREATEDID" => $OUtilisateur[0][0], "BOOL_SOCNOTIFICATION" => $BOOL_SOCNOTIFICATION);

            if ($this->dbconnnexion != null) {
                if (Persist($this->Societe, $params, $this->dbconnnexion)) {
                    $validation = true;
                    Parameters::buildSuccessMessage("Société " . $STR_SOCDESCRIPTION . " effectuée avec succès.");
                } else {
                    Parameters::buildErrorMessage("Echec de création de la société");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de création de la société. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    //fin creation d'une société
    //mise à jour d'une société
    public function updateSociete($LG_SOCID, $STR_SOCNAME, $STR_SOCDESCRIPTION, $STR_SOCLOGO, $STR_SOCADDRESS, $STR_SOCMAIL, $STR_SOCPHONE, $BOOL_SOCNOTIFICATION, $OUtilisateur) {
        $validation = false;
        try {
            $this->OSociete = $this->getSociete($LG_SOCID);

            if ($this->OSociete == null) {
                Parameters::buildErrorMessage("Echec de mise à jour. Société inexistante");
                return $validation;
            }

            $params_condition = array("LG_SOCID" => $this->OSociete[0][0]);
            $params_to_update = array("STR_SOCNAME" => $STR_SOCNAME, "STR_SOCDESCRIPTION" => $STR_SOCDESCRIPTION, "STR_SOCLOGO" => ($STR_SOCLOGO == "" ? $this->OSociete[0][3] : $STR_SOCLOGO),
                "STR_SOCADDRESS" => $STR_SOCADDRESS, "STR_SOCMAIL" => $STR_SOCMAIL, "STR_SOCPHONE" => $STR_SOCPHONE, "DT_SOCUPDATED" => get_now(),
                "LG_UTIUPDATEDID" => $OUtilisateur[0][0], "BOOL_SOCNOTIFICATION" => $BOOL_SOCNOTIFICATION);

            if ($this->dbconnnexion != null) {
                if (Merge($this->Societe, $params_to_update, $params_condition, $this->dbconnnexion)) {
                    $validation = true;
                    Parameters::buildSuccessMessage("Société " . $STR_SOCDESCRIPTION . " mise à jour avec succès");
                } else {
                    Parameters::buildErrorMessage("Echec de mise à jour de la société");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de mise à jour de la société. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    //fin mise à jour de société
    //suppression de société
    public function deleteSociete($LG_SOCID, $OUtilisateur) {
        $validation = false;
        try {
            $this->OSociete = $this->getSociete($LG_SOCID);

            if ($this->OSociete == null) {
                Parameters::buildErrorMessage("Echec de suppression. Société inexistante");
                return $validation;
            }

            $params_condition = array("LG_SOCID" => $this->OSociete[0][0]);
            $params_to_update = array("STR_SOCSTATUT" => Parameters::$statut_delete, "DT_SOCUPDATED" => get_now(), "LG_UTIUPDATEDID" => $OUtilisateur[0][0]);

            if ($this->dbconnnexion != null) {
                if (Merge($this->Societe, $params_to_update, $params_condition, $this->dbconnnexion)) {
                    $validation = true;
                    Parameters::buildSuccessMessage("Société " . $this->OSociete[0][2] . " supprimée avec succès");
                } else {
                    Parameters::buildErrorMessage("Echec de suppression de la société");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de suppression de la société. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    //fin suppression de société
    //recherche de société
    public function getSociete($LG_SOCID) {
        $validation = null;
        Parameters::buildErrorMessage("Société inexistante");
        try {
            $params_condition = array("LG_SOCID" => $LG_SOCID, "STR_SOCDESCRIPTION" => $LG_SOCID);
            $validation = $this->OSociete = Find($this->Societe, $params_condition, $this->dbconnnexion, "OR");

            if ($this->OSociete == null) {
                return $validation;
            }
            Parameters::buildSuccessMessage("Société " . $this->OSociete[0][2] . " trouvée");
            $validation = $this->OSociete;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    //fin recherche de société
    //liste des sociétés
    public function showAllOrOneSociete($search_value) {
        $arraySql = array();
        try {
            $query = "SELECT * FROM " . $this->Societe . " t WHERE (t.STR_SOCNAME LIKE :search_value OR t.STR_SOCDESCRIPTION LIKE :search_value) AND t.STR_SOCSTATUT = :STR_STATUT ORDER BY t.STR_SOCDESCRIPTION";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    public function showAllOrOneSocieteLimit($search_value, $start, $limit) {
        $arraySql = array();
        try {
            $query = "SELECT * FROM " . $this->Societe . " t WHERE (t.STR_SOCNAME LIKE :search_value OR t.STR_SOCDESCRIPTION LIKE :search_value) AND t.STR_SOCSTATUT = :STR_STATUT ORDER BY t.STR_SOCDESCRIPTION LIMIT " . $start . "," . $limit;
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    public function totalSociete($search_value) {
        $result = 0;
        try {
            $query = "SELECT COUNT(t.LG_SOCID) NOMBRE FROM " . $this->Societe . " t WHERE (t.STR_SOCNAME LIKE :search_value OR t.STR_SOCDESCRIPTION LIKE :search_value) AND t.STR_SOCSTATUT = :STR_STATUT";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $result = $rowObj["NOMBRE"];
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $result;
    }

    public function createSocieteOperateur($LG_SOCID, $LG_OPEID, $STR_SOPPHONE, $OUtilisateur) {
        $validation = false;
        $LG_SOPID = generateRandomString(20);
        try {
            $params_condition = array("LG_SOCID" => $LG_SOCID, "LG_OPEID" => $LG_OPEID, "STR_SOPSTATUT" => Parameters::$statut_enable);
            $this->OSocieteOperateur = Find($this->SocieteOperateur, $params_condition, $this->dbconnnexion);

            if ($this->OSocieteOperateur != null) {
                Parameters::buildErrorMessage("Echec d'ajout de l'opérateur. Celui existe déjà pour cette société");
                return $validation;
            }

            $params = array("LG_SOPID" => $LG_SOPID, "LG_SOCID" => $LG_SOCID, "LG_OPEID" => $LG_OPEID, "STR_SOPPHONE" => $STR_SOPPHONE, "STR_SOPSTATUT" => Parameters::$statut_enable,
                "DT_SOPCREATED" => get_now(), "LG_UTICREATEDID" => $OUtilisateur[0][0]);

            if ($this->dbconnnexion != null) {
                if (Persist($this->SocieteOperateur, $params, $this->dbconnnexion)) {
                    $validation = true;
                    Parameters::buildSuccessMessage("Opération effectuée avec succès.");
                } else {
                    Parameters::buildErrorMessage("Echec de l'opération");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de l'opération. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function updateSocieteOperateur($LG_SOPID, $STR_SOPPHONE, $OUtilisateur) {
        $validation = false;
        try {
            $this->OSocieteOperateur = $this->getSocieteOperateurUnique($LG_SOPID);

            if ($this->OSocieteOperateur == null) {
                Parameters::buildErrorMessage("Echec de mise à jour. Référence inexistante");
                return $validation;
            }

            $params_condition = array("LG_SOPID" => $this->OSocieteOperateur[0][0]);
            $params_to_update = array("STR_SOPPHONE" => $STR_SOPPHONE, "DT_SOPUPDATED" => get_now(), "LG_UTIUPDATEDID" => $OUtilisateur[0][0]);

            if ($this->dbconnnexion != null) {
                if (Merge($this->SocieteOperateur, $params_to_update, $params_condition, $this->dbconnnexion)) {
                    $validation = true;
                    Parameters::buildSuccessMessage("Opération effectuée avec succès.");
                } else {
                    Parameters::buildErrorMessage("Echec de l'opération");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de l'opération. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function getSocieteOperateur($LG_SOCID, $LG_OPEID) {
        $validation = null;
        Parameters::buildErrorMessage("Opérateur inexistante sur la société");
        try {
            $params_condition = array("LG_SOCID" => $LG_SOCID, "LG_OPEID" => $LG_OPEID);
            $validation = $this->OSocieteOperateur = Find($this->SocieteOperateur, $params_condition, $this->dbconnnexion);

            if ($this->OSocieteOperateur == null) {
                return $validation;
            }
            Parameters::buildSuccessMessage("Opérateur trouvé");
            $validation = $this->OSocieteOperateur;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function getSocieteOperateurUnique($LG_SOPID) {
        $validation = null;
        Parameters::buildErrorMessage("Opérateur inexistante sur la société");
        try {
            $params_condition = array("LG_SOPID" => $LG_SOPID, "STR_SOPPHONE" => $LG_SOPID);
            $validation = $this->OSocieteOperateur = Find($this->SocieteOperateur, $params_condition, $this->dbconnnexion, "OR");

            if ($this->OSocieteOperateur == null) {
                return $validation;
            }
            Parameters::buildSuccessMessage("Opérateur trouvé");
            $validation = $this->OSocieteOperateur;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function deleteSocieteOperateur($LG_SOPID, $STR_SOPSTATUT, $OUtilisateur) {
        $validation = false;
        try {
            $this->OSocieteOperateur = $this->getSocieteOperateurUnique($LG_SOPID);

            if ($this->OSocieteOperateur == null) {
                Parameters::buildErrorMessage("Echec de l'opération. Référence inexistante");
                return $validation;
            }

            $params_condition = array("LG_SOPID" => $this->OSocieteOperateur[0][0]);
            $params_to_update = array("STR_SOPSTATUT" => $STR_SOPSTATUT, "DT_SOPUPDATED" => get_now(), "LG_UTIUPDATEDID" => $OUtilisateur[0][0]);

            if ($this->dbconnnexion != null) {
                if (Merge($this->SocieteOperateur, $params_to_update, $params_condition, $this->dbconnnexion)) {
                    $validation = true;
                    Parameters::buildSuccessMessage("Opération effectuée avec succès");
                } else {
                    Parameters::buildErrorMessage("Echec de l'opération");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de l'opération. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function showAllOrOneSocieteOperateur($search_value, $LG_SOCID, $LG_OPEID) {
        $arraySql = array();
        try {
            $query = "SELECT t.LG_SOPID, t.STR_SOPPHONE, o.STR_OPENAME, o.STR_OPEDESCRIPTION FROM " . $this->SocieteOperateur . " t, " . $this->Operateur . " o WHERE t.LG_OPEID = o.LG_OPEID AND (t.STR_SOPPHONE LIKE :search_value OR o.STR_OPENAME LIKE :search_value OR o.STR_OPEDESCRIPTION LIKE :search_value) AND t.LG_SOCID LIKE :LG_SOCID AND t.LG_OPEID LIKE :LG_OPEID AND o.STR_OPESTATUT = :STR_STATUT AND t.STR_SOPSTATUT = :STR_STATUT ORDER BY o.STR_OPEDESCRIPTION";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'LG_SOCID' => $LG_SOCID, 'LG_OPEID' => $LG_OPEID, 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    public function createSocieteUtilisateur($LG_SOCID, $LG_UTIID, $OUtilisateur) {
        $validation = false;
        $LG_SUTID = generateRandomString(20);
        try {
            $this->OSocieteUtilisateur = $this->getSocieteUtilisateur($LG_SOCID, $LG_UTIID);

            if ($this->OSocieteUtilisateur != null) {
                Parameters::buildErrorMessage("Echec d'ajout de l'ajout de la société. Celui existe déjà pour cet utilisateur");
                return $validation;
            }

            $params = array("LG_SUTID" => $LG_SUTID, "LG_SOCID" => $LG_SOCID, "LG_UTIID" => $LG_UTIID, "STR_SUTSTATUT" => Parameters::$statut_enable,
                "DT_SUTCREATED" => get_now(), "LG_UTICREATEDID" => $OUtilisateur[0][0]);
            if ($this->dbconnnexion != null) {
                if (Persist($this->SocieteUtilisateur, $params, $this->dbconnnexion)) {
                    $validation = true;
                    Parameters::buildSuccessMessage("Opération effectuée avec succès.");
                } else {
                    Parameters::buildErrorMessage("Echec de l'opération");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de l'opération. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function getSocieteUtilisateur($LG_SOCID, $LG_UTIID) {
        $validation = null;
        try {
            $params_condition = array("LG_SOCID" => $LG_SOCID, "LG_UTIID" => $LG_UTIID);
            $validation = $this->OSocieteUtilisateur = Find($this->SocieteUtilisateur, $params_condition, $this->dbconnnexion);

            if ($this->OSocieteUtilisateur == null) {
                return $validation;
            }
            $validation = $this->OSocieteUtilisateur;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function deleteSocieteUtilisateur($LG_SUTID, $OUtilisateur) {
        $validation = false;
        try {
            $params = array("LG_SUTID" => $LG_SUTID);
            if ($this->dbconnnexion != null) {
                if (Remove($this->SocieteUtilisateur, $params, $this->dbconnnexion)) {
                    $validation = true;
                    Parameters::buildSuccessMessage("Suppression effectuée avec succès");
                } else {
                    Parameters::buildErrorMessage("Echec de suppression");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de suppression. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function showAllOrOneSocieteUtilisateur($search_value, $LG_SOCID, $LG_UTIID) {
        $arraySql = array();
        try {
            $query = "SELECT DISTINCT t.LG_SUTID, u.LG_UTIID, u.STR_UTIFIRSTLASTNAME, u.STR_UTIPHONE, u.STR_UTIMAIL, u.STR_UTILOGIN, u.STR_UTIPIC, s.STR_SOCNAME, s.STR_SOCDESCRIPTION, s.STR_SOCLOGO FROM " . $this->SocieteUtilisateur . " t, " . $this->Utilisateur . " u, " . $this->Societe . " s, " . $this->Profile . " p "
                    . "WHERE t.LG_UTIID = u.LG_UTIID AND t.LG_SOCID = s.LG_SOCID AND u.LG_PROID = p.LG_PROID AND (u.STR_UTIFIRSTLASTNAME LIKE :search_value OR u.STR_UTIPHONE LIKE :search_value OR s.STR_SOCNAME LIKE :search_value OR s.STR_SOCDESCRIPTION LIKE :search_value) AND t.LG_SOCID LIKE :LG_SOCID AND t.LG_UTIID LIKE :LG_UTIID AND u.STR_UTISTATUT = :STR_STATUT AND t.STR_SUTSTATUT = :STR_STATUT ORDER BY s.STR_SOCDESCRIPTION, u.STR_UTIFIRSTLASTNAME";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'LG_SOCID' => $LG_SOCID, 'LG_UTIID' => $LG_UTIID, 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    public function showAllOrOneSocieteUtilisateurLimit($search_value, $LG_SOCID, $LG_UTIID, $start, $limit) {
        $arraySql = array();
        try {
            $query = "SELECT DISTINCT t.LG_SUTID, u.LG_UTIID, u.STR_UTIFIRSTLASTNAME, u.STR_UTIPHONE, u.STR_UTIMAIL, u.STR_UTILOGIN, u.STR_UTIPIC, s.STR_SOCNAME, s.STR_SOCDESCRIPTION, s.STR_SOCLOGO FROM " . $this->SocieteUtilisateur . " t, " . $this->Utilisateur . " u, " . $this->Societe . " s, " . $this->Profile . " p "
                    . "WHERE t.LG_UTIID = u.LG_UTIID AND t.LG_SOCID = s.LG_SOCID AND u.LG_PROID = p.LG_PROID AND (u.STR_UTIFIRSTLASTNAME LIKE :search_value OR u.STR_UTIPHONE LIKE :search_value OR s.STR_SOCNAME LIKE :search_value OR s.STR_SOCDESCRIPTION LIKE :search_value) AND t.LG_SOCID LIKE :LG_SOCID AND t.LG_UTIID LIKE :LG_UTIID AND u.STR_UTISTATUT = :STR_STATUT AND t.STR_SUTSTATUT = :STR_STATUT ORDER BY u.STR_UTIFIRSTLASTNAME LIMIT " . $start . "," . $limit;
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'LG_SOCID' => $LG_SOCID, 'LG_UTIID' => $LG_UTIID, 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    public function totalSocieteUtilisateur($search_value, $LG_SOCID, $LG_UTIID) {
        $result = 0;
        try {
            $query = "SELECT COUNT(DISTINCT(u.LG_UTIID)) NOMBRE FROM " . $this->SocieteUtilisateur . " t, " . $this->Utilisateur . " u, " . $this->Societe . " s, " . $this->Profile . " p "
                    . "WHERE t.LG_UTIID = u.LG_UTIID AND t.LG_SOCID = s.LG_SOCID AND u.LG_PROID = p.LG_PROID AND (u.STR_UTIFIRSTLASTNAME LIKE :search_value OR u.STR_UTIPHONE LIKE :search_value OR s.STR_SOCNAME LIKE :search_value OR s.STR_SOCDESCRIPTION LIKE :search_value) AND t.LG_SOCID LIKE :LG_SOCID AND t.LG_UTIID LIKE :LG_UTIID AND u.STR_UTISTATUT = :STR_STATUT AND t.STR_SUTSTATUT = :STR_STATUT";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'LG_SOCID' => $LG_SOCID, 'LG_UTIID' => $LG_UTIID, 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $result = $rowObj["NOMBRE"];
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $result;
    }

    public function getAgence($LG_AGEID, $displayMessage = false) {
        $validation = null;
        try {
            $params_condition = array("lg_ageid" => $LG_AGEID, "str_agename" => $LG_AGEID);
            $validation = $this->OAgence = Find($this->Agence, $params_condition, $this->dbconnnexion, "OR");

            if ($displayMessage) {
                if ($this->OAgence == null) {
                    Parameters::buildErrorMessage("Agence inexistante");
                    return $validation;
                }
                Parameters::buildSuccessMessage($this->OListe[0][1] . " trouvée");
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }
    
    public function showAllOrOneAgence($search_value) {
        $arraySql = array();
        try {
            $query = "SELECT * FROM ".$this->Agence." t WHERE (t.str_agename like :search_value or t.str_agedescription like :search_value) and t.str_agestatut = :STR_STATUT order by t.str_agename";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }
    
    public function showAllOrOneAgenceLimit($search_value, $start, $limit) {
        $arraySql = array();
        try {
            $query = "SELECT * FROM ".$this->Agence." t WHERE (t.str_agename like :search_value or t.str_agedescription like :search_value) and t.str_agestatut = :STR_STATUT order by t.str_agename LIMIT " . $start . "," . $limit;
            $res = $this->dbconnnexion->prepare($query);
//            echo $query;
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }
    
    public function totalAgence($search_value) {
        $result = 0;
        try {
            $query = "SELECT COUNT(t.lg_ageid) NOMBRE FROM ".$this->Agence." t WHERE (t.str_agename like :search_value or t.str_agedescription like :search_value) and t.str_agestatut = :STR_STATUT";
            $res = $this->dbconnnexion->prepare($query);
//            echo $query;
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $result = $rowObj["NOMBRE"];
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $result;
    }

    public function getListe($LG_LSTID, $displayMessage = false) {
        $validation = null;
        //Parameters::buildErrorMessage("Opérateur inexistant");
        try {
            $params_condition = array("lg_lstid" => $LG_LSTID, "str_lstvalue" => $LG_LSTID);
            $validation = $this->OListe = Find($this->Liste, $params_condition, $this->dbconnnexion, "OR");

            if ($displayMessage) {
                if ($this->OListe == null) {
                    Parameters::buildErrorMessage("Parametre inexistant");
                    return $validation;
                }
//                echo "====".$LG_LSTID;
                Parameters::buildSuccessMessage($this->OListe[0][2] . " trouvé");
            }

            //$validation = $this->OListe;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function showAllOrOneListe($search_value, $LG_TYLID, $STR_LSTOTHERVALUE, $order) {
        $arraySql = array();
        try {
            $query = "select t.*, tp.str_tyldescription from liste t, typeliste tp where t.lg_tylid = tp.lg_tylid and (lower(t.str_lstvalue) like :search_value or lower(t.str_lstdescription) like :search_value or lower(t.str_lstothervalue) like :search_value or lower(t.str_lstothervalue1) like :search_value or lower(t.str_lstothervalue2) like :search_value) 
                and (t.lg_tylid like :lg_tylid or tp.str_tylname like :lg_tylid) and t.str_lststatut = :str_lststatut and (t.str_lstothervalue like :str_lstothervalue or t.str_lstvalue like :str_lstothervalue) 
                order by " . (!empty($order) ? $order : 't.str_lstdescription');
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'lg_tylid' => $LG_TYLID, 'str_lstothervalue' => $STR_LSTOTHERVALUE, 'str_lststatut' => Parameters::$statut_enable));

            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        //echo count($arraySql);
        return $arraySql;
    }

    public function showAllOrOneListeLimit($search_value, $LG_TYLID, $STR_LSTOTHERVALUE, $order, $start, $limit) {
        $arraySql = array();
        try {
            $query = "select t.*, tp.str_tyldescription from liste t, typeliste tp where t.lg_tylid = tp.lg_tylid and (lower(t.str_lstvalue) like :search_value or lower(t.str_lstdescription) like :search_value or lower(t.str_lstothervalue) like :search_value or lower(t.str_lstothervalue1) like :search_value or lower(t.str_lstothervalue2) like :search_value) 
                and (t.lg_tylid like :lg_tylid or tp.str_tylname like :lg_tylid) and t.str_lststatut = :str_lststatut and (t.str_lstothervalue like :str_lstothervalue or t.str_lstvalue like :str_lstothervalue) 
                order by " . (!empty($order) ? $order : 't.str_lstdescription') . " limit " . $start . "," . $limit;
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'lg_tylid' => $LG_TYLID, 'str_lstothervalue' => $STR_LSTOTHERVALUE, 'str_lststatut' => Parameters::$statut_enable));

            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    public function totalListe($search_value, $LG_TYLID, $STR_LSTOTHERVALUE) {
        $result = 0;
        try {
            $query = "select COUNT(t.lg_lstid) NOMBRE from liste t, typeliste tp where t.lg_tylid = tp.lg_tylid and (lower(t.str_lstvalue) like :search_value or lower(t.str_lstdescription) like :search_value or lower(t.str_lstothervalue) like :search_value or lower(t.str_lstothervalue1) like :search_value or lower(t.str_lstothervalue2) like :search_value) 
                and (t.lg_tylid like :lg_tylid or tp.str_tylname like :lg_tylid) and t.str_lststatut = :str_lststatut and (t.str_lstothervalue like :str_lstothervalue or t.str_lstvalue like :str_lstothervalue) ";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => $search_value . "%", 'lg_tylid' => $LG_TYLID, 'str_lstothervalue' => $STR_LSTOTHERVALUE, 'str_lststatut' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $result = $rowObj["NOMBRE"];
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $result;
    }

    public function createBanniere($STR_BANNAME, $STR_BANDESCRIPTION, $LG_AGEID, $STR_BANPATH, $DT_BANBEGIN, $DT_BANEND, $LG_EVEID, $BOOL_BANEVENT, $displayMessage, $OUtilisateur) {
        $validation = false;
        $LG_BANID = generateRandomString(40);
        try {
            $this->OBanniere = $this->getBanniere($LG_EVEID, false);
            if ($this->OBanniere != null) {
                Parameters::buildErrorMessage("Echec d'enregistrement. Une banniere a deja ete cree pour cet evenement");
                return $validation;
            }

            $this->OAgence = $this->getAgence($LG_AGEID);
            if ($this->OAgence == null) {
                Parameters::buildErrorMessage("Echec d'enregistrement de la banniere. Agence inexistante");
                return $validation;
            }

//            echo "=====>" . $LG_EVEID . "+++++";
            $params = array("lg_banid" => $LG_BANID, "lg_ageid" => $this->OAgence[0][0], "str_banname" => $STR_BANNAME, "str_bandescription" => $STR_BANDESCRIPTION, "str_banpath" => $STR_BANPATH, "dt_banbegin" => $DT_BANBEGIN, "dt_banend" => $DT_BANEND,
                "lg_eveid" => $LG_EVEID, "bool_banevent" => $BOOL_BANEVENT, "lg_uticreatedid" => $OUtilisateur[0][0], "str_banstatut" => Parameters::$statut_enable, "dt_bancreated" => get_now());

//            var_dump($params);
            if ($this->dbconnnexion != null) {
                if (Persist($this->Banniere, $params, $this->dbconnnexion)) {
                    $validation = true;
                    if ($displayMessage) {
                        Parameters::buildSuccessMessage("Banniere " . $STR_BANNAME . " enregistree avec succès.");
                    }
                } else {
                    Parameters::buildErrorMessage("Echec d'enregistrement de la banniere");
                }
            }
        } catch (Exception $exc) {
            var_dump($exc->getTraceAsString());
            //$exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec d'enregistrement de la banniere. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function updateBanniere($LG_BANID, $STR_BANNAME, $STR_BANDESCRIPTION, $LG_AGEID, $STR_BANPATH, $DT_BANBEGIN, $DT_BANEND, $LG_EVEID, $BOOL_BANEVENT, $displayMessage, $OUtilisateur) {
        $validation = false;
        try {
            $this->OBanniere = $this->getBanniere($LG_BANID, false);
            if ($this->OBanniere == null) {
                $this->createBanniere($STR_BANNAME, $STR_BANDESCRIPTION, $LG_AGEID, $STR_BANPATH, $DT_BANBEGIN, $DT_BANEND, $LG_EVEID, $BOOL_BANEVENT, $displayMessage, $OUtilisateur);
                //Parameters::buildErrorMessage("Echec de mise à jour. Banniere inexistante"); ///a reprendre tout a l heure
                return $validation;
            }

            $this->OAgence = $this->getAgence($LG_AGEID);
            if ($this->OAgence == null) {
                Parameters::buildErrorMessage("Echec de mise à jour de la banniere. Agence inexistante");
                return $validation;
            }
            $params_condition = array("lg_banid" => $this->OBanniere[0][0]);
            $params_to_update = array("lg_ageid" => $this->OAgence[0][0], "str_banname" => $STR_BANNAME, "str_bandescription" => $STR_BANDESCRIPTION, "str_banpath" => $STR_BANPATH, "dt_banbegin" => $DT_BANBEGIN, "dt_banend" => $DT_BANEND,
                "lg_eveid" => $LG_EVEID, "bool_banevent" => $BOOL_BANEVENT, "lg_utiupdatedid" => $OUtilisateur[0][0], "dt_banupdated" => get_now());

            if ($this->dbconnnexion != null) {
                if (Merge($this->Banniere, $params_to_update, $params_condition, $this->dbconnnexion)) {
                    $validation = true;
                    if ($displayMessage) {
                        Parameters::buildSuccessMessage("Banniere " . $STR_BANNAME . " mise à jour avec succès");
                    }
                } else {
                    Parameters::buildErrorMessage("Echec de mise à jour de la banniere");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de mise à jour de la banniere. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function getBanniere($LG_BANID, $displayMessage) {
        $validation = null;
        try {
            $params_condition = array("lg_banid" => $LG_BANID, "str_banname" => $LG_BANID, "lg_eveid" => $LG_BANID);
            $validation = $this->OBanniere = Find($this->Banniere, $params_condition, $this->dbconnnexion, "OR");

            if ($displayMessage) {
                if ($this->OBanniere == null) {
                    Parameters::buildErrorMessage("Banniere inexistant");
                    return $validation;
                }
                Parameters::buildSuccessMessage("Banniere " . $this->OBanniere[0][1] . " trouvée");
            }

            $validation = $this->OBanniere;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function deleteBanniere($LG_BANID, $STR_BANSTATUT, $OUtilisateur) {
        $validation = false;
        try {
            $this->OBanniere = $this->getBanniere($LG_BANID);

            if ($this->OBanniere == null) {
                Parameters::buildErrorMessage("Echec de l'opération. Bannière inexistante"); ///a reprendre tout a l heure
                return $validation;
            }

            $params_condition = array("lg_banid" => $this->OBanniere[0][0]);
            $params_to_update = array("str_banstatut" => $STR_BANSTATUT, "lg_utiupdatedid" => $OUtilisateur[0][0], "dt_banupdated" => get_now());

            if ($this->dbconnnexion != null) {
                if (Merge($this->Banniere, $params_to_update, $params_condition, $this->dbconnnexion)) {
                    $validation = true;
                    Parameters::buildSuccessMessage("Opération effectuée avec succès");
                } else {
                    Parameters::buildErrorMessage("Echec de l'opération. Veuillez réessayer svp");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de l'opération. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function showAllOrOneBanniere($search_value, $LG_AGEID, $LG_EVEID, $DT_BEGIN, $DT_END, $start, $limit) {
        $arraySql = array();
        try {
            //echo $LG_AGEID . "===" . $LG_EVEID . "###" . $DT_BEGIN . "----" . $DT_END;
            $query = "SELECT t.*, a.str_agename, a.str_agedescription FROM " . $this->Banniere . " t, " . $this->Agence . " a WHERE t.lg_ageid = a.lg_ageid and (t.str_banname like :search_value or t.str_bandescription like :search_value) and t.lg_ageid like :LG_AGEID and (t.lg_eveid like :LG_EVEID " . ($LG_EVEID == "%" || $LG_EVEID == "" ? " or t.lg_eveid is null" : "") . ") and (t.dt_banbegin BETWEEN :DT_BEGIN and :DT_END) and t.str_banstatut != :STR_STATUT ORDER BY t.dt_banbegin LIMIT " . $start . "," . $limit;
            //echo "=====" . $query;
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => "%" . $search_value . "%", 'LG_AGEID' => $LG_AGEID, 'LG_EVEID' => $LG_EVEID, "DT_BEGIN" => $DT_BEGIN, "DT_END" => $DT_END, 'STR_STATUT' => Parameters::$statut_delete));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    public function totalBanniere($search_value, $LG_AGEID, $LG_EVEID, $DT_BEGIN, $DT_END) {
        $result = 0;
        try {
            $query = "SELECT COUNT(t.LG_BANID) NOMBRE FROM " . $this->Banniere . " t WHERE (t.str_banname like :search_value or t.str_bandescription like :search_value) and t.lg_ageid like :LG_AGEID and (t.lg_eveid like :LG_EVEID " . ($LG_EVEID == "%" || $LG_EVEID == "" ? " or t.lg_eveid is null" : "") . ") and (t.dt_banbegin BETWEEN :DT_BEGIN and :DT_END) and t.str_banstatut != :STR_STATUT";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => "%" . $search_value . "%", 'LG_AGEID' => $LG_AGEID, 'LG_EVEID' => $LG_EVEID, "DT_BEGIN" => $DT_BEGIN, "DT_END" => $DT_END, 'STR_STATUT' => Parameters::$statut_delete));
            while ($rowObj = $res->fetch()) {
                $result = $rowObj["NOMBRE"];
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $result;
    }

    public function createClient($STR_CLIFIRSTLASTNAME, $STR_CLIPHONE, $STR_CLILOGIN, $STR_CLIMAIL) {
        $validation = "";
        $OJson = array();
        $arrayJson = array();
        $LG_CLIID = generateRandomString(20);
        $STR_CLIPASSWORD = generateRandomNumber(5);
        $contentHtml = "";
        $contentBasic = "";
        try {
            $this->OSociete = $this->getSociete(Parameters::$default_societe);
            $params = array("lg_cliid" => $LG_CLIID, "str_clifirstlastname" => $STR_CLIFIRSTLASTNAME, "str_cliphone" => $STR_CLIPHONE, "str_clilogin" => $STR_CLILOGIN, "str_clipassword" => sha1($STR_CLIPASSWORD),
                "str_climail" => $STR_CLIMAIL, "str_clistatut" => Parameters::$statut_enable, "dt_clicreated" => get_now());
            if ($this->dbconnnexion != null) {
                if (Persist($this->Client, $params, $this->dbconnnexion)) {
                    $validation = $LG_CLIID;

                    $OJson["mail_address"] = $STR_CLIMAIL;
                    $OJson["mail_infos"] = $STR_CLIFIRSTLASTNAME;
                    $arrayJson[] = $OJson;
//                    echo json_encode($arrayJson);
                    $arrayAddressDestinataire = json_decode(json_encode($arrayJson));
                    $arrayAddressCopy = array();
                    $arrayAttachment = array();

                    $contentHtml = readFilename(Parameters::$template_mailling);
                    $contentHtml = $contentHtml = str_replace("[STR_PASSWORD]", $STR_CLIPASSWORD, (str_replace("[STR_LOGIN]", $STR_CLILOGIN, (str_replace("[STR_LINK]", "http://www.guineeticket.com/", (str_replace("[STR_SOCMAIL]", $this->OSociete[0][10], (str_replace("[STR_SOCNAME]", $this->OSociete[0][1], (str_replace("[STR_SOCADRESSE]", $this->OSociete[0][9], (str_replace("[STR_AGENAME]", Parameters::$default_agencename, (str_replace("[STR_FIRSTLASTNAME]", $STR_CLIFIRSTLASTNAME, $contentHtml)))))))))))))));

                    $contentBasic = readFilename(Parameters::$alternativetemplate_mailling);
                    $contentBasic = $contentHtml = str_replace("[STR_PASSWORD]", $STR_CLIPASSWORD, (str_replace("[STR_LOGIN]", $STR_CLILOGIN, (str_replace("[STR_SOCMAIL]", $this->OSociete[0][10], (str_replace("[STR_SOCNAME]", $this->OSociete[0][1], (str_replace("[STR_SOCADRESSE]", $this->OSociete[0][9], (str_replace("[STR_AGENAME]", Parameters::$default_agencename, (str_replace("[STR_FIRSTLASTNAME]", $STR_CLIFIRSTLASTNAME, $contentBasic)))))))))))));

                    sendMail($arrayAddressDestinataire, $arrayAddressCopy, $arrayAttachment, "Inscription Plateforme Guinée Ticket", $contentHtml, $contentBasic);

                    Parameters::buildSuccessMessage("Compte de " . $STR_CLIFIRSTLASTNAME . " créé avec succès.");
                } else {
                    Parameters::buildErrorMessage("Echec de création du compte");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de création du compte. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function getClient($LG_CLIID, $displayMessage = false) {
        $validation = null;
        try {
            $params_condition = array("lg_cliid" => $LG_CLIID, "str_cliphone" => $LG_CLIID);
            $validation = $this->OClient = Find($this->Client, $params_condition, $this->dbconnnexion, "OR");

            if ($this->OClient == null) {
                return $validation;
            }
            Parameters::buildSuccessMessage("Client " . $this->OClient[0][1] . " trouvé");
            $validation = $this->OClient;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function doConnexionClient($STR_CLILOGIN, $STR_CLIPASSWORD) {
        $validation = array();
        $Object = null;
        $STR_CLITOKEN = generateRandomString(20);
        Parameters::buildErrorMessage("Echec de connexion. Identifiant ou mot de passe incorrecte");
        try {
            //$query = "SELECT t.*, p.STR_PRODESCRIPTION, p.STR_PROTYPE, s.LG_SOCID, s.STR_SOCNAME, s.STR_SOCDESCRIPTION, s.STR_SOCLOGO FROM " . $this->Utilisateur . " t, " . $this->Profile . " p, " . $this->Societe . " s WHERE t.LG_PROID = p.LG_PROID AND t.STR_UTILOGIN = :STR_UTILOGIN AND t.STR_UTIPASSWORD = :STR_UTIPASSWORD AND t.STR_UTISTATUT = :STR_UTISTATUT LIMIT 1";
            $query = "SELECT t.* FROM " . $this->Client . " t where t.str_clilogin = :STR_CLILOGIN and t.str_clipassword = :STR_CLIPASSWORD and t.str_clistatut = :STR_CLISTATUT limit 1";
//            var_dump($query);
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('STR_CLILOGIN' => $STR_CLILOGIN, 'STR_CLIPASSWORD' => sha1($STR_CLIPASSWORD), 'STR_CLISTATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $Object[] = $rowObj;
            }

            $this->OClient = $Object;
//            var_dump($this->OUtilisateur);

            if ($this->OClient == null) {
                return $validation;
            }

            $this->updateTokenClient($this->OClient, $STR_CLITOKEN);
            $this->OClient[0]["str_clitoken"] = $STR_CLITOKEN;
            Parameters::buildSuccessMessage("Bienvenu " . $this->OClient[0][1]);
            $validation = $this->OClient;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function doDisConnexionClient($STR_CLITOKEN) {
        $validation = false;
        Parameters::buildErrorMessage("Echec de déconnexion. Veuillez réessayer svp!");
        try {
            $params_condition = array('str_clitoken' => $STR_CLITOKEN);
            $this->OClient = Find($this->Client, $params_condition, $this->dbconnnexion);

            if ($this->OClient == null) {
                return $validation;
            }
            $this->updateTokenClient($this->OClient, "");
            Parameters::buildSuccessMessage("Déconnexion de " . $this->OClient[0][1] . " effectuée avec succès");
            $validation = true;
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $validation;
    }

    public function updateTokenClient($OClient, $STR_CLITOKEN) {
        $validation = false;
        try {
            $params_condition = array("lg_cliid" => $OClient[0][0]);
            $params_to_update = array("str_clitoken" => $STR_CLITOKEN, "dt_clilastconnected" => get_now());

            if (Merge($this->Client, $params_to_update, $params_condition, $this->dbconnnexion)) {
                $validation = true;
            }
        } catch (Exception $ex) {
            $exc->getTraceAsString();
        }
    }

    public function createUtilisateur($STR_UTIFIRSTLASTNAME, $STR_UTIPHONE, $STR_UTILOGIN, $STR_UTIMAIL, $LG_PROID, $LG_AGEID, $STR_UTIPIC, $OUtilisateur) {
        $validation = "";
        $LG_UTIID = generateRandomString(20);
        $STR_UTIPASSWORD = generateRandomNumber(5);
        $OJson = array();
        $arrayJson = array();
        try {
            $this->OSociete = $this->getSociete(Parameters::$default_societe);

            $this->OAgence = $this->getAgence($LG_AGEID);
            if ($this->OAgence == null) {
                Parameters::buildErrorMessage("Echec de création de l'utilisateur. Agence inexistante");
                return $validation;
            }

            $this->OProfile = $this->getProfile($LG_PROID);
            if ($this->OProfile == null) {
                Parameters::buildErrorMessage("Echec de création de l'utilisateur. Profil inexistant");
                return $validation;
            }

            $params = array("lg_utiid" => $LG_UTIID, "str_utifirstlastname" => $STR_UTIFIRSTLASTNAME, "str_utiphone" => $STR_UTIPHONE, "str_utilogin" => $STR_UTILOGIN, "str_utipassword" => sha1($STR_UTIPASSWORD),
                "str_utimail" => $STR_UTIMAIL, "str_utistatut" => Parameters::$statut_enable, "lg_proid" => $LG_PROID, "lg_ageid" => $LG_AGEID, "dt_uticreated" => get_now(), "lg_uticreatedid" => $OUtilisateur[0][0],
                "str_utipic" => ($STR_UTIPIC == "" ? Parameters::$default_picture : $STR_UTIPIC));
            if ($this->dbconnnexion != null) {
                if (Persist($this->Utilisateur, $params, $this->dbconnnexion)) {
                    $OJson["mail_address"] = $STR_UTIMAIL;
                    $OJson["mail_infos"] = $STR_UTIFIRSTLASTNAME;
                    $this->OListe = $this->getListe(Parameters::$listeValue[0]);

                    $arrayJson[] = $OJson;
//                    echo json_encode($arrayJson);
                    $arrayAddressDestinataire = json_decode(json_encode($arrayJson));
                    $arrayAddressCopy = array();
                    $arrayAttachment = array();

                    $contentHtml = readFilename(Parameters::$template_mailling);
                    $contentHtml = str_replace("[STR_PASSWORD]", $STR_UTIPASSWORD, (str_replace("[STR_LOGIN]", $STR_UTILOGIN, (str_replace("[STR_LINK]", ($this->OListe != null ? $this->OListe[0][3] : ""), (str_replace("[STR_SOCMAIL]", $this->OSociete[0][10], (str_replace("[STR_SOCNAME]", $this->OSociete[0][1], (str_replace("[STR_SOCADRESSE]", $this->OSociete[0][9], (str_replace("[STR_AGENAME]", Parameters::$default_agencename, (str_replace("[STR_FIRSTLASTNAME]", $STR_UTIFIRSTLASTNAME, $contentHtml)))))))))))))));

                    $contentBasic = readFilename(Parameters::$alternativetemplate_mailling);
                    $contentBasic = str_replace("[STR_PASSWORD]", $STR_UTIPASSWORD, (str_replace("[STR_LOGIN]", $STR_UTILOGIN, (str_replace("[STR_SOCMAIL]", $this->OSociete[0][10], (str_replace("[STR_SOCNAME]", $this->OSociete[0][1], (str_replace("[STR_SOCADRESSE]", $this->OSociete[0][9], (str_replace("[STR_AGENAME]", Parameters::$default_agencename, (str_replace("[STR_FIRSTLASTNAME]", $STR_UTIFIRSTLASTNAME, $contentBasic)))))))))))));

                    sendMail($arrayAddressDestinataire, $arrayAddressCopy, $arrayAttachment, "Création de compte utilisateur - Plateforme Guinée Ticket", $contentHtml, $contentBasic);

                    Parameters::buildSuccessMessage("Compte de " . $STR_UTIFIRSTLASTNAME . " créé avec succès.");
                } else {
                    Parameters::buildErrorMessage("Echec de création du compte");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de création du compte. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function updateUtilisateur($LG_UTIID, $STR_UTIFIRSTLASTNAME, $STR_UTIPHONE, $STR_UTILOGIN, $STR_UTIMAIL, $LG_PROID, $LG_AGEID, $STR_UTIPIC, $OUtilisateur) {
        $validation = false;
        try {
            $this->OUtilisateur = $this->getUtilisateur($LG_UTIID);

            if ($this->OUtilisateur == null) {
                Parameters::buildErrorMessage("Echec de mise à jour. Utilisateur inexistant");
                return $validation;
            }

            $this->OAgence = $this->getAgence($LG_AGEID);
            if ($this->OAgence == null) {
                Parameters::buildErrorMessage("Echec de mise à jour de l'utilisateur. Agence inexistante");
                return $validation;
            }

            $this->OProfile = $this->getProfile($LG_PROID);
            if ($this->OProfile == null) {
                Parameters::buildErrorMessage("Echec de mise à jour de l'utilisateur. Profil inexistant");
                return $validation;
            }

            $params_condition = array("lg_utiid" => $this->OUtilisateur[0][0]);
            $params_to_update = array("str_utifirstlastname" => $STR_UTIFIRSTLASTNAME, "str_utiphone" => $STR_UTIPHONE, "str_utipic" => ($STR_UTIPIC == "" ? $this->OUtilisateur[0][13] : $STR_UTIPIC),
                "str_utimail" => $STR_UTIMAIL, "str_utilogin" => $STR_UTILOGIN, "lg_proid" => $this->OProfile[0][0], "lg_ageid" => $this->OAgence[0][0], "dt_utiupdated" => get_now(),
                "lg_utiupdatedid" => $OUtilisateur[0][0]);

            if ($this->dbconnnexion != null) {
                if (Merge($this->Utilisateur, $params_to_update, $params_condition, $this->dbconnnexion)) {
                    $validation = true;
                    Parameters::buildSuccessMessage("Utilisateur " . $STR_UTIFIRSTLASTNAME . " mis à jour avec succès");
                } else {
                    Parameters::buildErrorMessage("Echec de mise à jour de l'utilisateur");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de mise à jour de l'utilisateur. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function deleteUtilisateur($LG_UTIID, $OUtilisateur) {
        $validation = false;
        try {
            $this->OUtilisateur = $this->getUtilisateur($LG_UTIID);

            if ($this->OUtilisateur == null) {
                Parameters::buildErrorMessage("Echec de suppression. Utilisateur inexistant");
                return $validation;
            }

            $params_condition = array("lg_utiid" => $this->OUtilisateur[0][0]);
            $params_to_update = array("str_utistatut" => Parameters::$statut_delete, "dt_utiupdated" => get_now(), "lg_utiupdatedid" => $OUtilisateur[0][0]);

            if ($this->dbconnnexion != null) {
                if (Merge($this->Utilisateur, $params_to_update, $params_condition, $this->dbconnnexion)) {
                    $validation = true;
                    Parameters::buildSuccessMessage("Utilisateur " . $this->OUtilisateur[0][1] . " supprimé avec succès");
                } else {
                    Parameters::buildErrorMessage("Echec de suppression de l'utilisateur");
                }
            }
        } catch (Exception $exc) {
            $exc->getTraceAsString();
            Parameters::buildErrorMessage("Echec de suppression de l'utilisateur. Veuillez contacter votre administrateur");
        }
        return $validation;
    }

    public function showAllOrOneUtilisateur($search_value, $LG_AGEID, $LG_PROID, $start, $limit) {
        $arraySql = array();
        try {
            $query = "SELECT t.*, a.str_agename, a.str_agedescription, p.str_proname, p.str_prodescription FROM " . $this->Utilisateur . " t, " . $this->Agence . " a, " . $this->Profile . " p WHERE t.lg_ageid = a.lg_ageid and t.lg_proid = p.lg_proid and (t.str_utifirstlastname LIKE :search_value or t.str_utiphone like :search_value OR t.str_utimail like :search_value) and t.lg_proid like :LG_PROID and t.lg_ageid like :LG_AGEID and t.str_utistatut = :STR_STATUT order by t.str_utifirstlastname LIMIT " . $start . "," . $limit;
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => "%" . $search_value . "%", 'LG_AGEID' => $LG_AGEID, 'LG_PROID' => $LG_PROID, 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    public function totalUtilisateur($search_value, $LG_AGEID, $LG_PROID) {
        $result = 0;
        try {
            $query = "SELECT COUNT(t.lg_utiid) NOMBRE FROM " . $this->Utilisateur . " t, " . $this->Agence . " a, " . $this->Profile . " p WHERE t.lg_ageid = a.lg_ageid and t.lg_proid = p.lg_proid and (t.str_utifirstlastname LIKE :search_value or t.str_utiphone like :search_value OR t.str_utimail like :search_value) and t.lg_proid like :LG_PROID and t.lg_ageid like :LG_AGEID and t.str_utistatut = :STR_STATUT";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array('search_value' => "%" . $search_value . "%", 'LG_AGEID' => $LG_AGEID, 'LG_PROID' => $LG_PROID, 'STR_STATUT' => Parameters::$statut_enable));
            while ($rowObj = $res->fetch()) {
                $result = $rowObj["NOMBRE"];
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $result;
    }

    public function showAllOrOneProfilePrivilege($LG_PROID, $LG_PRIID, $STR_PRIKIND, $LG_PRIPARENTID, $LG_PRIGROUPID) {
        $arraySql = array();
        try {
            $query = "SELECT p.lg_priid, p.str_priname, p.str_priclass, p.str_priurl FROM " . $this->Profile . " t, " . $this->Privilege . " p, " . $this->ProfilePrivilege . " pp WHERE t.lg_proid = pp.lg_proid and p.lg_priid = pp.lg_priid and t.lg_proid like :LG_PROID and p.lg_priid like :LG_PRIID and (t.str_prostatut = :STR_STATUT and p.str_pristatut = :STR_STATUT) and p.str_prikind like :STR_PRIKIND and (p.lg_priparentid like :LG_PRIPARENTID or p.lg_priparentid is null) and (p.lg_prigroupid like :LG_PRIGROUPID or p.lg_prigroupid is null) order by p.int_pripriority";
//            echo "=====" . $query;
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array("LG_PROID" => $LG_PROID . "%", "LG_PRIID" => $LG_PRIID, "STR_STATUT" => Parameters::$statut_enable, "STR_PRIKIND" => $STR_PRIKIND, "LG_PRIPARENTID" => $LG_PRIPARENTID, 'LG_PRIGROUPID' => $LG_PRIGROUPID));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    public function generateMenu($LG_PROID) {
        $arrayJson = array();
        $arrayJson_groupemenu = array();
        $arrayJson_menu = array();
        $arrayJson_sousmenu = array();
        try {
            foreach ($this->showAllOrOneProfilePrivilege($LG_PROID, "%", "0", "%", "%") as $value) {
                $arrayJson_groupemenu["id"] = $value['lg_priid'];
                $arrayJson_groupemenu["str_name"] = $value['str_priname'];
                $arrayJson_groupemenu["str_class"] = $value['str_priclass'];
                foreach ($this->showAllOrOneProfilePrivilege($LG_PROID, "%", "1", "%", $value['lg_priid']) as $menu) {
                    $jsonMenu = array();
                    $jsonMenu["id"] = $menu['lg_priid'];
                    $jsonMenu["str_name"] = $menu['str_priname'];
                    $jsonMenu["str_url"] = ($menu['str_priurl'] == null || $menu['str_priurl'] == "" ? "#" : $menu['str_priurl']);
                    $jsonMenu["str_class"] = $menu['str_priclass'];
                    foreach ($this->showAllOrOneProfilePrivilege($LG_PROID, "%", "2", $menu['lg_priid'], "%") as $sousmenu) {
                        $jsonSousMenu = array();
                        $jsonSousMenu["id"] = $sousmenu['lg_priid'];
                        $jsonSousMenu["str_name"] = $sousmenu['str_priname'];
                        $jsonSousMenu["str_url"] = ($sousmenu['str_priurl'] == null || $sousmenu['str_priurl'] == "" ? "#" : $sousmenu['str_priurl']);
                        $jsonSousMenu["str_class"] = $sousmenu['str_priclass'];
                        $arrayJson_sousmenu[] = $jsonSousMenu;
                    }
                    $jsonMenu["sousmenu"] = $arrayJson_sousmenu;
                    $arrayJson_menu[] = $jsonMenu;
                    $arrayJson_sousmenu = array();
                }
                $arrayJson_groupemenu["menu"] = $arrayJson_menu;
                $arrayJson[] = $arrayJson_groupemenu;
                $arrayJson_menu = array();
            }
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
        return $arrayJson;
    }

    public function showAllOrOnePrivilege($search_value, $STR_PRITYPE) {
        $arraySql = array();
        try {
            $query = "SELECT * FROM ".$this->Privilege." t WHERE (lower(t.str_priname) like lower(:search_value)  or lower(t.str_pridescription) like lower(:search_value)) and t.str_pritype like :STR_PRITYPE and t.str_pristatut = :STR_STATUT order by t.str_pridescription";
            $res = $this->dbconnnexion->prepare($query);
            //exécution de la requête
            $res->execute(array("search_value" => $search_value . "%", "STR_STATUT" => Parameters::$statut_enable, "STR_PRITYPE" => $STR_PRITYPE));
            while ($rowObj = $res->fetch()) {
                $arraySql[] = $rowObj;
            }
            $res->closeCursor();
        } catch (Exception $exc) {
            $exc->getTraceAsString();
        }
        return $arraySql;
    }

    //fin gestion des sociétés
}
