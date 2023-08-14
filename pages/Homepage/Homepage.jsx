import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './Homepage.css'
import ItemCard from '../../components/ItemCard/ItemCard';
import Categories from '../../components/Categories/Categories';

function Homepage() {

    //create state to hold items
const [products, setProducts] = useState([])
const [categories, setCategories] = useState([])
    //useEffect to load page with all items
    useEffect(
        () => {
        console.log("Products loaded");
        //https://fakestoreapi.com/products
        //get all products using axios
        axios.get("https://fakestoreapi.com/products")
        .then (res => {
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err => console.log(err))
    }, []);

    useEffect(
        () => {
        console.log("Categories loaded");
        //https://fakestoreapi.com/products/categories
        //get all categories using axios
        axios.get("https://fakestoreapi.com/products/categories")
        .then (res => {
            console.log(res.data)
            setCategories(res.data)
        })
        .catch(err => console.log(err))
    }, []);

    


  return (
    <div className='homepage-container'>
        <div className='categories-container'>
        {
            categories.map((item, index) => (
            <Categories category={item} key={index} />
        ))}
</div>
        <div className="item-container">
            {
                products.map(item=><ItemCard product={item}
                    key={item.id} />)
                    // creating product display using .map
            }
        </div>
    </div>
  )
}

export default Homepage