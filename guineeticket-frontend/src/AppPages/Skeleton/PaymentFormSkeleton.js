import React from 'react';

const skeletonStyle = {
    background: '#f0f0f0',
    backgroundImage: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
    backgroundSize: '200% 100%',
    animation: 'shine 1.5s linear infinite',
    
};

const cardStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
};

// Skeleton Element
const SkeletonElement = ({ width, height, borderRadius = '8px', style = {} }) => (
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

// Main Skeleton for Payment Form
const PaymentFormSkeleton = () => {
    return (
        <div className='containerStyle' style={{ ...cardStyle }}>
            <div >
                {/* Title */}
                <SkeletonElement width="200px" height="24px" style={{ marginBottom: '20px' }} />

                {/* Payment Options */}
                <div  style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <SkeletonElement width="120px" height="80px" borderRadius="8px" />
                    <SkeletonElement width="120px" height="80px" borderRadius="8px" />
                </div>

                {/* Payment Form */}
                <div className='containerStyle' style={{ ...cardStyle }}>
                    <SkeletonElement width="200px" height="24px" style={{ marginBottom: '20px' }} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                        <SkeletonElement width="100%" height="40px" />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <SkeletonElement width="100%" height="40px" />
                            <SkeletonElement width="100%" height="40px" />
                        </div>
                        <SkeletonElement width="100%" height="40px" />
                    </div>
                </div>

                {/* Terms & Conditions */}
                <div  style={{ display: 'flex', alignItems: 'center', marginTop: '20px', gap: '10px' }}>
                    <SkeletonElement width="20px" height="20px" borderRadius="4px" />
                    <SkeletonElement width="200px" height="16px" />
                </div>

                {/* Payment Summary */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                    <SkeletonElement width="120px" height="24px" />
                    <SkeletonElement width="150px" height="40px" borderRadius="8px" />
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
        </div>
    );
};

export default PaymentFormSkeleton;
