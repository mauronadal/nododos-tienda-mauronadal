import React from "react";
import { useState } from "react";

import "./styles/ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const addProducto = (num) => {
    setCantidad(cantidad + num);
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
        onClick={() => onAdd(cantidad)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;
