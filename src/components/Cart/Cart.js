import { useContext, useState} from 'react'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import CartContext from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import CarritoVacio from '../../img/carrito-vacio.png'
import ModalCustom from '../ModalCustom/ModalCustom';
//Styles
import './Cart.css'
//Firebase
import { addDoc, collection } from 'firebase/firestore';
import database from '../../firebase';

const Cart = () => {
  const navigate = useNavigate();
  const { cartProducts, removeProductFromCart, totalPrice } = useContext(CartContext)
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(
      {
          name: '',
          phone: '',
          email: ''
      }
  )

  const [order, setOrder] = useState(
      {
          buyer: formData,
          items: cartProducts.map((cartProduct) => {
            return{
                id: cartProduct.id,
                title: cartProduct.name,
                price: cartProduct.price
            }
          }),
          total : totalPrice
      }
  )

  const [successOrder, setSuccessOrder] = useState();

  const handleSubmit = (e) => {
      e.preventDefault();
      let prevOrder = {...order,
        buyer : formData
    }
    setOrder({ ...order,
        buyer: formData})
        pushOrder(prevOrder)
  }

  const pushOrder = async (prevOrder) => {
      const orderFirebase = collection(database, 'ordenes')
      console.log('prevOrder: ', prevOrder)
      const orderDoc = await addDoc(orderFirebase, prevOrder)
      console.log('Orden generada: ', orderDoc.id)
      setSuccessOrder(orderDoc.id)

  }

  const handleChange = (e) => {
      const {value, name} = e.target

      setFormData({
          ...formData,
          [name]: value
      })
  }

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
                            <img src={`../img/${picture}`} alt={picture} />
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
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button className='btn-custom' color='secondary' variant="contained" 
                    onClick={() => setOpenModal(true)}>Completar Compra</Button>
                </div>
            </div>
        </div>

        {console.log("Order:", order)}

        <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>

        {successOrder ? (
            <div>
                <h3>Orden generada correctamente</h3>
                <p>Su numero de orden es: {successOrder}</p>
            </div>
        ) : (
            <>
                <h2>FORM USUARIO</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder='Nombre' 
                        onChange={handleChange} 
                        value={formData.name}
                    />
                    <input type="number" name='phone' placeholder='Telefono' 
                        onChange={handleChange} 
                        value={formData.phone}
                    />
                    <input type="mail" name='email' placeholder='mail' 
                        onChange={handleChange} 
                        value={formData.email}
                    />

                    <Button type="submit">Enviar</Button>
                </form>
            </>
        )}

    </ModalCustom>
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