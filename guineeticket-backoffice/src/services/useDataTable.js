import { useState, useEffect, useCallback } from 'react';
import { notification } from 'antd';
import useFetchData from './useFetchData';

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
    total: 0,
    pageSizeOptions: [10, 20, 50, 100],
    showSizeChanger: true
  });
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Récupération des données avec le trigger de rafraîchissement
  const {
    data: fetchedData,
    error: fetchError,
    loading: fetchLoading,
    refetch
  } = useFetchData(apiUrl, queryParams, dataKey, refreshTrigger);

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

  // Fonction pour rafraîchir les données
  const refreshData = useCallback(() => {
    setRefreshTrigger(prev => prev + 1); // Incrémente pour déclencher un nouveau fetch

    // Réinitialiser la pagination à la première page lors du rafraîchissement
    setPagination(prev => ({
      ...prev,
      current: 1
    }));

    // notification.info({
    //   message: "Rafraîchissement",
    //   description: "Les données sont en cours de rafraîchissement...",
    //   duration: 2
    // });
  }, []);

  // Effet pour mettre à jour les données quand elles sont récupérées
  useEffect(() => {
    if (fetchedData) {
      setAllData(fetchedData);

      // Filtrer selon le texte de recherche
      const filteredData = filterData(fetchedData, searchText);

      // Mettre à jour la pagination
      setPagination(prev => ({
        ...prev,
        total: filteredData.length
      }));

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
      setPagination(prev => ({
        ...prev,
        current: 1,
        total: filteredData.length
      }));

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
    setPagination({
      ...pagination,
      current: newPagination.current,
      pageSize: newPagination.pageSize
    });
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
    allData,
    refreshData, // Exposer la fonction de rafraîchissement
    setAllData // Pour les cas où on veut mettre à jour manuellement les données
  };
};

export default useDataTable;