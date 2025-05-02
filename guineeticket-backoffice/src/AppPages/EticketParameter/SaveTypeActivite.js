import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Form } from "react-bootstrap";
import { SelectPicker } from "rsuite";
import LoadingOverlay from "../../AppComponents/LoadingOverlay";

import { loadStores, fetchData } from "../../services/apiUtils";
import { confirmAction } from "../../utils/notificationUtils";
import { authService } from "../../services/AuthService";
import {
  handleSelectChange,
  handleFormChange,
} from "../../utils/formUtils";
import PageTitle from "../PageTitle";

const SaveTypeActivite = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [typeActiviteId, settypeActiviteId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [typeActiviteDetails, setTypeActiviteDetailsDetails] = useState(null);
  const [userData, setUserData] = useState(null);
  const [categorieActivite, setCategorieActiviteData] = useState([]);

  const endPoint = process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL;

  // Fix: Removed the incorrect backticks and properly defined handleChange
  const handleChange = (value, fieldName) => {
    handleSelectChange(setFormData, formData)(value, fieldName);
  };

  useEffect(() => {
    const data = authService.checkAuth(navigate);
    if (data) {
      setUserData(data); // Stocke les données utilisateur si connecté
    }
    // Si non connecté, la navigation est gérée dans checkAuth.
  }, [navigate]);

  const initialFormData = (userData = {}) => ({
    STR_LSTDESCRIPTION: "",
    STR_LSTVALUE: "",
    LG_TYLID: "5",
    STR_LSTOTHERVALUE2: "5",
    STR_LSTOTHERVALUE: "",
    LG_AGEREQUESTID: userData?.LG_AGEID || "",
    LG_AGEID: userData?.LG_AGEID || "",
    STR_UTITOKEN: userData?.STR_UTITOKEN || "",
    // mode: "createListe",
  });

  const [formData, setFormData] = useState(initialFormData(userData));

  useEffect(() => {
    if (userData) {
      setFormData(initialFormData(userData));
    }
  }, [userData]);

  const resetForm = () => {
    setFormData(initialFormData(userData));
  };

  // Function handler for input text changes
  const handleInputTextChange = (e) =>
    handleFormChange(e, formData, setFormData);

  // Load category data
  useEffect(() => {
    loadStores(
      { mode: "listListe", LG_TYLID: "4", STR_UTITOKEN: userData?.STR_UTITOKEN || "", },
      endPoint,
      setCategorieActiviteData,
      { valueKey: "LG_LSTID", labelKey: "STR_LSTDESCRIPTION" }
    );
  }, [userData, endPoint]);

  // Load event details if editing
  useEffect(() => {
    if (location.state && location.state.LG_LSTID) {
      settypeActiviteId(location.state.LG_LSTID);
      // LISTES DES CATEGORIE DE TICKET DE L'EVENEMENT
      fetchData(
        {
          mode: "getListe",
          LG_LSTID: location.state.LG_LSTID,
        },
        endPoint,
        setTypeActiviteDetailsDetails
      );
    }
  }, [location.state, endPoint]);

  // Set form data if editing an existing record
  useEffect(() => {
    if (typeActiviteDetails) {
      const {
        STR_LSTDESCRIPTION = "",
        LG_AGEID = 1,
        LG_TYLID = "",
        STR_LSTOTHERVALUE = "",
        STR_LSTOTHERVALUE2 = "",
        STR_LSTVALUE = "",
      } = typeActiviteDetails;

      setFormData({
        STR_LSTDESCRIPTION,
        LG_AGEID,
        STR_LSTVALUE,
        LG_TYLID,
        STR_LSTOTHERVALUE2,
        LG_AGEREQUESTID: LG_AGEID,
        STR_LSTOTHERVALUE,
        mode: "updateListe",
        STR_UTITOKEN: userData?.STR_UTITOKEN || "",
      });
    }
  }, [typeActiviteDetails, userData]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // Add form fields to FormData
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    console.log(formDataToSend);
    alert("ok");

    if (typeActiviteId) {
      formDataToSend.append("mode", "updateListe");
      formDataToSend.append("LG_LSTID", typeActiviteId);
      confirmAction(
        `Êtes-vous sûr de modifier l'événement : ${formData.STR_LSTDESCRIPTION || ""}`,
        "update",
        formDataToSend,
        resetForm,
        endPoint,
        navigate,
        process.env.REACT_APP_LISTE_TYPE_ACTIVITE,
        setLoading
      );
    } else {
      formDataToSend.append("mode", "createListe");
      confirmAction(
        `Êtes-vous sûr de l'enregistrement de l'événement : ${formData.STR_LSTDESCRIPTION || ""}`,
        "create",
        formDataToSend,
        resetForm,
        endPoint,
        navigate,
        process.env.REACT_APP_LISTE_TYPE_ACTIVITE,
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
              heading="Enregistrement d'un type d'activité"
              breadcrumbs={breadcrumbs}
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
                <div className="card card-flush h-xl-100">
                  <div className="card-body pt-6">
                    <div
                      className="app-main flex-column flex-row-fluid"
                      id="kt_app_main"
                    >
                      <div className="d-flex flex-column flex-column-fluid">
                        <div
                          id="kt_app_content"
                          className="app-content flex-column-fluid"
                        >
                          <div
                            id="kt_app_content_container"
                            className="app-container container-fluid"
                          >
                            <ToastContainer />
                            <Form onSubmit={handleSubmit}>
                              <div className="row mt-5">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="required fs-6 form-label fw-bold text-gray-900">
                                      Titre de l'activité
                                    </label>
                                    <div className="input-group">
                                      <input
                                        type="text"
                                        id="STR_LSTDESCRIPTION"
                                        name="STR_LSTDESCRIPTION"
                                        className="form-control form-control-solid"
                                        placeholder="Saisir le titre de l'activité"
                                        value={formData.STR_LSTDESCRIPTION || ""}
                                        onChange={handleInputTextChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group mb-5">
                                    <label className="required fs-6 form-label fw-bold text-gray-900">
                                      Catégorie d'activité
                                    </label>
                                    <Form.Group
                                      controlId="formDate"
                                      className="w-100"
                                    >
                                      <SelectPicker
                                        data={categorieActivite}
                                        style={{ width: "100%" }}
                                        size="lg"
                                        onChange={(value) =>
                                          handleChange(value, "STR_LSTOTHERVALUE")
                                        }
                                        value={formData.STR_LSTOTHERVALUE || null}
                                        placeholder="Sélectionnez un type d'activité"
                                        className="basic-multi-select"
                                      />
                                    </Form.Group>
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
                                      id="STR_LSTVALUE"
                                      name="STR_LSTVALUE"
                                      className="form-control form-control-solid"
                                      rows="4"
                                      placeholder="Saisir la description de l'activité"
                                      value={formData.STR_LSTVALUE || ""}
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