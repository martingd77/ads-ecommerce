import React, { useEffect, useState } from 'react';
import './ItemList.css'
import Item from '../Item/Item';
import  productList  from '../../data/data.js';
import { useParams } from 'react-router-dom'

const ItemList = ({children}) => {

    const { category } = useParams();
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(productList)
        })
    } 

    useEffect( () => {  
        setProducts([]);
        getProducts().then( (productos) => {
            filterItemByCategory(productos, category)
        })
    }, [category])


    const filterItemByCategory = (array , category) => {
        return array.map( (product, i) => {
            if(product.category === category) {
               return setProducts(products => [...products, product]);
            }
            else{
                return array
            }
        })
    }

    return(

        <div className='item-container'>
            {console.log("products: ", products)}
            { products.map( ( product ) =>  <Item data={product} key={product.id} />)
            }       
        </div>

    );
};

export default ItemList;
