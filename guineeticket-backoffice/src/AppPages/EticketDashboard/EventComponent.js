import React, { useState, useEffect } from "react";
import { crudData } from "../../services/apiUtils";
import { useNavigate } from "react-router-dom";
import format from "date-fns/format";
import {
  loadStores,
  fetchCategorieData,
  useLoadStores,
} from "../../services/apiUtils";
import { convertDateFormat_YMDHM, getCurrentDate } from "../../utils/dateUtils";
import { authService } from "../../services/AuthService";
import useFetchData from "../../services/useFetchData";
import { urlBaseImage, baseUrl } from "../../services/urlUtils";


const EventComponent = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const DEFAULT_LIST_LENGTH = 1;
  const user = authService.checkAuth(navigate);

  const params = {
    mode: process.env.REACT_APP_LISTE_EVENT_MODE,
    STR_UTITOKEN: user.STR_UTITOKEN,
    // DT_BEGIN: "2025-04-10 00:00",
    // DT_END: "2025-08-31 23:59",
    DT_BEGIN: convertDateFormat_YMDHM(getCurrentDate(true) + " 00:00"),
    DT_END: convertDateFormat_YMDHM(getCurrentDate(true) + " 23:59"),
    length: DEFAULT_LIST_LENGTH,
    statistique: true,
    LG_AGEREQUESTID: user.LG_AGEREQUESTID,
  };

  const {
    data: fetchedData,
    error: fetchError,
    loading: fetchLoading,
    refetch,
  } = useFetchData(
    process.env.REACT_APP_TICKET_MANAGER_API_URL,
    params,
    "data"
  );

  // Utiliser useEffect pour mettre à jour l'état de chargement basé sur fetchLoading
  useEffect(() => {
    setLoading(fetchLoading);
  }, [fetchLoading]);

  if (!user) {
    return navigate(process.env.REACT_APP_SIGN_IN);
  }

  // Extraire le premier événement du tableau
  const eventData =
    fetchedData && fetchedData.length > 0 ? fetchedData[0] : null;

  return (
    <>
      {eventData && (
        <div className="col-xxl-6 h-100">
        <div className="card card-flush h-xl-100">
        {/*begin::Body*/}
        <div className="card-body py-9">
          {loading ? (
            <div className="d-flex justify-content-center">
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </div>
          ) : (
            /*begin::Row*/
            <div className="row gx-9">
              {/*begin::Col*/}
              <div className="col-sm-6 mb-10 mb-sm-0">
                {/*begin::Image*/}
                <div
                  className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-400px min-h-sm-100 h-100"
                  style={{
                    backgroundSize: "100% 100%",
                    backgroundImage: `url(${
                      urlBaseImage + eventData?.STR_EVEPIC
                    })`,
                  }}
                ></div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex flex-column h-100">
                  <div className="mb-7">
                    <div className="d-flex flex-stack mb-6">
                      <div className=" me-5">
                        <span className="text-gray-500 fs-7 fw-bold me-2 d-block lh-1 pb-1">
                          Titre de l'évènement
                        </span>
                        <span className="text-gray-800 fs-6 fw-bold">
                          {eventData?.STR_EVENAME}
                        </span>
                      </div>
                      {/*end::Title*/}
                      <span
                        className={`badge flex-shrink-0 align-self-center py-3 px-4 fs-7 ${
                          eventData?.STR_EVESTATUT === "enable"
                            ? "badge-light-success"
                            : "badge-light-danger"
                        }`}
                      >
                        {eventData?.STR_EVESTATUT === "enable"
                          ? "Actif"
                          : "Inactif"}
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
                            Annonceur
                          </span>
                          <a
                            href="#"
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
                            Lieu
                          </span>
                          <span className="fw-bold text-gray-800 fs-7">
                            {eventData?.LG_LSTPLACEID}
                          </span>
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
                            {eventData?.DT_EVEBEGIN}{" "}
                            {eventData?.HR_EVEBEGIN}
                          </span>
                          <div className="fw-semibold text-gray-500">
                            Date de début
                          </div>
                        </div>
                      )}
                      {eventData?.DT_EVEEND && (
                        <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 mb-3">
                          <span className="fs-6 text-gray-700 fw-bold">
                            {eventData?.DT_EVEEND} {eventData?.HR_EVEEND}
                          </span>
                          <div className="fw-semibold text-gray-500">
                            Date de fin
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Ajout des catégories */}
                  {/* {eventData?.categorie && eventData.categorie.length > 0 && (
                    <div className="mb-6">
                      <h3 className="fw-bold text-gray-800 mb-4">Catégories de billets</h3>
                      <div className="table-responsive">
                        <table className="table table-rounded table-striped border gy-7 gs-7">
                          <thead>
                            <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                              <th>Type</th>
                              <th>Prix</th>
                              <th>Disponible</th>
                              <th>Max par commande</th>
                              <th>Vendus</th>
                            </tr>
                          </thead>
                          <tbody>
                            {eventData.categorie.map((cat, index) => (
                              <tr key={index}>
                                <td>{cat.STR_LSTDESCRPTION}</td>
                                <td>{new Intl.NumberFormat().format(cat.DBL_ELIAMOUNT)}</td>
                                <td>{cat.INT_TICNUMBERREST}</td>
                                <td>{cat.INT_ELINUMBERMAX}</td>
                                <td>{cat.INT_TICNUMBERSELL}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
        
      )}
    </>
  );
};

export default EventComponent;
