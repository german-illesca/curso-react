import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import productos from "./datos/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, SetItem] = useState([]);

    useEffect(() => {
        customFetch(2000, productos[5]).then( producto => {
            SetItem(producto);
        }).catch ( err => { console.log("No encontraron productos")});
    }, []);

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
