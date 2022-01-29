import ItemCount from "./ItemCount";
import showAddItems from "../utils/showAddItems";

const ItemDetail = (props) => {
    return (
        <>
            <div className="img-div-detail">
                <img className='img-thumbnail' src={props.item.urlImagen} alt={props.item.nombre} loading="lazy" />
            </div>
            <div className="detalle-producto">
                <div>
                    <h2>{props.item.nombre}</h2>
                    <p>{props.item.descripcion}</p>
                    <p className="precio">Stock: {props.item.stock}</p>
                    <p className="precio">Precio: ${props.item.precio}</p>
                </div>
                <br />
                <div>
                    <ItemCount stock="5" inicial="1" onAdd={showAddItems}/>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;