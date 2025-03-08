import React, { useState, useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

//pm install @fortawesome/fontawesome-free

import "./style.css";

// Import frame image
// import frameImage from './frame-overlay.png'; // You'll need to add this image

const PhotoFrameApp = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [memberName, setMemberName] = useState("Nom et prenom");
  const [memberComment, setMemberComment] = useState(
    "Votre commentaire ou message"
  );
  const frameContainerRef = useRef(null);

  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  const applyGrayscale = (imageSrc) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = imageSrc;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
          let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = avg;
          data[i + 1] = avg;
          data[i + 2] = avg;
        }

        ctx.putImageData(imageData, 0, 0);
        resolve(canvas.toDataURL());
      };
    });
  };

  // Handle image selection
  const handleImageUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const grayscaleImage = await applyGrayscale(reader.result);
        setSelectedImage(grayscaleImage);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  // Download framed image
  const handleDownload = useCallback(() => {
    if (frameContainerRef.current && selectedImage) {
      html2canvas(frameContainerRef.current, {
        useCORS: true,
        allowTaint: true,
        scale: 2,
        logging: false,
      })
        .then((canvas) => {
          const link = document.createElement("a");
          link.download = "membership-card.png";
          link.href = canvas.toDataURL("image/png");
          link.click();
        })
        .catch((error) => {
          console.error("Error capturing image:", error);
          alert("Failed to download image. Please try again.");
        });
    }
  }, [selectedImage]);

  return (
    <div className="container mt-5 mb-5" style={{ color: "#fff" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Frame Container */}
          <div
            ref={frameContainerRef}
            className="position-relative"
            style={{
              width: "100%",
              paddingTop: "100%",
              overflow: "hidden",
              backgroundColor: "#FFD700",
            }}
          >
            {/* Uploaded Image */}
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Uploaded"
                className="position-absolute top-0  object-fit img-position custom-image-style"
              />
            )}

            {/* {selectedImage && (
              <img
                src={selectedImage}
                alt="Uploaded"
                className="position-absolute top-0 start-0 end-0 w-100 h-100 object-fit-cover"
                style={{ zIndex: 1, paddingTop: "60px", width: "30% ",  maxWidth: "10%", }}
                //  style={{ zIndex: 1, paddingTop: "60px", width: "60% ",  maxWidth: "60%", }}
              />
            )} */}

            {/* Frame Overlay */}
            <img
              // src={frameImage}
              src="assets/images/26884774_7264393.png"
              alt="Photo Frame"
              className="position-absolute top-0 start-0 w-100 h-100 custom-frame-overlay"
            />

            {/* Logos and Text Overlay */}
            <div className="position-wrapper">
              {/* Right Side Content */}
              <div className="right-side-content">
                <div className="flex-column-container">
                  {/* Logo */}
                  <div className="logo-container">
                    <img src="logo.png" alt="Heaterly Logo" />
                  </div>

                  {/* Membership Details */}
                  <div className="">
                    <h2 className="membership-title">UJAk</h2>
                    <h3 className="membership-subtitle">
                      Union des Jeunes d'Allah koffikro
                    </h3>

                    <div className="membre-container">
                      <h3 className="membre">Membre</h3>
                    </div>

                    <h3 className="member-name">{memberName}</h3>

                    <h5 className="my-5 text-center">
                      sera présent(e) à la réunion qui aura <br />
                      lieu à Modeste (GRAND-BASSAM)
                    </h5>

                    <div className=" d-flex align-items-center gap-3 mx-5">
                      <h3 className=" d-flex gap-2 m-0">
                        <FaCalendarAlt className="fa-calendar-alt" /> 22/03/2024
                      </h3>
                      <h3 className=" d-flex gap-2 m-0">
                        <FaClock className="fa-clock" /> 10H00
                      </h3>
                    </div>

                    <p className="comment-container text-break">
                      {truncateText(memberComment, 100)}
                    </p>
                  </div>

                  {/* Website Link */}
                  <div className="website-link">
                    {/* <a href="https://www.heaterly.com">
          WWW.<span className="text-white-color">HEATERLY.COM</span>
        </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* File Input and Download Button */}
          <div className="mt-3 r">
            <div className="row">
              <div className="mb-3 col-6">
                <label htmlFor="memberName" className="form-label">
                  Photo du membre
                </label>
                <input
                  type="file"
                  className="form-control mb-3 "
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>

              {/* Customization Inputs */}
              <div className="mb-3 col-6">
                <label htmlFor="memberName" className="form-label">
                  Nom du Membre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="memberName"
                  // value={memberName}
                  onChange={(e) => setMemberName(e.target.value)}
                  placeholder="Entrez le nom du membre"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="memberComment" className="form-label">
                Commentaire
              </label>
              <textarea
                className="form-control"
                id="memberComment"
                // value={memberComment}
                onChange={(e) => setMemberComment(e.target.value)}
                placeholder="Entrez un commentaire"
                rows="3"
              />
            </div>

            <button
              className="btn btn-primary"
              onClick={handleDownload}
              disabled={!selectedImage}
            >
              Télécharger l'image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoFrameApp;
