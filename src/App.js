import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

function App() {
    return ( 
        <CartContextProvider>
            <BrowserRouter>
                <NavBar />
                <br></br>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <br></br>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;