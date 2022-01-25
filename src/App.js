import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';

function App() {
    const showAddItems = (items) =>{
        alert(`Usted ha seleccionado ${items} ítems`);
    };

    return ( 
        <>
            <NavBar />
            <br></br>
            <ItemListContainer greeting="Bienvenidos a nuestra web"/>
            <br></br>
            <ItemCount stock="5" inicial="1" onAdd={showAddItems}/>
        </>
    );
}


export default App;