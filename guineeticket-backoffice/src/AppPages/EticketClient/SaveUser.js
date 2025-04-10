import React, { useContext, useEffect, useState, useCallback } from "react";
import Switch from "react-switch";
import { toast, ToastContainer } from "react-toastify";
import { EventContext } from "../../contexts/EventProvider";
import { useNavigate } from "react-router-dom";
import { crudData } from "../../services/apiUtils";
import { Modal, Button, Form } from "react-bootstrap";
import FileUploader from "../FileUploader/FileUploader";
// import EventSummary from './EventSummary'
import Swal from "sweetalert2"; // Importation de la bibliothèque pour afficher des boîtes de dialogue
// import Select from 'react-select'
import Select from "react-select";
import { HashLoader } from "react-spinners";

import { useLocation } from "react-router-dom";


import "react-toastify/dist/ReactToastify.css";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTrash,
  faInfoCircle,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

// import EventSummary from './EventSummary'
import { Calendar } from "primereact/calendar";

//

import { loadStores, useLoadStores } from "../../utils/apiUtils";
import { urlToFile, processFile } from "../../utils/fileUtils";
import { confirmAction } from "../../utils/notificationUtils";
import { authService } from "../../services/AuthService";
import { convertToFullDate } from "../../utils/dateUtils";
import {
  createCategoryChangeHandler,
  handleSelectChange,
  convertTimeToFullDate,
  handleFormChange,
  formatDate,
} from "../../utils/formUtils";

import PageTitle from "../PageTitle";
import ActionButton from "../ActionButton";
import { DatePicker, TimePicker } from "rsuite";
import { SelectPicker, VStack } from "rsuite";
import CardHeader from "../CardHeader";
import { Loader, Placeholder } from "rsuite";

const SaveUser = () => {
  // const { selectedEvent } = useContext(EventContext);
  const [eventDetails, setEventDetails] = useState(null);
  const [previewPic, setPreviewPic] = useState(null);
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const [utilisateurId, setutilisateurId] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const endPoint = process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL;

  useEffect(() => {
    const data = authService.checkAuth(navigate);
    if (data) {
      setUserData(data); // Stocke les données utilisateur si connecté
    }
    // Si non connecté, la navigation est gérée dans checkAuth.
  }, [navigate]);

  const getInitialFormData = (userData) => ({
    STR_UTIPIC: null,
    STR_UTIMAIL: "",
    STR_UTILOGIN: "",
    STR_UTIPHONE: "",
    STR_UTIFIRSTLASTNAME: "",
    STR_UTITOKEN: userData?.STR_UTITOKEN || "",
    LG_AGEREQUESTID: userData?.LG_AGEID || 1,
    LG_AGEID: userData?.LG_AGEID || 1,
    LG_PROID: userData?.LG_PROID || 1,
    mode: "createUtilisateur",
  });

  const resetForm = () => {
    setFormData(getInitialFormData(userData));
    setPreviewPic(null);
  };
  const [formData, setFormData] = useState(getInitialFormData(userData));

  // ++++++++++++++++++++++++++++++++++++++++++ FONCTION GLOBALLE ++++++++++++++++++++++++++++++++++++++++++

  //LISTE DES LIEU D'EVENT
  // useEffect(() => {
  //   loadStores(
  //     { mode: "listListe", LG_TYLID: "7" },
  //     endPoint,
  //     setlieuActiviteData,
  //     {
  //       valueKey: "LG_LSTID",
  //       labelKey: "STR_LSTDESCRIPTION",
  //     }
  //   );
  // }, [userData, endPoint]);

  const profilUtilisateur = useLoadStores({ mode: "listProfile", STR_PROTYPE: "system" }, endPoint, { valueKey: "LG_PROID", labelKey: "STR_PRODESCRIPTION" });
  const aganceData = useLoadStores({ mode: "listAgence" }, endPoint, { valueKey: "LG_AGEID", labelKey: "STR_AGEDESCRIPTION" });


  const handleChange = handleSelectChange(setFormData, formData);
  const handleInputTextChange = (e) =>
    handleFormChange(e, formData, setFormData);

  //++++++++++++++++++++++++++++++++++++++++++ GESTION D4AJOUT DES CATEGORIE DE PLACE DANS LE FORMULAIRE ++++++++++++++++++++++++++++++++++++++++++

  const updatePreview = (fieldName, value) => {
    const baseURL = process.env.REACT_APP_BACKEND_URL;

    switch (fieldName) {
      case "STR_UTIPIC":
        setPreviewPic(
          value instanceof File || value instanceof Blob
            ? URL.createObjectURL(value)
            : baseURL + value
        );
        break;
      default:
        break;
    }
  };

  const handleFileChange = (fieldName, fileOrUrl) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fileOrUrl, // Stocker le fichier ou l'URL
    }));

    // Mise à jour des aperçus
    updatePreview(fieldName, fileOrUrl);
  };

  // ++++++++++++++++++++++++++++++++++++++++++ GESTION DES MODIFICATION D'UN EVENEMENT ++++++++++++++++++++++++++++++++++++++++++

  useEffect(() => {
    if (location.state && location.state.LG_UTIID) {
      setutilisateurId(location.state.LG_UTIID);

      // LISTES DES CATEGORIE DE TICKET DE L'EVENEMENT
      crudData(
        { mode: "getUtilisateur", LG_UTIID: location.state.LG_UTIID },
        endPoint
      )
        .then((response) => {
          setEventDetails(response.data);

          const {
            STR_UTIPHONE = "",
            STR_UTIMAIL = "",
            STR_UTILOGIN = "",
            STR_UTIFIRSTLASTNAME = "",
            LG_AGEID = 1,
            LG_PROID = 1,
            STR_UTIPIC,
          } = response.data;

          setFormData({
            STR_UTIPHONE,
            STR_UTIMAIL,
            STR_UTILOGIN,
            STR_UTIFIRSTLASTNAME,
            LG_AGEID,
            LG_PROID,
            LG_AGEREQUESTID: LG_AGEID,
            mode: "updateUtilisateur",
            STR_UTITOKEN: userData?.UTITOKEN || "",
          });

          processFile("STR_UTIPIC", STR_UTIPIC, setFormData, setPreviewPic);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des données:", error);
        });
    }
  }, [location.state, userData]);


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    // Convert dates and times to the desired format
    const formattedData = {
      ...formData,
      STR_UTITOKEN: userData?.STR_UTITOKEN || "",
    };

    // Append non-file data
    Object.keys(formattedData).forEach((key) => {
      if (!(formattedData[key] instanceof File)) {
        formDataToSend.append(key, formattedData[key]);
      }
    });

    // Append files or keep existing paths
    if (formData.STR_UTIPIC instanceof File) {
      formDataToSend.append("STR_UTIPIC", formData.STR_UTIPIC);
    }
    // Handle either update or create mode
    if (utilisateurId) {
      formDataToSend.append("mode", "updateUtilisateur");
      formDataToSend.append("LG_UTIID", utilisateurId);
      confirmAction(
        `Êtes-vous sûr de modifier l'événement : ${formData.STR_UTIFIRSTLASTNAME}`,
        "update",
        formDataToSend,
        resetForm,
        endPoint,
        navigate,
        process.env.REACT_APP_LISTE_UTILISATEURS,
        setLoading
      );
    } else {
      formDataToSend.append("mode", "createUtilisateur");
      confirmAction(
        `Êtes-vous sûr de l'enregistrement de l'événement : ${formData.STR_UTIFIRSTLASTNAME}`,
        "create",
        formDataToSend,
        resetForm,
        endPoint,
        navigate,
        process.env.REACT_APP_LISTE_UTILISATEURS,
        setLoading
      );
    }
  };

  const handleDateChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.value });
  };

  const breadcrumbs = [
    { text: "Utilisateur", link: "/" },
    { isBullet: true },
    { text: "Création des utilisateurs" },
  ];

  return (
    <>
      <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
        <div className="d-flex flex-column flex-column-fluid">
          <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
            <div
              id="kt_app_toolbar_container"
              className="app-container container-xxl d-flex flex-stack"
            >
              <PageTitle
                heading="Création des utilisateur"
                breadcrumbs={breadcrumbs}
              />
              {/* <ActionButton text="Liste bannière" link={process.env.REACT_APP_SAVE_BANNER} className="btn-primary" /> */}
            </div>
          </div>
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-xxl"
            >
              <div className="row gx-5 gx-xl-10">
                <div className="col-xxl-12 mb-5 mb-xl-10">
                  <div className="card card-flush h-xl-100">
                    <div className="card-body pt-6">
                      <div
                        className="app-main flex-column flex-row-fluid "
                        id="kt_app_main"
                      >
                        <div className="d-flex flex-column flex-column-fluid">
                          <div
                            id="kt_app_content"
                            className="app-content  flex-column-fluid "
                          >
                            <div
                              id="kt_app_content_container"
                              className="app-container  container-fluid "
                            >
                              <HashLoader
                                color="#0c194b"
                                size={40}
                                loading={loading}
                                className="mx-auto d-flex justify-content-center align-items-center"
                                style={{ height: "100vh" }}
                              />

                              <ToastContainer />
                              {/* <h1>{selectedEvent ? 'Modifier l\'événement' : 'Ajouter un nouvel événement'}</h1> */}
                              <Form onSubmit={handleSubmit}>
                                {/* FORMULMAIRE GENERAL */}

                                <CardHeader text="Information génerale sur l'utilisateur" />

                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label className="required fs-6 form-label fw-bold text-gray-900">
                                        Nom utilisateur
                                      </label>
                                      <div className="input-group mb-3">
                                        <input
                                          type="text"
                                          id="STR_UTIFIRSTLASTNAME"
                                          name="STR_UTIFIRSTLASTNAME"
                                          className="form-control form-control-solid"
                                          placeholder="Saisir le nom de l'utilisateur"
                                          value={formData.STR_UTIFIRSTLASTNAME}
                                          onChange={handleInputTextChange}
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label className="required fs-6 form-label fw-bold text-gray-900">
                                        N° de l'utilisateur
                                      </label>
                                      <div className="input-group mb-3">
                                        <input
                                          type="text"
                                          id="STR_UTIPHONE"
                                          name="STR_UTIPHONE"
                                          className="form-control form-control-solid"
                                          placeholder="Saisir le N° de l'utilisateur"
                                          value={formData.STR_UTIPHONE}
                                          onChange={handleInputTextChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label className="required fs-6 form-label fw-bold text-gray-900">
                                        Email de l'utilisateur
                                      </label>
                                      <div className="input-group mb-3">
                                        <input
                                          type="text"
                                          id="STR_UTIMAIL"
                                          name="STR_UTIMAIL"
                                          className="form-control form-control-solid"
                                          placeholder="Saisir l'e-mail de l'utilisateur"
                                          value={formData.STR_UTIMAIL}
                                          onChange={handleInputTextChange}
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-6">
                                    <div className="form-group">
                                      <label className="required fs-6 form-label fw-bold text-gray-900">
                                        Login de l'utilisateur
                                      </label>
                                      <div className="input-group mb-3">
                                        <input
                                          type="text"
                                          id="STR_UTILOGIN"
                                          name="STR_UTILOGIN"
                                          className="form-control form-control-solid"
                                          placeholder="Saisir le login de l'utilisateur"
                                          value={formData.STR_UTILOGIN}
                                          onChange={handleInputTextChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">

                                  <div className="col-lg-6">
                                    <div className="form-group mb-5">
                                      <label className="required fs-6 form-label fw-bold text-gray-900">
                                        Profil
                                      </label>
                                      <Form.Group
                                        controlId="formDate"
                                        className="w-100"
                                      >
                                        <SelectPicker
                                          data={profilUtilisateur} // Liste des options
                                          style={{ width: "100%" }}
                                          size="lg"
                                          onChange={(value) =>
                                            handleChange(value, "LG_PROID")
                                          } // Gestionnaire
                                          value={formData.LG_PROID || null} // Valeur initiale
                                          placeholder="Sélectionnez un profil" // Texte affiché par défaut
                                          className="basic-multi-select"
                                        />
                                      </Form.Group>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="form-group mb-5">
                                      <label className="required fs-6 form-label fw-bold text-gray-900">
                                        Agence
                                      </label>
                                      <Form.Group
                                        controlId="formDate"
                                        className="w-100"
                                      >
                                        <SelectPicker
                                          data={aganceData} // Liste des options
                                          style={{ width: "100%" }}
                                          size="lg"
                                          onChange={(value) =>
                                            handleChange(value, "LG_AGEID")
                                          } // Gestionnaire
                                          value={formData.LG_AGEID || null} // Valeur initiale
                                          placeholder="Sélectionnez un agence" // Texte affiché par défaut
                                          className="basic-multi-select"
                                        />
                                      </Form.Group>
                                    </div>
                                  </div>
                                </div>

                                {/* GESTION DES IMAGES */}


                                <CardHeader text="Gestion des images" />


                                <div className="fv-row mb-2 col-lg-12">
                                  <div
                                    className="dropzone dz-clickable"
                                    id="kt_ecommerce_add_product_media"
                                  >
                                    <div className="dz-message needsclick">
                                      <i className="ki-duotone ki-file-up text-primary fs-3x">
                                        <span className="path1" />
                                        <span className="path2" />
                                      </i>
                                      <div className="ms-4">
                                        <h3 className="fs-5 fw-bold text-gray-900 mb-1">
                                          {" "}
                                          Photo de l'utilisateur
                                        </h3>
                                        <span className="fs-7 fw-semibold text-gray-500">
                                          {" "}
                                          Cette image sera utiliser comme photo
                                          de profil de l'utilisateur
                                        </span>
                                      </div>
                                    </div>
                                    <FileUploader
                                      previewImage={previewPic}
                                      onFileSelect={(file) =>
                                        handleFileChange("STR_UTIPIC", file)
                                      }
                                    />
                                  </div>
                                </div>
                                <Button variant="primary" type="submit">
                                  Enregistrer
                                </Button>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveUser;
