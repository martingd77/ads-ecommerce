import './App.css';
import { useState, useEffect,useContext } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
/* COMPONENTS */
import NavBar from './components/NavBar/NavBar';
import ItemDetail from './components/ItemDetail/ItemDetail';
/* import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
 */

/* PAGES */
import Home from './pages/home';
import Contacto from './pages/contacto';
import NotFound from './pages/NotFound';
import CategoryContainer from './components/CategoryContainer/CategoryContainer';

//context
import CartContext, {CartProvider} from './context/CartContext'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<CategoryContainer/>} ></Route>
            <Route path="/:category/" element={<Home />}/>
            <Route path="/:category/:id" element={<ItemDetail />}/>
            <Route path='/contacto' element={<Contacto/>} ></Route>
            <Route path='*' element={<NotFound/>} ></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
     
    </div>
  );
}

export default App;
