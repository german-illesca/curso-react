import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const removeAllItems = (() => {
        setCarrito([]);
    });

    const removeItem = ( (item2) => {
        setCarrito(carrito.filter( item => item.codigo !== item2.codigo ));
    });

    const addItem = (item, cant) => {
        console.log(carrito);
        setCarrito([ item, ...carrito ]);
    };

    return (
        <CartContext.Provider value={{carrito, removeAllItems, removeItem, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;