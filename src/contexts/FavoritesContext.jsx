import { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export default function FavoritesContextProvider(props){
    //create global state
    const [favorites, setFavorites] = useState([])

    //function to add product to favorites

    useEffect(
        ()=>{
            //get the value from local storage
            const storedFavorites  =  localStorage.getItem('favoritesList')
            console.log(storedFavorites)
            //check if something was there
            if (storedFavorites) {
                //use this value for state
                setFavorites(JSON.parse(storedFavorites))
            }
        }, []
    )

    useEffect(
        () => {
            //save favorites to local storage
            localStorage.setItem('favoritesList', JSON.stringify(favorites))
        }, [favorites]
    )

    const addProduct = (productToAdd) => {
        console.log('adding', productToAdd)
        // I need to add this obejct to favorites state
        //create new array with all the old stuff and the new object
        let newFavorites  = [...favorites, productToAdd]
        //update my state to this
        setFavorites(newFavorites)
    }

    //need function to remove a character
    const removeProduct = (productId) => {
        console.log("removing", productId)
        //keep all that are not this id
        let newFavorites =  favorites.filter(item=>item.id != productId)
        //update state to this
        setFavorites(newFavorites)

    }

    return(
        <FavoritesContext.Provider value={{addProduct, favorites, removeProduct}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

