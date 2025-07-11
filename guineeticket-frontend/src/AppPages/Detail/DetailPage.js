import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import TicketOrder from "./TicketOrder";
import AppHeader from "../../AppComponents/Header/AppHeader";
// import Footer from '../components/Footer';
import { crudData } from "../../services/apiUtils";
import Swal from "sweetalert2";
import { CartContext } from "../../contexts/CartContext";
import DetailHeader from "./DetailHeader";
import Switch from "react-switch";
import Reservations from "./Reservations";
import { CounterContext } from "../../contexts/CounterContext"; // Assure-toi du chemin correct
import "./accueil.css";
import Footer from "../../AppComponents/Footer/Footer";
import { Button } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeProvider";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import BannerSkeleton from "../Skeleton/BannerSkeleton";

import {
  SkeletonElement,
  Card,
  TimerSkeleton,
  QuantitySelector,
  DeliveryOptions,
  FormFields,
  DescriptionSkeleton,
  OrganizatorSkeleton,
  ReservationUpdateSkeleton,
} from "./TicketFormSkeleton";
import {
  Modal,
  Placeholder,
  Loader,
  ButtonToolbar,
  Divider /*Button*/,
} from "rsuite";
import TermsAndConditions from "../../AppComponents/TermsAndConditions";
import PaymentFormSkeleton from "../Skeleton/PaymentFormSkeleton";
import TicketFormSkeleton from "../Skeleton/TicketFormSkeleton";
import TicketSelectorSkeleton from "../Skeleton/TicketSelectorSkeleton";
import ReservationSummarySkeleton from "../Skeleton/ReservationSummarySkeleton";
import EventSkeleton from "../Skeleton/EventSkeleton";

import useFetchData from "../../services/useFetchData";
import { urlBaseImage, rootUrl } from "../../services/urlUtils";

const STR_EVESTATUTFREE = localStorage.getItem("STR_EVESTATUTFREE");

const paymentOptions = [
  {
    id: 1,
    type: "mobile-money",
    name: "Orange Money",
    image: "assets/images/payment/om.png",
    STR_CURRENCY: process.env.REACT_APP_DEVISE,
    STR_PROVIDER: "orangemoney",
  },
  {
    id: 2,
    type: "mobile-money",
    name: "Mtn MoMo",
    image: "assets/images/payment/logo-mtn.png",
    STR_CURRENCY: process.env.REACT_APP_DEVISE,
    STR_PROVIDER: "mtnmoney",
  },
];

function Detail() {
  // const [eventDetails, setEventDetails] = useState(null);
  const [tokenNotification, setTokenNotification] = useState(null);
  const [paymentProvider, setPaymentProvider] = useState(null); // Nouvel état pour le fournisseur de paiement
  const { cartItems, clearCart } = useContext(CartContext);
  const [showGetTicket, setShowGetTicket] = useState(false); // State to control visibility of "Obtenir mon ticket"
  const [ticketFieldsFilled, setTicketFieldsFilled] = useState(false); // State to track if ticket fields are filled
  const [loading, setLoading] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const { count } = useContext(CounterContext);
  const [freeTicketNumber, setFreeTicketNumber] = useState();
  const [selectedOption, setSelectedOption] = useState(paymentOptions[0].id);
  const [paymentStarted, setPaymentSarted] = useState(false);
  const [conditionsAccepted, setConditionsAccepted] = useState(false);
  // const [selectedGetitcketOption, setSelectedGetitcketOption] = useState(1);
  const [selectedGetitcketOption, setSelectedGetitcketOption] = useState([1]);

  const [STR_TICPHONE, setTicketTelephone] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [quantiteTicketGratuit, setQuantiteTicketGratuit] = useState("");
  const [STR_CLIMAIL, setClientEmail] = useState("");
  const [STR_TICMAIL, setTicketEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [confirmWhatsappNumber, setConfirmWhatsappNumber] = useState("");

  const [STR_CLIPHONE, setClientPhone] = useState("");
  const [orangePhonePayment, setOrangePhonePayment] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [rows, setRows] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEntered = () => setRows(3);

  const [isLoading, setIsLoading] = useState(true);
  const { PARAM_LG_EVEID } = useParams();

  useEffect(() => {
    setConditionsAccepted(false);
  }, [loading]);

  if (paymentCompleted === true) {
    setLoading(false);
    setPaymentCompleted(true);
  }

  useEffect(() => {
    if (count > 0) {
      setShowGetTicket(true);
    } else {
      setShowGetTicket(false);
    }
  }, [count]);

  useEffect(() => {
    if (cartItems.length > 0) {
      setShowGetTicket(true);
    } else {
      setShowGetTicket(false);
    }
  }, [cartItems]);

  const {
    data: eventDetails,
    loadings,
    error,
  } = useFetchData(process.env.REACT_APP_TICKET_MANAGER_API_URL, {
    mode: process.env.REACT_APP_GET_EVENEMENT_MODE,
    LG_EVEID: PARAM_LG_EVEID,
  });

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleOptionGetitcketChange = (event) => {
    const value = parseInt(event.target.value);
    setSelectedGetitcketOption((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  // Fonction pour valider un email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const updateField = {
      STR_TICMAIL: () => {
        setTicketEmail(value);
      },
      STR_FIRSTNAME: () => setNom(value),
      STR_LASTNAME: () => setPrenom(value),
      STR_CLIMAIL: () => {
        setClientEmail(value);
      },
      STR_CLIPHONE: () => setClientPhone(value),
      STR_TICPHONE: () => setTicketTelephone(value), // Synchronise le numéro de téléphone principal
      STR_TICPHONEPAYMENT_ORANGE: () => setOrangePhonePayment(value),
    };

    if (updateField[name]) {
      updateField[name]();
    }
  };

  // À l'intérieur de votre composant
  // Fonction pour gérer le changement de la case à cocher

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  const handlePayment = async () => {
    if (!conditionsAccepted) return;

    const selectedPaymentOption = paymentOptions.find(
      (option) => option.id === selectedOption
    );

    if (!isCartValid()) return;

    const params = createPaymentParams(selectedPaymentOption);

    let paymentWindow = null;
    if (selectedOption === 1) {
      paymentWindow = window.open("", "_blank");
    } // Ouvrir une fenêtre temporaire avant la requête

    try {
      setLoading(true);
      const paymentResponse = await initiatePayment(params);
      if (!paymentResponse.success) {
        throw new Error(paymentResponse.error);
      }
      const { token_notification, payment_url } = paymentResponse.data;
      setTokenNotification(token_notification);
      setPaymentProvider(selectedPaymentOption.STR_PROVIDER);

      // Mettre à jour l'URL de la fenêtre ouverte
      if (selectedOption === 1 && paymentWindow) {
        paymentWindow.location.href = payment_url;
      }
      startPaymentMonitoring(
        token_notification,
        selectedPaymentOption.STR_PROVIDER
      );
    } catch (error) {
      if (paymentWindow) {
        paymentWindow.close();
      }
      handlePaymentError(error);
    }
  };

  // Fonctions utilitaires
  const isCartValid = () => {
    return (
      quantiteTicketGratuit != 0 ||
      quantiteTicketGratuit != null ||
      localStorage.getItem("cartItems") != "" ||
      localStorage.getItem("cartItems") != null
    );
  };

  const createPaymentParams = (selectedPaymentOption) => {
    const cartItems =
      quantiteTicketGratuit != 0
        ? JSON.stringify([
          {
            LG_EVEID: eventDetails.LG_EVEID,
            STR_TICMAIL: STR_TICMAIL,
            LG_LSTID: eventDetails.LG_LSTID,
            STR_EVENAME: eventDetails.STR_EVENAME,
            STR_EVEPIC_PANIER: eventDetails.STR_EVEPIC_PANIER,
            DT_EVEBEGIN: eventDetails.DT_EVEBEGIN,
            category: eventDetails.STR_EVENAME,
            INT_ELINUMBER: quantiteTicketGratuit,
            mode: process.env.REACT_APP_CREATE_TICKET_MODE,
          },
        ])
        : localStorage.getItem("cartItems");

    return {
      mode: process.env.REACT_APP_CREATE_TICKET_MODE,
      STR_CLIMAIL: STR_CLIMAIL,
      STR_TICMAIL: STR_TICMAIL,
      STR_CLIFIRSTNAME: nom,
      STR_TICPHONE: STR_TICPHONE,
      STR_TICCANAL: JSON.stringify([
        {
          typecanal: "SMS",
          value: STR_TICPHONE,
        },
        {
          typecanal: "WHATSAPP",
          value: STR_TICPHONE,
        },
        { typecanal: "MAIL", value: STR_TICMAIL },
      ]),
      STR_CLILASTNAME: prenom,
      STR_CURRENCY: selectedPaymentOption.STR_CURRENCY,
      STR_CLIPHONE: STR_CLIPHONE,
      STR_PROVIDER: selectedPaymentOption.STR_PROVIDER,
      LG_EVEGLOBALID: cartItems,
    };
  };

  const initiatePayment = async (params) => {
    const response = await crudData(
      params,
      process.env.REACT_APP_TICKET_MANAGER_API_URL
    );

    if (response.status !== 200 || response.data.code_statut !== "1") {
      return {
        success: false,
        error: "Erreur lors de l'initiation du paiement",
      };
    }

    return {
      success: true,
      data: response.data,
    };
  };

  const startPaymentMonitoring = (tokenNotification, provider) => {
    const intervalId = setInterval(async () => {
      try {
        const verifyParams = {
          mode: process.env.REACT_APP_VERIFY_PAYMENT_MODE,
          STR_PROVIDER: provider,
          LG_CTRID: tokenNotification,
        };

        const verifyResponse = await crudData(
          verifyParams,
          process.env.REACT_APP_CASH_MANAGER_API_URL
        );

        if (verifyResponse.status === 200) {
          handleVerificationResponse(verifyResponse.data, intervalId);
        }
      } catch (error) {
        handlePaymentError(error);
        clearInterval(intervalId);
      }
    }, 45000);
  };

  const handleVerificationResponse = (verifyData, intervalId) => {
    switch (verifyData.code_statut) {
      case "2":
        setLoading(true);
        break;
      case "1":
        handleSuccessfulPayment(intervalId);
        break;
      default:
        handleFailedPayment(intervalId, verifyData.desc_statut);
    }
  };

  const handleSuccessfulPayment = (intervalId) => {
    clearInterval(intervalId);
    localStorage.removeItem("cartItems");
    clearCart();
    setLoading(false);

    Swal.fire({
      icon: "success",
      title: "Statut du paiement",
      text: "Paiement effectué avec succès",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });
  };

  const handleFailedPayment = (intervalId, errorMessage) => {
    clearInterval(intervalId);
    setLoading(false);

    Swal.fire({
      icon: "error",
      title: "Statut du paiement",
      text: errorMessage || "Une erreur est survenue lors du paiement",
    });
  };

  const handlePaymentError = (error) => {
    console.error("Erreur lors du paiement:", error);
    setLoading(false);

    Swal.fire({
      icon: "error",
      title: "Statut paiement",
      text: "Erreur lors de la requête de paiement",
    });
  };

  // Vérifier les champs et l'email à chaque changement
  useEffect(() => {
    if (
      STR_TICPHONE.trim() &&
      STR_CLIPHONE.trim() &&
      nom.trim() &&
      prenom.trim() &&
      validateEmail(STR_CLIMAIL)
    ) {
      setIsFormValid(true); // Tous les champs sont remplis et l'email est valide
    } else {
      setIsFormValid(false); // Un ou plusieurs champs sont vides ou l'email est invalide
      setConditionsAccepted(false); // Décoche la case si les champs ne sont pas valides
    }
  }, [STR_TICPHONE, nom, prenom, STR_CLIMAIL]);

  // Gestion de la case à cocher
  const handleConditionsChange = (e) => {
    if (isFormValid) {
      setConditionsAccepted(e.target.checked);
    }
  };

  const handleQuantityUpdate = (totalQuantities) => {
    console.log("Quantité totale des tickets:", totalQuantities);
    setQuantiteTicketGratuit(totalQuantities);
    // Vous pouvez gérer la quantité totale ici (par exemple, mettre à jour un état)
  };

  const handleCancelCommande = () => {
    clearCart(); // Vide le panier en utilisant la fonction du contexte
    localStorage.removeItem("cartItems"); // Supprime les items du localStorage
  };

  const [datePassed, setDatePassed] = useState(false);
  const handleDatePassedUpdate = (isPassed) => {
    setDatePassed(isPassed);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!eventDetails || eventDetails.length === 0) {
        setIsLoading(true); // Garder le loader actif si `data` est vide
      } else {
        setIsLoading(false); // Désactiver le loader si `data` contient des éléments
      }
    }, 2000); // Délai de 1 seconde dans les deux cas

    return () => clearTimeout(timer); // Nettoyer le timer
  }, [eventDetails]);

  return (
    <>
      <AppHeader />

      {eventDetails && (
        <section
          key={eventDetails.LG_EVEID}
          className="section section--details"
          style={{ marginTop: "30px" }}
        >
          <Helmet>
            <meta property="og:title" content={eventDetails.LG_EVEID} />
            <meta property="og:description" content={eventDetails.LG_EVEID} />
            <meta
              property="og:image"
              content={urlBaseImage + eventDetails.STR_EVEPIC}
            />
            <meta property="og:url" content={eventDetails.LG_EVEID} />
            <meta property="og:type" content="website" />
          </Helmet>

          {/* details content */}

          {isLoading ? (
            <>
              <section className="">
                <div className="container">
                  <BannerSkeleton />
                  <EventSkeleton />
                </div>
              </section>
            </>
          ) : (
            <>
              <DetailHeader
                evenement={eventDetails}
                first_btn={{ link: "/", name: "Retour à la recherche" }}
                second_btn={{ link: "/paiement", name: "Retour au paiement" }}
                cartItems={cartItems}
                onDatePassedUpdate={handleDatePassedUpdate} // Passer la fonction en tant que prop
              />
            </>
          )}

          <div className="container">
            <div className="movie-details-section padding-top padding-bottom mt-5 pt-5">
              <div className="container">
                <div className="row">
                  <div
                    className={` ${!datePassed ? "col-lg-9" : "col-lg-9"} ps-0`}
                  >
                    {/* {eventDetails.STR_EVEDISPLAYROOM === "1" && <SeatMap />} */}

                    {isLoading ? (
                      <>
                        <TicketSelectorSkeleton />
                      </>
                    ) : (
                      <>
                        <TicketOrder
                          eventDetails={eventDetails}
                          onQuantityUpdate={handleQuantityUpdate}
                          datePassed={datePassed}
                        />
                      </>
                    )}

                    {((showGetTicket && !datePassed) ||
                      quantiteTicketGratuit > 0) && (
                        <>
                          {/* <RecuperationTicket /> */}
                          {isLoading ? (
                            <>
                              <TicketFormSkeleton />
                            </>
                          ) : (
                            <div className="card card-flush py-4 mb-10">
                              <div className="card-body bgi-no-repeat bgi-position-center bgi-size-cover card-rounded">
                                <div
                                  data-kt-stepper-element="content"
                                  className="current"
                                >
                                  {/* Wrapper */}
                                  <div className="w-100">
                                    <div className="pb-12">
                                      <h1 className="fw-bold text-gray-900 text-theme">
                                        Obtenir mon ticket
                                      </h1>
                                      <div className="text-muted fw-semibold fs-4 text-theme">
                                        Comment voulez-vous recevoir votre Ticket
                                        ?
                                      </div>
                                    </div>

                                    <div className="row bgi-no-repeat bgi-position-center bgi-size-cover card-rounded w-100">
                                      <div className="row mb-10">
                                        {[
                                          {
                                            value: 1,
                                            label: "Sms",
                                            icon: "assets/media/chatting.png",
                                          },
                                          {
                                            value: 2,
                                            label: "WhatsApp",
                                            icon: "assets/media/whatsapp.png",
                                          },
                                          {
                                            value: 3,
                                            label: "Email",
                                            icon: "assets/media/enveloppe.png",
                                          },
                                        ].map((option) => (
                                          <div
                                            key={option.value}
                                            className="col-xl-3 col-lg-4 col-md-4 col-xs-6 col-6 mb-4"
                                          >
                                            <label
                                              className={`btn btn-outline btn-outline-dashed d-flex text-start p-6 ${selectedGetitcketOption.includes(
                                                option.value
                                              )
                                                  ? "btn-active-light-primary active"
                                                  : ""
                                                } ${option.value === 1
                                                  ? "disabled"
                                                  : ""
                                                }`}
                                              data-kt-button="true"
                                            >
                                              <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                <input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  name="ticket_option"
                                                  value={option.value}
                                                  checked={selectedGetitcketOption.includes(
                                                    option.value
                                                  )}
                                                  onChange={
                                                    handleOptionGetitcketChange
                                                  }
                                                />
                                              </span>
                                              <span className="ms-5">
                                                <span className="fs-4 fw-bold text-gray-800 d-block text-theme">
                                                  <img
                                                    className=""
                                                    width={20}
                                                    src={option.icon}
                                                  />{" "}
                                                  {option.label}
                                                </span>
                                              </span>
                                            </label>
                                          </div>
                                        ))}
                                      </div>

                                      {selectedGetitcketOption.includes(1) && (
                                        <div
                                          className="col-md-6 fv-row"
                                          id="STR_TICPHONE"
                                        >
                                          <label className="required fs-6 fw-semibold mb-2 text-theme">
                                            Téléphone
                                          </label>
                                          <div className="position-relative d-flex align-items-center">
                                            <input
                                              className="form-control form-control-solid "
                                              placeholder="Entrez votre numéro de téléphone"
                                              name="STR_TICPHONE"
                                              type="number"
                                              value={STR_TICPHONE}
                                              onChange={handleInputChange}
                                            />
                                          </div>
                                        </div>
                                      )}

                                      {/* {selectedGetitcketOption.includes(2) && (
                                      <div
                                        className="col-md-4 fv-row"
                                        id="whatsapp"
                                      >
                                        <label className="fs-6 fw-semibold mb-2 text-theme">
                                          Numéro WhatsApp
                                        </label>
                                        <div className="position-relative d-flex align-items-center">
                                          <input
                                            className="form-control form-control-solid "
                                            placeholder="Entrez votre numéro WhatsApp"
                                            name="whatsappNumber"
                                            type="tel"
                                            value={whatsappNumber}
                                            onChange={handleInputChange}
                                          />
                                        </div>
                                      </div>
                                    )} */}

                                      {selectedGetitcketOption.includes(3) && (
                                        <div
                                          className="col-md-6 fv-row"
                                          id="STR_TICMAIL"
                                        >
                                          <label className="fs-6 fw-semibold mb-2 text-theme">
                                            Email
                                          </label>
                                          <div className="position-relative d-flex align-items-center">
                                            <input
                                              className="form-control form-control-solid "
                                              placeholder="Entrez votre email"
                                              name="STR_TICMAIL"
                                              type="email"
                                              value={STR_TICMAIL}
                                              onChange={handleInputChange}
                                            />
                                          </div>
                                        </div>
                                      )}
                                    </div>

                                    <div className="fs-7 fw-semibold text-muted mt-5">
                                      Champ obligatoire{" "}
                                      <span className="required"></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {isLoading ? (
                            <>
                              <PaymentFormSkeleton />
                            </>
                          ) : (
                            <>
                              <div className="card card-flush py-4 mb-10">
                                <div className="card-body bgi-no-repeat bgi-position-center bgi-size-cover card-rounded">
                                  <div
                                    data-kt-stepper-element="content"
                                    className="current"
                                  >
                                    <div className="w-100">
                                      <div className="pb-12">
                                        <h1 className="fw-bold text-gray-900 text-theme">
                                          {eventDetails.STR_EVESTATUTFREE === "0"
                                            ? "Vos informations personnelles"
                                            : "Payer mon ticket"}
                                        </h1>
                                        <div className="text-muted fw-semibold fs-4 text-theme">
                                          {eventDetails.STR_EVESTATUTFREE === "0"
                                            ? "Renseignez vos informations et, acceptez les conditions générales de ventes et d’utilisation"
                                            : "Choisissez votre méthode de payement en cliquant sur l'un des operateurs."}
                                        </div>
                                      </div>
                                      <div className="checkout-widget checkout-card p-0">
                                        <div className="row">
                                          <div className="col-lg-12">
                                            <div
                                              id="payment-option-zone"
                                              className="notice flex-column rounded border-warning_ border_ border-dashed_ mb-9 p-6 "
                                            >
                                              {eventDetails &&
                                                eventDetails.STR_EVESTATUTFREE !=
                                                "0" && (
                                                  <div className="d-flex">
                                                    <ul className="payment-option mb-0 p-0">
                                                      {paymentOptions.map(
                                                        (option) => (
                                                          <li
                                                            key={option.id}
                                                            className={`pb-0 ${selectedOption ===
                                                                option.id
                                                                ? "active"
                                                                : ""
                                                              }`}
                                                            onClick={() =>
                                                              handleOptionClick(
                                                                option.id
                                                              )
                                                            }
                                                          >
                                                            <a>
                                                              <img
                                                                src={option.image}
                                                                alt={option.name}
                                                              />
                                                              <span className="text-theme">
                                                                {option.name}
                                                              </span>
                                                            </a>
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  </div>
                                                )}

                                              <div className="py-6 ">
                                                <form
                                                  id="mobile-money"
                                                  className="payment-card-form"
                                                >
                                                  {/* {selectedOption === 2 &&
                                                  eventDetails.STR_EVESTATUTFREE !=
                                                    "0" && (
                                                    <div className="notice rounded border-success border border-dashed mb-3 p-6 w-100">
                                                      <div className="d-flex flex-column fv-row fv-plugins-icon-container">
                                                        <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                          <span className="required text-theme text-success">
                                                            Numero de paiement
                                                            MTN
                                                          </span>
                                                        </label>
                                                        <input
                                                          type="number"
                                                          className="form-control form-control-solid"
                                                          id="STR_TICPHONEPAYMENT_MTN"
                                                          name="STR_TICPHONEPAYMENT_MTN"
                                                          value={
                                                            mtnPhonePayment
                                                          }
                                                          onChange={
                                                            handleInputChange
                                                          }
                                                          placeholder="Nouméro de paiement"
                                                        />
                                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                      </div>
                                                    </div>
                                                  )} */}
                                                  <div className="notice rounded border-success border border-dashed mb-3 p-6 w-100">
                                                    <div className="d-flex flex-column fv-row fv-plugins-icon-container">
                                                      <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                                        <span className="required text-theme text-success">
                                                          Numero de paiement
                                                        </span>
                                                      </label>
                                                      <input
                                                        type="number"
                                                        className="form-control form-control-solid"
                                                        id="STR_CLIPHONE"
                                                        name="STR_CLIPHONE"
                                                        value={STR_CLIPHONE}
                                                        onChange={
                                                          handleInputChange
                                                        }
                                                        placeholder="Numéro de paiement"
                                                      />
                                                      <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
                                                    </div>
                                                  </div>
                                                  <div className="row w-100">
                                                    <div className="col-md-4 fv-row">
                                                      <label className="required fs-6 fw-semibold mb-2 text-theme">
                                                        Nom
                                                      </label>
                                                      <div className="position-relative d-flex align-items-center">
                                                        <i className="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4">
                                                          <span className="path1" />
                                                          <span className="path2" />
                                                        </i>
                                                        <input
                                                          type="text"
                                                          className="form-control form-control-solid bg-gray-500"
                                                          value={nom}
                                                          onChange={
                                                            handleInputChange
                                                          }
                                                          placeholder="Saisir nom"
                                                          name="STR_FIRSTNAME"
                                                        />
                                                      </div>
                                                    </div>
                                                    <div className="col-md-4 fv-row">
                                                      <label className="required fs-6 fw-semibold mb-2 text-theme">
                                                        Prénom
                                                      </label>
                                                      <div className="position-relative d-flex align-items-center">
                                                        <i className="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4">
                                                          <span className="path1" />
                                                        </i>
                                                        <input
                                                          type="text"
                                                          className="form-control form-control-solid bg-gray-500"
                                                          value={prenom}
                                                          onChange={
                                                            handleInputChange
                                                          }
                                                          placeholder="Saisir Prénom"
                                                          name="STR_LASTNAME"
                                                        />
                                                      </div>
                                                    </div>
                                                    <div className="col-md-4 fv-row">
                                                      <label className="required fs-6 fw-semibold mb-2 text-theme">
                                                        Email
                                                      </label>
                                                      <div className="position-relative d-flex align-items-center">
                                                        <i className="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4">
                                                          <span className="path1" />
                                                          <span className="path2" />
                                                        </i>
                                                        <input
                                                          type="email"
                                                          className="form-control form-control-solid bg-gray-500"
                                                          value={STR_CLIMAIL}
                                                          onChange={
                                                            handleInputChange
                                                          }
                                                          placeholder="Saisir Email"
                                                          name="STR_CLIMAIL"
                                                        />
                                                      </div>
                                                      {!validateEmail(
                                                        STR_CLIMAIL
                                                      ) &&
                                                        STR_CLIMAIL && (
                                                          <span className="text-danger ms-2">
                                                            Format email invalide
                                                          </span>
                                                        )}
                                                    </div>
                                                  </div>
                                                </form>
                                                <div class="fs-7 fw-semibold text-muted mt-5">
                                                  Champs obligatoires{" "}
                                                  <span className="required"></span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div
                                          className={`notice d-flex mt-10  align-items-center rounded border border-dashed mb-5 p-6 h-100`}
                                        >
                                          {/* <input className="form-check-input mx-3" type="checkbox" name="conditions[]" value="accept" onChange={handleConditionsChange} /> */}
                                          <input
                                            className="form-check-input mx-3"
                                            type="checkbox"
                                            name="conditions[]"
                                            value="accept"
                                            onChange={handleConditionsChange}
                                            disabled={!isFormValid} // Désactiver si le formulaire n'est pas valide
                                            checked={conditionsAccepted} // Gérer la case à cocher dynamiquement
                                            style={{
                                              opacity: !isFormValid ? 0.5 : 1,
                                              cursor: !isFormValid
                                                ? "not-allowed"
                                                : "pointer",
                                            }} // Griser si désactivé
                                          />

                                          <div className="d-flex flex-stack flex-grow-1 ">
                                            <div className="fw-semibold ">
                                              <h4 className="text-gray-900  m-0 fs-7 text-theme">
                                                J’accepte les{" "}
                                                <span
                                                  className="text-danger"
                                                  onClick={() => {
                                                    handleOpen();
                                                  }}
                                                >
                                                  {" "}
                                                  Conditions Générales de Vente
                                                  (CGV) et les Conditions
                                                  Générales d’Utilisation (CGU)
                                                </span>
                                                <span
                                                  className="ms-5"
                                                  onClick={() => {
                                                    handleOpen();
                                                  }}
                                                >
                                                  Consulter
                                                </span>
                                              </h4>
                                            </div>
                                          </div>

                                          <Modal
                                            open={open}
                                            onClose={handleClose}
                                            onEntered={handleEntered}
                                            size="md"
                                          >
                                            <Modal.Header>
                                              <Modal.Title className="text-theme">
                                                Conditions Générales d'Utilisation
                                                et de Vente de Guinée Ticket
                                              </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                              <TermsAndConditions />
                                            </Modal.Body>
                                            <Modal.Footer>
                                              <Button
                                                onClick={handleClose}
                                                appearance="primary"
                                              >
                                                Fermer
                                              </Button>
                                            </Modal.Footer>
                                          </Modal>
                                        </div>

                                        <div className="d-flex flex-stack mb-6">
                                          {/*begin::Title*/}
                                          <div className="flex-shrink-0 me-5">
                                            <span className="text-gray-500 fs-7 fw-bold me-2 d-block lh-1 pb-1 ">
                                              Vous allez payé
                                            </span>
                                            <span className="text-gray-800 fs-1 fw-bold text-theme">
                                              {" "}
                                              {totalAmount.toLocaleString()} GNF
                                            </span>
                                          </div>
                                          {/*end::Title*/}
                                          <button
                                            className={`btn btn-lg rounded fs-14 pull-center ${conditionsAccepted
                                                ? "btn-success"
                                                : "btn-secondary"
                                              }`}
                                            disabled={!conditionsAccepted}
                                            onClick={handlePayment}
                                          >
                                            Effectuer le Paiement
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {/* {shouldShowConfirmation() && ()} */}
                        </>
                      )}
                  </div>
                  <div className="col-lg-3">
                    <div className="d-flex flex-column gap-7 gap-lg-10 w-100  mb-7 me-lg-10 pe-0">
                      {isLoading ? (
                        <div>
                          <DescriptionSkeleton />
                          <OrganizatorSkeleton />
                          {/* <ReservationUpdateSkeleton /> */}
                          {/* <SkeletonElement width="100%" height="48px" borderRadius="8px" /> */}
                        </div>
                      ) : (
                        <>
                          <div className="card card-flush py-4">
                            <div className="card-header">
                              <div className="card-title">
                                <h2 className="text-theme">Description</h2>
                              </div>
                            </div>
                            <div className="card-body pt-0">
                              <span className="text-muted">
                                {eventDetails.STR_EVEDESCRIPTION}
                              </span>
                            </div>
                          </div>

                          <div className="card card-flush py-4">
                            <div className="card-header">
                              <div className="card-title">
                                <h2 className="text-theme">Organisateur</h2>
                              </div>
                            </div>
                            <div className="card-body text-center pt-0 bgi-no-repeat bgi-position-center bgi-size-cover card-rounded">
                              <div
                                className="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                                data-kt-image-input="true"
                              >
                                <div
                                  className="image-input-wrapper w-150px h-150px"
                                  style={{
                                    backgroundImage: `url(${urlBaseImage +
                                      eventDetails.STR_EVEANNONCEURPIC
                                      })`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                  }}
                                />
                              </div>

                              <div className="text-bold fs-7 text-theme">
                                {eventDetails.STR_EVEANNONCEUR}
                              </div>
                              <div className="text-muted fs-7 text-theme">
                                {eventDetails.STR_EVEANNONCEURDESC}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {((showGetTicket && !datePassed) ||
                        quantiteTicketGratuit > 0) && (
                          <>
                            {isLoading ? (
                              <>
                                <ReservationSummarySkeleton />
                              </>
                            ) : (
                              <>
                                <div className="card card-flush rounded border-warning border border-dashed py-4">
                                  <div className="card-header">
                                    <div className="card-title">
                                      <h2 className="text-theme">
                                        Mise au point des réservations
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="card-body pt-0">
                                    <span className="text-muted">
                                      {quantiteTicketGratuit > 0 ? (
                                        <div className="d-flex align-items-center mb-6">
                                          <span
                                            data-kt-element="bullet"
                                            className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info"
                                          />
                                          <div className="flex-grow-1 me-5">
                                            <div className="text-gray-800 fw-semibold fs-5 text-theme">
                                              {eventDetails.DT_EVEBEGIN} -{" "}
                                              {eventDetails.HR_EVEBEGIN}
                                            </div>
                                            <div className="text-gray-700 fw-semibold fs-6 text-theme">
                                              <p className="mb-0">
                                                <span className="badge bg-light text-danger">
                                                  {" "}
                                                </span>
                                              </p>
                                              {eventDetails.STR_EVENAME}
                                            </div>
                                          </div>
                                          <a
                                            className="btn btn-sm btn-light"
                                            data-bs-toggle="modal"
                                            data-bs-target="#kt_modal_create_project"
                                          >
                                            {quantiteTicketGratuit}
                                          </a>
                                        </div>
                                      ) : (
                                        <>
                                          {cartItems.map((item, index) => (
                                            <Reservations
                                              key={index}
                                              pannierData={item}
                                              index={index}
                                            />
                                          ))}
                                        </>
                                      )}
                                    </span>
                                    <button class="btn btn-light-warning fs-3 fw-bolder w-100 py-5 mb-13">
                                      {totalAmount === 0
                                        ? "Vos tickets sont gratuits"
                                        : ` ${totalAmount} GNF`}
                                    </button>
                                    <button
                                      class="btn btn-primary fs-3 fw-bolder w-100 py-5"
                                      onClick={handleCancelCommande}
                                    >
                                      Annuler l’achat{" "}
                                    </button>
                                  </div>
                                </div>
                              </>
                            )}
                          </>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end details content */}
        </section>
      )}

      {loading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}

export default Detail;
