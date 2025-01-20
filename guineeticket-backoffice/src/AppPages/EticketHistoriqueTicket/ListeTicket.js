import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import GenericDataTable from "../GenericDataTable";
import eventService from "../../services/TicketService";
import PageTitle from '../PageTitle';
import ActionButton from '../ActionButton';
import useLoader from '../../utils/useLoader'
import SkeletonGenericCardView from "../Skeleton/SkeletonGenericCardView";
import GenericCardView from "../GenericCardView";


const ListeTicket = () => {
  const paths = JSON.parse(localStorage.getItem("appPaths"));
  const navigate = useNavigate();
  const [eventData, setEventData] = useState([]);
  const isLoading = useLoader(eventData);

  const fetchEvents = async () => {
    const events = await eventService.getEvents(navigate);
    setEventData(events);
  };

  const handleApiCall = async ({ mode, id, status }) => {
    let success = false;

    if (mode === "delete") {
      success = await eventService.deleteEvent(navigate, id);
    } else if (mode === "updateStatus") {
      success = await eventService.updateEventStatus(navigate, id, status);
    }

    if (success) {
      toast.success("Opération réussie", {
        position: "top-center",
        autoClose: 3000,
      });
      fetchEvents();
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [navigate]);

  const breadcrumbs = [
    { text: 'Utilisateur', link: '/' },
    { isBullet: true },
    { text: 'Liste des tickets' },
  ];

  return (
    <div className="d-flex flex-column flex-column-fluid">
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
        <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
          <PageTitle heading="Liste des tickets" breadcrumbs={breadcrumbs} />
          {/* <ActionButton text="Ajouter utilisateurs" link={process.env.REACT_APP_SAVE_UTILISATEURS} className="btn-primary" /> */}
        </div>
      </div>
      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div id="kt_app_content_container" className="app-container container-xxl">
          {isLoading ? (
            <>
              <SkeletonGenericCardView rows={6} columns={4} />
            </>
          ) : (
            <div className="row gx-5 gx-xl-10">
              <div className="col-xxl-12 mb-5 mb-xl-10">
                <div className="card card-flush h-xl-100">
                  <div className="card-body pt-6">
                    <>
                      <GenericCardView
                        data={eventData}
                        columns={[
                          { data: "STR_TICNAME", title: "Réf. ticket" },
                          { data: "DT_TCIVALIDATED", title: "Date de validation" }
                        ]}
                        onEdit={(id) => navigate(process.env.REACT_APP_SAVE_UTILISATEURS, { state: { LG_UTIID: id } })}
                        onDelete={true}
                        onToggleStatus={true}
                        deleteConfirmMessage={(id) => `Êtes-vous sûr de vouloir supprimer cet utilisateur? (${id}) ?`}
                        toggleStatusConfirmMessage={(id, newStatus) =>
                          `Êtes-vous sûr de vouloir ${newStatus === "enable" ? "activer" : "désactiver"} cet utilisateur (${id}) ?`
                        }
                        handleApiCall={handleApiCall}
                        tableId="simpleTable"
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

export default ListeTicket;
