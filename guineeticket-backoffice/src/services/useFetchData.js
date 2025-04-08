import { useState, useEffect } from "react";
import { urlBaseImage,rootUrl } from './urlUtils';
import axios from "axios";

// const useFetchData = (apiEndPoint, params, dataKey) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post(
//             rootUrl + apiEndPoint, params, {headers: { 'Content-Type': 'application/x-www-form-urlencoded'}}
//         );
//         // Vérifie si la réponse contient un tableau de données
//         const responseData = dataKey ? response.data[dataKey] : response.data;
//         setData(responseData);
//       } catch (err) {
//         setError("Erreur lors de la récupération des données");
//       } finally {
//         setLoading(false);
//       }
//     };
//     // Appeler fetchData uniquement une fois, lors du montage du composant
//     fetchData();
//   }, []); // Les crochets vides assurent que l'effet se déclenche uniquement au montage

//   return { data, loading, error };
// };

// export default useFetchData;

/**
 * Hook pour récupérer des données d'API avec capacité de refetch
 * @param {string} url - URL de l'API
 * @param {Object} params - Paramètres pour la requête
 * @param {string} dataKey - Clé pour accéder aux données dans la réponse
 * @param {number} refreshTrigger - Déclencheur pour rafraîchir les données
 * @returns {Object} Les données récupérées, l'état du chargement, les erreurs et la fonction refetch
 */
const useFetchData = (apiEndPoint, params, dataKey = 'data', refreshTrigger = 0) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les données
  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        rootUrl + apiEndPoint, params, {headers: { 'Content-Type': 'application/x-www-form-urlencoded'}}
    );

      // const response = await axios.post(url, params);
      const fetchedData = dataKey ? response.data[dataKey] : response.data;
      setData(fetchedData);
      setError(null);
      return fetchedData;
    } catch (err) {
      setError(err);
      console.error("Erreur lors de la récupération des données:", err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Fonction de re-fetch exposée
  const refetch = async () => {
    return await fetchData();
  };

  // Effet pour récupérer les données au chargement ou quand refreshTrigger change
  useEffect(() => {
    fetchData();
  }, [rootUrl + apiEndPoint, JSON.stringify(params), refreshTrigger]); // Inclure refreshTrigger dans les dépendances

  return { data, loading, error, refetch };
};

export default useFetchData;
