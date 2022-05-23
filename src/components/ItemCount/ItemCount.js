import React from "react";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Context/CardContext";

import "./ItemCount.css";

const ItemCount = ({ initial, stock, item }) => {
  const [cantidad, setCantidad] = useState(initial);

  const {addItem} = useContext(CartContext);

  useEffect(() => {
    setCantidad(initial);
  }, [initial]);

  const addProducto = (num) => {
    setCantidad(cantidad + num);
  };

  const onAddHandle = () => {
    addItem(item, cantidad);
  };

  return (
    <div className="countContainer">
      <div className="countContainerContador">
        <button
          className="countContainerButton"
          onClick={() => addProducto(-1)}
          disabled={cantidad === initial ? true : null}
        >
          -
        </button>
        <span className="countContainerCantidad">{cantidad}</span>
        <button
          className="countContainerButton"
          onClick={() => addProducto(+1)}
          disabled={cantidad === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="boton_agregar"
        onClick={() => onAddHandle()}
        disabled={stock === 0 ? true : null}
      >
        Añadir al Carrido
      </button>
    </div>
  );
};

export default ItemCount;
