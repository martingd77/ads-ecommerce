import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './CardItem.css'

const CardItem = () => {
    return(
        <>
           <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 }} color="text.primary" gutterBottom>
                    Labial Mac Rojo Intenso
                    </Typography>
                    <Typography variant="h5" component="div">
                    {/* be{bull}nev{bull}o{bull}lent */}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Aqui ira alguna imagen
                    </Typography>
                    <img className='catalog-img' src={require('../../img/labial-mac-rojo.png')} alt='Mac rojo'/>
                    <Typography variant="body2">
                        Aca el precio
                    <br />
                    {'"Algo mas"'}
                    </Typography>
                </CardContent>
            </Card>
        </>
       
    )
};

export default CardItem;
