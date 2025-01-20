import { useState } from "react";

export const urlToFile = async (imageUrl, fileName = "image.jpg") => {
  try {
    // Ajout des options CORS complètes
    const response = await fetch(imageUrl, {
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Accept': 'image/*'
      }
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP! Status: ${response.status}`);
    }

    const blob = await response.blob();
    return new File([blob], fileName, { type: blob.type });
  } catch (error) {
    console.error("Erreur lors de la conversion de l'URL en fichier:", error);
    throw error; // Propager l'erreur pour une meilleure gestion
  }
};

export const handleFileChange = (fieldName, fileOrUrl, setFormData, setPreview) => {
  if (fileOrUrl instanceof File || fileOrUrl instanceof Blob) {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fileOrUrl,
    }));

    if (setPreview) {
      const previewUrl = URL.createObjectURL(fileOrUrl);
      setPreview(previewUrl);
      // Nettoyer l'URL de l'aperçu
      return () => URL.revokeObjectURL(previewUrl);
    }
  } else if (typeof fileOrUrl === "string" && fileOrUrl.trim() !== "") {
    const fullUrl = fileOrUrl.startsWith('http') 
      ? fileOrUrl 
      : `${process.env.REACT_APP_BACKEND_URL}${fileOrUrl}`;

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fileOrUrl,
    }));

    if (setPreview) {
      setPreview(fullUrl);
    }
  }
};

export const extractFileName = (path) => {
  if (!path) return '';
  return path.split('/').pop() || '';
};

export const processFile = async (key, filePath, setFormData, setPreview) => {
  if (!filePath) return;

  try {
    const imageUrl = `${process.env.REACT_APP_BASE_IMAGE_URL}${filePath}`;
    const file = await urlToFile(imageUrl, extractFileName(filePath));
    
    if (file) {
      handleFileChange(key, file, setFormData, setPreview);
    }
  } catch (error) {
    console.error(`Erreur lors du traitement du fichier ${key}:`, error);
    // Gérer l'erreur de manière appropriée (par exemple, afficher un message à l'utilisateur)
  }
};