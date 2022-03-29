import React, { useEffect, useState } from 'react';
import './ItemList.css'
import Item from '../Item/Item';
import  {productList}  from '../../data/data.js';

const ItemList = () => {

    const [products, setProducts] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productList)
        }, 1500);
    });

    const getProductsFromData = async () => {
        try {
            const result = await getProducts;
            setProducts(result);
        } catch (error) {
            console.log(error);
            alert('No se pudieron cargar los productos')
        }
    };
    
    useEffect( () => {
        getProductsFromData();
      }, []);

    return(
        
        <>
           {
            products.length ? (
                <>
                {
                    products.map((product) =>{
                        return(
                            <div key={product.id}>
                                <Item
                                    name={product.name}
                                    picture={product.picture}
                                    price={product.price}
                                    stock={product.stock}
                                    id={product.id}
                                />
                            </div>
                               
                        );
                    })
                }
                </>
            ) : (
                <p>Cargando listado de productos</p>
            )
        }
        </>
       
    );
};

export default ItemList;
