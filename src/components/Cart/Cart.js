import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

import "./cart.css";

const Cart = () => {
  const { cart, cartTotalItem, removeItem, clear, cartTotalPrecio } =
    useContext(CartContext);

  const deleteItem = (id) => {
    removeItem(id);
  };

  const deleteCart = () => {
    clear();
  };

  return (
    <div className="container-general">
      {cartTotalItem() !== 0 ? (
        <div className="container-cart">
          <h1>Carrito de compra</h1>
          <button
            className="boton"
            onClick={() => {
              deleteCart();
            }}
          >
            Vaciar del carrito
          </button>
          <div>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Imagen</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((producto) => {
                  console.log(producto);
                  return (
                    <tr key={producto.id}>
                      <th scope="row">
                        <img
                          style={{ width: "20%" }}
                          src={producto.producto[0].imagen}
                          alt={producto.producto[0].nombre}
                        />
                      </th>
                      <td>{producto.producto[0].nombre}</td>
                      <td>${producto.producto[0].precio}</td>
                      <td>{producto.cantidadproducto}</td>
                      <td>
                        <button
                          className="boton"
                          onClick={() => {
                            deleteItem(producto.producto[0].id);
                          }}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <h2 className="cartTotalPrecio">
            Monto total de la compra:${cartTotalPrecio()}
          </h2>
        </div>
      ) : (
        <div className="messageCart">
          <h1>No hay items en el carrito</h1>
          <Link to="/">
            {" "}
            <button className="boton">Ir a Home</button>{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
