import React, { useRef } from "react";

const ResizeImage = ({ src, newWidth, newHeight, onResize }) => {
  const canvasRef = useRef(null);

  const resizeImage = () => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = newWidth;
      canvas.height = newHeight;

      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      // Appeler le callback avec les données de l'image redimensionnée
      if (onResize) {
        onResize(canvas.toDataURL("image/jpeg")); // Format JPEG
      }
    };
  };

  return (
    <div>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <button onClick={resizeImage}>Resize Image</button>
    </div>
  );
};

export default ResizeImage;
