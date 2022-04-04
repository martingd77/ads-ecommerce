import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  productList  from '../../data/data.js';
import './ItemDetail.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

const ItemDetail = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})

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
                    <Button color="secondary" variant="contained">COMPRAR</Button>
            </div>
        </div>
    </Container>
     
    )
   };

export default ItemDetail;
