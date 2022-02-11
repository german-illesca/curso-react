import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import productos from "./datos/productos";
import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, SetItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        customFetch(2000, 
            productos.filter(item => {
                if (id) return item.categoria === Number(id);     
                return item;
            }))
            .then( productos => {
                SetItems(productos);
            }).catch ( err => { console.log("No encontraron productos")})
    }, []);

    return (
        <>
            <div className="container-fluid novedadesDiv">
                <div className="row d-flex flex-row justify-content-evenly align-items-stretch">
                    {
                        items.length > 0 
                        ? items.map( item => {
                            //console.log(item);
                            return (
                                <ItemList item={item} key={item.codigo}/>
                            );
                        })
                        : <div>Cargando...</div>
                    }
                </div>
            </div>
        </>
    );
}

export default ItemListContainer;
