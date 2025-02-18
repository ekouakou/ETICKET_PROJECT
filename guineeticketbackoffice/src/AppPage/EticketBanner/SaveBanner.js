import React, { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import eventService from "../../services/BannerService";

import Switch from "react-switch";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTrash,
  faInfoCircle,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { EventContext } from "../../contexts/EventProvider";
import { crudData } from "../../services/apiService";
import { Modal, Button, Form } from "react-bootstrap";
import FileUploader from "../FileUploader/FileUploader";

// import EventSummary from './EventSummary'
import Swal from "sweetalert2"; // Importation de la bibliothèque pour afficher des boîtes de dialogue
import { useLocation } from "react-router-dom";

//

import { loadStores, fetchData } from "../../utils/apiUtils";
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

import format from "date-fns/format";

import PageTitle from "../PageTitle";
import ActionButton from "../ActionButton";
import { DatePicker, TimePicker } from "rsuite";
import { SelectPicker, VStack } from "rsuite";
import CardHeader from "../CardHeader";
import { Loader, Placeholder } from "rsuite";

const SaveBanner = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState([]);
  const location = useLocation();
  const [banniereId, setbanniereId] = useState(null);

  const fetchEvents = async () =>
    setEventData(await eventService.getEvents(navigate));

  useEffect(() => {
    fetchEvents();
  }, [navigate]);

  const endPoint = process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL;
  const TicketendPoint = process.env.REACT_APP_TICKET_MANAGER_API_URL;
  const [eventDetails, setEventDetails] = useState(null);
  const [previewPic, setPreviewPic] = useState(null);
  const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const data = authService.checkAuth(navigate);
    if (data) {
      setUserData(data); // Stocke les données utilisateur si connecté
    }
    // Si non connecté, la navigation est gérée dans checkAuth.
  }, [navigate]);

  const initialFormData = (userData = {}) => ({
    STR_BANNAME: "",
    DT_BANBEGIN: "",
    STR_BANDESCRIPTION: "",
    STR_BANPATH: null,
    LG_AGEREQUESTID: userData?.LG_AGEID || "",
    BOOL_BANEVENT: 1,
    DT_BANEND: "",
    LG_AGEID: userData?.LG_AGEID || "",
    STR_EVESTATUTFREE: 1,
    STR_UTITOKEN: userData?.STR_UTITOKEN || "",
    mode: "createBanniere",
  });

  const [formData, setFormData] = useState(initialFormData(userData));

  useEffect(() => {
    if (userData) {
      setFormData(initialFormData(userData));
    }
  }, [userData]);

  const resetForm = () => {
    setFormData(initialFormData(userData));
    setPreviewPic(null);
  };

  // ++++++++++++++++++++++++++++++++++++++++++ FONCTION GLOBALLE ++++++++++++++++++++++++++++++++++++++++++

  const handleDateChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.value });
  };
  const handleChange = handleSelectChange(setFormData, formData);
    const handleInputTextChange = (e) => handleFormChange(e, formData, setFormData);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

  //++++++++++++++++++++++++++++++++++++++++++ GESTION D4AJOUT DES CATEGORIE DE PLACE DANS LE FORMULAIRE ++++++++++++++++++++++++++++++++++++++++++

  const updatePreview = (fieldName, value) => {
    const baseURL = process.env.REACT_APP_BACKEND_URL;

    switch (fieldName) {
      case "STR_BANPATH":
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
    if (location.state && location.state.LG_BANID) {
      setbanniereId(location.state.LG_BANID);
      // LISTES DES CATEGORIE DE TICKET DE L'EVENEMENT
      fetchData(
        {
          mode: "getBanniere",
          LG_BANID: location.state.LG_BANID,
        },
        endPoint,
        setEventDetails
      );
    }
  }, [location.state]);
  

  // ++++++++++++++++++++++++++++++++++++++++++ GESTION DES COMBOBOX ++++++++++++++++++++++++++++++++++++++++++

  useEffect(() => {
    if (eventDetails) {
      const {
        STR_BANNAME = "",
        LG_LSTPLACEID = "",
        DT_BANBEGIN,
        DT_BANEND,
        LG_AGEID = 1,
        STR_BANDESCRIPTION = "",
        STR_BANPATH,
      } = eventDetails;

      setFormData({
        STR_BANNAME,
        LG_LSTPLACEID,
        DT_BANBEGIN: convertToFullDate(DT_BANBEGIN) || "",
        DT_BANEND: convertToFullDate(DT_BANEND) || "",
        LG_AGEID,
        LG_AGEREQUESTID: LG_AGEID,
        STR_BANDESCRIPTION,
        mode: "updateBanniere",
        STR_UTITOKEN: userData?.UTITOKEN || "",
      });

      // processFile("STR_BANPATH", STR_BANPATH);
      processFile(
        "STR_BANPATH", 
        STR_BANPATH,
        setFormData, // Ajout du 3ème paramètre manquant
        setPreviewPic // Ajout du 4ème paramètre manquant
      );
    }
  }, [eventDetails, userData]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // Format data
    const formattedData = {
      ...formData,
      DT_BANBEGIN: formData.DT_BANBEGIN
        ? new Date(formData.DT_BANBEGIN).toISOString().split("T")[0]
        : "",
      DT_BANEND: formData.DT_BANEND
        ? new Date(formData.DT_BANEND).toISOString().split("T")[0]
        : "",
      STR_UTITOKEN: userData?.STR_UTITOKEN || "",
    };

    Object.keys(formattedData).forEach((key) => {
      if (!(formattedData[key] instanceof File)) {
        formDataToSend.append(key, formattedData[key]);
      }
    });

    if (formData.STR_BANPATH instanceof File) {
      formDataToSend.append("STR_BANPATH", formData.STR_BANPATH);
    }

    if (banniereId) {
        formDataToSend.append("mode", "updateBanniere");
        formDataToSend.append("LG_BANID", banniereId);
        confirmAction(
          `Êtes-vous sûr de modifier l'événement : ${formData.STR_UTIFIRSTLASTNAME}`,
          "update",
          formDataToSend,
          resetForm,
          endPoint,
          navigate,
          process.env.REACT_APP_LISTE_EVENT_BANNER,
          setLoading
        );
      } else {
        formDataToSend.append("mode", "createBanniere");
        confirmAction(
          `Êtes-vous sûr de l'enregistrement de l'événement : ${formData.STR_UTIFIRSTLASTNAME}`,
          "create",
          formDataToSend,
          resetForm,
          endPoint,
          navigate,
          process.env.REACT_APP_LISTE_EVENT_BANNER,
          setLoading
        );
      }
  };


  const breadcrumbs = [
    { text: "Bannières", link: "/" },
    { isBullet: true },
    { text: "Enregistrement de bannières" },
  ];

  return (
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
      <div className="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
          <div
            id="kt_app_toolbar_container"
            className="app-container container-xxl d-flex flex-stack"
          >
            <PageTitle
              heading="Enregistrement de bannières"
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
                            <ToastContainer />
                            <Form onSubmit={handleSubmit}>
                              {/* FORMULMAIRE GENERAL */}
                              <div className="row mt-5">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="required fs-6 form-label fw-bold text-gray-900">
                                      Titre de la bannère
                                    </label>
                                    <div className="input-group ">
                                      <input
                                        type="text"
                                        id="STR_BANNAME"
                                        name="STR_BANNAME"
                                        className="form-control form-control-solid"
                                        placeholder="Saisir le titre de l'événement"
                                        value={formData.STR_BANNAME}
                                        onChange={handleInputTextChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="row mt-5">
                                <div className="col-lg-6">
                                  <div>
                                    <div className="form-group">
                                      <label className="required fs-6 form-label fw-bold text-gray-900">
                                        Date de début d'affichage
                                      </label>

                                      {/* <Form.Group
                                            controlId="formDate"
                                            className="w-100"
                                        >
                                            <Calendar
                                                value={formData.DT_BANBEGIN}
                                                onChange={(e) =>
                                                    handleDateChange(e, "DT_BANBEGIN")
                                                }
                                                dateFormat="dd/mm/yy"
                                                placeholder="Date de début de l'événement"
                                                showButtonBar
                                            />
                                        </Form.Group> */}

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
                                          placeholder="Date de début de l'événement"
                                          cleanable // Assurez-vous que le champ est nettoyable
                                        />
                                      </Form.Group>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className=" fs-6 form-label fw-bold text-gray-900">
                                      Date de fin d'affichage
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
                                          value={formData.DT_BANEND} // Permet de gérer la valeur null
                                          onChange={(e) =>
                                            handleChange(e, "DT_BANEND")
                                          }
                                          placeholder="Date de début de l'événement"
                                          cleanable // Assurez-vous que le champ est nettoyable
                                        />
                                      </Form.Group>
                                  </div>
                                </div>
                              </div>

                              <div className="row mt-5 mb-5">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="required fs-6 form-label fw-bold text-gray-900">
                                      Description de la bannière
                                    </label>
                                    <textarea
                                      type="text"
                                      id="STR_BANDESCRIPTION"
                                      name="STR_BANDESCRIPTION"
                                      className="form-control form-control-solid"
                                      rows="4"
                                      placeholder="Saisir la description de l'événement"
                                      value={formData.STR_BANDESCRIPTION}
                                      onChange={handleInputTextChange}
                                    ></textarea>
                                  </div>
                                  {/* <div className="text-muted fs-7"> A product name is required and recommended to be unique. </div> */}
                                  <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                </div>
                              </div>

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
                                        Image de la bannière
                                      </h3>
                                      <span className="fs-7 fw-semibold text-gray-500">
                                        {" "}
                                        Cette image sera utilisé comme bannière
                                        de publicité
                                      </span>
                                    </div>
                                  </div>
                                  <FileUploader
                                    previewImage={previewPic}
                                    onFileSelect={(file) =>
                                      handleFileChange("STR_BANPATH", file)
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
  );
};

export default SaveBanner;
