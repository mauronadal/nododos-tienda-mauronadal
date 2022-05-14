import React from 'react';
import ItemCount from './ItemCount';
import './styles/Item.css';


const Item = ({ item}) => {

  const {nombre, imagen, precio, stock, info} = item;

  return (
     
     <div className="card">
       <img className="card-img-top" src={imagen} alt=""/>
       <div className='card-body'>
         <h5 className="card-title">{nombre}</h5>
         <p className="card-text">${precio}</p>
         <p className="card-info">{info}</p>
         <button>Ver Detalle</button>
         <ItemCount stock={stock} initial={0} /> </div>  
     </div>
     

     );
     

};



export default Item;

