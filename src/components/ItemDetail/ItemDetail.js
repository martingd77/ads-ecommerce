import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom'
import  productList  from '../../data/data.js';
import './ItemDetail.css'
//styling
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
//components
import ItemCount from '../ItemCount/ItemCount.js';


const ItemDetail = () => {
    const navigate = useNavigate();
    const { id, category } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState();
    const [hasProds, setHasProds] = useState(false);

    const handleAdd = (childData) =>{
        setQuantity(childData);
        setHasProds(true);
        console.log('Se agregaron ' + childData + ' productos');
    };


    useEffect( () => {
        filterProductById(productList, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }

    const finishPurchase = () =>{
        navigate(`/cart/`);
    }


    return(
    <Container className='container-general'> 
        <div className='container-detail'>
            <div className='detail-left-side'>
                <img src={product.picture} alt={product.name} />
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
                    
                    {hasProds ? 
                               <Button color="secondary" variant="contained" onClick={finishPurchase}>TERMINAR COMPRA</Button>
                              :
                                <ItemCount stock={product.stock} initial={1} handleAdd={handleAdd} ></ItemCount>
                    }

                     
                    
            </div>
        </div>
    </Container>
     
    )
   };

export default ItemDetail;
