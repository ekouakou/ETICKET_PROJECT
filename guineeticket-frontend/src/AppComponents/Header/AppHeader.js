import React, { useState, useRef, useEffect, useContext } from "react";
import { useTheme } from "../../contexts/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import LogoHeader from "./LogoHeader";
import PanierItem from "./PanierItem";
import DropdownMenu from "./DropdownMenu";
import { HeaderContext } from "../../contexts/HeaderContext";
import {
  Modal,
  Button,
  Placeholder,
  Loader,
  ButtonToolbar,
  Divider,
} from "rsuite";
import { CartContext } from "../../contexts/CartContext";
import {
  faSun,
  faMoon,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Header({ onSearch }) {
  const { theme, toggleTheme } = useTheme();

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const searchInputRef = useRef(null);
  const searchIconRef = useRef(null);
  const headerNavRef = useRef(null);
  const filterFixedRef = useRef(null);

  const { searchTerm, setSearchTerm, handleSearchSubmit } =
    useContext(HeaderContext);
  const { cartItems, updateCartItems } = useContext(CartContext);

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const menus = [
    // Menus structure here
  ];

  // État pour gérer la visibilité du modal des conditions de vente
  const [rows, setRows] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEntered = () => setRows(3);

  // Toggle menu and enable/disable body scroll when menu is opened
  const toggleHeaderMenu = () => {
    setMenuActive((prev) => !prev);
    if (filterFixedRef.current) {
      filterFixedRef.current.classList.toggle("filter--hidden");
    }

    // Toggle body scroll when menu is active
    if (!menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  // Close mobile menu when clicking overlay
  const closeMenu = () => {
    setMenuActive(false);
    if (filterFixedRef.current) {
      filterFixedRef.current.classList.add("filter--hidden");
    }
    document.body.style.overflow = "";
  };

  const toggleButton = () => {
    toggleTheme();
  };

  const toggleCartVisibility = (event) => {
    event.preventDefault();
    setIsCartVisible(!isCartVisible);
    if (isSearchVisible) {
      setIsSearchVisible(false);
    }
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Clean up body overflow when component unmounts
      document.body.style.overflow = "";
    };
  }, []);

  const isActiveFunc = (match, location) => {
    return match !== null;
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    updateCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const toggleSearch = () => {
    setSearchActive((prev) => !prev);
  };

  return (
    <>
      {/* Overlay qui apparaît lorsque le menu mobile est actif */}
      {menuActive && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}

      <header id="header" className={`header ${theme}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                <NavLink exact to="/" isActive={isActiveFunc}>
                  <LogoHeader theme={theme} />
                </NavLink>

                <ul
                  ref={headerNavRef}
                  className={`header__nav ${
                    menuActive ? "header__nav--active" : ""
                  }`}
                >
                  {menus.map((menu, index) => (
                    <li className="header__nav-item" key={index}>
                      <a
                        className="header__nav-link"
                        href={menu.link}
                        role="button"
                        data-bs-toggle={
                          menu.submenu?.length > 0 ? "dropdown" : undefined
                        }
                        aria-expanded="false"
                      >
                        {menu.label}{" "}
                        {menu.submenu?.length > 0 && (
                          <i className="ti ti-chevron-down" />
                        )}
                      </a>
                      {menu.submenu?.length > 0 && (
                        <ul className="dropdown-menu header__dropdown-menu">
                          {menu.submenu.map((item, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={item.link}
                                target={item.external ? "_blank" : undefined}
                                rel={
                                  item.external
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}

                  <li className="header__nav-item mobileMenu ">
                    <NavLink exact to="/signIn" isActive={isActiveFunc}>
                      <a className="header__nav-link">
                        <i className="ti ti-ghost me-5" /> Profile
                      </a>
                    </NavLink>
                  </li>
                  <li className="header__nav-item mobileMenu">
                    <a className="header__nav-link" href="#">
                      <i className="ti ti-logout me-5" /> Déconnexion
                    </a>
                  </li>
                  <li className="header__nav-item mobileMenu">
                    <div className="header__sign-in">
                      <a id="themeToggle" onClick={toggleButton}>
                        {theme === "light" ? (
                          <div className="btn btn-default px-5 header-btn">
                            <FontAwesomeIcon icon={faMoon} />
                          </div>
                        ) : (
                          <div className="btn btn-default  px-5">
                            <FontAwesomeIcon icon={faSun} />
                          </div>
                        )}
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="header__auth">
                  <form
                    action="#"
                    className={`header__search ${
                      searchActive ? "header__search--active" : ""
                    }`}
                  >
                    <input
                      className="header__search-input"
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <button className="header__search-button" type="button">
                      <i className="ti ti-search" />
                    </button>
                    <button
                      className="header__search-close"
                      type="button"
                      onClick={toggleSearch}
                    >
                      <i className="ti ti-x" />
                    </button>
                  </form>
                  <button
                    className="header__search-btn"
                    type="button"
                    onClick={toggleSearch}
                  >
                    <i className="ti ti-search" />
                  </button>

                  <div className="header__sign-in  mx-2">
                    <button
                      className="header__nav-link mon-panier"
                      type="button"
                      // onClick={toggleCartVisibility}
                      onClick={() => {
                        handleOpen();
                      }}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} className="" />
                      <span className="conpteur-pannier">
                        {cartItems.reduce(
                          (total, item) => total + item.quantity,
                          0
                        )}
                      </span>
                    </button>
                  </div>

                  <div
                    className="header__sign-in mx-2 "
                    id="toggletheme"
                    onClick={toggleButton}
                  >
                    <a>
                      {theme === "light" ? (
                        <div className="btn btn-default px-5 header-btn d-block mx-auto">
                          <FontAwesomeIcon icon={faMoon} />
                        </div>
                      ) : (
                        <div className="btn btn-default  px-5 d-block mx-auto">
                          <FontAwesomeIcon icon={faSun} />
                        </div>
                      )}
                    </a>
                  </div>

                  <div className="header__profile  mx-2" id="header__profile">
                    <a
                      className="header__sign-in header__sign-in--user px-5 m-0"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon icon={faUser} />
                    </a>

                    <div className="dropdown-menu dropdown-menu-end header__dropdown-menu header__dropdown-menu--user">
                      {user && user != null ? (
                        <>
                          <li>
                            <NavLink to="/profile">
                              <i className="ti ti-ghost" />
                              Mes tickets
                            </NavLink>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ti ti-logout" /> Deconnexion
                            </a>
                          </li>
                        </>
                      ) : (
                        <li>
                          <NavLink to="/signIn" isActive={isActiveFunc}>
                            <i className="ti ti-ghost" /> Connexion
                          </NavLink>
                        </li>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  className={`header__btn ${
                    menuActive ? "header__btn--active" : ""
                  }`}
                  onClick={toggleHeaderMenu}
                  type="button"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          onEntered={handleEntered}
          size="md"
        >
          <Modal.Header closeButton>
            <div className="card-header pt-7">
              <h3 className="card-title fw-bold text-gray-900 text-theme">
                Vos commandes en cours
              </h3>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="hover-scroll-overlay-y pe-6 me-n6">
              {cartItems.length === 0 ? (
                <p className="text-theme">Votre panier est vide.</p>
              ) : (
                cartItems.map((item, index) => (
                  <PanierItem
                    key={index}
                    pannierData={item}
                    index={index}
                    onRemove={() => handleRemoveItem(index)}
                  />
                ))
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              onClick={() => {
                handleClose();
                // La redirection est gérée par le NavLink
              }}
              as={NavLink}
              to="/detail-event"
            >
              Passez à l'achat
            </Button>
            <Button onClick={handleClose} appearance="primary" className="ms-2">
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </header>
    </>
  );
}

export default Header;
