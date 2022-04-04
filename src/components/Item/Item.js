import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Item.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'

const Item = ({data}) => {

    const { name, price, stock, picture, id } = data

    const handleAdd = (add, e) =>{
        alert(`Agregaste ${add} productos al carrito.`);
    };
    
    /* const changePage = () => {
        navigate(`/productos/${id}`)
    } */

    return(
        <div className='item-card'>
            <Link className='link' to={`/productos/${id}`}>
                <Card /* onClick={changePage} */ sx={{ minWidth: 275 }}>
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
                            <ItemCount stock={stock} handleAdd={handleAdd}  initial={1} />
                            </Typography>
                        </CardContent>
                    </Card>
            </Link>
        </div>
       
    )
};

export default Item;
