import React from 'react';

const CardHeader = ({ text }) => {
  return (
    <div className="card-header">
      <div className="card-title">
        <p className='text-gray-600 fw-bold fs-3'>{text}</p>
      </div>
    </div>
  );
};

export default CardHeader;
