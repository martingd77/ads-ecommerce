import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, {useState} from 'react';

const ItemCount = ({ stock, handleAdd, childQuantity}) => {

const [count, setCount] = useState(1);

const addItem = (num, e) => {
    setCount(count + num);
};

    return(
        <>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                m: 1,
                },
            }} 
        >
            <ButtonGroup color="secondary" aria-label="medium secondary button group">
                <Button size='large' key="remove" 
                    onClick={ () => addItem(-1)} 
                    disabled={count === 1 ? true : null}> 
                    - 
                </Button>
                <Button size='large' disabled key="stock">{count}</Button>  
                <Button size='large' key="add" 
                    onClick={ ()=> addItem(+1)}
                    disabled={count === stock ? true : null}>
                    +
                </Button>
            </ButtonGroup>    
            <Button variant="contained" color='secondary' size='small' key="Agregar" 
            onClick={()=> handleAdd(count)}>
                AGREGAR AL CARRITO
            </Button>
        </Box>
        
        </>
    )
}

export default ItemCount;