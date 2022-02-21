import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount]=useState(0);
    const datos=useContext(CartContext);

    const showAddItems = (cantItems) => {
        //alert(`Usted ha seleccionado ${items} ítems`);
        datos.addToCart(item, cantItems);
        setItemCount(cantItems);
    };

    return (
        <>
            <div className="img-div-detail">
                <img className='img-thumbnail' src={item.urlImagen} alt={item.nombre} loading="lazy" />
            </div>
            <div className="detalle-producto">
                <div>
                    <h2>{item.nombre}</h2>
                    <p>{item.descripcion}</p>
                    <p className="precio">Stock: {item.stock}</p>
                    <p className="precio">Precio: ${item.precio}</p>
                </div>
                <br />
                <div>
                    <ItemCount stock={item.stock} inicial={itemCount} onAdd={showAddItems}/>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;