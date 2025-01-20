import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { Link } from "react-router-dom";

import HeaderSkeleton from "../Skeleton/HeaderSkeleton";
import EventCardSkeleton from "../Skeleton/EventCardSkeleton";
import HeaderTyppeActiviteSkeleton from "../Skeleton/HeaderTyppeActiviteSkeleton";

import {
  Modal,
  Button,
  Placeholder,
  Loader,
  ButtonToolbar,
  Divider,
} from "rsuite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faMapMarkerAlt,
  faTags,
} from "@fortawesome/free-solid-svg-icons";

import {
  faEllipsisV,
  faShareAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet"; // Importer Helmet
import { useNavigate } from "react-router-dom";
// import { Modal, Button } from "react-bootstrap";

const EventCarousel = ({ data, ImagelBaseUrl, fullUrl, searchTerm }) => {

  const [rows, setRows] = useState(0);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEntered = () => setRows(3);
  const navigate = useNavigate();

  const windowWidth = window.innerWidth;
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Temporisateur pour afficher les skeletons pendant 1 seconde
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!data || data.length === 0) {
        setIsLoading(true); // Garder le loader actif si `data` est vide
      } else {
        setIsLoading(false); // Désactiver le loader si `data` contient des éléments
      }
    }, 2000); // Délai de 1 seconde dans les deux cas

    return () => clearTimeout(timer); // Nettoyer le timer
  }, [data]); // Dépendance sur `data`


  const getCarouselType = (length, width) => {
    if (length > 4) return "loop";
    if (width < 576) return "loop";
    return "slide";
  };

  const getPerPage = (length, width) => {
    if (width >= 1200) return 4;
    if (width >= 992) return 2;
    if (width >= 768) return 2;
    if (width >= 576) return 2;
    if (width <= 376) return 2;
    return 2;
  };

  const getImageName = (imagePath) => {
    const parts = imagePath.split("/");
    return parts[parts.length - 1];
  };

  const handleClick = (event) => {
    const { LG_EVEID, STR_EVESTATUTFREE } = event;
    localStorage.setItem("LG_EVEID", LG_EVEID);
    localStorage.setItem("STR_EVESTATUTFREE", STR_EVESTATUTFREE);
  };

  // Group events by STR_LSTDESCRIPTION and then by LG_LSTID
  const groupedEvents = data.reduce((acc, category) => {
    const lstDescription = category.STR_LSTDESCRIPTION;

    if (!acc[lstDescription]) {
      acc[lstDescription] = {};
    }

    category.evenements.forEach((event) => {
      const lgLstId = event.LG_LSTID;

      if (!acc[lstDescription][lgLstId]) {
        acc[lstDescription][lgLstId] = [];
      }

      acc[lstDescription][lgLstId].push(event);
    });

    return acc;
  }, {});

  // Filter events based on search term
  const filteredGroupedEvents = Object.entries(groupedEvents).reduce(
    (acc, [lstDescription, lgLstGroups]) => {
      const filteredLgLstGroups = Object.entries(lgLstGroups).reduce(
        (lgAcc, [lgLstId, events]) => {
          const filteredEvents = events.filter((event) => {
            const searchTermLower = searchTerm?.toLowerCase() || "";
            const eventName = event?.STR_EVENAME?.toLowerCase() || "";
            const eventDescription =
              event?.STR_EVEDESCRIPTION?.toLowerCase() || "";
            const eventPlace = event?.LG_LSTPLACEID?.toLowerCase() || "";

            return (
              eventName.includes(searchTermLower) ||
              eventDescription.includes(searchTermLower) ||
              eventPlace.includes(searchTermLower)
            );
          });

          if (filteredEvents.length > 0) {
            lgAcc[lgLstId] = filteredEvents;
          }
          return lgAcc;
        },
        {}
      );

      if (Object.keys(filteredLgLstGroups).length > 0) {
        acc[lstDescription] = filteredLgLstGroups;
      }
      return acc;
    },
    {}
  );

  //

  const generateSharingLinks = (event) => {
    if (!event) return {};

    const eventUrl = `${fullUrl}#/detail-event/${event.LG_EVEID}`;
    const eventImage = `${ImagelBaseUrl}${event.STR_EVEPIC}`;

    const eventTitle = event.STR_EVENAME;
    const eventDescription = event.STR_EVEDESCRIPTION;
    const sharedText = `${eventTitle}\n\n${eventDescription}\n\n🔗 Détails : ${eventUrl}`;

    return {
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
        sharedText
      )}\n\n ${eventImage}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        eventUrl
      )}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(
        eventUrl
      )}&text=${encodeURIComponent(sharedText)}`,
      instagram: `https://www.instagram.com/create/select/?caption=${encodeURIComponent(
        `${sharedText}\n\n ${eventImage}`
      )}`,
    };
  };

  return (
    <section className="section event-section">
      {selectedEvent && (
        <Helmet>
          <meta property="og:title" content={selectedEvent.STR_EVENAME} />
          <meta
            property="og:description"
            content={selectedEvent.STR_EVEDESCRIPTION}
          />
          <meta
            property="og:image"
            content={`${ImagelBaseUrl}${selectedEvent.STR_EVEPIC}`}
          />
          <meta
            property="og:url"
            content={`${fullUrl}#/detail-event/${selectedEvent.LG_EVEID}`}
          />
          <meta property="og:type" content="website" />
        </Helmet>
      )}
      <div className="container">
        {Object.entries(filteredGroupedEvents).map(
          ([lstDescription, lgLstGroups]) => (
            <div key={lstDescription}>
              <div className="row" id="HeaderSkeleton">
                <div className="col-12">
                  {isLoading ? (
                    <HeaderTyppeActiviteSkeleton />
                  ) : (
                    <>
                      <div className="d-flex flex-stack">
                        {/*begin::Wrapper*/}
                        <div className="d-flex align-items-center me-3 mt-20">
                          {/*begin::Icon*/}
                          {/* <img
                        src="../assets/media/svg/brand-logos/dribbble-icon-1.svg"
                        className="me-3 w-30px"
                        alt=""
                      /> */}
                          <div className="flex-grow-1">
                            <a className="text-gray-800 text-hover-primary fs-4 fw-bold lh-0 text-theme text-uppercase">
                              {lstDescription}
                            </a>
                            {/* <span className="text-gray-500 fw-semibold d-block fs-6">Activité</span> */}
                          </div>
                          {/*end::Section*/}
                        </div>
                      </div>
                      <Divider className="mt-2 mb-5" />
                    </>
                  )}
                </div>

                {Object.entries(lgLstGroups).map(([lgLstId, events]) => (
                  <div key={lgLstId} className="col-12 mb-4">
                    {isLoading ? (
                      <div className="mt-5">
                        <HeaderSkeleton />
                      </div>

                    ) : (
                      <>
                        <div className="section__title-wrap">
                          <h3 className="section__title fs-5 text-theme text-first-letter">
                            {lgLstId}
                          </h3>
                        </div>
                        {/* <Divider className="mt-2 mb-5" /> */}
                      </>
                    )}

                    {/* <hr className="border-dashed my-2" /> */}
                    <div className="col-12">
                      <Splide
                        options={{
                          type: getCarouselType(events.length, windowWidth),
                          perPage: getPerPage(events.length, windowWidth),
                          perMove: 1,
                          arrows: true,
                          pagination: false,
                          drag: true,
                          rewind: false,
                          gap: "24px",
                          autoplay: true,
                          interval: 7000,
                          pauseOnHover: true,
                        }}
                      >
                        {events.map((event) => (
                          <SplideSlide key={event.LG_EVEID}>
                            <>
                              {isLoading ? (
                                <EventCardSkeleton />
                              ) : (
                                <div
                                  className="card border-1"
                                  id="EventCardSkeleton"
                                >
                                  <div className="item item--carousel">
                                    <Link
                                      className="w-100"
                                      to={{
                                        pathname:
                                          process.env.REACT_APP_EVENT_DETAILS,
                                      }}
                                      onClick={() =>
                                        localStorage.setItem(
                                          "LG_EVEID",
                                          event.LG_EVEID
                                        )
                                      }
                                    >
                                      <div className="item__cover">
                                        <img
                                          src={
                                            getImageName(event.STR_EVEPIC) ===
                                              ""
                                              ? "assets/img/bg/slide__bg-2.jpg"
                                              : ImagelBaseUrl + event.STR_EVEPIC
                                          }
                                          alt={event.STR_EVENAME}
                                        />
                                        <span className="item__rate">
                                          <div className="event-date">
                                            <span
                                              className={`badge ${event.STR_EVESTATUTFREE === "1"
                                                  ? "badge-danger"
                                                  : "badge-success"
                                                }`}
                                            >
                                              {event.STR_EVESTATUTFREE === "1"
                                                ? "Payant"
                                                : "Gratuit"}
                                            </span>
                                          </div>
                                        </span>
                                      </div>
                                    </Link>
                                  </div>

                                  <div className="card-rounded-b flex flex-col gap-2 px-5 py-4.5 pt-1">
                                    <div class="flex items-center justify-between grow ">
                                      <Link
                                        className="text-lg font-medium text-gray-900 hover:text-primary truncate-text text-theme"
                                        to={{
                                          pathname:
                                            process.env.REACT_APP_EVENT_DETAILS,
                                        }}
                                        onClick={() => {
                                          localStorage.setItem(
                                            "LG_EVEID",
                                            event.LG_EVEID
                                          ); // Store with a unique key
                                          localStorage.setItem(
                                            "STR_EVESTATUTFREE",
                                            event.STR_EVESTATUTFREE
                                          ); // Another unique key if needed
                                        }}
                                      >
                                        {event.STR_EVENAME}
                                      </Link>

                                      <ButtonToolbar>
                                        <Button
                                          onClick={() => {
                                            handleOpen();
                                            setSelectedEvent(event);
                                          }}
                                          className="btn-share"
                                        >
                                          <FontAwesomeIcon
                                            icon={faEllipsisV}
                                            className="text-muted pull-right p-2 share-evente-icone "
                                          />
                                        </Button>
                                      </ButtonToolbar>
                                      <Modal
                                        open={open}
                                        onClose={handleClose}
                                        onEntered={handleEntered}
                                      >
                                        <Modal.Header>
                                          <Modal.Title className="text-theme">
                                            Partager l'événement
                                          </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                          {selectedEvent ? (
                                            <>
                                              <Helmet>
                                                <meta
                                                  property="og:title"
                                                  content={
                                                    selectedEvent.STR_EVENAME
                                                  }
                                                />
                                                <meta
                                                  property="og:description"
                                                  content={
                                                    selectedEvent.STR_EVEDESCRIPTION
                                                  }
                                                />
                                                <meta
                                                  property="og:image"
                                                  content={`${ImagelBaseUrl}${selectedEvent.STR_EVEPIC}`}
                                                />
                                                <meta
                                                  property="og:url"
                                                  content={`${fullUrl}#/detail-event/${selectedEvent.LG_EVEID}`}
                                                />
                                                <meta
                                                  property="og:type"
                                                  content="website"
                                                />
                                              </Helmet>

                                              <div
                                                id="share"
                                                className="text-center h-50 mb-5"
                                              >
                                                <div class="item__cover">
                                                  <img
                                                    className="img-fluid"
                                                    src={
                                                      getImageName(
                                                        selectedEvent.STR_EVEPIC
                                                      ) === ""
                                                        ? "assets/img/bg/slide__bg-2.jpg"
                                                        : ImagelBaseUrl +
                                                        selectedEvent.STR_EVEPIC
                                                    }
                                                    alt={
                                                      selectedEvent.STR_EVENAME
                                                    }
                                                  />
                                                </div>

                                                <h5 className="text-theme mt-10 ">
                                                  {selectedEvent.STR_EVENAME}
                                                </h5>
                                                <p className="text-theme">
                                                  {
                                                    selectedEvent.STR_EVEDESCRIPTION
                                                  }
                                                </p>

                                                <div className="social-share-icons d-flex justify-content-center gap-4 mt-4">
                                                  {Object.entries(
                                                    generateSharingLinks(
                                                      selectedEvent
                                                    )
                                                  ).map(([platform, link]) => (
                                                    <a
                                                      key={platform}
                                                      href={link}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="text-decoration-none"
                                                    >
                                                      <FontAwesomeIcon
                                                        icon={
                                                          platform ===
                                                            "whatsapp"
                                                            ? faWhatsapp
                                                            : platform ===
                                                              "facebook"
                                                              ? faFacebook
                                                              : platform ===
                                                                "telegram"
                                                                ? faTelegram
                                                                : platform ===
                                                                  "instagram"
                                                                  ? faInstagram
                                                                  : faShareAlt
                                                        }
                                                        size="2x"
                                                        className={`text-${platform}`}
                                                      />
                                                    </a>
                                                  ))}
                                                </div>
                                              </div>
                                            </>
                                          ) : (
                                            <div
                                              style={{ textAlign: "center" }}
                                            >
                                              <Loader size="md" />
                                            </div>
                                          )}
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
                                    <p className="truncate-text-1 text-theme">
                                      {event.STR_EVEDESCRIPTION}
                                    </p>
                                    <div className="flex items-center justify-between grow eventInfo">
                                      <div
                                        id="lieu"
                                        className="flex items-center  grow"
                                      >
                                        {/* Icone Lieu */}
                                        <div className="symbol symbol-20px symbol-circle me-3">
                                          <span className="symbol-label bg-default-subtle">
                                            <FontAwesomeIcon
                                              icon={faMapMarkerAlt}
                                              className="fs-7 text-gray-500"
                                            />
                                          </span>
                                        </div>
                                        <div className="m-0">
                                          <span className="fw-semibold text-gray-500 d-block fs-8">
                                            {event.LG_LSTID}
                                          </span>
                                          <a className="fw-bold text-gray-800 text-hover-primary fs-7 text-theme">
                                            {event.LG_LSTPLACEID ||
                                              "Lieu non disponible"}
                                          </a>
                                        </div>
                                      </div>

                                      <div className="flex items-center">
                                        <div className="d-flex align-items-center me-3 me-xl-3">
                                          {/* Icone Heure */}
                                          <div className="symbol symbol-20px symbol-circle me-3">
                                            <span className="symbol-label bg-default-subtle">
                                              <FontAwesomeIcon
                                                icon={faClock}
                                                className="fs-7 text-gray-500"
                                              />
                                            </span>
                                          </div>
                                          <div className="m-0">
                                            <span className="fw-bold text-gray-800 fs-7 text-theme">
                                              {event.DT_EVEBEGIN}
                                            </span>
                                            <span className="fw-semibold text-gray-500 d-block fs-8">
                                              {event.HR_EVEBEGIN}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </>
                          </SplideSlide>
                        ))}
                      </Splide>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default EventCarousel;
