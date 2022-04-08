import { createContext, useState} from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    

    const addProductToCart = (product) =>{
        let exist = cartProducts.find(cartProduct => cartProduct.id = product)
        !exist && setCartProducts (cartProducts=>[...cartProducts,product]);
        console.log('producto a agregar: ', product);
    }

    const removeProductFromCart = (product) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
    }

    const data = {
        cartProducts, 
        addProductToCart,
        removeProductFromCart,
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider};
export default CartContext;