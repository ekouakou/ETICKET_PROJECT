import { useState, useEffect } from 'react';
import { notification } from 'antd';
import useFetchData from './useFetchData'; // Assurez-vous que ce chemin est correct

/**
 * Hook personnalisé pour gérer une table de données avec recherche et pagination
 * @param {string} apiUrl - URL de l'API
 * @param {Object} queryParams - Paramètres pour la requête API
 * @param {string} dataKey - Clé pour accéder aux données dans la réponse
 * @param {Object} searchOptions - Configuration des champs de recherche
 * @param {number} defaultPageSize - Taille de page par défaut
 * @returns {Object} Données et fonctions pour gérer la table
 */
const useDataTable = (
  apiUrl, 
  queryParams, 
  dataKey = "data",
  searchOptions = {
    fields: ["STR_EVENAME", "LG_LSTPLACEID", "DT_EVEBEGIN", "DT_EVEEND"]
  },
  defaultPageSize = 10
) => {
  // États
  const [allData, setAllData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: defaultPageSize,
    total: 0
  });

  // Récupération des données
  const {
    data: fetchedData,
    error: fetchError,
    loading: fetchLoading
  } = useFetchData(apiUrl, queryParams, dataKey);

  // Fonction pour filtrer les données selon le texte de recherche
  const filterData = (data, searchText) => {
    if (!searchText) return data;
    const searchLower = searchText.toLowerCase();
    
    return data.filter(item => {
      return searchOptions.fields.some(field => {
        const value = item[field];
        if (value === undefined || value === null) return false;
        return value.toString().toLowerCase().includes(searchLower);
      });
    });
  };

  // Effet pour mettre à jour les données quand elles sont récupérées
  useEffect(() => {
    if (fetchedData) {
      setAllData(fetchedData);
      
      // Filtrer selon le texte de recherche
      const filteredData = filterData(fetchedData, searchText);
      
      // Mettre à jour la pagination
      setPagination({
        ...pagination,
        total: filteredData.length
      });
      
      // Appliquer la pagination
      const { current, pageSize } = pagination;
      const paginatedData = filteredData.slice(
        (current - 1) * pageSize,
        current * pageSize
      );
      
      setDisplayData(paginatedData);
    }
    
    if (fetchError) {
      console.error("Erreur lors du chargement des données:", fetchError);
      notification.error({
        message: "Erreur",
        description: "Impossible de charger les données. Veuillez réessayer."
      });
    }
  }, [fetchedData, fetchError, pagination.current, pagination.pageSize, searchText]);

  // Effet pour gérer les changements de recherche
  useEffect(() => {
    if (allData.length > 0) {
      const filteredData = filterData(allData, searchText);
      
      // Réinitialiser à la première page lors d'une nouvelle recherche
      const newPagination = {
        ...pagination,
        current: 1,
        total: filteredData.length
      };
      
      setPagination(newPagination);
      
      // Appliquer la pagination aux résultats filtrés
      const paginatedData = filteredData.slice(
        0,
        pagination.pageSize
      );
      
      setDisplayData(paginatedData);
    }
  }, [searchText]);

  // Gestion de la pagination
  const handleTableChange = (newPagination) => {
    setPagination(newPagination);
  };

  // Fonction pour gérer la recherche
  const handleSearch = (value) => {
    setSearchText(value);
  };

  return {
    data: displayData,
    loading: fetchLoading,
    error: fetchError,
    pagination,
    searchText,
    handleTableChange,
    handleSearch,
    allData
  };
};

export default useDataTable;