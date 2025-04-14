import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import usePostData from "../../services/usePostData";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeaderWrapper = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  const handleToggle = (isOpen) => setShowDropdown(isOpen);

  const { postData, loading, error: apiError } = usePostData(process.env.REACT_APP_AUTHENTIFICATION_API_URL);
  const userConnectedObj = JSON.parse(localStorage.getItem('userConnectedData'));

  // Fonction de déconnexion
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const params = new URLSearchParams();
      params.append('mode', 'doDisConnexion');
      params.append('STR_UTITOKEN', userConnectedObj.STR_UTITOKEN);
      
      const userData = await postData(params);
      
      if (userData?.code_statut === "1") {
        // Notification de succès
        toast.success(userData.desc_statut, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        
        // Suppression des données utilisateur du localStorage
        localStorage.removeItem("userConnectedData");
        
        // Redirection après 2 secondes
        setTimeout(() => {
          navigate(process.env.REACT_APP_SIGN_IN);
        }, 2000);
      } else {
        // Notification d'erreur
        toast.error(userData?.desc_statut || "Échec de la déconnexion. Veuillez réessayer.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        setError(userData?.desc_statut || "Erreur lors de la déconnexion.");
      }
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      toast.error("Une erreur s'est produite lors de la déconnexion.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      {/* ToastContainer pour afficher les notifications */}
      <ToastContainer />
      
      {/*begin::Header wrapper*/}
      <div
        className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
        id="kt_app_header_wrapper"
      >
        {/*begin::Menu wrapper*/}
        <div
          className="app-header-menu app-header-mobile-drawer align-items-stretch"
          data-kt-drawer="true"
          data-kt-drawer-name="app-header-menu"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="250px"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_app_header_menu_toggle"
          data-kt-swapper="true"
          data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
          data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
        ></div>

        <div className="app-navbar flex-shrink-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* User Menu */}
          <div className="app-navbar-item ms-1 ms-md-4">
            <Dropdown show={showDropdown} onToggle={handleToggle}>
              <Dropdown.Toggle
                as="div"
                className="cursor-pointer symbol symbol-35px"
                id="user-menu-toggle"
              >
                <img
                  src="assets/media/avatars/300-3.jpg"
                  className="rounded-3"
                  alt="user"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu align="end" className="w-275px">
                {/* User info */}
                <Dropdown.ItemText>
                  <div className="d-flex align-items-center px-3">
                    <div className="symbol symbol-50px me-5">
                      <img alt="User" src="assets/media/avatars/300-3.jpg" />
                    </div>
                    <div>
                      <div className="fw-bold fs-5">
                        {userConnectedObj?.STR_UTILASTNAME || "Utilisateur"}
                      </div>
                      <div className="text-muted fs-7">
                        {userConnectedObj?.STR_UTIEMAIL || "email@exemple.com"}
                      </div>
                    </div>
                  </div>
                </Dropdown.ItemText>
                <Dropdown.Divider />
                <Dropdown.Item href="#profile">
                  <div className="menu-item px-5">
                    <a href="../../account/overview.html" className="menu-link px-5">
                      Mon Profil
                    </a>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#projects">Mes Projets</Dropdown.Item>
                <Dropdown.Item href="#billing">Facturation</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout} disabled={isLoggingOut}>
                  {isLoggingOut ? "Déconnexion en cours..." : "Déconnexion"}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderWrapper;