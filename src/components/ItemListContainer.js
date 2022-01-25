import ItemList from "./ItemList";


const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div className="container-fluid novedadesDiv">
                <div className="row d-flex flex-row justify-content-evenly align-items-stretch">
                    <ItemList />
                </div>
            </div>
        </>
    );
}

export default ItemListContainer;