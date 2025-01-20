import React from 'react';

const EventCardSkeleton = () => {
  const skeletonStyle = {
    background: '#f0f0f0',
    backgroundImage: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    backgroundSize: '200% 100%',
    animation: 'shine 1.5s linear infinite'
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '400px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    // boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    position: 'relative'
  };

  return (
    <>
      <div style={containerStyle} className='containerStyle'>
        {/* Image placeholder */}
        <div className='skeletonStyle' style={{ ...skeletonStyle, height: '200px' }} />

        {/* Payment badge */}
        <div className='skeletonStyle' style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
        }}>
          <div className='skeletonStyle' style={{
            ...skeletonStyle,
            height: '24px',
            width: '64px',
            borderRadius: '20px'
          }} />
        </div>

        {/* Content section */}
        <div style={{ padding: '16px' }}>
          {/* Title */}
          <div className='skeletonStyle' style={{
            ...skeletonStyle,
            height: '24px',
            width: '75%',
            borderRadius: '4px',
            marginBottom: '16px'
          }} />

          {/* Description */}
          <div className='skeletonStyle' style={{
            ...skeletonStyle,
            height: '16px',
            width: '50%',
            borderRadius: '4px',
            marginBottom: '16px'
          }} />

          {/* Footer info */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className='skeletonStyle' style={{
                ...skeletonStyle,
                height: '16px',
                width: '16px',
                borderRadius: '50%'
              }} />
              <div className='skeletonStyle' style={{
                ...skeletonStyle,
                height: '16px',
                width: '128px',
                borderRadius: '4px'
              }} />
            </div>

            {/* Time */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className='skeletonStyle' style={{
                ...skeletonStyle,
                height: '16px',
                width: '16px',
                borderRadius: '50%'
              }} />
              <div className='skeletonStyle' style={{
                ...skeletonStyle,
                height: '16px',
                width: '96px',
                borderRadius: '4px'
              }} />
            </div>
          </div>
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
    </>
  );
};

export default EventCardSkeleton;