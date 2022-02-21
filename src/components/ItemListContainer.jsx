import { useEffect, useState } from "react";
import ItemList from "./ItemList";
// import productos from "./datos/productos";
// import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";
import fireStoreFetch from "../utils/firebaseFetch";

const ItemListContainer = () => {
    const [items, SetItems] = useState([]);
    const {id} = useParams();

    //Esto era cuando lo usaba sin la base de datos
    // useEffect(() => {
    //     customFetch(2000, 
    //         productos.filter(item => {
    //             if (id) return item.categoria === Number(id);     
    //             return item;
    //         }))
    //         .then( productos => {
    //             SetItems(productos);
    //         }).catch ( err => { console.log("No encontraron productos")})
    // }, [items]);

    //Esto es buscando en la base de datos
    useEffect(() => {
        //console.log("Estoy actualizando productos");
        fireStoreFetch()
            .then (result => result.filter( item => {
                if (id) return item.categoriaid === Number(id);
                return item;
            })) 
            .then (productos => {
                SetItems(productos);        
            })
            .catch (err => console.log(err));
    }, [id]);

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
