import React, { useContext, useEffect, useState, useCallback } from "react";
import Switch from "react-switch";
import { toast, ToastContainer } from "react-toastify";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faPlus,
  faTrash,
  faInfoCircle,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { EventContext } from "../../contexts/EventProvider";
import { useNavigate } from "react-router-dom";
import { crudData } from "../../services/apiUtils";
import { Modal, Button, Form } from "react-bootstrap";
import FileUploader from "../FileUploader/FileUploader";
import EventSummary from "./EventSummary";
import Swal from "sweetalert2"; // Importation de la bibliothèque pour afficher des boîtes de dialogue
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { useLocation } from "react-router-dom";
import { Calendar } from "primereact/calendar";

import {
  loadStores,
  fetchCategorieData,
  useLoadStores,
} from "../../services/apiUtils";
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

//

import PageTitle from "../PageTitle";
import ActionButton from "../ActionButton";
import { DatePicker, TimePicker } from "rsuite";
import { SelectPicker, VStack } from "rsuite";
import CardHeader from "../CardHeader";
import { Loader, Placeholder } from "rsuite";

const SaveEvent = () => {
  const endPoint = process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL;
  const TicketendPoint = process.env.REACT_APP_TICKET_MANAGER_API_URL;

  const [eventDetails, setEventDetails] = useState(null);
  const [categories, setCategories] = useState([
    {
      LG_LSTID: "",
      INT_ELINUMBER: "",
      INT_ELINUMBERMAX: "",
      DBL_ELIAMOUNT: "",
    },
  ]);
  const [typeActivite, setTypeActiviteData] = useState([]);
  const [showSeat, setShowSeat] = useState(false);
  const [freeEvent, setFreeEvent] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [previewPic, setPreviewPic] = useState(null);
  const [previewAnnoncerPic, setPreviewAnnonceurPic] = useState(null);
  const [previewBanner, setPreviewBanner] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [categorieData, setcategorieData] = useState([]);
  // const [lieuActiviteData, setlieuActiviteData] = useState([]);
  const paths = JSON.parse(localStorage.getItem("appPaths"));
  const [showModal, setShowModal] = useState(false);
  const animatedComponents = makeAnimated();
  const location = useLocation();
  const [eventId, setEventId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = authService.checkAuth(navigate);
    if (data) {
      setUserData(data); // Stocke les données utilisateur si connecté
    }
    // Si non connecté, la navigation est gérée dans checkAuth.
  }, [navigate]);

  // Affichage conditionnel en fonction de userData

  const initialFormData = {
    STR_EVENAME: "",
    LG_LSTPLACEID: "",
    DT_EVEBEGIN: "",
    HR_EVEBEGIN: "",
    DT_EVEEND: "",
    HR_EVEEND: "",
    DT_BANBEGIN: "",
    DT_BANEND: "",
    STR_EVEANNONCEUR: "",
    STR_EVEDESCRIPTION: "",
    STR_LSTDESCRIPTION_OTHER: "",
    LG_LSTID: "",
    STR_ANNONCEUR: "",
    STR_EVESTATUTFREE: "",
    STR_EVETOBANNER: 0,
    STR_EVEDISPLAYROOM: 0,
    STR_EVEBANNER: null,
    STR_EVEPIC: null,
    STR_EVEANNONCEURPIC: null,
    LG_AGEID: "",
    LG_AGEREQUESTID: "",
  };

  const getResetFormData = (userData) => ({
    ...initialFormData,
    STR_UTITOKEN: userData?.STR_UTITOKEN || "",
    LG_AGEID: userData?.LG_AGEID || 1,
    LG_AGEREQUESTID: userData?.LG_AGEID || 1,
    STR_EVESTATUTFREE: 1,
  });

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (userData) {
      setFormData((prev) => ({
        ...prev,
        LG_AGEID: userData.LG_AGEID || "",
        LG_AGEREQUESTID: userData.LG_AGEID || "",
        STR_UTITOKEN: userData.STR_UTITOKEN || "",
      }));
    }
  }, [userData]);

  const resetForm = () => {
    setFormData(getResetFormData(userData));
    setCategories([]);
    setPreviewPic(null);
    setPreviewAnnonceurPic(null);
    setPreviewBanner(null);
  };

  useEffect(() => {
    if (!showBanner) {
      setPreviewBanner(null);
      setFormData((prevData) => ({
        ...prevData,
        STR_EVEBANNER: null,
      }));
    }
  }, [showBanner]);

  // ++++++++++++++++++++++++++++++++++++++++++ FONCTION GLOBALLE ++++++++++++++++++++++++++++++++++++++++++

  const handleChange = handleSelectChange(setFormData, formData);
  const handleCategoryChange = createCategoryChangeHandler(setCategories);
  const handleInputTextChange = (e) =>
    handleFormChange(e, formData, setFormData);

  const handleToggleSwitch = (setFunction, data, setData, key, value) => {
    setFunction(value);
    setData({
      ...data,
      [key]: value ? 1 : 0,
    });

    if (key === "STR_EVESTATUTFREE") {
      loadStores(
        {
          mode: "listListe",
          LG_TYLID: "TYPEPLACE",
          STR_LSTOTHERVALUE: freeEvent ? "0" : "1",
        },
        endPoint,
        setcategorieData,
        { valueKey: "LG_LSTID", labelKey: "STR_LSTDESCRIPTION" }
      );
    }
  };

  //++++++++++++++++++++++++++++++++++++++++++ GESTION D'AJOUT DES CATEGORIE DE PLACE DANS LE FORMULAIRE ++++++++++++++++++++++++++++++++++++++++++

  const handleAddCategory = () => {
    setCategories([
      ...categories,
      {
        LG_LSTID: "",
        INT_ELINUMBER: "",
        INT_ELINUMBERMAX: "",
        DBL_ELIAMOUNT: "",
      },
    ]);
  };

  // Supprimer un bloc de catégorie
  const handleRemoveCategory = (index) => {
    const newCategories = categories.filter((_, i) => i !== index);
    setCategories(newCategories);
  };

  const handleCategoryInput = (e, index, field) => {
    const value = e.target.value;
    // Assurez-vous que categories[index] est un objet
    if (typeof categories[index] === "object" && categories[index] !== null) {
      setCategories((prevCategories) =>
        prevCategories.map((cat, i) =>
          i === index ? { ...cat, [field]: value } : cat
        )
      );
    } else {
      console.error(
        "L'élément de categories à l'index",
        index,
        "n'est pas un objet"
      );
    }
  };

  const updatePreview = (fieldName, value) => {
    const baseURL = process.env.REACT_APP_BACKEND_URL;

    switch (fieldName) {
      case "STR_EVEPIC":
        setPreviewPic(
          value instanceof File || value instanceof Blob
            ? URL.createObjectURL(value)
            : baseURL + value
        );
        break;
      case "STR_EVEBANNER":
        setPreviewBanner(
          value instanceof File || value instanceof Blob
            ? URL.createObjectURL(value)
            : baseURL + value
        );
        break;
      case "STR_EVEANNONCEURPIC":
        setPreviewAnnonceurPic(
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
    const eventId = location.state?.LG_EVEID;
    if (!eventId) return;

    console.log(location.state);

    const initializeEvent = async () => {
      try {
        // Mise à jour des états initiaux
        setEventId(eventId);

        // Récupération des détails de l'événement
        const response = await crudData(
          { mode: "getEvenement", LG_EVEID: eventId },
          TicketendPoint
        );
        const eventDetails = response.data;
        setEventDetails(eventDetails);

        // Traitement des détails de l'événement
        if (eventDetails) {
          const {
            STR_EVENAME = "",
            LG_LSTPLACEID = "",
            DT_EVEBEGIN,
            HR_EVEBEGIN,
            DT_EVEEND,
            HR_EVEEND,
            DT_BANBEGIN,
            DT_BANEND,
            STR_EVEANNONCEUR = "",
            LG_AGEID = 1,
            STR_EVEDESCRIPTION = "",
            LG_LSTID = "",
            STR_LSTDESCRIPTION_OTHER = "",
            STR_ANNONCEUR = "",
            STR_EVEPIC,
            STR_EVEBANNER,
            STR_EVEANNONCEURPIC,
            STR_EVEDISPLAYROOM = 0,
            STR_EVESTATUTFREE = 0,
            STR_EVETOBANNER = 0,
          } = eventDetails;

          const formattedEventData = {
            STR_EVENAME,
            LG_LSTPLACEID,
            DT_EVEBEGIN: convertToFullDate(DT_EVEBEGIN) || "",
            HR_EVEBEGIN: convertTimeToFullDate(HR_EVEBEGIN) || "",
            DT_EVEEND: convertToFullDate(DT_EVEEND) || "",
            HR_EVEEND: convertTimeToFullDate(HR_EVEEND) || "",
            DT_BANBEGIN: convertToFullDate(DT_BANBEGIN) || "",
            DT_BANEND: convertToFullDate(DT_BANEND) || "",
            STR_EVEANNONCEUR,
            LG_AGEID,
            LG_AGEREQUESTID: LG_AGEID,
            STR_EVEDESCRIPTION,
            mode: "updateEvenement",
            LG_LSTID,
            STR_LSTDESCRIPTION_OTHER,
            STR_ANNONCEUR,
            STR_UTITOKEN: userData?.UTITOKEN || "",
            STR_EVEDISPLAYROOM: Number(STR_EVEDISPLAYROOM),
            STR_EVESTATUTFREE: Number(STR_EVESTATUTFREE),
            STR_EVETOBANNER: Number(STR_EVETOBANNER),
          };

          setFormData(formattedEventData);

          // Traitement des fichiers
          
          const initialFreeEvent = STR_EVESTATUTFREE;
          setFreeEvent(initialFreeEvent);

          // Chargement des catégories
          await Promise.all([
            loadStores(
              {
                mode: "listListe",
                LG_TYLID: "TYPEPLACE",
                STR_LSTOTHERVALUE: initialFreeEvent ? "1" : "0",
              },
              endPoint,
              setcategorieData,
              { valueKey: "LG_LSTID", labelKey: "STR_LSTDESCRIPTION" }
            ),
            fetchCategorieData(
              { mode: "listCategorieplaceEvenement", LG_EVEID: eventId },
              TicketendPoint,
              setCategories
            ),
          ]);

          console.log(eventDetails);

          // Mise à jour des états booléens
          setFreeEvent(Number(STR_EVESTATUTFREE) === 1);
          setShowSeat(Number(STR_EVEDISPLAYROOM) === 1);
          setShowBanner(Number(STR_EVETOBANNER) === 1);

          // Mise à jour des catégories
          setCategories((prevCategories) =>
            prevCategories.length > 0 ? prevCategories : [1]
          );

          await Promise.all([
            processFile("STR_EVEPIC", STR_EVEPIC, setFormData, setPreviewPic),
            processFile( "STR_EVEBANNER", STR_EVEBANNER, setFormData, setPreviewBanner),
            processFile( "STR_EVEANNONCEURPIC", STR_EVEANNONCEURPIC, setFormData, setPreviewAnnonceurPic),
          ]);

        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    initializeEvent();
  }, [location.state, endPoint, TicketendPoint, userData]); // Removed freeEvent from dependencies

  // ++++++++++++++++++++++++++++++++++++++++++ GESTION DES COMBOBOX ++++++++++++++++++++++++++++++++++++++++++

  //LISTE DES TYPE D'ACTIVITE
  useEffect(() => {
    loadStores(
      { mode: "listListe", LG_TYLID: "CATEGORIE" },
      endPoint,
      setTypeActiviteData,
      { valueKey: "LG_LSTID", labelKey: "STR_LSTDESCRIPTION" }
    );
  }, [userData, endPoint]);

  // ++++++++++++++++++++++++++++++++++++++++++ CREATION D'UN EVENEMENT ++++++++++++++++++++++++++++++++++++++++++

  //LISTE DES TYPE DE PLACE
  useEffect(() => {
    // Évite l'exécution si location.state existe
    if (location.state) return;

    // Simplifie la conversion de freeEvent en booléen
    const isFreeEvent = Boolean(freeEvent);

    const params = {
      mode: "listListe",
      LG_TYLID: "TYPEPLACE",
      STR_LSTOTHERVALUE: isFreeEvent ? "1" : "0",
    };

    loadStores(params, endPoint, setcategorieData, {
      valueKey: "LG_LSTID",
      labelKey: "STR_LSTDESCRIPTION",
    });
  }, [location.state, endPoint, freeEvent]);

  //LISTE DES LIEU D'EVENT
  // useEffect(() => {
  //   loadStores(
  //     { mode: "listListe", LG_TYLID: "7" },
  //     endPoint,
  //     setlieuActiviteData,
  //     { valueKey: "LG_LSTID", labelKey: "STR_LSTDESCRIPTION" }
  //   );
  // }, [userData, endPoint]);

  const lieuActiviteData = useLoadStores(
    { mode: "listListe", LG_TYLID: "7" },
    endPoint,
    { valueKey: "LG_LSTID", labelKey: "STR_LSTDESCRIPTION" }
  );

  // Function to handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // Construire les catégories
    const categoryArray = categories.map((cat) => ({
      INT_ELINUMBER: cat.INT_ELINUMBER,
      INT_ELINUMBERMAX: cat.INT_ELINUMBERMAX,
      LG_LSTID: freeEvent ? cat.LG_LSTID : categorieData[0].value,
      DBL_ELIAMOUNT: freeEvent ? cat.DBL_ELIAMOUNT : 0,
    }));

    // Formater les données du formulaire
    const formattedData = {
      ...formData,
      DT_EVEBEGIN: formatDate(formData.DT_EVEBEGIN),
      HR_EVEBEGIN: formData.HR_EVEBEGIN
        ? formData.HR_EVEBEGIN.toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
        : null,
      HR_EVEEND: formData.HR_EVEEND
        ? formData.HR_EVEEND.toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
        : null,
      DT_EVEEND: formatDate(formData.DT_EVEEND),
      DT_BANBEGIN: formatDate(formData.DT_BANBEGIN),
      DT_BANEND: formatDate(formData.DT_BANEND),
      STR_UTITOKEN: userData?.STR_UTITOKEN || "",
      LG_LSTCATEGORIEPLACEID: JSON.stringify(categoryArray),
    };

    // Ajouter les données au FormData
    Object.keys(formattedData).forEach((key) => {
      formDataToSend.append(key, formattedData[key]);
    });

    // Ajouter les fichiers uniquement si ce sont des instances de File
    ["STR_EVEPIC", "STR_EVEBANNER", "STR_EVEANNONCEURPIC"].forEach((key) => {
      if (formData[key] instanceof File) {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Appeler la fonction selon le mode
    if (eventId) {
      formDataToSend.append("mode", "updateEvenement");
      if (eventId) formDataToSend.append("LG_EVEID", eventId);
      confirmAction(
        `Êtes-vous sûr de modifier l'événement : ${formData.STR_EVENAME}`,
        "update",
        formDataToSend,
        resetForm,
        TicketendPoint,
        navigate,
        paths.listeEventData,
        setLoading
      );
    } else {
      formDataToSend.append("mode", "createEvenement");
      confirmAction(
        `Êtes-vous sûr de modifier l'événement : ${formData.STR_EVENAME}`,
        "create",
        formDataToSend,
        resetForm,
        TicketendPoint,
        navigate,
        paths.listeEventData,
        setLoading
      );
    }
  };

  // useEffect(() => {
  //   if (!freeEvent) {
  //     if (categories.length > 0) {
  //       setCategories([categories[0]]); // Ne garder que le premier élément
  //     }
  //   }
  // }, [freeEvent, categories]);

  useEffect(() => {
    if (!freeEvent && categories.length > 0) {
      setCategories((prevCategories) => {
        if (prevCategories.length > 1) {
          return [prevCategories[0]]; // Réduire la liste si nécessaire
        }
        return prevCategories; // Pas de mise à jour si déjà correct
      });
    }
  }, [freeEvent, categories]);

  if (!userData) {
    return <div>Vérification en cours...</div>;
  }

  const breadcrumbs = [
    { text: "Evenement", link: "/" },
    { isBullet: true },
    {
      text: eventId
        ? "Modification de l'événement"
        : "Enregistrement d'un évènement",
    },
  ];

  // alert(eventDetails.STR_EVENAME);

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
                heading={
                  eventId
                    ? `Modification de l'événement`
                    : "Enregistrement d'un évènement"
                }
                breadcrumbs={breadcrumbs}
              />
              {eventDetails && (
                <p className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                  {eventDetails.STR_EVENAME}
                </p>
              )}
              <ActionButton
                text="Liste bannière"
                onClick={resetForm}
                className="btn-primary"
              />
            </div>
          </div>
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-xxl"
            >
              <div className="row gx-5 gx-xl-10">
                <div className="col-xxl-12 mb-5 mb-xl-10">
                  <ToastContainer />

                  <Form onSubmit={handleSubmit}>
                    <div
                      id="kt_ecommerce_add_category_form"
                      className="form d-flex flex-column flex-lg-row fv-plugins-bootstrap5 fv-plugins-framework"
                    >
                      <div className="flex-column flex-lg-row-auto w-100 w-lg-250px w-xl-300px mb-10 order-1 order-lg-2">
                        <div className="card card-flush py-4">
                          <CardHeader text="Résumé" />

                          <div className="card-body pt-0">
                            <EventSummary
                              formData={formData}
                              previewPic={previewPic}
                              freeEvent={freeEvent}
                              previewAnnoncerPic={previewAnnoncerPic}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10 me-lg-10">
                        <div className="card card-flush py-4">
                          <CardHeader text="Information génerale sur l'évènement" />
                          <div className="card-body pt-0">
                            {/* FORMULMAIRE GENERAL */}

                            <div className=" ">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="required fs-6 form-label fw-bold text-gray-900">
                                      Titre de l'évenement
                                    </label>
                                    <div className="input-group mb-5">
                                      <input
                                        type="text"
                                        id="STR_EVENAME"
                                        name="STR_EVENAME"
                                        className="form-control"
                                        placeholder="Saisir le titre de l'événement"
                                        value={formData.STR_EVENAME}
                                        onChange={handleInputTextChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group mb-5">
                                    <label className="required fs-6 form-label fw-bold text-gray-900">
                                      Type d'activité
                                    </label>
                                    <Form.Group
                                      controlId="formDate"
                                      className="w-100"
                                    >
                                      <SelectPicker
                                        data={typeActivite} // Liste des options
                                        style={{ width: "100%" }}
                                        size="lg"
                                        onChange={(value) =>
                                          handleChange(value, "LG_LSTID")
                                        } // Gestionnaire
                                        value={formData.LG_LSTID || null} // Valeur initiale
                                        placeholder="Sélectionnez un type d'activité" // Texte affiché par défaut
                                        className="basic-multi-select"
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group mb-5">
                                    <label className="required fs-6 form-label fw-bold text-gray-900">
                                      Lieu de l'évenement
                                    </label>

                                    <div className="input-group mb-5">
                                      <input
                                        type="text"
                                        id="LG_LSTPLACEID"
                                        name="LG_LSTPLACEID"
                                        className="form-control"
                                        placeholder="Saisir le lieu de l'événement"
                                        value={formData.LG_LSTPLACEID}
                                        onChange={handleInputTextChange}
                                      />
                                    </div>

                                    {/* <Form.Group
                                      controlId="formDate"
                                      className="w-100"
                                    >
                                      <SelectPicker
                                        data={lieuActiviteData} // Liste des options
                                        style={{ width: "100%" }}
                                        size="lg"
                                        onChange={(value) =>
                                          handleChange(value, "LG_LSTPLACEID")
                                        } // Gestionnaire
                                        value={formData.LG_LSTPLACEID || null} // Valeur initiale
                                        placeholder="Sélectionnez un lieu" // Texte affiché par défaut
                                        className="basic-multi-select"
                                      />
                                    </Form.Group> */}
                                  </div>
                                </div>
                              </div>
                              <div className="row ">
                                <div className="col-lg-6 mb-5">
                                  <div className="form-group">
                                    <label className="required fs-6 form-label fw-bold text-gray-900">
                                      Date de début
                                    </label>
                                    <Form.Group
                                      controlId="formDate"
                                      className="w-100"
                                    >
                                      <DatePicker
                                        oneTap
                                        size="lg"
                                        format="yyyy-MM-dd"
                                        style={{ width: "100%" }}
                                        value={formData.DT_EVEBEGIN} // Permet de gérer la valeur null
                                        onChange={(e) =>
                                          handleChange(e, "DT_EVEBEGIN")
                                        }
                                        placeholder="Date de début de l'événement"
                                        cleanable // Assurez-vous que le champ est nettoyable
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                                <div className="col-lg-6 mb-5">
                                  <div className="form-group">
                                    <label className=" fs-6 form-label fw-bold text-gray-900">
                                      Date de fin
                                    </label>
                                    <Form.Group controlId="formDateEnd">
                                      <DatePicker
                                        oneTap
                                        size="lg"
                                        format="yyyy-MM-dd"
                                        style={{ width: "100%" }}
                                        value={formData.DT_EVEEND} // Permet de gérer la valeur null
                                        onChange={(e) =>
                                          handleChange(e, "DT_EVEEND")
                                        }
                                        placeholder="Date de fin de l'événement"
                                        cleanable // Assurez-vous que le champ est nettoyable
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                                <div className="col-lg-6 mb-5">
                                  <div className="form-group">
                                    <label className="fs-6 form-label fw-bold text-gray-900">
                                      Heure de début
                                    </label>
                                    <Form.Group controlId="formDateEnd">
                                      
                                      <TimePicker
                                        format="HH:mm"
                                        size="lg"
                                        style={{ width: "100%" }}
                                        editable={true}
                                        value={formData.HR_EVEBEGIN}
                                        onChange={(e) =>
                                          handleChange(e, "HR_EVEBEGIN")
                                        }
                                        placeholder="Heure de fin de l'événement"
                                        cleanable
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                                <div className="col-lg-6 mb-5">
                                  <div className="form-group">
                                    <label className="fs-6 form-label fw-bold text-gray-900">
                                      Heure de fin
                                    </label>
                                    <Form.Group controlId="formDateEnd">
                                      <TimePicker
                                        format="HH:mm"
                                        size="lg"
                                        style={{ width: "100%" }}
                                        editable={false}
                                        value={formData.HR_EVEEND}
                                        onChange={(e) =>
                                          handleChange(e, "HR_EVEEND")
                                        }
                                        placeholder="Heure de fin de l'événement"
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="form-group mb-5">
                                    <label className="required fs-6 form-label fw-bold text-gray-900">
                                      Description de l'évènement
                                    </label>
                                    <textarea
                                      type="text"
                                      id="STR_EVEDESCRIPTION"
                                      name="STR_EVEDESCRIPTION"
                                      className="form-control"
                                      rows="4"
                                      placeholder="Saisir la description de l'événement"
                                      value={formData.STR_EVEDESCRIPTION}
                                      onChange={handleInputTextChange}
                                    ></textarea>
                                  </div>
                                  <div className="text-muted fs-7">
                                    A product name is required and recommended
                                    to be unique.
                                  </div>
                                  {/*end::Description*/}
                                  <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card card-flush py-4">
                          <CardHeader text="Gestion des images" />
                          <div className="card-body pt-0">
                            {/* GESTION DES IMAGES */}

                            <div className=" pt-0 row d-flex align-items-stretch">
                              <div className="fv-row mb-5 col-lg-6 d-flex align-items-stretch">
                                <div
                                  className="dropzone dz-clickable w-100"
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
                                        Image de l'évènement
                                      </h3>
                                      <span className="fs-7 fw-semibold text-gray-500">
                                        {" "}
                                        Cette image sera placée sur le détail de
                                        l'événement
                                      </span>
                                    </div>
                                  </div>
                                  <FileUploader
                                    previewImage={previewPic}
                                    onFileSelect={(file) =>
                                      handleFileChange("STR_EVEPIC", file)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="fv-row mb-5 col-lg-6 d-flex align-items-stretch">
                                <div
                                  className={`notice ${
                                    showBanner
                                      ? "bg-light-success border-success"
                                      : "bg-light-warning border-warning"
                                  } align-items-center rounded border border-dashed mb-5 px-5 py-3 h-100 w-100`}
                                  id="kt_ecommerce_add_product_media"
                                >
                                  <div className="dz-message needsclick d-flex">
                                    <Switch
                                      onColor="#049437"
                                      offColor="#e78b2f"
                                      id="STR_EVETOBANNER"
                                      name="STR_EVETOBANNER"
                                      height={20}
                                      width={48}
                                      handleDiameter={16}
                                      className="ki-duotone ki-information text-warning me-5 mt-2"
                                      onChange={(checked) =>
                                        handleToggleSwitch(
                                          setShowBanner,
                                          formData,
                                          setFormData,
                                          "STR_EVETOBANNER",
                                          checked
                                        )
                                      }
                                      checked={showBanner}
                                    />
                                    <div className="ms-4">
                                      <h3 className="fs-5 fw-bold text-gray-900 mb-1">
                                        {" "}
                                        Bannière de publicité
                                      </h3>
                                      <span className="fs-7 fw-semibold text-gray-500">
                                        {" "}
                                        {showBanner
                                          ? "Cet évènement sera utilisé comme bannière de publicité"
                                          : "Si vous souhaitez que votre événement passe en bannière de publicité, cliquez pour activer"}{" "}
                                      </span>
                                    </div>
                                  </div>
                                  <div className={showBanner ? "" : "disabled"}>
                                    <FileUploader
                                      previewImage={previewBanner}
                                      onFileSelect={(file) =>
                                        handleFileChange("STR_EVEBANNER", file)
                                      }
                                    />
                                    <div className="row">
                                      <div className="col-lg-6">
                                        <div>
                                          <div className="form-group">
                                            <label className="required fs-6 form-label fw-bold text-gray-900">
                                              Date de début
                                            </label>
                                            <Form.Group
                                              controlId="formDate"
                                              className="w-100"
                                            >
                                              <DatePicker
                                                oneTap
                                                size="lg"
                                                format="yyyy-MM-dd"
                                                style={{ width: "100%" }}
                                                value={formData.DT_BANBEGIN} // Permet de gérer la valeur null
                                                onChange={(e) =>
                                                  handleChange(e, "DT_BANBEGIN")
                                                }
                                                placeholder="Date de début de la bannière"
                                                cleanable // Assurez-vous que le champ est nettoyable
                                              />
                                            </Form.Group>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-6">
                                        <div className="form-group">
                                          <label className=" fs-6 form-label fw-bold text-gray-900">
                                            Date de fin
                                          </label>
                                          <Form.Group controlId="formDateEnd">
                                            <DatePicker
                                              oneTap
                                              size="lg"
                                              format="yyyy-MM-dd"
                                              style={{ width: "100%" }}
                                              value={formData.DT_BANEND} // Permet de gérer la valeur null
                                              onChange={(e) =>
                                                handleChange(e, "DT_BANEND")
                                              }
                                              placeholder="Date de début de la bannière"
                                              cleanable // Assurez-vous que le champ est nettoyable
                                            />
                                          </Form.Group>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* GESTION DES PRIX */}
                          </div>
                          {/*end::Card header*/}
                        </div>

                        <div className="card card-flush py-4">
                          <CardHeader text="Gestion des catégories de tickets" />

                          <div className="card-body pt-0">
                            <div className="col-xl-12 col-lg-12 d-flex flex-column">
                              <div
                                className={`notice d-flex ${
                                  freeEvent
                                    ? "bg-light-danger border-danger"
                                    : "bg-light-success border-success"
                                } align-items-center rounded border border-dashed mb-5 p-6 h-100`}
                              >
                                <Switch
                                  onColor="#f14c41"
                                  offColor="#049437"
                                  id="STR_EVESTATUTFREE"
                                  name="STR_EVESTATUTFREE"
                                  height={20}
                                  width={48}
                                  handleDiameter={16}
                                  className="ki-duotone ki-information text-warning me-5 mt-2"
                                  onChange={(checked) =>
                                    handleToggleSwitch(
                                      setFreeEvent,
                                      formData,
                                      setFormData,
                                      "STR_EVESTATUTFREE",
                                      checked
                                    )
                                  }
                                  checked={freeEvent}
                                />

                                <div className="d-flex flex-stack flex-grow-1 ">
                                  <div className="fw-semibold ms-3">
                                    <h4 className="text-gray-900 fw-bold m-0 fs-6">
                                      Attention, cette offre sera
                                      <a
                                        href="#"
                                        className={`fw-bold badge me-3 ${
                                          freeEvent
                                            ? "badge-danger"
                                            : "badge-success"
                                        }`}
                                      >
                                        {freeEvent ? "Payante" : "Gratuite"}
                                      </a>
                                      <Tippy
                                        className="custom-tooltip"
                                        content="Création d'événement"
                                        arrow={true}
                                      >
                                        <FontAwesomeIcon
                                          className="text-primary"
                                          icon={faInfoCircle}
                                        />
                                      </Tippy>
                                    </h4>
                                    <div className="fs-7 text-gray-700">
                                      {freeEvent > 0
                                        ? "ce evenement est payant. Désactivé s'il est gratuit."
                                        : "ce evenement est gratuit. Activé s'il est payant."}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* GESTION DES TYPE DE BILLETS */}

                            {/* {freeEvent > 0 &&  ( */}

                            {freeEvent >= 0 && (
                              <div className="mt-3 ">
                                <div className="notice rounded border-primary border border-dashed mb-9 p-6">
                                  <div className="d-flex flex-stack flex-wrap align-items-end mb-9">
                                    <div className="d-flex flex-column">
                                      <div className="d-flex align-items-center mb-5">
                                        <a
                                          href="#"
                                          className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                                        >
                                          {" "}
                                          Catégorie de ticket{" "}
                                        </a>
                                        <Tippy
                                          className="custom-tooltip"
                                          content="Création de catégorie"
                                          arrow={true}
                                        >
                                          <FontAwesomeIcon
                                            className="text-primary"
                                            icon={faInfoCircle}
                                          />
                                        </Tippy>
                                      </div>
                                      <span className="fw-bold text-gray-600 fs-6 mb-5 d-block">
                                        {freeEvent > 0
                                          ? "Cliquez sur le bouton ajouté pour ajouter une catégorie de ticket"
                                          : "Aucune catégorie de ticket disponible pour cet événement"}
                                      </span>
                                    </div>
                                    <div className="d-flex">
                                      {freeEvent > 0 && (
                                        <div
                                          className="btn btn-sm btn-primary"
                                          id="kt_user_follow_button"
                                          onClick={handleAddCategory}
                                        >
                                          <i className="fa fa-plus"></i>
                                          <span className="indicator-label">
                                            Ajouter
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="row ">
                                    {categories.map((cat, index) => (
                                      <div key={index} className=" col-lg-4 ">
                                        <div
                                          key={index}
                                          className=" bg-light mb-10 rounded-4"
                                        >
                                          {index > 0 && (
                                            <Tippy
                                              className="custom-tooltip"
                                              content="Suprimer ce champ"
                                              arrow={true}
                                            >
                                              {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                                              <i
                                                className="fas fa-trash-alt  deleteCategorie-input"
                                                onClick={() =>
                                                  handleRemoveCategory(index)
                                                }
                                              ></i>
                                            </Tippy>
                                          )}
                                          <div className=" p-9">
                                            <img
                                              alt="Logo"
                                              src="assets/media/billet.png"
                                              class="h-65px theme-light-show d-block mx-auto mb-5"
                                            />
                                            {freeEvent > 0 && (
                                              <>
                                                <div className="form-group mb-5">
                                                  <label className="required fs-6 form-label fw-bold text-gray-900">
                                                    Sélectionner une catégorie
                                                    de place{" "}
                                                  </label>

                                                  <Form.Group
                                                    controlId="formDate"
                                                    className="w-100"
                                                  >
                                                    <SelectPicker
                                                      key={index}
                                                      data={categorieData}
                                                      style={{ width: "100%" }}
                                                      size="lg"
                                                      name="LG_LSTID"
                                                      value={
                                                        cat.LG_LSTID || null
                                                      }
                                                      onChange={(value) =>
                                                        handleCategoryChange(
                                                          value,
                                                          index,
                                                          "LG_LSTID"
                                                        )
                                                      }
                                                      placeholder="Sélectionnez une catégorie"
                                                    />
                                                  </Form.Group>
                                                </div>

                                                <div className="form-group mb-5">
                                                  <label className="required fs-6 form-label fw-bold text-gray-900">
                                                    Prix de la catégorie
                                                  </label>
                                                  <div className="input-group mb-3">
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      placeholder="Prix de la catégorie"
                                                      value={cat.DBL_ELIAMOUNT}
                                                      onChange={(e) =>
                                                        handleCategoryInput(
                                                          e,
                                                          index,
                                                          "DBL_ELIAMOUNT"
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                              </>
                                            )}

                                            <div className="row">
                                              <div className="col-12">
                                                <div className="form-group mb-5">
                                                  <label className="fs-6 form-label fw-bold text-gray-900">
                                                    Nbre de place
                                                  </label>
                                                  <div className="input-group mb-3">
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      placeholder="Nbre de place"
                                                      value={cat.INT_ELINUMBER}
                                                      onChange={(e) =>
                                                        handleCategoryInput(
                                                          e,
                                                          index,
                                                          "INT_ELINUMBER"
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-12">
                                                <div className="form-group mb-5">
                                                  <label className="fs-6 form-label fw-bold text-gray-900">
                                                    Nombre de ticket par achat
                                                  </label>
                                                  <div className="input-group mb-3">
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      placeholder="Nombre de ticket par achat"
                                                      value={
                                                        cat.INT_ELINUMBERMAX
                                                      }
                                                      onChange={(e) =>
                                                        handleCategoryInput(
                                                          e,
                                                          index,
                                                          "INT_ELINUMBERMAX"
                                                        )
                                                      }
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="separator separator-dashed mt-9 mb-5"></div>
                                {/* DESTION DE SIEGES */}
                                <div
                                  className={`notice d-flex ${
                                    showSeat
                                      ? "bg-light-primary border-default"
                                      : "border-default"
                                  } align-items-center rounded border border-dashed  px-5 h-100`}
                                >
                                  <Switch
                                    onColor="#86d3ff"
                                    offColor="#ff7f7f"
                                    id="STR_EVEDISPLAYROOM"
                                    name="STR_EVEDISPLAYROOM"
                                    height={20}
                                    width={48}
                                    handleDiameter={16}
                                    onChange={(checked) =>
                                      handleToggleSwitch(
                                        setShowSeat,
                                        formData,
                                        setFormData,
                                        "STR_EVEDISPLAYROOM",
                                        checked
                                      )
                                    }
                                    checked={showSeat}
                                  />
                                  <div className="d-flex flex-stack flex-grow-1 ">
                                    <div className="fw-semibold ms-3">
                                      <h4 className="text-gray-900 fw-bold m-0">
                                        <a
                                          href="#"
                                          className={`fw-bold fs-6 ${
                                            showSeat
                                              ? "text-primary"
                                              : "text-danger"
                                          }`}
                                        >
                                          {showSeat
                                            ? "Attention, le client ne pourra pas choisir son siège"
                                            : "Attention, le client pourra choisir son siège"}
                                        </a>
                                      </h4>
                                      <div className="fs-7 text-gray-700">
                                        Vous donnez la possibilité au client de
                                        choisir une place.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          {/*end::Card header*/}
                        </div>

                        <div className="card card-flush py-4">
                          <CardHeader text="Annonceurs" />
                          <div className="card-body pt-0">
                            {/* DESTION DE ANNONCERS */}

                            <div className="row">
                              <div className="col-lg-6">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      <div className="form-group">
                                        <label className="required fs-6 form-label fw-bold text-gray-900">
                                          Nom de l'annonceur
                                        </label>
                                        <div className="input-group mb-3">
                                          <input
                                            name="STR_EVEANNONCEUR"
                                            id="STR_EVEANNONCEUR"
                                            className="form-control"
                                            placeholder="Annonceur de l'événement"
                                            value={formData.STR_EVEANNONCEUR}
                                            onChange={handleInputTextChange}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-12 mb-10">
                                    <div className="form-group">
                                      <label className="required fs-6 form-label fw-bold text-gray-900">
                                        Description de l'évènement
                                      </label>
                                      <textarea
                                        type="text"
                                        id="STR_ANNONCEUR"
                                        name="STR_ANNONCEUR"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Saisir la description de l'événement"
                                        value={formData.STR_ANNONCEUR}
                                        onChange={handleInputTextChange}
                                      ></textarea>
                                    </div>
                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                  </div>
                                </div>
                              </div>

                              <div className="fv-row mb-5 col-lg-6">
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
                                        Ajouter le logo de l'annonceur
                                      </h3>
                                      <span className="fs-7 fw-semibold text-gray-500">
                                        {" "}
                                        Cette image sera placé sur le detaille
                                        de l'évenement
                                      </span>
                                    </div>
                                  </div>
                                  <FileUploader
                                    onFileSelect={(file) =>
                                      handleFileChange( "STR_EVEANNONCEURPIC", file )
                                    }
                                    previewImage={previewAnnoncerPic}
                                  />
                                  {/* {previewPic && <img src={URL.createObjectURL(previewPic)} alt="Preview" className="mt-2" />} */}
                                </div>
                              </div>
                            </div>
                            <div className="separator separator-dashed mt-9 mb-5"></div>
                            <div className="form-group mt-2"> </div>
                            <div className="text-muted fs-7">
                              Set the product media gallery.
                            </div>
                            {/* <Loader backdrop content="loading..." vertical /> */}
                          </div>
                          {/*end::Card header*/}
                        </div>

                        {/*end::Automation*/}
                        <div className="d-flex justify-content-end">
                          {/*begin::Button*/}
                          <Link
                            to={process.env.REACT_APP_LISTE_EVENT_DATA}
                            className="btn btn-light me-5"
                            id="kt_ecommerce_add_product_cancel"
                          >
                            Annuler
                          </Link>
                          <Button variant="primary" type="submit">
                            Enregistrer
                          </Button>
                        </div>
                      </div>
                      {/*end::Main column*/}
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div
          className="position-fixed w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            top: 0,
            left: 0,
            backgroundColor: "rgba(255,255,255,0.8)",
            zIndex: 9999,
          }}
        >
          <Loader size="lg" content="Traitement en cours..." vertical />
        </div>
      )}
    </>
  );
};

export default SaveEvent;
