import React, { useState, useEffect } from 'react';
import { crudData } from "../../services/apiUtils";
import { useNavigate } from 'react-router-dom';
import format from 'date-fns/format';
import { loadStores, fetchCategorieData, useLoadStores } from "../../services/apiUtils";


const EventComponent = () => {
  const [eventData, setEventData] = useState([]);
  const [user, setUser] = useState(null); // Add state for user
  const urlBaseImage = localStorage.getItem("urlBaseImage");
  const paths = JSON.parse(localStorage.getItem("appPaths"));
  const apiUrl = "TicketManager.php";
  const navigate = useNavigate();

  const [categories, setCategories] = useState([
    {
      LG_LSTID: "",
      INT_ELINUMBER: "",
      INT_ELINUMBERMAX: "",
      DBL_ELIAMOUNT: "",
    },
  ]);

  const formatDate = (date) => {
    return format(date, 'yyyy-MM-dd');
  };

  const fetchData = (params, url, setData) => {
    crudData(params, url)
      .then(response => {
        console.log('Réponse de l\'API:', response);
        const events = response.data;
        setData(events);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  };


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userConnectedData'));
    if (!storedUser) {
      navigate(paths.signIn); // Redirige vers la page d'accueil si l'utilisateur est vide
    } else {
      setUser(storedUser); // Set user in state
      fetchData({
        mode: 'getEvenement',
        STR_UTITOKEN: storedUser.STR_UTITOKEN,
        LG_EVEID: "JUUnjb6XYC0M7lG2lx9oM1kJ2I3A1fKAOhbanqIA",
        DT_BEGIN: "2020-01-01",
        DT_END: "2025-08-31"
      }, apiUrl, setEventData);

      fetchCategorieData(
        { mode: "listCategorieplaceEvenement", LG_EVEID: "JUUnjb6XYC0M7lG2lx9oM1kJ2I3A1fKAOhbanqIA" },
        apiUrl,
        setCategories
      );


    }
  }, []);

  return (
    <>
      <div className="col-xxl-6">
        {/*begin::Card widget 18*/}
        <div className="card card-flush h-xl-100">
          {/*begin::Body*/}
          <div className="card-body py-9">
            {/*begin::Row*/}
            <div className="row gx-9">
              {/*begin::Col*/}
              <div className="col-sm-6 mb-10 mb-sm-0">
                {/*begin::Image*/}
                <div
                  className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-400px min-h-sm-100 h-100"
                  style={{
                    backgroundSize: "100% 100%",
                    backgroundImage: `url(${urlBaseImage + eventData?.STR_EVEPIC})`

                  }}
                ></div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex flex-column h-100">
                  <div className="mb-7">
                    <div className="d-flex flex-stack mb-6">
                      <div className="flex-shrink-0 me-5">
                        <span className="text-gray-500 fs-7 fw-bold me-2 d-block lh-1 pb-1">
                          Titre de l'évènement
                        </span>
                        <span className="text-gray-800 fs-1 fw-bold">{eventData?.STR_EVENAME}</span>
                        {/* <span className="text-gray-800 fs-1 fw-bold">{eventData?.STR_EVEDESCRIPTION}</span> */}
                      </div>
                      {/*end::Title*/}
                      <span className="badge badge-light-primary flex-shrink-0 align-self-center py-3 px-4 fs-7">
                        In Process
                      </span>
                    </div>
                    <div className="d-flex align-items-center flex-wrap d-grid gap-2">
                      <div className="d-flex align-items-center me-5 me-xl-13">
                        <div className="symbol symbol-30px symbol-circle me-3">
                          <img
                            src={urlBaseImage + eventData?.STR_EVEPIC}
                            className=""
                            alt=""
                          />
                        </div>
                        <div className="m-0">
                          <span className="fw-semibold text-gray-500 d-block fs-8">
                            Annoceur
                          </span>
                          <a
                            href="pages/user-profile/overview.html"
                            className="fw-bold text-gray-800 text-hover-primary fs-7"
                          >
                            {eventData?.STR_EVEANNONCEUR}
                          </a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-30px symbol-circle me-3">
                          <span className="symbol-label bg-success">
                            <i className="ki-duotone ki-abstract-41 fs-5 text-white">
                              <span className="path1" />
                              <span className="path2" />
                            </i>{" "}
                          </span>
                        </div>
                        <div className="m-0">
                          <span className="fw-semibold text-gray-500 d-block fs-8">
                            Budget
                          </span>
                          <span className="fw-bold text-gray-800 fs-7">$64.800</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <span className="fw-semibold text-gray-600 fs-6 mb-8 d-block">
                      {eventData?.STR_EVEDESCRIPTION}
                    </span>
                    <div className="d-flex">
                      {eventData?.DT_EVEBEGIN && (
                        <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 me-6 mb-3">
                          <span className="fs-6 text-gray-700 fw-bold">
                            {eventData?.DT_EVEBEGIN}
                          </span>
                          <div className="fw-semibold text-gray-500">Date de début</div>
                        </div>
                      )}
                      {eventData?.DT_EVEEND && (
                        <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 mb-3">
                          <span className="fs-6 text-gray-700 fw-bold">
                            {eventData?.DT_EVEEND}
                          </span>
                          <div className="fw-semibold text-gray-500">Date de fin</div>
                        </div>
                      )}
                    </div>

                    <div className="row ">
                      {categories.map((cat, index) => (
                        <div className="border border-dashed border-info-300 rounded px-7 py-3 mb-6 col-lg-6 bg-light-warning">
                          <div className="d-flex flex-stack mb-3">
                            <div className="me-3">
                              <img
                                src="../assets/media/stock/ecommerce/210.png"
                                className="w-50px ms-n1 me-1"
                                alt=""
                              />
                              <a
                                href="../apps/ecommerce/catalog/edit-product.html"
                                className="text-gray-800 text-hover-primary fw-bold"
                              >
                                {cat.STR_LSTDESCRPTION}
                              </a>
                            </div>
                          </div>
                          <div className="d-flex flex-stack">
                            <span className="text-gray-500 fw-bold">
                              Prix :
                              <a
                                href="../apps/ecommerce/sales/details.html"
                                className="text-gray-800 text-hover-primary fw-bold"
                              >
                                 {cat.DBL_ELIAMOUNT} GNF
                              </a>
                            </span>
                            {/* <span className="badge badge-light-success">Delivered</span> */}
                          </div>
                        </div>

                      ))}
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default EventComponent;
