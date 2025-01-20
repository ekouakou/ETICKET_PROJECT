import React from 'react';

// Styles communs pour les animations
const skeletonStyle = {
  background: '#f0f0f0',
  backgroundImage: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
  backgroundSize: '200% 100%',
  animation: 'shine 1.5s linear infinite',
};

const SkeletonElement = ({ width, height, borderRadius = '4px', style = {} }) => (
  <div className='skeletonStyle'
    style={{
      ...skeletonStyle,
      width,
      height,
      borderRadius,
      ...style,
    }}
  />
);

const TicketSelectorSkeleton = () => {
  return (
    <div className='containerStyle' style={{ padding: '20px', borderRadius: '8px', background: '#fff',marginBottom:'20px'}}>
      {/* Titre */}
      <SkeletonElement width="200px" height="24px" style={{ marginBottom: '10px' }} />
      <SkeletonElement width="300px" height="16px" style={{ marginBottom: '20px' }} />
      
      {/* Détails des billets */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <div>
          <SkeletonElement width="150px" height="18px" style={{ marginBottom: '8px' }} />
          <SkeletonElement width="100px" height="20px" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <SkeletonElement width="40px" height="40px" borderRadius="8px" />
          <SkeletonElement width="40px" height="40px" borderRadius="8px" />
          <SkeletonElement width="40px" height="40px" borderRadius="8px" />
        </div>
      </div>

      {/* Bouton de validation */}
      <SkeletonElement width="120px" height="40px" borderRadius="8px" style={{ marginTop: '20px' }} />

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

export default TicketSelectorSkeleton;
