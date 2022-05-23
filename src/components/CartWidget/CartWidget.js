import React, {useContext} from "react";
import { BsCart2 } from "react-icons/bs";
import { CartContext } from "../../Context/CardContext";
import "./CartWidget.css"


export default function CartWidget() { 
  const {cartTotalItem, cartTotalPrecio} = useContext(CartContext);

  return (
    <div className="containerCardWidget">
     
      <p className="cantidadCardWidget">Cantidad: {cartTotalItem()}</p>
      <p className="cantidadCardWidget">Importe Total: ${cartTotalPrecio()}</p>
      <h3>
        <BsCart2 />
      </h3>
    </div>
  );
}
