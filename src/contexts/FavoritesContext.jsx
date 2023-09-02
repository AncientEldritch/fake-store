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

    

    const addProduct = (product) => {
        if (!favorites.includes(product)) {
          console.log('adding', product);
          setFavorites([...favorites, product]);
        }
      };

    //need function to remove a character
    const removeProduct = (product) => {
        console.log("removing", product);
        // Keep all that are not this id
        let newFavorites =  favorites.filter(id => id !== product);
        // Update state to this
        setFavorites(newFavorites);
    }

    //Need function to remove all items

    const clearFavorites = () => {
        favorites.splice(0,favorites.length)
        setFavorites([...favorites]);
      }

    return(
        <FavoritesContext.Provider value={{addProduct, favorites, removeProduct, clearFavorites}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

