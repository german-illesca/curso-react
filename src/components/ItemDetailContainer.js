import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import productos from "./datos/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, SetItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        customFetch(2000, productos.find( producto => producto.codigo === Number(id))).then( producto => {
            SetItem(producto);
        }).catch ( err => { console.log("No encontraron productos")});
    }, [id]);

    return (
        <>
            <div className="container-fluid novedadesDiv">
                <div className="column d-flex flex-row justify-content-evenly align-items-stretch">
                    <ItemDetail item={item}/>
                </div>
            </div>
        </>
    );
}

export default ItemDetailContainer;
