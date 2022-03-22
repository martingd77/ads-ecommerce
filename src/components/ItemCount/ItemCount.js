import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardItem from '../CardItem/CardItem';

const ItemCount = ({ stock, initial, onAdd }) => {

const [add, setAdd] = useState(1);

const addItem = () => {
    if(add < stock){
        setAdd(add + 1);
    }
}

const removeItem = () => {
    if(add > 1){
        setAdd(add - 1);
    }
}

const handleAdd = e => {
    alert('Agregaste ' + add + ' productos');
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
        <CardItem/>
        <ButtonGroup color="secondary" aria-label="medium secondary button group">
            <Button size='large' key="remove" onClick={removeItem} > - </Button>
            <Button size='large' disabled key="stock">{add}</Button>  
            <Button size='large' key="add" onClick={addItem}>+</Button>
        </ButtonGroup>    
       
        </Box>
        <Button variant="contained" color='secondary' size='small' key="Agregar" onClick={handleAdd}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount;