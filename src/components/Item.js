import React from 'react';
import './styles/Item.css';
import { LinkContainer } from 'react-router-bootstrap';



const Item = ({item}) => {

  const {nombre, imagen, precio, info,} = item;

  return (
     
     <div className="card">
       <img className="card-img-top" src={imagen} alt=""/>
       <div className='card-body'>
         <h5 className="card-title">{nombre}</h5>
         <p className="card-text">${precio}</p>
         <p className="card-info">{info}</p>
         <LinkContainer to={`/item/${item.id}`}>
         <button>Ver Detalle</button>
         </LinkContainer>
          </div>  
     </div>
     

     );
     

};



export default Item;

