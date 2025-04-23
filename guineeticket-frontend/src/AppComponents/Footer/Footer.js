import React, { useState } from "react";
import { Button } from "react-bootstrap";
import LogoFooter from "./LogoFooter";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeProvider";
import { FaFacebook, FaEnvelope } from "react-icons/fa"; // Importer les icônes
import TermsAndConditions from "../TermsAndConditions";
import {
  Modal,
  // Button,
  Placeholder,
  Loader,
  ButtonToolbar,
  Divider,
} from "rsuite";
function Footer() {
  const { theme, toggleTheme } = useTheme();
  // État pour gérer la visibilité du modal des conditions de vente
  const [rows, setRows] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEntered = () => setRows(3);

  // Fonction pour ouvrir/fermer le modal des conditions de vente

  return (
    <footer class="footer-section">
      <div class="container">
        <div class="footer-content pt-5 pb-5">
          <div class="row footer-cta">
            <div class="col-xl-3 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <NavLink exact to="/">
                    <LogoFooter theme={theme} />
                  </NavLink>
                </div>
                <div class="footer-text">
                  <p>
                    Événements, spectacles, concerts, sports et transports en
                    Guinée : Trouvez un Billet facile en ligne sur Guinée Ticket
                    ! La solution simple et rapide pour assister à vos
                    événements préférés.
                  </p>
                </div>
                <div class="footer-social-icon mt-10">
                  <span>Suivez-nous</span>
                  <a
                    href="https://web.facebook.com/profile.php?id=61559109494346&_rdc=1&_rdr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaFacebook size={24} className="text-theme mb-2" />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Guinée ticket et vous </h3>
                </div>
                <ul>
                  {/* <li><a href="#">Accueil</a></li> */}
                  <li>
                    <NavLink exact to="/aboutUs">
                      <a href="#">À propos</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/contactUs">
                      <a href="#">Contact</a>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Mentions légales</h3>
                </div>
                <ul>
                  <li
                    onClick={() => {
                      handleOpen();
                    }}
                  >
                    <a>Politique de confidentialité</a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        handleOpen();
                      }}
                    >
                      Conditions générales de vente
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        handleOpen();
                      }}
                    >
                      Conditions générales d'utilisation
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Newsletters</h3>
                </div>
                <ul class="list-1 p-0">
                  <li>
                    <form className="d-flex">
                      <input
                        type="email"
                        className="form-control me-2"
                        placeholder="Entrez votre email"
                        required
                      />
                      <button
                        type="submit"
                        className="btn btn-danger d-flex align-items-center"
                      >
                        <FaEnvelope className="me-2" />{" "}
                        {/* Icône avant le texte */}
                      </button>
                    </form>
                  </li>
                  {/* <li><a href="#">Vos alertes et newsletters</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>
                  2025 &copy; Tous droits réservés <a href="https://afridigicom.com/">Afridigicom</a>
                </p>
              </div>
            </div>
            {/* <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Accueil</a></li>
                                <li><a href="#">Termes</a></li>
                                <li><a href="#">Confidentialité</a></li>
                                <li><a href="#">Politique</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div> */}
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        onEntered={handleEntered}
        size="md"
      >
        <Modal.Header>
          <Modal.Title className="text-theme">
            Conditions Générales d'Utilisation et de Vente de Guinée Ticket
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TermsAndConditions />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
}

export default Footer;
