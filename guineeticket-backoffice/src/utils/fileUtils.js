import { useState } from "react";

const MAX_PREVIEW_WIDTH = 1000;

// ✅ Fonction de redimensionnement
const resizeImage = async (file, maxWidth) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            resolve(new File([blob], file.name, {
              type: "image/jpeg",
              lastModified: Date.now(),
            }));
          },
          "image/jpeg",
          1 // meilleure qualité, bon équilibre
        );
      };
    };
  });
};

// ✅ Conversion d'une URL d'image en File (sans proxy)
export const urlToFile = async (imageUrl, fileName = "image.jpg", forPreview = false) => {
  try {
    if (!isValidUrl(imageUrl)) {
      throw new Error("URL invalide");
    }

    const response = await fetch(imageUrl, {
      headers: {
        Accept: "image/*",
      },
    });

    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération de l'image (${response.status})`);
    }

    const blob = await response.blob();
    const file = new File([blob], fileName, { type: blob.type });

    return forPreview ? await resizeImage(file, MAX_PREVIEW_WIDTH) : file;

  } catch (error) {
    console.error("Erreur lors de la conversion de l'URL en fichier:", error);
    throw error;
  }
};

// ✅ Validation d’URL
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// ✅ Gestion de changement fichier ou URL
export const handleFileChange = (fieldName, fileOrUrl, setFormData, setPreview) => {
  if (fileOrUrl instanceof File || fileOrUrl instanceof Blob) {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fileOrUrl,
    }));

    if (setPreview) {
      resizeImage(fileOrUrl, MAX_PREVIEW_WIDTH).then(resizedFile => {
        const previewUrl = URL.createObjectURL(resizedFile);
        setPreview(previewUrl);
      });
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
      // Affichage immédiat du lien pour rapidité
      const cacheBustUrl = `${fullUrl}?t=${Date.now()}`;
      setPreview(cacheBustUrl);
    }
  }
};

// ✅ Extraction du nom du fichier à partir du chemin
export const extractFileName = (path) => {
  if (!path) return "";
  return path.split("/").pop() || "";
};

// ✅ Traitement complet d’un fichier à partir d’un chemin
export const processFile = async (key, filePath, setFormData, setPreview) => {
  if (!filePath) return;

  const imageUrl = `${process.env.REACT_APP_BASE_IMAGE_URL}${filePath}`;
  const fileName = extractFileName(filePath);

  // Miniature immédiate (si backend supporte les tailles dynamiques)
  setPreview(imageUrl + "?width=100&t=" + Date.now());

  try {
    const file = await urlToFile(imageUrl, fileName, true);
    if (file) {
      handleFileChange(key, file, setFormData, setPreview);
    }
  } catch (error) {
    console.error(`Erreur traitement ${key}:`, error);
  }
};

// ✅ Préchargement de miniature d'image rapide
export const preloadThumbnail = async (filePath, setPreview) => {
  if (!filePath) return;

  try {
    const imageUrl = `${process.env.REACT_APP_BASE_IMAGE_URL}${filePath}`;
    const thumbnailUrl = imageUrl + "?width=100&t=" + Date.now();

    // Affichage immédiat
    setPreview(thumbnailUrl);

    // Chargement de l’image complète pour le vrai preview
    const file = await urlToFile(imageUrl, extractFileName(filePath), true);
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  } catch (error) {
    console.error(`Erreur lors du préchargement:`, error);
  }
};
