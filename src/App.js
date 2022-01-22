import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';

function App() {
    const showAddItems = (items) =>{
        alert(`Usted ha seleccionado ${items} ítems`);
    };

    return ( 
        <>
            <NavBar />
            <br></br>
            <h1> Contenido de la página </h1>
            <br></br>
            <ItemCount stock="5" inicial="1" onAdd={showAddItems}/>
        </>
    );
}


export default App;