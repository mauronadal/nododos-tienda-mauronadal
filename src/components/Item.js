import React from 'react';
import ItemCount from './ItemCount';

import './styles/Item.css';

const Item = ({ nombre, imagen, precio, stock, info }) => {
  const onAdd = (cantidad) => {
    alert(`Has agregado ${cantidad} productos`);
  };

  return (
    <>
    <div className="card">
      <img className="card-img-top" src={imagen} alt=""/>
      <div className='card-body'>
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">${precio}</p>
        <p className="card-info">{info}</p> 
        <ItemCount stock={stock} onAdd={onAdd} initial={0} />
      </div>
    </div>
    </>
  );
};

export default Item;

