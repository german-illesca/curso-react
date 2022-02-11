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

    const addToCart = (newItem, cant) => {
        const yaexiste = carrito.find( item => item.codigo === newItem.codigo);
        if (yaexiste !== undefined){
            //console.log("entro por ya existe");
            yaexiste.cantidad += cant;
            setCarrito([ ...(carrito.filter( item => item.codigo !== yaexiste.codigo )) , yaexiste ]);
        } else {
            //console.log("entro por no existe");
            const cantidad = { cantidad: cant };
            Object.assign(newItem, cantidad);
            setCarrito([ ...carrito , newItem ]);    
        }
    };

    return (
        <CartContext.Provider value={{carrito, removeAllItems, removeItem, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;