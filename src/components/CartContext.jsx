import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [cantItems, setCantItems] = useState(0);
    const [impTotal, setImpTotal] = useState(0);

    const removeAllItems = (() => {
        setCarrito([]);
        setCantItems(0);
        setImpTotal(0);
    });

    const removeItem = ( (item2) => {
        const importe=item2.precio * item2.cantidad;
        setCarrito(carrito.filter( item => item.codigo !== item2.codigo ));
        setCantItems(cantItems - item2.cantidad);
        setImpTotal(impTotal - importe);
    });

    const addToCart = (newItem, cant) => {
        const yaexiste = carrito.find( item => item.codigo === newItem.codigo);
        const importe = newItem.precio * cant;
        setCantItems(cantItems + cant);
        setImpTotal(impTotal + importe);
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
        <CartContext.Provider value={{carrito, removeAllItems, removeItem, addToCart, cantItems, impTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;