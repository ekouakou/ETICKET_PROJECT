import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'rsuite'; // Importation du Loader de React Suite
import 'rsuite/dist/rsuite.min.css'; // Style de React Suite

const FileUploader = ({ previewImage, onFileSelect }) => {
  const [file, setFile] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // État pour suivre le chargement

  useEffect(() => {
    if (previewImage) {
      setFile({
        file: null,
        preview: previewImage
      });
    }
  }, [previewImage]);

  const onDrop = useCallback((acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    const fileSizeInMB = (uploadedFile.size / (1024 * 1024)).toFixed(2); // Taille en MB

    if (fileSizeInMB > 2) {
      toast.error('Le fichier dépasse la taille maximale de 2 Mo.');
      return;
    }

    setIsLoading(true); // Activer le loader

    // Simuler le temps de chargement de l'image
    const img = new Image();
    img.src = URL.createObjectURL(uploadedFile);
    
    img.onload = () => {
      setFile({
        file: uploadedFile,
        preview: img.src
      });
      setFileSize(fileSizeInMB);

      if (onFileSelect) {
        onFileSelect(uploadedFile);
      }
      setIsLoading(false); // Désactiver le loader une fois l'image chargée
    };

    img.onerror = () => {
      toast.error('Erreur lors du chargement de l\'image.');
      setIsLoading(false); // Désactiver le loader en cas d'erreur
    };
  }, [onFileSelect]);

  const removeFile = (e) => {
    e.stopPropagation();
    if (file && file.preview) {
      URL.revokeObjectURL(file.preview);
    }
    setFile(null);
    setFileSize(null);

    if (onFileSelect) {
      onFileSelect(null);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="dropzone dropzone-queue my-2" {...getRootProps()} style={styles.dropzone}>
      <input {...getInputProps()} />
      <div className="dropzone-panel p-4 align-items-center">
        <a className={`dropzone-select btn btn-sm ${file ? 'btn-danger' : 'btn-primary'} me-2`} onClick={file ? removeFile : null}>
          {file ? 'Supprimer' : 'Charger un fichier'}
        </a>
      </div>
      <div className="dropzone-items wm-200px">
        {isLoading ? (
          <div style={styles.loaderContainer}>
            <Loader size="md" content="Chargement en cours..." vertical />
          </div>
        ) : file ? (
          <div className="image-input image-input-empty image-input-outline image-input-placeholder" data-kt-image-input="true">
            <div 
              className="image-input-wrapper w-125px h-125px" 
              style={{ 
                backgroundSize: 'auto calc(0% + 10rem)', 
                backgroundPositionX: '100%', 
                backgroundImage: `url(${file.preview || 'assets/media/svg/files/blank-image.svg'})` 
              }}
            />
            <label className="btn btn-icon">
              {file && file.file && (
                <span className="form-text fs-6 text-muted">
                  {file.file.name}
                </span>
              )}
            </label>
          </div>
        ) : (
          previewImage && (
            <div className="image-input image-input-empty image-input-outline image-input-placeholder" data-kt-image-input="true">
              <div 
                className="image-input-wrapper w-125px h-125px" 
                style={{ 
                  backgroundSize: 'auto calc(0% + 10rem)', 
                  backgroundPositionX: '100%', 
                  backgroundImage: `url(${previewImage || 'assets/media/svg/files/blank-image.svg'})` 
                }}
              />
              <div className="dz-default dz-message">
                <button className="dz-button" type="button">
                  Déposer les fichiers ici pour les télécharger
                </button>
              </div>
            </div>
          )
        )}
      </div>
      <span className="form-text fs-6 text-muted">
        Taille maximale du fichier : 2 Mo.
      </span><br/>
      {fileSize > 2 &&  (
        <span className="form-text fs-6 text-danger text-bolder">
          Le fichier dépasse la taille maximale autorisée de 2 Mo.
        </span>
      )}
      
    </div>
  );
};

const styles = {
  dropzone: {
    border: '2px dashed #cccccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    marginBottom: '20px'
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '125px',
    width: '125px',
    margin: '0 auto'
  }
};

export default FileUploader;