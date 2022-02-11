import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([{
        "codigo": 13,
        "nombre": "Blusa con detalles",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo, sunt tenetur magni ipsam vel perspiciatis veniam doloribus esse recusandae eos unde praesentium officiis beatae, facilis aperiam. Voluptatibus, officiis earum!",
        "urlImagen": "/images/products/blusa-blanca-con-detalles-1-1.jpg",
        "stock": 25,
        "categoria": 2,
        "precio": 950,
        "cantidad": 2
    }, {
        "codigo": 14,
        "nombre": "Combo body, saco y pantalón",
        "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo, sunt tenetur magni ipsam vel perspiciatis veniam doloribus esse recusandae eos unde praesentium officiis beatae, facilis aperiam. Voluptatibus, officiis earum!",
        "urlImagen": "/images/products/combo-body-saco-y-pantalon-1-1.jpg",
        "stock": 97,
        "categoria": 4,
        "precio": 3000,
        "cantidad": 3
    }]);

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
            setCarrito(carrito.filter( item => item.codigo !== yaexiste.codigo ));
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