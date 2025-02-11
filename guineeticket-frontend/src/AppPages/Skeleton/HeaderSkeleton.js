import React from "react";

const HeaderSkeleton = ({ style = {} }) => {
  const skeletonStyle = {
    background: "#f0f0f0",
    backgroundImage:
      "linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)",
    backgroundSize: "200% 100%",
    animation: "shine 1.5s linear infinite",
  };

  return (
    <div
      className="containerStyle"
      style={{
        padding: "16px 24px",
        backgroundColor: "#f8f8f8",
        borderRadius: "8px",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Titles section */}
        <div style={{ flex: 1 }}>
          {/* Main title */}
          {/* <div
            className="skeletonStyle"
            style={{
              ...skeletonStyle,
              width: "120px",
              height: "24px",
              marginBottom: "16px",
              borderRadius: "4px",
            }}
          /> */}

          {/* Subtitle */}
          <div
            className="skeletonStyle"
            style={{
              ...skeletonStyle,
              width: "200px",
              height: "20px",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Navigation buttons */}
        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          {/* Previous button */}
          <div
            className="skeletonStyle"
            style={{
              ...skeletonStyle,
              width: "32px",
              height: "32px",
              borderRadius: "4px",
            }}
          />

          {/* Next button */}
          <div
            className="skeletonStyle"
            style={{
              ...skeletonStyle,
              width: "32px",
              height: "32px",
              borderRadius: "4px",
            }}
          />
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

export default HeaderSkeleton;
