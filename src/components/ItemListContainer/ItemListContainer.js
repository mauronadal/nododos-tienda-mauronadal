import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

import { Spinner } from "react-bootstrap";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "productos"));
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
    }, 1000);
  }, []);

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

export default ItemListContainer;
