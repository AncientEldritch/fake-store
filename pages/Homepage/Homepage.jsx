import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './Homepage.css'
import ItemCard from '../../components/ItemCard/ItemCard';
import Categories from '../../components/Categories/Categories';

function Homepage() {

    //create state to hold items
const [products, setProducts] = useState([])
const [categories, setCategories] = useState([])
const [selectedCategory, setSelectedCategory] = useState('')
    //useEffect to load page with all items
    useEffect(
        () => {
        console.log("Products loaded");
        //https://fakestoreapi.com/products
        //get all products using axios
        axios.get("https://fakestoreapi.com/products")
        .then (res => {
            //console.log(res.data)
            setProducts(res.data)
        })
        .catch(err => console.log(err))
    }, [ selectedCategory]);

    useEffect(
        () => {
        console.log("Categories loaded");
        //https://fakestoreapi.com/products/categories
        //get all categories using axios
        axios.get("https://fakestoreapi.com/products/categories")
        .then (res => {
            //console.log(res.data)
            setCategories(res.data)
        })
        .catch(err => console.log(err))
    }, []);

     const handleCategoryClick = (category) => {
        //console.log("category clicked", category)
        setSelectedCategory(category);
        
    };

    const filteredProducts = selectedCategory
        ? products.filter(item => item.category === selectedCategory)
        : products;

        //console.log("filtered products", filteredProducts)

    const allClick = (() => handleCategoryClick(''));

  return (
    <div className='homepage-container'>
        <div className='categories-container'>
        <button onClick={allClick}  className="category">All</button>
        {
            categories.map((item, index) => (
            <Categories handleCategoryClick={handleCategoryClick} category={item} key={index} />
        ))}
</div>
        <div className="item-container">
            {
                filteredProducts.map(item=><ItemCard product={item}
                    key={item.id} />)
                    // creating product display using .map
            }
        </div>
    </div>
  )
}

export default Homepage