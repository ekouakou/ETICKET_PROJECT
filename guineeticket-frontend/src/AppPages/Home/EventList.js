import React from "react";
import useFetchData from "../../services/useFetchData";

const EventList = () => {
    const { data: events, loading, error } = useFetchData(
        "TicketManager.php",
        {
            mode: "listEvenementFront",
            mode: process.env.REACT_APP_LIST_BANNIERE_MODE,
            DT_BEGIN: dates.DT_BEGIN, DT_END: dates.DT_END,
        }
    );

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;

    // Afficher les événements si disponibles
    return (
        <div>
            <h2>Liste des événements</h2>
            {events && events.length > 0 ? (
                events.map((event) => (
                    <div key={event.LG_LSTID}>{event.STR_LSTDESCRIPTION}</div>
                ))
            ) : (
                <p>Aucun événement à afficher.</p>
            )}
        </div>
    );
};

export default EventList;
