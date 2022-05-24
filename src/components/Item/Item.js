import React from "react";
import "./Item.css";
import { LinkContainer } from "react-router-bootstrap";
import { Card } from "react-bootstrap";

const Item = ({ item }) => {
  const { nombre, imagen, precio, info } = item;

  return (

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={imagen} alt="" />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>${precio}</Card.Text>
    <Card.Text className="card-info">{info}</Card.Text>
    <LinkContainer to={`/item/${item.id}`}>
    <button className="boton_detalle">Detalle</button>
    </LinkContainer>
  </Card.Body>
</Card>

  );
};

export default Item;
