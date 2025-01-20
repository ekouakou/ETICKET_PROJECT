import { useState, useEffect } from "react";
import { urlBaseImage,rootUrl } from './urlUtils';
import axios from "axios";

const useFetchData = (apiEndPoint, params, dataKey) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
            rootUrl + apiEndPoint, params, {headers: { 'Content-Type': 'application/x-www-form-urlencoded'}}
        );
        // Vérifie si la réponse contient un tableau de données
        const responseData = dataKey ? response.data[dataKey] : response.data;
        setData(responseData);
        // if (Array.isArray(responseData)) {
        //   setData(responseData);
        // } else {
        //   setData(responseData);
        // }
      } catch (err) {
        setError("Erreur lors de la récupération des données");
      } finally {
        setLoading(false);
      }
    };
    // Appeler fetchData uniquement une fois, lors du montage du composant
    fetchData();
  }, []); // Les crochets vides assurent que l'effet se déclenche uniquement au montage

  return { data, loading, error };
};

export default useFetchData;
