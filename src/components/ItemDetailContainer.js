import React from "react";
import { useEffect, useState } from "react";
import { dbproductos } from "../data/productos";
import ItemDetail from "./ItemDetail";
import { Spinner } from "react-bootstrap";
import "./styles/ItemListContainer.css";
import { useParams } from "react-router-dom";

const traerDetalle = (itemId) => {
  const conObjeto = parseInt(itemId);

  return new Promise((resolve, reject) => {
    const detallesFiltrados = dbproductos.filter(
      (detail) => detail.id === conObjeto
    );

    
    setTimeout(() => {
      resolve(detallesFiltrados);
    }, 2000);
  });
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  const { itemId } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    traerDetalle(itemId)
      .then((res) => {
        setItem(res[0]);
      })
      .catch((error) => console.log(error));
  }, [itemId]);
  traerDetalle(itemId).finally(() => {
    setLoading(false);
  });

  return (
    <section className="itemListContainer">
      {loading ? <Spinner animation="border" /> : <ItemDetail item={item} />}
    </section>
  );
};


export default ItemDetailContainer;
