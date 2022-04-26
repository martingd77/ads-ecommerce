import React, { useEffect, useState } from 'react';
import './ItemList.css'
import Item from '../Item/Item';
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { collection, getDocs, query, where } from 'firebase/firestore'
import database from '../../firebase';

const ItemList = ({children}) => {

    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        const itemsCollection = collection(database, 'products');
        const productsSnapshot = await getDocs(itemsCollection);
        console.log('snapshot' , productsSnapshot);
        const productList = productsSnapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id;
            console.log('product: ', product)
            return product;
        }) 
        return productList;
    } 

    useEffect( () => {  
        setProducts([]);
        setLoading(true);
        getProducts().then( (productos) => {
            setLoading(false);
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
