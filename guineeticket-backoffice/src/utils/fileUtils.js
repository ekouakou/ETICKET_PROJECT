import { useState } from "react";

// On garde les mêmes proxies mais on les ordonne par fiabilité/rapidité
const CORS_PROXIES = [
  "https://api.allorigins.win/raw?url=", // Mettons celui-ci en premier car souvent plus rapide
];

export const urlToFile = async (imageUrl, fileName = "image.jpg") => {
  try {
    if (!isValidUrl(imageUrl)) {
      throw new Error("URL invalide");
    }

    let lastError = null;

    // On utilise Promise.race pour limiter le temps d'attente de chaque tentative
    for (const proxyUrl of CORS_PROXIES) {
      try {
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error("Timeout")), 5000); // 5 secondes de timeout
        });

        const fetchPromise = fetch(
          `${proxyUrl}${encodeURIComponent(imageUrl)}`,
          {
            headers: {
              Accept: "image/*",
              Origin: window.location.origin,
            },
          }
        );

        const response = await Promise.race([fetchPromise, timeoutPromise]);

        if (response.ok) {
          const blob = await response.blob();
          return new File([blob], fileName, { type: blob.type });
        }
      } catch (proxyError) {
        lastError = proxyError;
        console.log(`Tentative avec ${proxyUrl} échouée, essai suivant...`);
        continue;
      }
    }

    throw (
      lastError ||
      new Error("Impossible de récupérer l'image après plusieurs tentatives")
    );
  } catch (error) {
    console.error("Erreur lors de la conversion de l'URL en fichier:", error);
    throw error;
  }
};

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const handleFileChange = (
  fieldName,
  fileOrUrl,
  setFormData,
  setPreview
) => {
  if (fileOrUrl instanceof File || fileOrUrl instanceof Blob) {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fileOrUrl,
    }));

    if (setPreview) {
      const previewUrl = URL.createObjectURL(fileOrUrl);
      setPreview(previewUrl);
    }
  } else if (typeof fileOrUrl === "string" && fileOrUrl.trim() !== "") {
    const fullUrl = fileOrUrl.startsWith("http")
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
  if (!path) return "";
  return path.split("/").pop() || "";
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
  }
};
