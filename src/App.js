import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
/*   */
import Home from './pages/home';
import Contacto from './pages/contacto';
import NotFound from './pages/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/contacto' element={<Contacto/>} ></Route>
          <Route path='*' element={<NotFound/>} ></Route>

        </Routes>
     
        {/* <ItemListContainer title='Aquí irá el catálogo de productos'/> */}
       
     </BrowserRouter>
      

     <ItemDetailContainer/>

    </div>
  );
}

export default App;
