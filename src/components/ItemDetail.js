import React from 'react';
import './styles/ItemDetail.css';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

console.log({item});
  
    return (
      <div className='detalleContainer'>
        <div className="card">
      <img className="card-img-top" src={item.imagen} alt={item.nombre}/>
      <div className='card-body'>
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">${item.precio}</p>
        <p className="card-info">{item.info}</p>
        <p className="card-text">Stock:{item.stock}</p>
        
        <ItemCount stock={item.stock} initial={0} /> </div>  
      </div>
      </div>
        
    );
};

export default ItemDetail;