
const CartWidget = () => {
    return (
        <i id="boton-carrito" className="fas fa-cart-plus fa-lg">
            <span className="position-left translate-carrito badge rounded-pill bg-danger">
                8
                <span className="visually-hidden">unread messages</span>
            </span>
        </i>
    );
}

export default CartWidget;
