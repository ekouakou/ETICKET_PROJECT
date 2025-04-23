import React from "react";

const ErrorMessage = ({ error }) => {
  // Extract error message from error object
  const getErrorMessage = (error) => {
    if (!error) return "Une erreur inconnue est survenue";
    if (typeof error === "string") return error;
    if (error.message) return error.message;
    return "Une erreur est survenue lors du chargement des données";
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
      <div className="card shadow border-0" style={{ maxWidth: "600px", width: "100%" }}>
        {/* Top color bar */}
        <div className="bg-danger" style={{ height: "8px", background: "linear-gradient(90deg, #dc3545, #fd7e14)" }}></div>
        
        <div className="card-body p-4">
          {/* Icon and header */}
          <div className="text-center mb-4">
            <div className="d-inline-flex justify-content-center align-items-center rounded-circle bg-danger bg-opacity-10 p-3 mb-3" style={{ width: "80px", height: "80px" }}>
              {/* Error SVG Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                  stroke="#dc3545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h3 className="fw-bold mb-3">Une erreur est survenue</h3>
            
            <div className="alert alert-danger mb-4">
              {getErrorMessage(error)}
            </div>
            
            <button 
              className="btn btn-danger btn-lg d-flex align-items-center mx-auto"
              onClick={() => window.location.reload()}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="me-2"
              >
                <path d="M23 4v6h-6"></path>
                <path d="M1 20v-6h6"></path>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"></path>
                <path d="M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
              Actualiser la page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;