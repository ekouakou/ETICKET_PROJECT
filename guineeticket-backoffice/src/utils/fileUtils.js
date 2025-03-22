import { useState } from "react";

// On garde les mêmes proxies mais on les ordonne par fiabilité/rapidité
const CORS_PROXIES = [
  "https://api.allorigins.win/raw?url=", // Mettons celui-ci en premier car souvent plus rapide
];

// Constante pour la largeur maximale du preview
const MAX_PREVIEW_WIDTH = 400; // Ajustez selon vos besoins

// Fonction pour redimensionner une image
const resizeImage = async (file, maxWidth) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        // Calculer les nouvelles dimensions en gardant le ratio
        let width = img.width;
        let height = img.height;
        
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        
        // Créer un canvas pour redimensionner
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        
        // Dessiner l'image redimensionnée
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convertir en blob avec une qualité réduite pour le preview
        canvas.toBlob(
          (blob) => {
            resolve(new File([blob], file.name, {
              type: "image/jpeg",
              lastModified: Date.now(),
            }));
          },
          "image/jpeg",
          0.3 // Qualité de 70%, bon compromis qualité/taille
        );
      };
    };
  });
};

export const urlToFile = async (imageUrl, fileName = "image.jpg", forPreview = false) => {
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
          const file = new File([blob], fileName, { type: blob.type });
          
          // Si c'est pour un preview, on redimensionne l'image
          if (forPreview) {
            return await resizeImage(file, MAX_PREVIEW_WIDTH);
          }
          
          return file;
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
      // Pour la prévisualisation, on redimensionne au besoin
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
      // Ajouter un paramètre de cache-busting pour éviter le cache navigateur
      const cacheBustUrl = `${fullUrl}?t=${Date.now()}`;
      setPreview(cacheBustUrl);
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
    // Passer true pour indiquer que c'est pour le preview
    const file = await urlToFile(imageUrl, extractFileName(filePath), true);

    if (file) {
      handleFileChange(key, file, setFormData, setPreview);
    }
  } catch (error) {
    console.error(`Erreur lors du traitement du fichier ${key}:`, error);
  }
};

// Fonction pour précharger une image à basse résolution rapidement
export const preloadThumbnail = async (filePath, setPreview) => {
  if (!filePath) return;
  
  try {
    const imageUrl = `${process.env.REACT_APP_BASE_IMAGE_URL}${filePath}`;
    // Créer une URL avec paramètres pour une version plus petite (si votre backend le supporte)
    // Par exemple: imageUrl + "?width=100"
    const thumbnailUrl = imageUrl + "?width=100";  // Ajustez selon votre backend
    
    // Afficher d'abord cette miniature
    setPreview(thumbnailUrl);
    
    // Puis charger la version redimensionnée complète en arrière-plan
    const file = await urlToFile(imageUrl, extractFileName(filePath), true);
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  } catch (error) {
    console.error(`Erreur lors du préchargement de la miniature:`, error);
  }
};