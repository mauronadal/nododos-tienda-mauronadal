import { Component } from "react";

import './styles/ItemListContainer.css';

import ItemList from "./ItemList";

class ItemListContainer extends Component{

    render() {
        return (
<section className="itemListContainer">

            <p className="itemListContainer__titulo">Listado de  {this.props.texto}</p>
           
            <ItemList />
            </section>
        )
    }
}





export default ItemListContainer;
