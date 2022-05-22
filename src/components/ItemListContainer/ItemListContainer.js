import React from "react";
import { useEffect, useState } from "react";
import { dbproductos } from "../../data/productos";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const traerDatos = (cat) => {
  return new Promise((resolve, reject) => {
    const productosFiltrados = dbproductos.filter(
      (prod) => prod.categoria === cat
    );
    setTimeout(() => {
      if (cat === undefined) {
        resolve(dbproductos);
      } else {
        resolve(productosFiltrados);
      }
    }, 2000);
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoriaId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    traerDatos(categoriaId)
      .then((res) => {
        setItems(res);
      })
      .catch((error) => console.log(error));
  }, [categoriaId]);
  traerDatos(categoriaId).finally(() => {
    setLoading(false);
  });

  return (
    <section className="itemListContainer">
      {loading ? <Spinner animation="border" /> : <ItemList items={items} />}
    </section>
  );
};

export default ItemListContainer;
