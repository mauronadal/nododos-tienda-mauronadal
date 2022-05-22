import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="itemList">
      {items.map((productos) => {
        return <Item key={productos.id} item={productos} />;
      })}
    </div>
  );
};

export default ItemList;
