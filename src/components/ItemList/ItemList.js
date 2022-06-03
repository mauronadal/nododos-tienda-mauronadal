import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items = [] }) => {
  return (
    <div className="itemList">
      {items.map((items) => {
        return <Item key={items.id} item={items} />;
      })}
    </div>
  );
};

export default ItemList;
