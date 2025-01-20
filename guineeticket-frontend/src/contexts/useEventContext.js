import React, { createContext, useState, useContext } from "react";

// Créer un contexte
const EventContext = createContext();

// Fournir le contexte
export const EventProvider = ({ children }) => {
  const [selectedEventId, setSelectedEventId] = useState(null);

  return (
    <EventContext.Provider value={{ selectedEventId, setSelectedEventId }}>
      {children}
    </EventContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useEventContext = () => useContext(EventContext);
