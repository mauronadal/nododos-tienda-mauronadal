import React from "react";
import { useEffect, useState } from "react";
import { dbproductos } from '../data/productos';
import ItemList from "./ItemList";
import { Spinner } from 'react-bootstrap';
import './styles/ItemListContainer.css';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); 
    

    useEffect(() => {
        setTimeout(() => {
            const data = new Promise((resolve, reject) => {
                resolve(dbproductos);
            });
            data.then((data) => {
                setItems(data);
            });
            data.catch((err) => {
                console.log(err);
            });
            data.finally(() => {
                setLoading(false);
            })
        }, 2000);

    }, []);

    return (
        <section className="itemListContainer">
        {loading? ( <Spinner animation="border" />) : (<ItemList items={items} />)}
            
        </section>
    );



};

export default ItemListContainer;
