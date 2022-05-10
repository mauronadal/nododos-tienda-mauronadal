import React, { useEffect, useState } from 'react';
import Item from './Item';
import { dbproductos } from '../data/data';

import './styles/ItemList.css';

const ItemList = () => {

  const [productos, setProductos] = useState([]);

  const getProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dbproductos);
    }, 2000);
  });


  const getProductosFromDB = async () => {
    try {
      const result = await getProductos;
      setProductos(result);
    } catch (error) {
      console.log(error);
      alert('Error de conexión, no se puede cargar el listado en este momento');
    }
  };


  useEffect(() => {
    getProductosFromDB();
  }, []);

  return (
    <div className="product-list-container">
      {

        productos.length ? (
          <>
            {

              productos.map((producto) => {

                return (
                  <div key={producto.id}>
                    <Item
                      nombre={producto.nombre}
                      imagen={producto.imagen}
                      precio={producto.precio}
                      info={producto.info}
                      stock={producto.stock}
                      id={producto.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <p>Cargando listado de productos...</p>
        )
      }
    </div>
  );
};

export default ItemList;
