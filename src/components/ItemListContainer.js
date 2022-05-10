import { Component } from "react";

import './styles/ItemListContainer.css';

import ItemList from "./ItemList";

class ItemListContainer extends Component{

    render() {
        return (
<section className="item-list-container">

            <p className="item-list-container__title">Listado de  {this.props.texto}</p>
           
            <ItemList />
            </section>
        )
    }
}





export default ItemListContainer;
