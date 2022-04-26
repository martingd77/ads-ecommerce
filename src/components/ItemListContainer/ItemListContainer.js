import React from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    return(
        <section className="item-list-container">
            <ItemList />
        </section>
    )
};

export default ItemListContainer;
