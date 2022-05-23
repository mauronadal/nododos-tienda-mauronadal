import React, { createContext, useState } from 'react';
export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => { 
    const itemIndex = cart.findIndex(
      (itemProd) => itemProd.producto.id === item.id
    );

    if (itemIndex === -1) {
      const newCart = [
        ...cart,
        {
          producto: item,
          cantidadproducto: cantidad,
        },
      ];

      setCart(newCart);
    } else {
      const auxCart = [...cart];
      auxCart[itemIndex].cantidadproducto += cantidad;
      setCart(auxCart);
    }
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter((element) => element.producto[0].id !== itemId);

    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    const findItem = cart.find((element) => element.producto[0].id === id);
    return findItem ? true : false;
  };

  const cartTotalItem = () => {
    return cart.reduce((acumulador, item) => {
      return acumulador + item.cantidadproducto;
    }, 0);
  };

  const cartTotalPrecio = () => { 
    return cart.reduce((acumulador, item) => { 
      return acumulador + item.cantidadproducto * item.producto.precio;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        cartTotalItem,
        cartTotalPrecio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
