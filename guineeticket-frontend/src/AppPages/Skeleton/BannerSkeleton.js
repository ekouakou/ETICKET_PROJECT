import React from 'react';

const BannerSkeleton = ({ height = 550, style = {} }) => {
  const skeletonStyle = {
    background: '#f0f0f0',
    backgroundImage: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    backgroundSize: '200% 100%',
    animation: 'shine 1.5s linear infinite',
    width: '100%',
    height: `${height}px`,
    borderRadius: '8px',
    ...style
  };

  return (
    <>
      <div className='skeletonStyle banner-skeleton' style={skeletonStyle} />
      
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

export default BannerSkeleton;