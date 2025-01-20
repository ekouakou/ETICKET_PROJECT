// Import necessary dependencies
import React, { useState, useRef, useEffect, useContext } from "react";
import { useTheme } from "../../contexts/ThemeProvider"; // Custom hook for theme management
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import LogoHeader from "./LogoHeader"; // Component for the site logo
import PanierItem from "./PanierItem"; // Component for individual cart items
import DropdownMenu from "./DropdownMenu"; // Custom dropdown menu component
import { HeaderContext } from "../../contexts/HeaderContext"; // Context for header-related state
import {
  Modal,
  Button,
  Placeholder,
  Loader,
  ButtonToolbar,
  Divider,
} from "rsuite";
import { CartContext } from "../../contexts/CartContext"; // Context for cart-related state
import {
  faSun,
  faMoon,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Header({ onSearch }) {
  // Theme context for toggling between light and dark themes
  const { theme, toggleTheme } = useTheme();

  // State variables for managing visibility and input states
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  // Refs for DOM elements
  const searchInputRef = useRef(null);
  const searchIconRef = useRef(null);
  const headerNavRef = useRef(null);
  const filterFixedRef = useRef(null);

  // Context values for search and cart functionality
  const { searchTerm, setSearchTerm, handleSearchSubmit } = useContext(HeaderContext);
  const { cartItems, updateCartItems } = useContext(CartContext);

  // Fetch user data from localStorage (if available)
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  // Menu structure (currently commented out, can be enabled if needed)
  const menus = [
    // Example menu structure
    // {
    //   label: 'Home',
    //   link: '#',
    //   submenu: [
    //     { label: 'Home style 1', link: 'index.html' },
    //     { label: 'Home style 2', link: 'index2.html' },
    //     { label: 'Home style 3', link: 'index3.html' },
    //   ],
    // },
  ];

  // Toggles the visibility of the menu
  const toggleHeaderMenu = () => {
    setMenuActive((prev) => !prev);
    if (filterFixedRef.current) {
      filterFixedRef.current.classList.toggle("filter--hidden");
    }
  };

  // Toggles the theme between light and dark
  const toggleButton = () => {
    toggleTheme();
  };

  // Toggles the visibility of the cart modal
  const toggleCartVisibility = (event) => {
    event.preventDefault();
    setIsCartVisible(!isCartVisible);
    if (isSearchVisible) {
      setIsSearchVisible(false);
    }
  };

  // Closes the search input when clicking outside
  const handleClickOutside = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target) &&
      !searchIconRef.current.contains(event.target)
    ) {
      setIsSearchVisible(false);
    }
  };

  // Attach event listener for clicks outside the search input
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Determines if a route is active (used for NavLink)
  const isActiveFunc = (match, location) => {
    return match !== null;
  };

  // Handles changes in the search input field
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Propagate the search term to the parent
  };

  // Removes an item from the cart
  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    updateCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // Toggles the visibility of the search input
  const toggleSearch = () => {
    setSearchActive((prev) => !prev);
  };

  // Cart modal content
  const CartModal = (
    <Modal size="lg" show={isCartVisible} onHide={() => setIsCartVisible(false)} animation={false} centered>
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
        <NavLink exact to="/detail-event">
          <Button variant="success">Passez à l'achat</Button>
        </NavLink>
        <Button variant="secondary" onClick={() => setIsCartVisible(false)}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
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
                          menu.submenu.length > 0 ? "dropdown" : undefined
                        }
                        aria-expanded="false"
                      >
                        {menu.label}{" "}
                        {menu.submenu.length > 0 && (
                          <i className="ti ti-chevron-down" />
                        )}
                      </a>
                      {menu.submenu.length > 0 && (
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
                      onChange={handleSearchChange} // Update on input change
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

                  {/* Cart Dropdown */}
                  <div className="header__sign-in  mx-2">
                    <a
                      className="header__nav-link"
                      role="button"
                      onClick={toggleCartVisibility}
                    >
                      {/* Replacing "Pannier" with the shopping cart icon */}
                      <FontAwesomeIcon icon={faShoppingCart} className="" />
                      <span className="conpteur-pannier">
                        {cartItems.reduce(
                          (total, item) => total + item.quantity,
                          0
                        )}
                      </span>
                    </a>
                  </div>

                  <div
                    className="header__sign-in  mx-2 "
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

                  {/* User Profile Dropdown */}
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

                      {/* <li><a href="profile.html"><i className="ti ti-stereo-glasses" /> Subscription</a></li>
                                  <li><a href="profile.html"><i className="ti ti-bookmark" /> Favorites</a></li>
                                  <li><a href="profile.html"><i className="ti ti-settings" /> Settings</a></li> */}
                    </div>

                    {/* <ul className="dropdown-menu dropdown-menu-end header__dropdown-menu header__dropdown-menu--user">
                                  <li><a href="profile.html"><i className="ti ti-ghost" /> Profile</a></li>
                                  <li><a href="profile.html"><i className="ti ti-stereo-glasses" /> Subscription</a></li>
                                  <li><a href="profile.html"><i className="ti ti-bookmark" /> Favorites</a></li>
                                  <li><a href="profile.html"><i className="ti ti-settings" /> Settings</a></li>
                                  <li><a href="#"><i className="ti ti-logout" /> Logout</a></li>
                              </ul> */}
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
                {CartModal}
              </div>
            </div>
          </div>
        </div>
        {CartModal}
        {/* Render the Cart Modal */}
      </header>
    </>
  );
}

export default Header;
