import React from 'react';

const skeletonStyle = {
  background: '#f0f0f0',
  backgroundImage: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
  backgroundSize: '200% 100%',
  animation: 'shine 1.5s linear infinite',
};

const TicketCard = () => (
  <div className="col-12 col-sm-6 col-md-4 mb-4">
    <div className="card shadow-sm">
      <div className="card-body p-4">
        <div className="d-flex gap-4">
          {/* QR Code skeleton */}
          <div 
            style={{ ...skeletonStyle, minWidth: '120px', height: '120px' }} 
            className="rounded"
          ></div>
          
          <div className="flex-grow-1 d-flex flex-column">
            {/* Title - Guinée is back */}
            <div 
              style={{ ...skeletonStyle, height: '20px', width: '120px' }} 
              className="mb-2 rounded"
            ></div>
            
            {/* Client label */}
            <div 
              style={{ ...skeletonStyle, height: '14px', width: '40px' }} 
              className="mb-1 rounded"
            ></div>
            
            {/* Phone number */}
            <div 
              style={{ ...skeletonStyle, height: '14px', width: '100px' }} 
              className="mb-2 rounded"
            ></div>
            
            {/* Réf. ticket */}
            <div 
              style={{ ...skeletonStyle, height: '14px', width: '130px' }} 
              className="mb-2 rounded"
            ></div>
            
            {/* Date de validation */}
            <div 
              style={{ ...skeletonStyle, height: '14px', width: '160px' }} 
              className="rounded"
            ></div>
          </div>
        </div>
        
        {/* Action buttons at bottom */}
        <div className="d-flex gap-2 mt-4">
          <div 
            style={{ ...skeletonStyle, width: '35px', height: '35px' }} 
            className="rounded-circle"
          ></div>
          <div 
            style={{ ...skeletonStyle, width: '35px', height: '35px' }} 
            className="rounded-circle"
          ></div>
          <div 
            style={{ ...skeletonStyle, width: '35px', height: '35px' }} 
            className="rounded-circle"
          ></div>
        </div>
      </div>
    </div>
  </div>
);

const SkeletonGenericCardView = () => {
  return (
    <div className="container-fluid px-4">
      {/* Header with entries and search */}
      <div className="row mb-4">
        <div className="col-6">
          <div 
            style={{ ...skeletonStyle, height: '30px', width: '120px' }} 
            className="rounded"
          ></div>
        </div>
        <div className="col-6 text-end">
          <div 
            style={{ ...skeletonStyle, height: '30px', width: '180px' }} 
            className="rounded ms-auto"
          ></div>
        </div>
      </div>

      {/* Tickets grid */}
      <div className="row g-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <TicketCard key={index} />
        ))}
      </div>

      {/* Pagination */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div 
              style={{ ...skeletonStyle, height: '20px', width: '140px' }} 
              className="rounded"
            ></div>
            <div className="d-flex gap-2">
              <div 
                style={{ ...skeletonStyle, height: '30px', width: '80px' }} 
                className="rounded"
              ></div>
              <div className="px-2">
                <span className="text-muted">Page 1 sur 2</span>
              </div>
              <div 
                style={{ ...skeletonStyle, height: '30px', width: '80px' }} 
                className="rounded"
              ></div>
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
    </div>
  );
};

export default SkeletonGenericCardView;       