import { useState } from "react";
import ItemList from "./ItemList";
import productos from "./datos/productos";

let getProductos = () => {
    return productos;
}

const is_ok=true;

let consultarProductos = (time, task) => {
    return new Promise( (resolve, reject) => {
        if (is_ok){
            setTimeout(() => {
                resolve(task);
            }, time);    
        } else {
            reject("Error - no encontro items");
        }
    });
}

const ItemListContainer = ({greeting}) => {
    const [items, SetItems] = useState([]);

    consultarProductos(2000, getProductos()).then( productos => {
        SetItems(productos);
    }).catch ( err => { console.log("No encontraron productos")});

    return (
        <>
            <div className="container-fluid novedadesDiv">
-                <div className="row d-flex flex-row justify-content-evenly align-items-stretch">
                    {
                        items.map( item => {
                            //console.log(item);
                            return (
                                <ItemList item={item} key={item.codigo}/>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ItemListContainer;
