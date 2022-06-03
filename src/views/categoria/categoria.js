import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import "../../components/ItemListContainer/ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";

const ItemCategoriaId = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getItems = async () => {
      const q = query(
        collection(db, "productos"),
        where("categoria", "==", categoriaId)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setItems(docs);
    };
    getItems();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [categoriaId]);

  return (
    <section className="itemListContainer">
      {isLoading ? (
        <div>
          <Spinner animation="border" />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </section>
  );
};

export default ItemCategoriaId;
