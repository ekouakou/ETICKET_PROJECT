import React from 'react';
import { Loader } from 'rsuite';

// Création d'un composant de chargement réutilisable
const LoadingOverlay = ({ isLoading, message = "Chargement en cours..." }) => {
  if (!isLoading) return null;
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Loader size="lg" content={message} vertical />
      </div>
    </div>
  );
};

export default LoadingOverlay;