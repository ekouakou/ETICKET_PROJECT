import React from 'react';

// Styles communs pour les animations
const skeletonStyle = {
  background: '#3a3a3a',
  backgroundImage: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
  backgroundSize: '200% 100%',
  animation: 'shine 1.5s linear infinite',
};

const SkeletonElement = ({ width, height, borderRadius = '4px', style = {} }) => (
  <div
    style={{
      ...skeletonStyle,
      width,
      height,
      borderRadius,
      ...style,
    }}
  />
);

const ReservationSummarySkeleton = () => {
  return (
    <div className='containerStyle'
      style={{
        padding: '20px',
        borderRadius: '12px',
        // background: '#',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {/* Titre */}
      <SkeletonElement width="250px" height="20px" style={{ marginBottom: '16px' }} />

      {/* Date et description */}
      <SkeletonElement width="120px" height="16px" style={{ marginBottom: '10px' }} />
      <SkeletonElement width="80px" height="12px" style={{ marginBottom: '8px' }} />
      <SkeletonElement width="200px" height="14px" style={{ marginBottom: '20px' }} />

      {/* Nombre de billets et GNF */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <SkeletonElement width="150px" height="20px" />
        <SkeletonElement width="40px" height="40px" borderRadius="8px" />
      </div>

      {/* Prix total */}
      <SkeletonElement width="200px" height="40px" borderRadius="8px" style={{ marginBottom: '20px' }} />

      {/* Boutons */}
      <SkeletonElement width="150px" height="40px" borderRadius="8px" style={{ marginBottom: '10px' }} />
      <SkeletonElement width="150px" height="40px" borderRadius="8px" />

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

export default ReservationSummarySkeleton;
