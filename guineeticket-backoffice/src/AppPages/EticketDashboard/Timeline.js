import React, { useState, useEffect } from "react";
import moment from "moment";
import { crudData } from "../../services/apiUtils";
import { useNavigate } from "react-router-dom";
import { urlBaseImage, baseUrl } from "../../services/urlUtils";
import {
  formatDate,
  convertDateFormat_YMDHM,
  getDateInFutureMonths,
} from "../../utils/dateUtils";

// Configuration de moment.js en français
import "moment/locale/fr";
moment.locale("fr");

// Constantes
const DATE_FORMAT = "YYYY-MM-DD";
const TIME_HORIZON = getDateInFutureMonths(new Date(), 3);
const DEFAULT_LIST_LENGTH = 4;
const DAYS_TO_DISPLAY = 10;
const DAYS_BEFORE_TODAY = 1;
const DAY_NAME_LENGTH = 3; // Nombre de caractères du nom du jour à afficher

/**
 * Composant Timeline qui affiche les événements pour les dates sélectionnées
 */
const Timeline = () => {
  const today = moment();
  const navigate = useNavigate();

  // Gestion d'état
  const [selectedDate, setSelectedDate] = useState(today.format(DATE_FORMAT));
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  /**
   * Convertit une date du format DD/MM/YYYY au format YYYY-MM-DD
   * @param {string} dateString - Date au format DD/MM/YYYY
   * @returns {string} Date au format YYYY-MM-DD
   */
  const convertDateFormat = (dateString) => {
    if (!dateString || typeof dateString !== "string") {
      console.error("La date doit être une chaîne de caractères");
      return "";
    }

    const [day, month, year] = dateString.split("/");

    if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) {
      console.error("Format de date invalide:", dateString);
      return "";
    }

    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  /**
   * Récupère les événements pour une date spécifique
   * @param {string} date - Date au format YYYY-MM-DD
   */
  const fetchEvents = async (date) => {
    if (!user?.STR_UTITOKEN) return;

    try {
      const params = {
        mode: process.env.REACT_APP_LISTE_EVENT_MODE,
        STR_UTITOKEN: user.STR_UTITOKEN,
        DT_BEGIN: convertDateFormat_YMDHM(date + " 00:00"),
        length: DEFAULT_LIST_LENGTH,
        statistique: true,
        DT_END: convertDateFormat_YMDHM(TIME_HORIZON + " 23:59"),
      };

      const response = await crudData(
        params,
        process.env.REACT_APP_TICKET_MANAGER_API_URL
      );
      if (response.data.code_statut == 2) {
        return navigate(process.env.REACT_APP_SIGN_IN);
      }

      const fetchedEvents = response.data?.data || [];
      setEvents(fetchedEvents);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des événements:", error);
      setEvents([]);
      setLoading(false);
    }
  };

  // Vérifier l'authentification de l'utilisateur et charger les données initiales
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userConnectedData"));
    if (!storedUser) {
      navigate(process.env.REACT_APP_SIGN_IN);
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  // Récupérer les événements lorsque la date sélectionnée ou l'utilisateur change
  useEffect(() => {
    if (user) {
      fetchEvents(selectedDate);
    }
  }, [selectedDate, user]);

  /**
   * Gérer la sélection de date
   * @param {string} date - Date sélectionnée au format YYYY-MM-DD
   */
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Générer une plage de dates pour la navigation (1 jour avant aujourd'hui et 9 jours après)
  const dateRange = Array.from({ length: DAYS_TO_DISPLAY }, (_, i) =>
    today
      .clone()
      .subtract(DAYS_BEFORE_TODAY, "days")
      .add(i, "days")
      .format(DATE_FORMAT)
  );

  // Filtrer les événements pour la date sélectionnée
  const filteredEvents = events.filter(
    (event) =>
      event?.DT_EVEBEGIN &&
      convertDateFormat(event.DT_EVEBEGIN) === selectedDate
  );

  return (
    <div className="col-lg-12">
      <div className="card h-md-100">
        <CardHeader />
        <div className="card-body pt-7 px-0">
          <DateNavigation
            dates={dateRange}
            selectedDate={selectedDate}
            onDateClick={handleDateClick}
            dayNameLength={DAY_NAME_LENGTH}
          />
          <EventsList
            loading={loading}
            events={filteredEvents}
            urlBaseImage={urlBaseImage}
            baseUrl={baseUrl}
          />
        </div>
      </div>
    </div>
  );
};

/**
 * Composant d'en-tête de carte
 */

const CardHeader = () => {
  // Obtenir l'année et le mois actuels en français
  const currentMonth = moment().format("MMMM"); // nom du mois en français
  const currentYear = moment().format("YYYY"); // année

  // Première lettre du mois en majuscule
  const capitalizedMonth =
    currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1);

  return (
    <div className="card-header border-0 pt-5">
      <h3 className="card-title align-items-start flex-column">
        <span className="card-label fw-bold text-gray-900">
          Événements du jour
        </span>
        {/* <span className="text-muted mt-1 fw-semibold fs-7">Total 424,567 livraisons</span> */}
      </h3>
      <div className="card-toolbar">
        {/* <span className="fw-bold text-gray-700 me-2">{capitalizedMonth} {currentYear}</span> */}
        <a className="btn btn-sm btn-success me-2">{capitalizedMonth}</a>
        <a className="btn btn-sm btn-light fw-bold">{currentYear}</a>
      </div>
    </div>
  );
};
/**
 * Composant de navigation par date
 * @param {Array} dates - Tableau des dates à afficher
 * @param {string} selectedDate - Date actuellement sélectionnée
 * @param {Function} onDateClick - Gestionnaire de clic de date
 * @param {number} dayNameLength - Nombre de caractères du nom du jour à afficher
 */
const DateNavigation = ({
  dates,
  selectedDate,
  onDateClick,
  dayNameLength,
}) => (
  <ul
    className="nav nav-stretch nav-pills nav-pills-custom nav-pills-active-custom d-flex justify-content-between mb-8 px-5"
    role="tablist"
  >
    {dates.map((date, index) => {
      // Récupérer les premiers caractères du nom du jour et capitaliser la première lettre
      const dayName = moment(date).format("dddd").substring(0, dayNameLength);
      const capitalizedDayName =
        dayName.charAt(0).toUpperCase() + dayName.slice(1);

      return (
        <li className="nav-item p-0 ms-0" role="presentation" key={index}>
          <a
            className={`nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 ${
              selectedDate === date
                ? "btn-active-danger active"
                : "btn-active-danger"
            }`}
            onClick={() => onDateClick(date)}
            role="tab"
          >
            <span className="fs-7 fw-semibold">{capitalizedDayName}</span>
            <span className="fs-6 fw-bold">{moment(date).format("DD")}</span>
          </a>
        </li>
      );
    })}
  </ul>
);

/**
 * Composant de liste d'événements
 * @param {boolean} loading - État de chargement
 * @param {Array} events - Événements à afficher
 * @param {string} urlBaseImage - URL de base pour les images
 * @param {string} baseUrl - URL de base pour les liens
 */
const EventsList = ({ loading, events, urlBaseImage, baseUrl }) => (
  <div className="tab-content mb-2 px-9 overflow-auto" style={{ height: "110px" }}>

    {loading ? (
      <div className="text-center">Chargement en cours...</div>
    ) : events.length > 0 ? (
      events.map((event, index) => (
        <EventItem
          key={index}
          event={event}
          urlBaseImage={urlBaseImage}
          baseUrl={baseUrl}
        />
      ))
    ) : (
      <div className="text-center">Pas d'événements à cette date</div>
    )}
  </div>
);

/**
 * Composant d'élément d'événement individuel
 * @param {Object} event - Données d'événement
 * @param {string} urlBaseImage - URL de base pour les images
 * @param {string} baseUrl - URL de base pour les liens
 */
const EventItem = ({ event, urlBaseImage, baseUrl }) => (
  <div className="d-flex align-items-center mb-6">
    <span className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info" />

    <div className="flex-grow-1 me-5">
      <div className="symbol symbol-50px me-3 d-flex">
        <img src={`${urlBaseImage}${event.STR_EVEPIC}`} className="" alt="" />
        <div className="text-gray-800 fw-semibold fs-2 ms-2">
          {event.HR_EVEBEGIN} - {event.HR_EVEEND}
          <div className="text-gray-700 fw-semibold fs-6">
            {event.STR_EVENAME}
          </div>
        </div>
      </div>
      <EventCategories categories={event.categorie} />
    </div>

    <a
      href={`${baseUrl}#/detail-event/${event.LG_EVEID}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-sm btn-light"
    >
      Voir
    </a>
  </div>
);

/**
 * Composant des catégories d'événements
 * @param {Array} categories - Catégories pour un événement
 */
const EventCategories = ({ categories }) => (
  <div className="d-flex mt-4">
    {categories.map((cat, index) => (
      <div
        className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 me-6 mb-3"
        key={index}
      >
        <span className="fs-6 text-gray-700 fw-bold">
          {cat.DBL_ELIAMOUNT} {process.env.REACT_APP_DEVISE}
        </span>
        <div className="fw-semibold text-gray-500 mt-1">
          {cat.STR_LSTDESCRPTION}
        </div>
        <span className="fw-semibold text-gray-700 d-block text-theme mt-1">
          <img className="me-1" width="15" src="assets/media/armchair.png" />
          <span className="fw-bold text-danger">
            {cat.INT_TICNUMBERREST}
          </span>{" "}
          Place(s) disponible(s)
        </span>
      </div>
    ))}
  </div>
);

export default Timeline;
