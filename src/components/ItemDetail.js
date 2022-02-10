import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const datos=useContext(CartContext);

    const showAddItems = (cantItems) => {
        //alert(`Usted ha seleccionado ${items} ítems`);
        datos.addItem(item, cantItems);
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
                    <ItemCount stock={item.stock} inicial="0" onAdd={showAddItems}/>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;