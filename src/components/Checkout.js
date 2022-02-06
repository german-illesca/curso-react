import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <>
            <Link to="/cart"><button type="button" className="btn btn-danger boton-producto">Checkout</button></Link>
        </>
    )
}

export default Checkout;