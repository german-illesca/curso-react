import { Link } from "react-router-dom";

const ItemList = (props) => {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 fondoItem">
                <img className='img-thumbnail' src={props.item.urlImagen} alt={props.item.nombre} loading="lazy" />
                <h4>{props.item.nombre}</h4>
                <p id='descripcion'>{props.item.descripcion}</p>
                <Link to={`/item/${props.item.codigo}`}><p id='detalle'>Detalles...</p></Link>
                <br />
                <p id='precio'>Precio: ${props.item.precio}</p>
            </div>
        </>
    )
}

export default ItemList;
