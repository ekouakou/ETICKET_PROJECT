import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeProvider';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'rsuite'; // Importer le Loader de React Suite
import usePostData from "../../services/usePostData";

const SignIn = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const { postData, loading, error: apiError, response } = usePostData(process.env.REACT_APP_AUTHENTIFICATION_API_URL);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Réinitialiser les messages d'erreur précédents
    setSuccessMessage(''); // Réinitialiser les messages de succès précédents
    
    const params = new URLSearchParams();
    params.append('mode', 'doConnexion');
    params.append('STR_UTILOGIN', email);
    params.append('STR_UTIPASSWORD', password);

    try {
      const userData = await postData(params);
      if (userData?.code_statut === "1") {
        // Stocker les données utilisateur
        localStorage.setItem('userConnectedData', JSON.stringify(userData));
        
        // Afficher le message de succès
        setSuccessMessage('Connexion réussie ! Redirection en cours...');
        
        // Attendre 3 secondes avant de rediriger
        setTimeout(() => {
          navigate(process.env.REACT_APP_DASHBOARD);
        }, 1000);
      } else {
        setError(userData?.desc_statut || "Erreur de connexion.");
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
      setError("Une erreur s'est produite lors de la tentative de connexion.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" id="kt_app_root">
      <style dangerouslySetInnerHTML={{ __html: "\n    body {\n        background-image: url('https://keenthemes.com/static/metronic/tailwind/dist/assets/media/images/2600x1200/bg-10.png');\n    }\n\n    [data-bs-theme=\"dark\"] body {\n        background-image: url('../../../assets/media/auth/bg4-dark.jpg');\n    }\n" }}
      />
      <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-400px p-14">
        <div className="d-flex flex-center flex-column flex-column-fluid ">
          <form
            className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
            noValidate="novalidate"
            id="kt_sign_in_form"
            onSubmit={handleSubmit}
          >
            <div className="text-center mb-7">
              <a className="mb-0 mb-lg-20">
                <img alt="Logo" src="assets/media/logos/logo_light.svg" className="h-60px h-lg-50px" />
              </a>
              <h1 className="text-gray-900 fw-bolder mb-3 fs-4">Connexion</h1>
            </div>
            <div className="row g-3 mb-9 d-none">
              <div className="col-md-6">
                <a
                  href="#"
                  className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                >
                  <img
                    alt="Logo"
                    src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/brand-logos/google.svg"
                    className="h-15px me-3"
                  />
                  Sign in with Google
                </a>
              </div>
              <div className="col-md-6">
                <a
                  href="#"
                  className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                >
                  <img
                    alt="Logo"
                    src="https://keenthemes.com/static/metronic/tailwind/dist/assets/media/brand-logos/apple-black.svg"
                    className="theme-light-show h-15px me-3"
                  />
                  <img
                    alt="Logo"
                    src="../../../assets/media/svg/brand-logos/apple-black-dark.svg"
                    className="theme-dark-show h-15px me-3"
                  />
                  Sign in with Apple
                </a>
              </div>
            </div>
            <div className="separator separator-content my-14 d-none">
              <span className="w-125px text-gray-500 fw-semibold fs-7">
                Or with email
              </span>
            </div>
            
            {/* Message de succès */}
            {successMessage && (
              <div className="alert alert-success mb-8" role="alert">
                {successMessage}
              </div>
            )}
            
            {/* Message d'erreur */}
            {error && (
              <div className="alert alert-danger mb-8" role="alert">
                {error}
              </div>
            )}
            
            <div className="fv-row mb-8 fv-plugins-icon-container">
              <input
                type="text"
                placeholder="Email"
                name="email"
                autoComplete="off"
                className="form-control bg-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="fv-row mb-3 fv-plugins-icon-container">
              <input
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="off"
                className="form-control bg-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
              <div />
              <a href="reset-password.html" className="link-primary">
                Forgot Password ?
              </a>
            </div>
            <div className="d-grid mb-10">
              <button
                type="submit"
                id="kt_sign_in_submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <Loader content="Chargement..." />
                ) : (
                  <span className="indicator-label">Se connecter</span>
                )}
              </button>
            </div>
            {/* <div className="text-gray-500 text-center fw-semibold fs-6">
              Se souvenir de moi ?
              <a href="sign-up.html" className="link-primary">
                Sign up
              </a>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;