import { useState, useEffect } from 'react';

const useLoader = (data, delay = 2000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!data || data.length === 0) {
        setIsLoading(true); // Garder le loader actif si `data` est vide
      } else {
        setIsLoading(false); // Désactiver le loader si `data` contient des éléments
      }
    }, delay);

    return () => clearTimeout(timer); // Nettoyer le timer
  }, [data, delay]);

  return isLoading;
};

export default useLoader;
