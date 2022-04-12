//React
import React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
//MUI Stiling
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
/* import DeleteIcon from '@mui/icons-material/Delete'; */
import Button from '@mui/material/Button';
//Styles
import './CartWidget.css'
//context
import CartContext from '../../context/CartContext';


const CartWidget = () => {
    const { cartProducts } = useContext(CartContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const calculeItemsTotal = () => {
        let totalItems = 0

        cartProducts.map( (cartProduct) => {
            totalItems = cartProduct.quantity + totalItems
        })

        return totalItems
    }

    return(
        <>
          {cartProducts.length ? 
          (
            <div>
            <Typography
                variant="subtitle1"
                /* component="div" */
                sx={{ mr: 0, ml: 1, display: 'inline' , verticalAlign:'bottom' }}
            >
                {calculeItemsTotal()}
            </Typography>
            
            <ShoppingCartIcon 
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            />
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                className='cart-modal'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                <p className='modal-p'>Productos agregados</p>
                <Divider />
                {cartProducts.map( (cartProduct) => {
                    return(
                        <MenuItem className='item-cart-dropdown' key={cartProduct.id}>
                            <div className='item-cart-dropdown__info'>
                               {/*  <p>{cartProduct.title}</p> */}
                                <span> {cartProduct.quantity}</span>
                            </div>
                            <div className='item-cart-dropdown__img'>
                                <img /* className='img-cart'  */src={cartProduct.picture} alt={cartProduct.picture}/> 
                            </div>
                            <div className='item-cart-dropdown__info'>
                                {/* <p>{cartProduct.title}</p> */}
                                <span>$ {cartProduct.price}</span>
                            </div>
                            
                            {/* <div className='item-cart-dropdown__action'>
                                <DeleteIcon />
                            </div> */}
                        </MenuItem>
                    )
                })}
                
                <Divider />
                <div className='footer-dropdown-cart'>
                    <Button color='secondary' className="btn-custom"><Link to="/cart">Iniciar la compra</Link></Button>
                </div>
            </Menu>
        </div>
          ) 
          : 
          (
              <></>
          ) 
          }
        </>
      
        
    )
};

export default CartWidget;
