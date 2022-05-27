import React, { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

export default function CartWidget() {
  const { cartTotalItem } = useContext(CartContext);

  return (
    <div className="containerCardWidget">
      <Link to="./Cart">
        {" "}
        <button>
          <h3>
            <BsCart2 />
          </h3>
        </button>{" "}
      </Link>
      {cartTotalItem() !== 0 && (
        <div className="CantCart">{cartTotalItem()}</div>
      )}{' '}
    
    </div>
  );
}
