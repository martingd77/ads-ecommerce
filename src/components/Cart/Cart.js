import { useContext} from 'react'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import CartContext from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import CarritoVacio from '../../img/carrito-vacio.png'
//Styles
import './Cart.css'

const Cart = () => {
  const navigate = useNavigate();
  const { cartProducts, removeProductFromCart, calculeTotal } = useContext(CartContext)
  console.log("cartProducts:", cartProducts)

  const continueShopping = (data) => {
    navigate('/', data)
}
  return(
    <>
    {cartProducts.length ? 
    (
        <Container className='container-general'> 
        <div className='cart-section'>
            <div className='col-cart-table__head'>
                <h2>Producto</h2>
                <h2>Descripcion</h2>
                <h2>Precio Unitario</h2>
                <h2>Cantidad</h2>
                <h2>Quitar</h2>
            </div>
            {cartProducts.map( (cartProduct) => {
                const { price, picture, title, description, id, quantity } = cartProduct
                return(
                    <div className='cart-table__content' key={id}>
                        <div className='cart-table__content-img'>
                            <img src={picture} alt={picture} />
                        </div>
                        <div className='cart-table__content-title'>
                            <p>{title}</p>
                            <span>Descripcion : {description}</span>
                        </div>
                        <div className='cart-table__content-price'>
                            <p>$ {price}</p>
                        </div>
                        <div className='cart-table__content-quantity'>
                            <p> {quantity}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <button className='btn-delete' onClick={() => removeProductFromCart(cartProduct)}>
                                <DeleteIcon  className='delete-icon'/>
                            </button>
                        </div>
                    </div>
                )
            })}
            
            <div className='cart-footer'>
                <Button onClick={continueShopping} color='secondary' variant="contained" >Continuar comprando</Button>
                <div className='cart-checkout-details'>
                    <div className='cart-checkout__subtotal'>
                        <p>Subtotal</p>
                        <span>$ {calculeTotal()}</span>
                    </div>
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ {calculeTotal()}</span>
                    </div>
                    <Button >Completar Compra</Button>
                </div>
            </div>
        </div>
    </Container>
    ) 
    : 
    (
        <Container className='container-general'>
            <div className='cart-section'>
                <div className='cart-empty'>
                    <img src={CarritoVacio} alt='carrito vacio' />
                </div>
            </div>
           

            <Button onClick={continueShopping} color='secondary' variant="contained" >Agregar productos</Button>
        </Container>
        
    ) }

   
  </>
  )
};

export default Cart;