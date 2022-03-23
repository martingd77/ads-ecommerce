import React from 'react';
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';


const handleAdd = (add) => {
    alert('Agregaste ' +  {add}  + ' productos');
    console.log(`Agregaste ${add} productos al carrito.`);
  };

const ItemListContainer = ({title}) => {
    return(
        <>
            <div className='main-div'>
                <h2>{title}</h2>
            </div>
            <ItemCount stock={5} initial={1} handleAdd={handleAdd}/>
        </>
       
    )
};

export default ItemListContainer;
