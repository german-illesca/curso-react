import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
    const datos = useContext(CartContext);

    return (
        <i id="boton-carrito" className="fas fa-cart-plus fa-lg">
            { datos.cantItems > 0 ? 
                <span className="position-left translate-carrito badge rounded-pill bg-danger">
                    {datos.cantItems}
                    <span className="visually-hidden">unread messages</span>
                </span>
                : <></>
            }
        </i>
    );
}

export default CartWidget;
