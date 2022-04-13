import React,{useState, useEffect} from 'react'
import Item from '../Item/Item';
import mockProductos  from '../../data/mockProductos';
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import {collection, getDocs} from "firebase/firestore"
import database from '../../firebase';


const ListProducts = ({children}) => {
    const { category } = useParams();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

 /*    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(mockProductos)
            }, 2000);
        })
    }  */

    const getProducts = async () => {
        const itemsCollection = collection(database, 'products');
        const productsSnapshot = await getDocs(itemsCollection);
        console.log('snapshot' , productsSnapshot);
        const productList = productsSnapshot.docs.map((doc) => {
            console.log('doc.data:', doc.data)
        }) 
    } 

    useEffect( () => {
        setProducts([]);
        setLoading(true);
        getProducts().then( (productos) => {
            setLoading(false);
            filterProductByCategory(productos, category)
        })
    }, [category])


    const filterProductByCategory = (array , category) => {

        return array.map( (product, i) => {
            console.log('product ;', product);
            if(product.category === category) {
               return setProducts(products => [...products, product]);
            }
        })
    }

    return(
        <div>
            {console.log("products: ", products)}
            {
            loading ? 
                (<CircularProgress color="secondary" />) 
            : 
                (<>{products.map( ( product ) =>  <Item data={product} key={product.id}  />)} </>) 
            }       
        </div>
    ) 
}

export default ListProducts;