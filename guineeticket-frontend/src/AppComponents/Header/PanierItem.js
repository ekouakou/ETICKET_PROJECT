import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PanierItem = ({ pannierData, index, onRemove }) => {
  const [quantity, setQuantity] = useState(pannierData.quantity);
  const [INT_ELINUMBER, setINT_ELINUMBER] = useState(pannierData.quantity);
  const { updateCartItems, cartItems } = useContext(CartContext);
  const maxPurchase = parseInt(pannierData.STR_MAX_PURCHASE);

  // Tableau des classes de bordure disponibles
  const borderClasses = [
    "border-warning bg-light-warning",
    "border-info bg-light-info",
    "border-success bg-light-success",
  ];
  const urlBaseImage = localStorage.getItem("urlBaseImage");

  useEffect(() => {
    const cartItem = cartItems.find(
      (item) =>
        item.LG_EVEID === pannierData.LG_EVEID &&
        item.category === pannierData.category
    );
    if (cartItem) {
      setQuantity(cartItem.quantity);
      setINT_ELINUMBER(cartItem.quantity);
    }
  }, [cartItems, pannierData.LG_EVEID, pannierData.category]);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    if (newQuantity <= maxPurchase) {
      updateCart(index, newQuantity);
      setQuantity(newQuantity);
      setINT_ELINUMBER(newQuantity);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      updateCart(index, newQuantity);
      setQuantity(newQuantity);
      setINT_ELINUMBER(newQuantity);
    }
  };

  const updateCart = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex(
      (item) =>
        item.LG_EVEID === pannierData.LG_EVEID &&
        item.category === pannierData.category
    );
    if (itemIndex !== -1) {
      updatedCartItems[itemIndex].quantity = newQuantity;
      updatedCartItems[itemIndex].INT_ELINUMBER = newQuantity;
      updatedCartItems[itemIndex].totalPrice =
        updatedCartItems[itemIndex].DBL_TICAMOUNT * newQuantity;
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      updateCartItems(updatedCartItems);
    }
  };

  // Calculer l'index de la classe de bordure à appliquer
  const borderClass = borderClasses[index % borderClasses.length];

  return (
    <>
      <div
        className={`card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6 mb-5 ${borderClass} panierItem`}
      >
        <div className="d-flex flex-column py-2">
          <div className="d-flex align-items-center">
            <div className="item__cover card-rounded min-h-400px min-h-sm-100 h-100  w-100px h-100px me-5 event-image">
              <img
                src={
                  urlBaseImage.STR_EVEPIC === ""
                    ? "assets/img/bg/slide__bg-2.jpg"
                    : urlBaseImage + pannierData.STR_EVEPIC
                }
                alt={pannierData.STR_EVENAME}
              />
            </div>
            {/* <img src={urlBaseImage + pannierData.STR_EVEPIC} alt="" width="50" className="me-4" /> */}
            <div>
              <div className="fs-4 fw-bold">
                <h5 className="historique-ticket-event-tilte me-5 text-theme">
                  {pannierData.STR_EVENAME}
                </h5>
                <div className="flex items-center justify-between grow eventInfo">
                  <div id="lieu" className=" items-center  grow me-5">
                    {/* Icone Lieu */}
                    <div className="symbol symbol-20px symbol-circle me-3">
                      <span className="badge badge-light-warning ">
                        {pannierData.category}
                      </span>
                    </div>
                    <div className="fs-6 fw-semibold text-gray-500">
                      <span>{pannierData.totalPrice} FCFA</span>
                    </div>
                    <div className="fs-6 fw-semibold text-gray-800 text-theme">
                      <i className="fas fa-calendar-alt"></i>
                      <span>{pannierData.DT_EVEBEGIN}</span> |{" "}
                      <i className="far fa-clock"></i>
                      <span>{pannierData.HR_EVEBEGIN}</span>
                    </div>
                  </div>
                  <div className="m-0">
                    <div className="d-flex align-items-center py-2">
                      <button
                        className="btn btn-sm btn-light me-3 fs-1"
                        onClick={decrementQuantity}
                      >
                        -
                      </button>
                      <span className="fs-4 fw-bold mx-3 text-theme">
                        {quantity}
                      </span>
                      <button
                        className="btn btn-sm btn-light me-3 fs-1"
                        onClick={incrementQuantity}
                        disabled={quantity >= maxPurchase}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center py-2">
          <button
            className="btn btn-sm btn-light-danger btn-active-light-danger"
            onClick={onRemove}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    </>
  );
};

export default PanierItem;
