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
            //console.log(storedFavorites)
            
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

    

    const addProduct = (productId) => {
        if (!favorites.includes(productId)) {
          console.log('adding', productId);
          setFavorites([...favorites, productId]);
        }
      };

    //need function to remove a character
    const removeProduct = (productId) => {
        console.log("removing", productId);
        // Keep all that are not this id
        let newFavorites =  favorites.filter(id => id !== productId);
        // Update state to this
        setFavorites(newFavorites);
    }

    return(
        <FavoritesContext.Provider value={{addProduct, favorites, removeProduct}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

