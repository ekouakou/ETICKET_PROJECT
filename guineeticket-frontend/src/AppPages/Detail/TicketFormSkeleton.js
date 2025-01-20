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
  marginBottom: '20px',
  // boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

// Composant pour les éléments de base du skeleton
const SkeletonElement = ({ width, height, borderRadius = '4px', style = {} }) => (
  <div className='skeletonStyle' style={{
    ...skeletonStyle,
    width,
    height,
    borderRadius,
    ...style
  }} />
);

// Composant pour les cartes
const Card = ({ children, style = {} }) => (
  <div className='skeletonStyle' style={{ ...cardStyle, ...style }}>
    {children}
  </div>
);

// Bannière
const BannerSkeleton = () => (
  <SkeletonElement 
    width="100%" 
    height="540px" 
    style={{ marginBottom: '20px' }}
  />
);

// Timer
const TimerSkeleton = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    {[...Array(4)].map((_, i) => (
      <SkeletonElement key={i} width="40px" height="40px" />
    ))}
  </div>
);

// Sélecteur de quantité
const QuantitySelector = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <SkeletonElement width="30px" height="30px" />
    <SkeletonElement width="30px" height="30px" />
    <SkeletonElement width="30px" height="30px" />
  </div>
);

// Options de livraison
const DeliveryOptions = () => (
  <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
    {[...Array(3)].map((_, i) => (
      <SkeletonElement key={i} width="120px" height="40px" borderRadius="8px" />
    ))}
  </div>
);

// Champs de formulaire
const FormFields = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
    {[...Array(3)].map((_, i) => (
      <SkeletonElement key={i} width="100%" height="40px" />
    ))}
  </div>
);

// Section Description
const DescriptionSkeleton = () => (
  <Card>
    <SkeletonElement 
      width="150px" 
      height="24px" 
      style={{ marginBottom: '15px' }}
    />
    <SkeletonElement width="100%" height="60px" />
  </Card>
);

// Section Organisateur
const OrganizatorSkeleton = () => (
  <Card>
    <SkeletonElement 
      width="150px" 
      height="24px" 
      style={{ marginBottom: '15px' }}
    />
    <SkeletonElement 
      width="100%" 
      height="100px" 
      style={{ marginBottom: '10px' }}
    />
    <SkeletonElement width="120px" height="16px" />
  </Card>
);

// Section Mise au point
const ReservationUpdateSkeleton = () => (
  <Card>
    <SkeletonElement 
      width="200px" 
      height="24px" 
      style={{ marginBottom: '15px' }}
    />
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <SkeletonElement width="16px" height="16px" borderRadius="50%" />
      <SkeletonElement width="200px" height="16px" />
    </div>
    <SkeletonElement 
      width="150px" 
      height="40px" 
      style={{ marginTop: '15px' }}
    />
  </Card>
);

// Composant principal
const TicketFormSkeleton = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <BannerSkeleton />
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '20px' }}>
        {/* Colonne principale */}
        <div>
          {/* En-tête avec timer */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginBottom: '20px' 
          }}>
            <div>
              <SkeletonElement 
                width="150px" 
                height="24px" 
                style={{ marginBottom: '8px' }}
              />
              <SkeletonElement width="100px" height="16px" />
            </div>
            <TimerSkeleton />
          </div>

          {/* Section Tickets */}
          <Card>
            <SkeletonElement 
              width="200px" 
              height="24px" 
              style={{ marginBottom: '20px' }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SkeletonElement width="200px" height="20px" />
              <QuantitySelector />
            </div>
          </Card>

          {/* Section Livraison */}
          <Card>
            <SkeletonElement 
              width="200px" 
              height="24px" 
              style={{ marginBottom: '20px' }}
            />
            <DeliveryOptions />
            <SkeletonElement width="100%" height="40px" />
          </Card>

          {/* Section Formulaire */}
          <Card>
            <SkeletonElement 
              width="250px" 
              height="24px" 
              style={{ marginBottom: '20px' }}
            />
            <FormFields />
          </Card>
        </div>

        {/* Sidebar */}
        <div>
          <DescriptionSkeleton />
          <OrganizatorSkeleton />
          <ReservationUpdateSkeleton />
          <SkeletonElement width="100%" height="48px" borderRadius="8px" />
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

export default TicketFormSkeleton;

// Exportations des composants individuels pour réutilisation
export {
  SkeletonElement,
  Card,
  BannerSkeleton,
  TimerSkeleton,
  QuantitySelector,
  DeliveryOptions,
  FormFields,
  DescriptionSkeleton,
  OrganizatorSkeleton,
  ReservationUpdateSkeleton
};