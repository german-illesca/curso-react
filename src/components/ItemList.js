import { useState } from "react";
import Item from "./Item";

const productos = [{
    "codigo": 11,
    "nombre": "Pullover con gorrito",
    "descripcion": "Color a elección, medidas de 0 a 2 años",
    "urlImagen": "/images/products/pullover-con-gorro-beige-1-1.jpg",
    "precio": 2850
}, {
    "codigo": 12,
    "nombre": "Body con diseño",
    "descripcion": "Tamaños de 0 a 3 meses",
    "urlImagen": "/images/products/body-con-dibujos-varon-1-1.jpg",
    "precio": 1560
}, {
    "codigo": 13,
    "nombre": "Blusa con detalles",
    "descripcion": "Color a elección, medidas de 0 a 2 años",
    "urlImagen": "/images/products/blusa-blanca-con-detalles-1-1.jpg",
    "precio": 950
}, {
    "codigo": 14,
    "nombre": "Combo body, saco y pantalón",
    "descripcion": "Conjunto moderno y divertido",
    "urlImagen": "/images/products/combo-body-saco-y-pantalon-1-1.jpg",
    "precio": 3000
}, {
    "codigo": 15,
    "nombre": "Escarpines lana",
    "descripcion": "Hechos a mano, colores a elección",
    "urlImagen": "/images/products/escarpines-rosa-1-1.jpg",
    "precio": 500
}, {
    "codigo": 16,
    "nombre": "Amigurumi (coneja)",
    "descripcion": "Muñequita coneja de apego. Elegí en que colores la queres",
    "urlImagen": "/images/products/coneja-azul-1-1.jpg",
    "precio": 1200
}, {
    "codigo": 17,
    "nombre": "Amigurumi (coneja)",
    "descripcion": "Muñequita coneja de apego en tonos rosados",
    "urlImagen": "/images/products/coneja-rosa-1-1.jpg",
    "precio": 1200
}, {
    "codigo": 18,
    "nombre": "Vestido blanco y floreado",
    "descripcion": "Talle 2 años. Otros talles y diseños disponibles",
    "urlImagen": "/images/products/vestido-blanco-y-floreado-1-1.jpg",
    "precio": 1500
}]

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

const ItemList = () => {
    const [items, SetItems] = useState([]);

    consultarProductos(2000, getProductos()).then( productos => {
        SetItems(productos);
    }).catch ( err => { console.log("No encontraron productos")});

    return (
        //recibe items y los mapea en componente item
        <>
            {
                items.map( item => {
                    //console.log(item);
                    return (
                        <Item item={item} key={item.codigo}/>
                    );
                })
            }
        </>
    );
}

export default ItemList;
