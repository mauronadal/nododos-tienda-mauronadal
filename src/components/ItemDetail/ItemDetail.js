import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Card, Container, Row, Col } from "react-bootstrap";




const ItemDetail = ({ item }) => {
  console.log({ item });

  const onAdd = (cantidad) => {
    alert(`Has agregado ${cantidad} productos`)
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
      <ItemCount stock={item.stock} initial={0} onAdd={onAdd} item={item} />{" "} <div/>
    </Card.Body>
  </Card>
</Container>
   
   
   
   
   
   
   
   
   
    // <div className="detalleContainer2">
   //   <div className="card2">
   //     <img className="card-img-top" src={item.imagen} alt={item.nombre} />
   //     <div className="card-body">
   //       <h5 className="card-title">{item.nombre}</h5>
   //       <p className="card-text">${item.precio}</p>
   //       <p className="card-info">{item.info}</p>
   //       <p className="card-text">Stock:{item.stock}</p>
   //       <ItemCount stock={item.stock} initial={0} />{" "}
   //     </div>
   //   </div>
   // </div>
  );
};

export default ItemDetail;
