import React from 'react';
import CategoryContainer from '../components/CategoryContainer/CategoryContainer';
import ItemList from '../components/ItemList/ItemList';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ListProducts from '../components/ListProducts/ListProducts';

const Home = () => {
    return(
       
            <div className='main-div'>    
               
               <ItemListContainer/>
            </div>
    )
};

export default Home;