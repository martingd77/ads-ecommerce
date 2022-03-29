import React from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({title}) => {
    return(
        <section className="item-list-container">
            <div className='main-div'>
                <h2>{title}</h2>
            </div>

            <ItemList/>
        </section>
    )
};

export default ItemListContainer;
