
import React, { useEffect, useState } from 'react';
import  categoryList  from '../../data/categories';
import { Link } from 'react-router-dom'
import './CategoryContainer.css';

const CategoryContainer = () => {

    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        return new Promise((resolve, reject) => {
            return resolve(categoryList)
        })
    } 

    useEffect( () => {
        setCategories([]);
        console.log('categories: ', categories)
        getCategories().then( (categories) => {
            setCategories(categories)
        })
    }, [])

    return(
        <section className="categories-container">
           { categories.map( ( category ) =>  
            <div className='container-card-data'>
                <Link  to={`/${category.description}`} key={category.id}>
                    <img src={category.picture} alt={category.description} />
                    <div>
                        <h2>{category.description}</h2>
                    </div>
                </Link>
            </div>
                
            )}        
        </section>
    )
};

export default CategoryContainer;