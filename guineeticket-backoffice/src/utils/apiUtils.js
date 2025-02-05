import { crudData } from "../services/apiService";
import { useEffect, useState, useMemo } from "react";

// src/utils/apiUtils.js
export const fetchData = async (params, url, setData) => {
  try {
    const response = await crudData(params, url);
    setData(response.data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
};

export const fetchCategorieData = async (params, url, setData) => {
  try {
    const response = await crudData(params, url);
    setData(response.data.data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
};

export const loadStores = async (
  params,
  url,
  setData,
  keyMapping = {
    valueKey: "LG_LSTID",
    labelKey: "STR_LSTDESCRIPTION",
  }
) => {
  try {
    const response = await crudData(params, url);
    const data = response.data.data;
    const mappedOptions = data.map((item) => ({
      value: item[keyMapping.valueKey],
      label: item[keyMapping.labelKey],
    }));
    setData(mappedOptions);
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
};


/**
 * Hook personnalisé pour charger les données avec mapping.
 * @param {Object} params - Les paramètres pour l'appel API.
 * @param {string} url - L'URL de l'API.
 * @param {Object} keyMapping - Les clés pour mapper les options (value et label).
 * @returns {Array} - Les données chargées.
 */
export const useLoadStores = (params, url, keyMapping = { valueKey: "LG_LSTID", labelKey: "STR_LSTDESCRIPTION" }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!data.length) {
      loadStores(params, url, setData, keyMapping);
    }
  }, [params, url, keyMapping, data.length]);

  return data;
};
