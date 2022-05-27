import React, { useState } from "react";
import { Link} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Card, Container, Row, Col } from "react-bootstrap";


const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(0);
  
console.log("cantidad", cantidad);

  const onAdd = (value) => { 
    setCantidad(value);
  };

  return (
   <Container>
     
    <Card style={{ width: '100%' }}>
    <Card.Body>
      <Row>
        <Col sm={6}>  <Card.Img style={{width: '80%' }} variant="top" src={item.imagen} alt={item.nombre} /></Col>
        <Col sm={6}> <Card.Title style={{margin: '20px'}} >{item.nombre}</Card.Title><p className="card-text">{item.detalle}</p></Col>
      </Row>
         
      <Card.Text>${item.precio}</Card.Text>
      <p className="card-info">{item.info}</p>
      <p className="card-text">Stock:{item.stock}</p>
      
      {cantidad === 0 ? (
        <ItemCount stock={item.stock} initial={0} onAdd={onAdd} item={item} />
      ) : (
        <div><Link to="/">
          <button className="boton_terminar">Seguir comprando</button>
        </Link>
        
        <Link to="/Cart">
        <button className="boton_terminar">Terminar compra</button>
      </Link>
      </div>
        
      )}
      
    </Card.Body>
  </Card>
</Container>
  
  );
};

export default ItemDetail;
