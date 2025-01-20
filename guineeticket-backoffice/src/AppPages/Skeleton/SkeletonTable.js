import React from 'react';

// Style commun pour le skeleton
const skeletonStyle = {
  background: '#f0f0f0',
  backgroundImage: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
  backgroundSize: '200% 100%',
  animation: 'shine 1.5s linear infinite',
};

// Style global pour le conteneur
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

// Style de la ligne supérieure (entries et recherche)
const topRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

// Style de la table (datatable)
const tableContainerStyle = {
  display: 'grid',
  gap: '10px',
};

// Style des cellules
const skeletonCellStyle = {
  height: '50px',
  borderRadius: '4px',
};

// Composant pour une ligne de skeleton
const SkeletonRow = ({ columns }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '10px' }}>
    {Array.from({ length: columns }).map((_, index) => (
      <div key={index} style={{ ...skeletonStyle, ...skeletonCellStyle }}></div>
    ))}
  </div>
);

// Composant principal pour la datatable skeleton
const SkeletonTable = ({ rows = 5, columns = 3 }) => {
  return (
    <div style={containerStyle}>
      {/* Ligne supérieure */}
      <div style={topRowStyle}>
        {/* Entries per page */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ ...skeletonStyle, width: '120px', height: '20px', borderRadius: '4px' }}></div>
          <div style={{ ...skeletonStyle, width: '50px', height: '20px', borderRadius: '4px' }}></div>
        </div>
        {/* Barre de recherche */}
        <div style={{ ...skeletonStyle, width: '200px', height: '20px', borderRadius: '4px' }}></div>
      </div>

      {/* Table */}
      <div style={tableContainerStyle}>
        {Array.from({ length: rows }).map((_, index) => (
          <SkeletonRow key={index} columns={columns} />
        ))}
      </div>

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        {/* Informations de pagination */}
        <div style={{ ...skeletonStyle, width: '150px', height: '20px', borderRadius: '4px' }}></div>
        {/* Boutons de pagination */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              style={{ ...skeletonStyle, width: '30px', height: '30px', borderRadius: '50%' }}
            ></div>
          ))}
        </div>
      </div>

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

export default SkeletonTable;

// Exemple d'utilisation
// <SkeletonTable rows={6} columns={4} />
