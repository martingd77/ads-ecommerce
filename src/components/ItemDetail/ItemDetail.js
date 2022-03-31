import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

const ItemDetail = ({data}) => {
    return(
    <Container className='container-general'> 
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
          <img src={data.picture} alt="labial" />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Typography variant="h3" gutterBottom component="div">
                {data.name}
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
                $ {data.price}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
                DETALLE
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
                {data.description}  
            </Typography>
            <Button >COMPRAR</Button>
          </Item>
        </Grid>
        
      </Grid>
    </Box>
       
    </Container>
     
    )
   };

export default ItemDetail;
