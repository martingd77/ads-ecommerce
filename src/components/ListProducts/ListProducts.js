import React,{useState, useEffect} from 'react'
import Item from '../Item/Item';
import mockProductos  from '../../data/mockProductos';
import { useParams } from 'react-router-dom'

const ListProducts = ({children}) => {
    const { category } = useParams()

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })
    } 

    useEffect( () => {
        setProducts([]);
        getProducts().then( (productos) => {
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
            { products.map( ( product ) =>  <Item data={product} key={product.id} />)
            }       
        </div>
    ) 
}

export default ListProducts;