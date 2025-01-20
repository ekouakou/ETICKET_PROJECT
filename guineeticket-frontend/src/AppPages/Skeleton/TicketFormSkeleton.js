import React from 'react';

// Styles communs réutilisables
const skeletonStyle = {
  background: '#f0f0f0',
  backgroundImage: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
  backgroundSize: '200% 100%',
  animation: 'shine 1.5s linear infinite'
};

const cardStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '20px'
};

// Composant pour les éléments de base du skeleton
const SkeletonElement = ({ width, height, borderRadius = '8px', style = {} }) => (
  <div className='skeletonStyle' style={{
    ...skeletonStyle,
    width,
    height,
    borderRadius,
    ...style
  }} />
);

// Options de réception du ticket
const TicketReceptionOptionsSkeleton = () => (
  <div  style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
    {[...Array(3)].map((_, i) => (
      <SkeletonElement key={i} width="120px" height="50px" borderRadius="8px" />
    ))}
  </div>
);

// Champ pour le numéro de téléphone
const PhoneNumberSkeleton = () => (
  <div>
    <SkeletonElement width="150px" height="24px" style={{ marginBottom: '10px' }} />
    <SkeletonElement width="100%" height="40px" borderRadius="8px" />
  </div>
);

// Composant principal pour le formulaire de ticket
const TicketFormSkeleton = () => {
  return (
    <div className='containerStyle' style={{ marginBottom: '20px', padding:'20px', borderRadius: '8px' }}>
      <SkeletonElement width="200px" height="24px" style={{ marginBottom: '20px' }} />
      <TicketReceptionOptionsSkeleton />
      <PhoneNumberSkeleton />
      <style>
        {`
          @keyframes shine {
            to {
              background-position-x: -200%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TicketFormSkeleton;
