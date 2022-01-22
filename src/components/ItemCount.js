import { useEffect, useState } from "react";

const ItemCount = ({ stock, inicial, onAdd }) => {
    const [items, SetItems] = useState(Number(inicial));
    const resto = () => {
        if ( items > inicial ){ 
            SetItems( items - 1 );
        }
    };
    const sumo = () => { 
        if ( items < stock ){
            SetItems( items + 1 );
        }  
    };
    useEffect( () => {}, [items]);

    return (
        <>
            <div className="control-producto">
            <div onClick={resto}><i id="boton-menos" className="fas fa-minus-square fa-2"></i></div>
            <div>{items}</div>
            <div onClick={sumo}><i id="boton-mas" className="fas fa-plus-square fa-2"></i></div>
            </div>
            <div className="boton-producto-div">
                {
                    stock > 0 ? 
                    <button type="button" onClick={() => onAdd(items)} className="btn btn-primary boton-producto">Agregar</button>
                    : <button type="button" disabled className="btn btn-primary boton-producto">Agregar</button>
                }
            </div>
        </>
    );
};

export default ItemCount;