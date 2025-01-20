import React from 'react';
import { useTheme } from '../../contexts/ThemeProvider';
import { useTheme } from '../../contexts/ThemeProvider';
import LogoFooter  from './LogoFooter'
import { NavLink } from 'react-router-dom';

function Footer() {
  const { theme, toggleTheme } = useTheme();

  const toggleButton = () => {
    toggleTheme();
  };

  const isActiveFunc = (match, location) => {
    return match !== null;
  };

  return (
    <footer className="footer-section pt-5">
      <div className="newslater-section padding-bottom">
        <div className="container">
          <div className="newslater-container bg_img" data-background="assets/images/newslater/newslater-bg01.jpg">
            <div className="newslater-wrapper">
              <h5 className="cate">ABONNEZ-VOUS À eticket</h5>
              <h3 className="title">POUR BÉNÉFICIER D'AVANTAGES EXCLUSIFS</h3>
              <form className="newslater-form">
                <input type="text" placeholder="Votre adresse e-mail"/>
                <button type="submit">Enregistrer</button>
              </form>
              <p>Nous respectons votre vie privée, c'est pourquoi nous ne partageons jamais vos informations</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-top">
          <div className="logo">
            {/* <NavLink exact to="/">
              <LogoFooter theme={theme} />
            </NavLink> */}
          </div>
          <ul className="social-icons">
            <li>
              <a href="#0">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#0" className="active">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-google"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-area">
            <div className="left">
              <p>Copyright © 2020. Tous droits réservés par <a href="#0">Eticket</a></p>
            </div>
            <ul className="links">
              <li>
                <a href="#0">À propos</a>
              </li>
              <li>
                <a href="#0">Conditions d'utilisation</a>
              </li>
              <li>
                <a href="#0">Politique de confidentialité</a>
              </li>
              <li>
                <a href="#0">FAQ</a>
              </li>
              <li>
                <a href="#0">Retour d'information</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
