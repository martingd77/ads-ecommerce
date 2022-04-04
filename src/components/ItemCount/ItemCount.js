import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, {useState} from 'react';

const ItemCount = ({ stock, initial, handleAdd }) => {

const [add, setAdd] = useState(initial);

const addItem = (num, e) => {
    setAdd(add + num);
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
            disabled={add === initial ? true : null}> 
            - 
            </Button>
            <Button size='large' disabled key="stock">{add}</Button>  
            <Button size='large' key="add" 
            onClick={ ()=> addItem(+1)}
            disabled={add === stock ? true : null}>
            +
            </Button>
        </ButtonGroup>    
       
        </Box>
        <Button variant="contained" color='secondary' size='small' key="Agregar" 
        onClick={()=> handleAdd(add)}>
            Agregar al carrito
        </Button>
        </>
    )
}

export default ItemCount;