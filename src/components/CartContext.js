import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState(['vino','pan']);

    return (
        <CartContext.Provider value={{carrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;