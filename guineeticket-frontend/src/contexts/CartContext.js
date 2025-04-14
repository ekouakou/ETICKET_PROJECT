// CartContext.js
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Récupérer les articles du panier depuis le localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log("Items from localStorage:", storedCartItems);

    // Filtrer les événements dont la date et l'heure sont passées
    const filteredCartItems = filterExpiredEvents(storedCartItems);

    // Mettre à jour le panier avec les événements non expirés
    setCartItems(filteredCartItems);

    // Si des éléments ont été filtrés, mettre à jour également le localStorage
    if (filteredCartItems.length !== storedCartItems.length) {
      localStorage.setItem("cartItems", JSON.stringify(filteredCartItems));
    }
  }, []);

  // Fonction pour filtrer les événements expirés
  const filterExpiredEvents = (items) => {
    console.log("Filtering expired events");
    
    const now = new Date();
    console.log("Current time:", now);

    return items.filter((item) => {
      // Vérifier si l'item a des propriétés date et heure
      // On utilise maintenant DT_EVEBEGIN et HR_EVEBEGIN au lieu de eventDate et eventStartTime
      if (item.DT_EVEBEGIN && item.HR_EVEBEGIN) {
        // Créer une date combinant la date et l'heure de l'événement
        const [day, month, year] = item.DT_EVEBEGIN.split("/").map(Number);
        const [hours, minutes] = item.HR_EVEBEGIN.split(":").map(Number);

        const eventDateTime = new Date(year, month - 1, day, hours, minutes);
        
        console.log("Item:", item.STR_EVENAME);
        console.log("Event date/time:", eventDateTime);
        console.log("Is event in future?", eventDateTime > now);

        // Garder l'événement seulement si sa date/heure est dans le futur
        return eventDateTime > now;
      }
      // Si l'item n'a pas de date ou d'heure, on le garde par défaut
      console.log("Item missing date/time properties:", item);
      return true;
    });
  };

  // Fonction pour mettre à jour régulièrement le panier (optionnelle)
  useEffect(() => {
    // Vérifier toutes les minutes si des événements sont expirés
    const intervalId = setInterval(() => {
      console.log("Running periodic expired event check");
      const filteredCartItems = filterExpiredEvents(cartItems);
      
      if (filteredCartItems.length !== cartItems.length) {
        console.log("Some items expired, updating cart");
        updateCartItems(filteredCartItems);
      }
    }, 60000); // 60000 ms = 1 minute

    return () => clearInterval(intervalId);
  }, [cartItems]);

  const updateCartItems = (newCartItems) => {
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  // Fonction utilitaire pour déboguer le panier
  const debugCart = () => {
    console.log("Current cart items:", cartItems);
    cartItems.forEach((item, index) => {
      console.log(`Item ${index}: ${item.STR_EVENAME}`);
      console.log(`Date: ${item.DT_EVEBEGIN}, Time: ${item.HR_EVEBEGIN}`);
      
      // Tester la comparaison de date
      if (item.DT_EVEBEGIN && item.HR_EVEBEGIN) {
        const [day, month, year] = item.DT_EVEBEGIN.split("/").map(Number);
        const [hours, minutes] = item.HR_EVEBEGIN.split(":").map(Number);
        const eventDateTime = new Date(year, month - 1, day, hours, minutes);
        const now = new Date();
        console.log("Event date:", eventDateTime);
        console.log("Now:", now);
        console.log("Difference (ms):", eventDateTime - now);
        console.log("Is in future:", eventDateTime > now);
      }
    });
  };

  return (
    <CartContext.Provider
      value={{ 
        cartItems, 
        updateCartItems, 
        clearCart, 
        filterExpiredEvents,
        debugCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};