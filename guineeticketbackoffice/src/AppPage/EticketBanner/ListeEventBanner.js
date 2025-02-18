import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import GenericDataTable from "../GenericDataTable";
import eventService from "../../services/BannerService";
import PageTitle from '../PageTitle';
import ActionButton from '../ActionButton';
import useLoader from '../../utils/useLoader'
import SkeletonTable from "../Skeleton/SkeletonTable";


const ListeEventBanner = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState([]);
  const isLoading = useLoader(eventData);


  const fetchEvents = async () => setEventData(await eventService.getEvents(navigate));

  const handleApiCall = async ({ mode, id, status }) => {
    const success = mode === "delete" ? await eventService.deleteEvent(navigate, id) :
      mode === "updateStatus" ? await eventService.updateEventStatus(navigate, id, status) : false;

    if (success) {
      toast.success("Opération réussie", { position: "top-center", autoClose: 3000 });
      fetchEvents();
    }
  };

  useEffect(() => { fetchEvents(); }, [navigate]);

  const breadcrumbs = [
    { text: 'Bannières', link: '/' },
    { isBullet: true },
    { text: 'Liste des bannières' },
  ];

  return (
      <div className="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
          <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
            <PageTitle heading="Liste des bannières" breadcrumbs={breadcrumbs} />
            <ActionButton text="Ajouter bannière" link={process.env.REACT_APP_SAVE_BANNER} className="btn-primary" />
          </div>
        </div>
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div id="kt_app_content_container" className="app-container container-xxl">

          {isLoading ? (
              <>
                <SkeletonTable rows={6} columns={4} />
              </>
            ) : (
              <div className="row gx-5 gx-xl-10">
                <div className="col-xxl-12 mb-5 mb-xl-10">
                  <div className="card card-flush h-xl-100">
                    <div className="card-body pt-6">
                      <>
                      <GenericDataTable
                      data={eventData} columns={eventService.getColumns()} tableId="eventTable"
                      onEdit={(id) => navigate(process.env.REACT_APP_SAVE_BANNER, { state: { LG_BANID: id } })}
                      onDelete={true} onToggleStatus={true}
                      deleteConfirmMessage={(id) => `Êtes-vous sûr de vouloir supprimer cette bannier (${id}) ?`}
                      toggleStatusConfirmMessage={(id, newStatus) => `Êtes-vous sûr de vouloir ${newStatus === "enable" ? "activer" : "désactiver"} cet événement (${id}) ?`}
                      handleApiCall={handleApiCall}
                    />
                      </>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
  );
};

export default ListeEventBanner;
