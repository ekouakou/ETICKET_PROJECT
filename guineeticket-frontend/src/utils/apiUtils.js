import { crudData } from "../services/apiService";

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
