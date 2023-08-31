import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export default function CartContextProvider(props){
    //create global state
    const [inCart, setInCart] = useState([])

    //function to add product to cart

    useEffect(
        ()=>{
            //get the value from local storage
            const storedCart  =  localStorage.getItem('cartList')
            console.log(storedCart)
            
            if (storedCart) {
                //use this value for state
                setInCart(JSON.parse(storedCart))
            }
        }, []
    )

    useEffect(
        () => {
            //save favorites to local storage
            localStorage.setItem('cartList', JSON.stringify(inCart))
        }, [inCart]
    )

    

    const addToCart = (product) => {
          console.log('adding ', product, ' to cart');
          setInCart([...inCart, product]);
      };

    //need function to remove a character
    const removeFromCart = (productId) => {
        console.log("removing  ", productId,' from cart');
        // Keep all that are not this id
        let newCart =  inCart.filter(id => id !== productId);
        // Update state to this
        setInCart(newCart);
    }

    return(
        <CartContext.Provider value={{addToCart, inCart, removeFromCart}}>
            {props.children}
        </CartContext.Provider>
    )
}