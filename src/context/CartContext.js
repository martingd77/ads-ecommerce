import { createContext, useState, useEffect} from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addProdToCart = (product) =>{
        console.log('producto a agregar: ', product);
        setCartProducts(cartProducts=>[...cartProducts,product]);
    }

    const data = {
        cartProducts, 
        addProdToCart,

    }


    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider};
export default CartContext;