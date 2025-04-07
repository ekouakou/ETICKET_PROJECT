import React, { useState, useEffect } from "react";
import useFetchData from "../../services/useFetchData";
import AppHeader from "../../AppComponents/Header/AppHeader";
import SliderComponent from "../../AppComponents/Slider/SliderComponent";
import { urlBaseImage, rootUrl , baseUrl} from "../../services/urlUtils";
import ExpectedPremiere from "./ExpectedPremiere";
import BannerSkeleton from "../../AppPages/Skeleton/BannerSkeleton";
import SiteHeaderSkeleton from "../Skeleton/SiteHeaderSkeleton";
import { getWeekRange } from "../../utils/dateUtils"; // Ajuste le chemin selon ton projet
import EventCardSkeleton from "../../AppPages/Skeleton/EventCardSkeleton";

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true); // État pour simuler le chargement

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  const { pastDate, futureDate } = getWeekRange(4, 6);
  const {
    data: activitesData,
    loading,
    error,
  } = useFetchData(process.env.REACT_APP_TICKET_MANAGER_API_URL, {
    mode: process.env.REACT_APP_LIST_EVENEMENT_FRONT_MODE,
    DT_BEGIN: pastDate,
    DT_END: futureDate,
  }, "data" );

  // Simulation d'un chargement de 2 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading || loading ? (
        <>
          <SiteHeaderSkeleton />
          <section className="home home--hero pt-0">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <BannerSkeleton />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-3">
                  <EventCardSkeleton />
                </div>
                <div className="col-lg-3">
                  <EventCardSkeleton />
                </div>
                <div className="col-lg-3">
                  <EventCardSkeleton />
                </div>
                <div className="col-lg-3">
                  <EventCardSkeleton />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-3">
                  <EventCardSkeleton />
                </div>
                <div className="col-lg-3">
                  <EventCardSkeleton />
                </div>
                <div className="col-lg-3">
                  <EventCardSkeleton />
                </div>
                <div className="col-lg-3">
                  <EventCardSkeleton />
                </div>
              </div>
            </div>
          </section>
        </>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <AppHeader onSearch={handleSearch} />
          <SliderComponent ImagelBaseUrl={urlBaseImage} />
          {activitesData && activitesData.length > 0 ? (
            <ExpectedPremiere
              ImagelBaseUrl={urlBaseImage}
              fullUrl={rootUrl}
              baseUrl={baseUrl}
              data={activitesData}
              searchTerm={searchTerm}
            />
          ) : (
            <p>Aucun événement à afficher.</p>
          )}
        </>
      )}
    </div>
  );
};

export default EventList;
