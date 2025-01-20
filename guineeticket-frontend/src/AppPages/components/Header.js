import React, { useState, useRef, useEffect, useContext } from 'react';
import { useTheme } from '../../contexts/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import LogoHeader from './LogoHeader';
import PanierItem from './PanierItem';
import DropdownMenu from './DropdownMenu';
import { HeaderContext } from '../../contexts/HeaderContext';
import { Modal, Button } from 'react-bootstrap';
import { CartContext } from '../../contexts/CartContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const searchInputRef = useRef(null);
  const searchIconRef = useRef(null);
  const { searchTerm, setSearchTerm, handleSearchSubmit } = useContext(HeaderContext);
  const { cartItems, updateCartItems } = useContext(CartContext);

  const toggleButton = () => {
    toggleTheme();
  };

  const toggleSearchVisibility = (event) => {
    event.preventDefault();
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 500);
    }
    if (isCartVisible) {
      setIsCartVisible(false);
    }
  };

  const toggleCartVisibility = (event) => {
    event.preventDefault();
    setIsCartVisible(!isCartVisible);
    if (isSearchVisible) {
      setIsSearchVisible(false);
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (document.activeElement !== searchInputRef.current) {
        setIsSearchVisible(false);
      }
    }, 200);
  };

  const handleClickOutside = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target) &&
      !searchIconRef.current.contains(event.target)
    ) {
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActiveFunc = (match, location) => {
    return match !== null;
  };

  const CartModal = (
    <Modal
     size="lg"
      className="card-rounded"
      show={isCartVisible}
      onHide={() => setIsCartVisible(false)}
      animation={false}
      centered
    >
      <Modal.Header closeButton>
        <div className="card-header pt-7">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold text-gray-900">Vos commande en cours</span>
          </h3>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="hover-scroll-overlay-y pe-6 me-n6" style={{ height: 415 }}>
          {cartItems.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            <div>
              {cartItems.map((item, index) => (
                <PanierItem
                  key={index}
                  pannierData={item}
                  index={index}
                  onRemove={() => handleRemoveItem(index)}
                />
              ))}
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <NavLink exact to="/paiement" isActive={isActiveFunc}>
          <Button variant="success">Payé vos tickets</Button>
        </NavLink>
        <Button variant="secondary" onClick={() => setIsCartVisible(false)}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    updateCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <header id="header" className={`header-section ${theme}`}>
      <div className="container">
        <div className="header-wrapper flex-column-sm">
          <div className="logo">
            <NavLink exact to="/" isActive={isActiveFunc}>
              <LogoHeader theme={theme} />
            </NavLink>
          </div>
          <ul className="menu"></ul>
          <div className="pr-0 d-flex bouton-action">
            <DropdownMenu className=" header-btn" />
            <div className="mx-4 btn btn-default  header-btn">
              <i
                className="fas fa-search ps-1 pe-1"
                onClick={toggleSearchVisibility}
                style={{ cursor: 'pointer' }}
                ref={searchIconRef}
              ></i>
            </div>
            <div className="mr-4 " onClick={toggleCartVisibility}>
              <div className='btn btn-default  header-btn'>
              <i className=" fas fa-shopping-cart" style={{ cursor: 'pointer' }}></i>
              </div>
             
              <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill conpteur-pannier">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>
            <div id="themeToggle" onClick={toggleButton} className='header-btn' >
              {theme === 'light' ? <div className='btn btn-default ps-10 pe-10'><FontAwesomeIcon icon={faMoon} /></div> : <div className='btn btn-default  ps-10 pe-10'><FontAwesomeIcon icon={faSun} /></div>}
            </div>
          </div>
          <div className="header-bar d-none">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`header-wrapper m-0 zone-recherche ${isSearchVisible ? 'show' : ''}`}>
          <form className="ticket-search-form w-100" onSubmit={handleSearchSubmit}>
            <div className="form-group mt-3 w-100 header-search">
              <input
                type="text"
                className="inputSearch w-100"
                placeholder="Rechercher un evenement"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={searchInputRef}
                onBlur={handleBlur}
              />
            </div>
          </form>
        </div>
        {CartModal}
      </div>
    </header>
  );
}

export default Header;
