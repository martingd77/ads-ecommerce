import { createContext, useState} from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addProductToCart = (product, quantity) =>{
        let exist = cartProducts.find(cartProduct => cartProduct.id === product.id)
        if(!exist){
            product.quantity = quantity;
            setTotalPrice(totalPrice + (product.price * product.quantity));
            setCartProducts (cartProducts=>[...cartProducts,product]);
        }
        console.log('producto a agregar: ', product);
    }

    const removeProductFromCart = (product) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
    }

    const clearCartContext = () => {
        setCartProducts([]);
    
    }

    const data = {
        cartProducts, 
        addProductToCart,
        totalPrice,
        removeProductFromCart,
        clearCartContext
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider};
export default CartContext;