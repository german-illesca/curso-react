import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({greeting}) => {
    return (
        <>
            <div className="container-fluid novedadesDiv">
                <div className="row d-flex flex-row justify-content-evenly align-items-stretch">
                    <ItemDetail />
                </div>
            </div>
        </>
    );
}

export default ItemDetailContainer;
