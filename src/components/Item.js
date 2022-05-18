import React from "react";
import "./styles/Item.css";
import { LinkContainer } from "react-router-bootstrap";
import { Card, Button } from "react-bootstrap";

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
    <Button variant="info">Detalle</Button>
    </LinkContainer>
  </Card.Body>
</Card>

  );
};

export default Item;
