import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDeviceId, getFingerprint } from "../../utils/deviceUtils"; // chemin vers ton utilitaire

import {
  faCalendar,
  faClock,
  faEye,
  faMapMarkerAlt,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { urlBaseImage, rootUrl, baseUrl } from "../../services/urlUtils";

const DetailHeader = ({ evenement, onDatePassedUpdate }) => {
  const [countdown, setCountdown] = useState("");
  const [countJour, setCountJour] = useState("");
  const [countHeure, setCountHeure] = useState("");
  const [countMinute, setCountMinute] = useState("");
  const [countSeconde, setCountSeconde] = useState("");
  const [datePassed, setDatePassed] = useState(false);
  const [eventStarted, setEventStarted] = useState(false);

    const [deviceId, setDeviceId] = useState(null);
  
    useEffect(() => {
      const fetchDeviceId = async () => {
        try {
          const id = await getFingerprint();
          console.log("je suis l'id", id);
          setDeviceId(id);
  
          // Tu peux ici appeler ton backend pour enregistrer la vue
          // Exemple :
          // await fetch(`${baseUrl}/enregistrer_vue.php`, {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json'
          //   },
          //   body: JSON.stringify({ STR_DEVICEID: id, LG_EVEID: evenement.PARAM_LG_EVEID, })
          // });
        } catch (error) {
          console.error("Erreur lors de la récupération du fingerprint :", error);
        }
      };
  
      fetchDeviceId();
    }, []);
  
    console.log("je suis l'id");
    console.log(deviceId);

  useEffect(() => {
    if (!evenement) return; // Protection contre evenement null/undefined

    // Vérifier si l'événement est passé dès le chargement du composant
    const isPassed = isDatePassed(evenement.DT_EVEEND, evenement.HR_EVEEND);
    setDatePassed(isPassed);
    onDatePassedUpdate(isPassed);

    // Vérifier si l'événement a commencé
    const hasStarted = hasEventStarted(
      evenement.DT_EVEBEGIN,
      evenement.HR_EVEBEGIN
    );
    setEventStarted(hasStarted);

    // Démarrer le compte à rebours si l'événement n'est pas passé
    if (!isPassed) {
      return startCountdown(evenement);
    }
  }, [evenement]);

  const startCountdown = (evt) => {
    if (!evt || !evt.DT_EVEEND || !evt.HR_EVEEND) {
      setCountJour("0");
      setCountHeure("00");
      setCountMinute("00");
      setCountSeconde("00");
      return;
    }

    const interval = setInterval(() => {
      const [day, month, year] = evt.DT_EVEEND.split("/");
      const [hours, minutes] = evt.HR_EVEEND.split(":");
      const eventDate = new Date(year, month - 1, day, hours, minutes);

      // Vérifier également si l'événement a commencé
      const hasStarted = hasEventStarted(evt.DT_EVEBEGIN, evt.HR_EVEBEGIN);
      if (hasStarted !== eventStarted) {
        setEventStarted(hasStarted);
      }

      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setCountJour(days);
        setCountHeure(hours < 10 ? `0${hours}` : hours);
        setCountMinute(minutes < 10 ? `0${minutes}` : minutes);
        setCountSeconde(seconds < 10 ? `0${seconds}` : seconds);

        setCountdown(`${days} Jour -${hours} H-${minutes}:${seconds}s`);
      } else {
        setCountdown("L'événement est terminé !");
        setCountJour("0");
        setCountHeure("00");
        setCountMinute("00");
        setCountSeconde("00");
        clearInterval(interval);

        setDatePassed(true);
        onDatePassedUpdate(true);
      }
    }, 1000);

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  };

  function formatNumberWithSpaces(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

  const isDatePassed = (dateString, timeString) => {
    if (!dateString || !timeString) return false; // Protection contre les valeurs null/undefined

    // Créer un objet Date à partir de la chaîne de date et d'heure
    const dateParts = dateString.split("/");
    const timeParts = timeString.split(":");

    // Construire un nouvel objet Date (année, mois, jour, heure, minute)
    const eventDate = new Date(
      parseInt(dateParts[2]), // année
      parseInt(dateParts[1]) - 1, // mois (0-11)
      parseInt(dateParts[0]), // jour
      parseInt(timeParts[0]), // heure
      parseInt(timeParts[1]) // minute
    );

    // Comparer l'heure actuelle à la date de l'événement
    return new Date() > eventDate; // retourne true si la date est passée
  };

  const hasEventStarted = (dateString, timeString) => {
    if (!dateString || !timeString) return false; // Protection contre les valeurs null/undefined

    // Créer un objet Date à partir de la chaîne de date et d'heure
    const dateParts = dateString.split("/");
    const timeParts = timeString.split(":");

    // Construire un nouvel objet Date (année, mois, jour, heure, minute)
    const eventStartDate = new Date(
      parseInt(dateParts[2]), // année
      parseInt(dateParts[1]) - 1, // mois (0-11)
      parseInt(dateParts[0]), // jour
      parseInt(timeParts[0]), // heure
      parseInt(timeParts[1]) // minute
    );

    const now = new Date();

    // Vérifier si la date actuelle est égale à la date de début
    const isSameDay =
      now.getDate() === eventStartDate.getDate() &&
      now.getMonth() === eventStartDate.getMonth() &&
      now.getFullYear() === eventStartDate.getFullYear();

    // Vérifier si l'heure actuelle est supérieure ou égale à l'heure de début
    const timeHasPassed = now >= eventStartDate;

    // L'événement a commencé si nous sommes le même jour et que l'heure est dépassée
    return isSameDay && timeHasPassed;
  };

  return (
    <div id="detail-header">
      <section
        className="details-banner bg_img"
        style={{
          backgroundImage: `url(${urlBaseImage + evenement.STR_EVEPIC})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container banner-heightbook-sections detail-banner">
          <div className="item__cover_">
            <img
              src={urlBaseImage + evenement.STR_EVEPIC}
              alt={evenement.STR_EVEPIC}
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      <div className="bg-white">
        <section className="book-sections bg-white">
          <div className="container">
            <div id="headerbottom" className="book-wrapper py-7 flex-stack">
              <div>
                <div className="social-and-duration">
                  <h2
                    id="event-name-desktop"
                    className="titles detail-title truncate-2-lines text-theme"
                  >
                    {evenement.STR_EVENAME}
                  </h2>
                  <div className="duration-area d-flex align-items-center">
                    <div className="d-flex">
                      <a
                        className={`p-3 badge me-2 ${!datePassed
                            ? evenement.STR_EVESTATUTFREE == 1
                              ? "badge-danger" // Payant
                              : "badge-success" // Gratuit
                            : "badge-warning" // Terminé
                          }`}
                      >
                        {!datePassed
                          ? evenement.STR_EVESTATUTFREE == 1
                            ? "Payant"
                            : "Gratuit"
                          : "Terminé"}
                      </a>

                      {/* Badge "Événement commencé" */}
                      {eventStarted && !datePassed && (
                        <a className="p-3 badge badge-info me-2">
                          Événement commencé
                        </a>
                      )}
                    </div>
                    <div className="d-flex align-items-center me-5 me-xl-13 ms-2">
                      {/* Icone Date */}
                      <div className="symbol symbol-30px symbol-circle me-3">
                        <span className="symbol-label bg-danger-subtle">
                          <FontAwesomeIcon
                            icon={faCalendar}
                            className="fs-5 text-danger"
                          />
                        </span>
                      </div>
                      <div className="m-0">
                        <span className="fw-semibold text-gray-500 d-block fs-8">
                          Date début
                        </span>
                        <a className="fw-bold text-gray-800 text-hover-primary fs-7 text-theme">
                          {evenement.DT_EVEBEGIN}
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-center me-5 me-xl-13">
                      {/* Icone Heure */}
                      <div className="symbol symbol-30px symbol-circle me-3">
                        <span className="symbol-label bg-success-subtle">
                          <FontAwesomeIcon
                            icon={faClock}
                            className="fs-5 text-success"
                          />
                        </span>
                      </div>
                      <div className="m-0">
                        <span className="fw-semibold text-gray-500 d-block fs-8">
                          Heure
                        </span>
                        <span className="fw-bold text-gray-800 fs-7 text-theme">
                          {evenement.HR_EVEBEGIN}
                        </span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center me-5 me-xl-13">
                      {/* Icone Heure */}
                      <div className="symbol symbol-30px symbol-circle me-3">
                        <span className="symbol-label bg-primary-subtle">
                          <FontAwesomeIcon
                            icon={faEye}
                            className="fs-5 text-primary"
                          />
                        </span>
                      </div>
                      <div className="m-0">
                        <span className="fw-semibold text-gray-500 d-block fs-8">
                          Nombre de vue
                        </span>
                        <span className="fw-bold text-gray-800 fs-7 text-theme">
                          {/* {evenement.HR_EVEBEGIN} */}
                           {formatNumberWithSpaces("1000000")}
                          
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {!datePassed && (
                <ul
                  className="nav nav-pills nav-pills-custom mt-3"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a className="nav-link d-flex flex-column flex-center overflow-hidden w-70px w-75px py-4 active">
                      <h3 className="text-gray-600 fw-bold mb-0 fs-1 compte-a-rebour">
                        {countJour}
                      </h3>
                      <span className="text-gray-600 fw-bold fs-8 lh-1 compte-a-rebour">
                        Jour
                      </span>
                      <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary border-bottom"></span>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link d-flex flex-column flex-center overflow-hidden w-70px w-75px py-4 active">
                      <h3 className="text-gray-600 fw-bold mb-0 fs-1 compte-a-rebour">
                        {countHeure}
                      </h3>
                      <span className="text-gray-600 fw-bold fs-8 lh-1 compte-a-rebour">
                        Heure
                      </span>
                      <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary border-bottom"></span>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link d-flex flex-column flex-center overflow-hidden w-70px w-75px py-4 active">
                      <h3 className="text-gray-600 fw-bold mb-0 fs-1 compte-a-rebour">
                        {countMinute}
                      </h3>
                      <span className="text-gray-600 fw-bold fs-8 lh-1 compte-a-rebour">
                        Min
                      </span>
                      <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary border-bottom"></span>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link d-flex flex-column flex-center overflow-hidden w-70px w-75px py-4 active">
                      <h3 className="text-gray-600 fw-bold mb-0 fs-1 compte-a-rebour">
                        {countSeconde}
                      </h3>
                      <span className="text-gray-600 fw-bold fs-8 lh-1 compte-a-rebour">
                        Sec
                      </span>
                      <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary border-bottom"></span>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailHeader;
