import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
/* COMPONENTS */
import NavBar from './components/NavBar/NavBar';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Cart from './components/Cart/Cart';
/* import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
 */

/* PAGES */
import Home from './pages/home';
import Contacto from './pages/contacto';
import NotFound from './pages/NotFound';


//context
import  {CartProvider} from './context/CartContext'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='*' element={<NotFound/>} ></Route>
            <Route path="/cart" element={<Cart />}/>  
            <Route path='/' element={<Home/>} ></Route>
            <Route path="/:category/" element={<Home />}/>
            <Route path="/:category/:id" element={<ItemDetail />}/>
            <Route path='/contacto' element={<Contacto/>} ></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
     
    </div>
  );
}

export default App;
