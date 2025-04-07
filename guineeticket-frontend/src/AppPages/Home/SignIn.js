import React, { useState, useEffect } from "react";
import AppHeader from "../../AppComponents/Header/AppHeader";
import Footer from "../../AppComponents/Footer/Footer";
import { useTheme } from "../../contexts/ThemeProvider";
import { useNavigate } from "react-router-dom";
import usePostData from "../../services/usePostData";
import { Loader } from 'rsuite'; // Importer le Loader de React Suite

const SignIn = () => {
  const { theme } = useTheme();
  const [background, setBackground] = useState("");
  const [STR_CLILOGIN, setSTR_CLILOGIN] = useState("");
  const [STR_CLIPASSWORD, setSTR_CLIPASSWORD] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { postData, loading, error: apiError } = usePostData(process.env.REACT_APP_CUSTOMER_MANAGER_API_URL);

  useEffect(() => {
    setBackground(
      theme === "light"
        ? "assets/media/bg/section__bg_blue.jpg"
        : "assets/media/bg/section__bg.jpg"
    );
  }, [theme]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append("mode", "doConnexion");
    params.append("STR_CLILOGIN", STR_CLILOGIN);
    params.append("STR_CLIPASSWORD", STR_CLIPASSWORD);

    const userData = await postData(params);

    if (userData?.code_statut === "1") {
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/profile");
    } else {
      setError(userData?.desc_statut || "Erreur de connexion.");
    }
  };


  return (
    <>
      <AppHeader />

      <div
        className="sign section--bg"
        data-bg={background}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                <form action="#" className="sign__form" onSubmit={handleSubmit}>
                  <a href="index.html" className="sign__logo">
                    <img src="img/logo.svg" alt="" />
                  </a>

                  <div
                    className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
                    id="kt_sign_in_form"
                  >
                    <div className="text-center mb-11">
                      <h1 className="text-gray-900 fw-bolder mb-3 text-theme">
                        Connexion
                      </h1>
                      <div className="text-gray-500 fw-semibold fs-6">
                        Connectez-vous pour retrouvez l'historique de vos achats
                      </div>
                    </div>
                    <div className="row g-3 mb-9 d-none">
                      <div className="col-md-6">
                        <a
                          href="#"
                          className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                        >
                          <img
                            alt="Logo"
                            src="../../../assets/media/svg/brand-logos/google-icon.svg"
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
                            src="../../../assets/media/svg/brand-logos/apple-black.svg"
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
                    <div className="fv-row mb-8 fv-plugins-icon-container">
                      <input
                        type="text"
                        placeholder="Votre numéro de téléphone"
                        value={STR_CLILOGIN}
                        onChange={(e) => setSTR_CLILOGIN(e.target.value)}
                        required
                        autoComplete="off"
                        className="form-control bg-transparent"
                      />
                      <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                    </div>
                    <div className="fv-row mb-3 fv-plugins-icon-container">
                      <input
                        type="password"
                        placeholder="Votre mot de passe"
                        value={STR_CLIPASSWORD}
                        onChange={(e) => setSTR_CLIPASSWORD(e.target.value)}
                        required
                        name="password"
                        autoComplete="off"
                        className="form-control bg-transparent"
                      />
                      <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
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
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;