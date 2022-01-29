import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return ( 
        <>
            <NavBar />
            <br></br>
            {/* <ItemListContainer greeting="Bienvenidos a nuestra web"/> */}
            <ItemDetailContainer />
            <br></br>
        </>
    );
}

export default App;