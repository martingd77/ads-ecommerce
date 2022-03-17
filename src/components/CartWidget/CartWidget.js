import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';

const CartWidget = () => {
    return(
        <div>
            <Typography
                variant="subtitle1"
                /* component="div" */
                sx={{ mr: 1, ml: 1, display: 'inline' , verticalAlign:'bottom' }}
            >
                1
            </Typography>
            <ShoppingCartIcon />
            
        </div>
    )
};

export default CartWidget;
