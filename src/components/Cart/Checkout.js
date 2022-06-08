import React, { useContext, useState } from "react";

import { CartContext } from "../../Context/CartContext";
import Message from "../Message/Message";
import "./checkout.css";
import { TextField } from "@mui/material";

// Firebase
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const initialState = {
  name: "",
  phone: "",
  email: "",
};

const CartForm = () => {
  const { cart, cartTotalItem, cartTotalPrecio } = useContext(CartContext);

  const items = cart.map((producto) => {
    return {
      id: producto.producto[0].id,
      title: producto.producto[0].nombre,
      price: producto.producto[0].precio,
    };
  });

  const total = cartTotalPrecio();
  const totalItems = cartTotalItem();
  const date = Timestamp.fromDate(new Date());

  const [compra, setCompra] = useState(initialState);
  // Este estado está destinado a guardar el id de la compra
  const [compraID, setCompraID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setCompra({ ...compra, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "ordenes"), {
      compra,
      items,
      date,
      totalItems,
      total,
    });

    setCompraID(docRef.id);
    setCompra(initialState);
  };

  return (
    <div className="container-general">
      <div className="container-cart">
        <h1>Checkout</h1>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Cantidad</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((producto) => {
              return (
                <tr key={producto.id}>
                  <td>{producto.cantidadproducto}</td>
                  <td>{producto.producto[0].nombre}</td>
                  <td>${producto.producto[0].precio}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="cartTotalPrecio">
          Monto total de la compra:${cartTotalPrecio()}
        </p>

        <form className="formulario" onSubmit={onSubmit}>
          <TextField
            label="Apellido y Nombre"
            margin="dense"
            placeholder="Apellido y Nombre"
            name="name"
            value={compra.name}
            onChange={handleOnChange}
          />
          <TextField
            label="Teléfono"
            placeholder="Telefono"
            margin="dense"
            name="phone"
            value={compra.phone}
            onChange={handleOnChange}
          />
          <TextField
            placeholder="E-mail"
            margin="dense"
            label="E-mail"
            name="email"
            value={compra.email}
            onChange={handleOnChange}
          />
          <button className="boton">Finalizar Compra</button>
        </form>
        {compraID && <Message compraID={compraID} />}
      </div>
    </div>
  );
};

export default CartForm;
