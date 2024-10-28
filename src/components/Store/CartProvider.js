import React, { useState } from "react";
import Cardcontext from "./Cart-context";

const CartProvider = (props) =>{ 
    const [items,setItems] = useState([]);
    
    const addItemToCartHandler = (item) =>{
        setItems((prevItems) => {
            return [...prevItems, item];
        });
    }
   

    const removeItemFromCartHander = (id) =>{
       
    }

    const Cartcontext = {
        items:items,
        totalAmount:items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHander,
    }

    return <Cardcontext.Provider value={Cartcontext}>
        {props.children}
    </Cardcontext.Provider>

}

export default CartProvider;