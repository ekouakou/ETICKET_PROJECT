import React, { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

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
import { Modal, Button, Form } from "react-bootstrap";
import FileUploader from "../FileUploader/FileUploader";

// import EventSummary from './EventSummary'
import Swal from "sweetalert2"; // Importation de la bibliothèque pour afficher des boîtes de dialogue
import { useLocation } from "react-router-dom";

//

import { loadStores, fetchData } from "../../services/apiUtils";
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
import { Spin } from 'antd';
import 'antd/dist/reset.css';
import LoadingOverlay from '../../AppComponents/LoadingOverlay'

const SaveTypeActivite = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState([]);
  const location = useLocation();
  const [banniereId, setbanniereId] = useState(null);
  const [loading, setLoading] = useState(false);



  const endPoint = process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL;
  const TicketendPoint = process.env.REACT_APP_TICKET_MANAGER_API_URL;
  const [eventDetails, setEventDetails] = useState(null);
  const [previewPic, setPreviewPic] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = authService.checkAuth(navigate);
    if (data) {
      setUserData(data); // Stocke les données utilisateur si connecté
    }
    // Si non connecté, la navigation est gérée dans checkAuth.
  }, [navigate]);

  const initialFormData = (userData = {}) => ({
    STR_LSTNAME: "",
    STR_LSTESCRIPTION: "",
    LG_AGEREQUESTID: userData?.LG_AGEID || "",
    LG_AGEID: userData?.LG_AGEID || "",
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
  const handleInputTextChange = (e) => handleFormChange(e, formData, setFormData);
  // ++++++++++++++++++++++++++++++++++++++++++ GESTION DES MODIFICATION D'UN EVENEMENT ++++++++++++++++++++++++++++++++++++++++++
  useEffect(() => {
    if (location.state && location.state.LG_LSTID) {
      setbanniereId(location.state.LG_LSTID);
      // LISTES DES CATEGORIE DE TICKET DE L'EVENEMENT
      fetchData(
        {
          mode: "getBanniere",
          LG_LSTID: location.state.LG_LSTID,
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
        STR_LSTNAME = "",
        LG_AGEID = 1,
        STR_LSTESCRIPTION = "",
      } = eventDetails;

      setFormData({
        STR_LSTNAME,
        LG_AGEID,
        LG_AGEREQUESTID: LG_AGEID,
        STR_LSTESCRIPTION,
        mode: "updateBanniere",
        STR_UTITOKEN: userData?.UTITOKEN || "",
      });
    }
  }, [eventDetails, userData]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    if (banniereId) {
      formDataToSend.append("mode", "updateBanniere");
      formDataToSend.append("LG_LSTID", banniereId);
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
    { text: " Type d'activité", link: "/" },
    { isBullet: true },
    { text: "Enregistrement d'un type d'activité" },
  ];

  return (
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
      {/* Ajout du loader overlay */}
      <LoadingOverlay isLoading={loading} message="Traitement en cours..." />

      <div className="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
          <div
            id="kt_app_toolbar_container"
            className="app-container container-xxl d-flex flex-stack"
          >
            <PageTitle
              heading="Enregistrement  d'un type d'activité"
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
                              <div className="row mt-5">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="required fs-6 form-label fw-bold text-gray-900">
                                      Titre de l'activité
                                    </label>
                                    <div className="input-group ">
                                      <input
                                        type="text"
                                        id="STR_LSTNAME"
                                        name="STR_LSTNAME"
                                        className="form-control form-control-solid"
                                        placeholder="Saisir le titre de l'activité"
                                        value={formData.STR_LSTNAME}
                                        onChange={handleInputTextChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="row mt-5 mb-5">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <label className="required fs-6 form-label fw-bold text-gray-900">
                                      Description de l'activité
                                    </label>
                                    <textarea
                                      type="text"
                                      id="STR_LSTESCRIPTION"
                                      name="STR_LSTESCRIPTION"
                                      className="form-control form-control-solid"
                                      rows="4"
                                      placeholder="Saisir la description de l'activité"
                                      value={formData.STR_LSTESCRIPTION}
                                      onChange={handleInputTextChange}
                                    ></textarea>
                                  </div>
                                  <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
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

export default SaveTypeActivite;