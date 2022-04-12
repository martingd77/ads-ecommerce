import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Item.css'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../../context/CartContext';
import Button from '@mui/material/Button';


const Item = ({data}) => {  
    const navigate = useNavigate();
   /*  const {cartProducts, addProductToCart} = useContext(CartContext);  */

    const { name, price, picture, id } = data

  /*   const handleAdd = (data) =>{
        addProductToCart(data);
        console.log('cartProducts', cartProducts);
    }; */

    const goToDetailPage = (id) => {
        navigate(`/productos/${id}`, id)
    }
    
    return(
        <div className='item-card'>
            <Link className='link' to={`/productos/${id}`}>
                <Card sx={{ minWidth: 300 , minHeight:280 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
                            {name}
                            </Typography>
                        
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            
                            </Typography>
                            <img className='catalog-img' src={picture} alt=''/>
                            <Typography variant="body2">
                                $ {price}
                            <br />
                            {/* <ItemCount stock={stock} handleAdd={handleAdd}  initial={1} /> */}
                            </Typography>
                            <Button variant="contained" color='secondary' size='small' key="Agregar" 
                                onClick={goToDetailPage}>
                                VER DETALLE
                            </Button>
                        </CardContent>
                    </Card>
            </Link>
        </div>
       
    )
};

export default Item;
