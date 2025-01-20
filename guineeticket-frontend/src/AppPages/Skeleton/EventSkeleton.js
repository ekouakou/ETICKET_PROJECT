import React from 'react';

// Styles communs réutilisables
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
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
};

const SkeletonElement = ({ width, height, borderRadius = '8px', style = {} }) => (
    <div className='skeletonStyle'
        style={{
            ...skeletonStyle,
            width,
            height,
            borderRadius,
            ...style,
        }}
    ></div>
);

const SkeletonBadge = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <SkeletonElement width="60px" height="20px" borderRadius="4px" />
        <SkeletonElement width="100px" height="20px" borderRadius="4px" />
        <SkeletonElement width="100px" height="20px" borderRadius="4px" />
    </div>
);

const CountdownSkeleton = () => (
    <div   style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        {[...Array(4)].map((_, i) => (
            <div
                key={i}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                }}
            >
                <SkeletonElement width="40px" height="40px" borderRadius="8px" />
                <SkeletonElement width="40px" height="10px" borderRadius="4px" />
            </div>
        ))}
    </div>
);

const TicketFormSkeleton = () => {
    return (
        <div  className='containerStyle mt-2' style={cardStyle}>
            {/* Titre */}
            <SkeletonElement width="80%" height="24px" borderRadius="4px" />

            {/* Ligne avec badge et date */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <SkeletonBadge  />
                    {/* <SkeletonElement className="ms-3" width="100px" height="20px" borderRadius="4px" /> */}
                </div>
                <CountdownSkeleton />
            </div>

            {/* Compte à rebours */}

        </div>
    );
};

export default TicketFormSkeleton;
