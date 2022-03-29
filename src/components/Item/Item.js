import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Item.css'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({name, picture, price, id, stock}) => {
    const handleAdd = (add) =>{
        alert(`Agregaste ${add} productos al carrito.`);
    };
    
    return(
        <>
           <Card sx={{ minWidth: 275 }}>
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
                    <ItemCount stock={stock} handleAdd={handleAdd} initial={1} />
                    </Typography>
                </CardContent>
            </Card>
        </>
       
    )
};

export default Item;
