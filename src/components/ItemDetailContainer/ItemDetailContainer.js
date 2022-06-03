import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    const getItem = async () => {
      const q = query(
        collection(db, "productos"),
        where(documentId(), "==", itemId)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItem(docs);
    };
    getItem();
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [itemId]);

  return (
    <section className="itemDetailContainer">
      {isLoading ? (
        <div>
          <Spinner animation="border" />
        </div>
      ) : (
        <ItemDetail item={item} />
      )}
    </section>
  );
};

export default ItemDetailContainer;
