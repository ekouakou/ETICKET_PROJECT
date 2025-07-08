import React from "react";
import { Carousel } from "rsuite";
import "@splidejs/splide/dist/css/splide.min.css";
import useFetchData from "../../services/useFetchData";
import BannerSkeleton from "../../AppPages/Skeleton/BannerSkeleton";
import {
  formatDate,
  getCurrentDate,
  getDateInPastMonths,
  getDateInFutureMonths,
} from "../../utils/dateUtils";

const SliderComponent = ({ numberSlidesToShow = 1, ImagelBaseUrl }) => {

  const {
    data: sliderData,
    loading,
    error,
  } = useFetchData(process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL, {
    mode: process.env.REACT_APP_LIST_BANNIERE_MODE,
    DT_BEGIN: formatDate(getDateInPastMonths(new Date(), 12)),
    DT_END: formatDate(getDateInFutureMonths(new Date(), 12)),
  }, "data");

  return (
    <section className="home home--hero">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {loading || !sliderData || sliderData.length === 0 ? (
              <BannerSkeleton />
            ) : (
              <Carousel
                autoplay
                className="custom-slider"
                style={{ height: 550 }}
              >
                {sliderData.map((item, index) => (
                  <img
                    key={index}
                    src={`${ImagelBaseUrl}${item.STR_BANPATH}`}
                    alt={item.title || `Slide ${index + 1}`}
                  />
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
