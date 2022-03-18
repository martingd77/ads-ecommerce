import React from 'react';
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({title, handleAdd}) => {
    return(
        <>
            <div className='main-div'>
                <h2>{title}</h2>
            </div>
            <ItemCount stock='5' initial='1' onAdd={handleAdd}/>
        </>
       
    )
};

export default ItemListContainer;
