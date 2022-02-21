import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firebaseQueryById } from "../utils/firebaseFetch";
// import customFetch from "../utils/customFetch";
// import fireStoreFetch from "../utils/firebaseFetch";
// import productos from "./datos/productos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, SetItem] = useState([]);
    const {id} = useParams();

    //Esto era cuando lo usaba sin la base de datos
    // useEffect(() => {
    //     customFetch(2000, productos.find( producto => producto.codigo === Number(id))).then( producto => {
    //         SetItem(producto);
    //     }).catch ( err => { console.log("No encontraron productos")});
    // }, [id]);

    //Esto es cuando se hace consultando a la base de datos
    useEffect(() => {
        //console.log("Estoy actualizando detalle");
        //aca consulto todos los registros y luego los filtro    
        // fireStoreFetch()
        //     .then (results => results.find( producto => producto.codigo === Number(id))) 
        //     .then ( producto => SetItem(producto))                
        //     .catch (err => console.log(err));

        //Query de un producto por su id
        firebaseQueryById(Number(id))
            .then ( producto => SetItem(producto))                
            .catch (err => console.log(err));
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
