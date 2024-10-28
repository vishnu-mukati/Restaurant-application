import React from "react";

const Cartcontext = React.createContext({
    items:[],
    totalAmount:0,
    addItem:((item)=>{}),
    removeITem:((id)=>{}),
})

export default Cartcontext;