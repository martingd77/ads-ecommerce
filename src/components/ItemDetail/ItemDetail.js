import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import {  useNavigate } from 'react-router-dom'
import './ItemDetail.css'
import CartContext from '../../context/CartContext.js';
import { doc, getDoc } from "firebase/firestore";
import database from '../../firebase.js';
//styling
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
//components
import ItemCount from '../ItemCount/ItemCount.js';


const ItemDetail = ({Item}) => {
    const navigate = useNavigate();
    const { id, category } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState();
    const { cartProducts, addProductToCart } = useContext(CartContext)


    const getProduct = async() => {
        const docRef = doc(database, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
          } else {
            console.log("No such document!");
            navigate('/error')
          }
    }

    const handleAdd = (childData) =>{
        setQuantity(childData);
        console.log('Se agregaron ' + childData + ' productos');
        addProductToCart(product,childData);
        console.log('producto desde detail: ' + product)
        navigate(`/cart/`);
    };

    useEffect( () => {
        getProduct()
    }, [id])

    return(
    <Container className='container-general'> 
        <div className='container-detail'>
            <div className='detail-left-side'>
                <img src={`../img/${product.picture}`} alt={product.name} />
            </div>
            <div className='detail-right-side'>
                    <Typography variant="h4" gutterBottom component="div">
                            {product.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        PRECIO: $ {product.price}
                    </Typography>
                    <Typography variant="button" gutterBottom component="div">
                        {console.log('product: ', product)}
                        {product.description}  
                    </Typography>
                    
                    {
                        <ItemCount stock={product.stock} initial={1} handleAdd={handleAdd} ></ItemCount>
                    }
            </div>
        </div>
    </Container>
     
    )
   };

export default ItemDetail;
