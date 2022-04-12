import { createContext, useState} from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (product, quantity) =>{
        let exist = cartProducts.find(cartProduct => cartProduct.id === product.id)
        if(!exist){
            product.quantity = quantity;
            setCartProducts (cartProducts=>[...cartProducts,product]);
        }
       /*  !exist && setCartProducts (cartProducts=>[...cartProducts,product]); */
        console.log('producto a agregar: ', product);
    }

    const calculeTotal = () => {
        let total = 0

        cartProducts.map( (cartProduct) => {
           total = (cartProduct.price * cartProduct.quantity) + total
        })

        return total
    }

    const removeProductFromCart = (product) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
    }

    const data = {
        cartProducts, 
        addProductToCart,
        calculeTotal,
        removeProductFromCart
        
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider};
export default CartContext;