import React, { useEffect, useState } from 'react';
import './ItemList.css'
import Item from '../Item/Item';
import  productList  from '../../data/data.js';
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';


const ItemList = ({children}) => {

    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(productList)
            }, 1000);
            
        })
    } 

    useEffect( () => {  
        setProducts([]);
        setLoading(true);
        getProducts().then( (productos) => {
            setLoading(false);
            /* filterItemByCategory(productos, category) */
            category ? filterItemByCategory(productos, category) : setProducts(productos);
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
            {loading ? 
                (<CircularProgress className='circular-progress' color="secondary" />) 
            : 
                ( <> { products.map( ( product ) =>  <Item data={product} key={product.id} />)}  </>)
            }
             
        </div>

    );
};

export default ItemList;
