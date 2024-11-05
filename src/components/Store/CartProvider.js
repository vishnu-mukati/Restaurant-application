import React, { useState, useEffect } from "react";
import Cardcontext from "./Cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const [totalamount, setTotalAmount] = useState(0);

    useEffect(() => {
        const calculatedTotalAmount = items.reduce((total, item) => {
            const itemTotal = item.productdata.reduce((sum, product) => {
                const price = Number(product.price);
                const amount = Number(item.amount);
                return sum + (price * amount);
            }, 0);

            return total + itemTotal;
        }, 0);
        setTotalAmount(calculatedTotalAmount);
        console.log(calculatedTotalAmount);
    }, [items]);

    const addItemToCartHandler = (item) => {
        const existingElementindex = items.findIndex((i) => i.id === item.id);
        if (existingElementindex === -1) {
            setItems((prevItems) => {
                return [...prevItems, item];
            });
        }
        else {
            const temp = [...items];
            temp[existingElementindex].amount = temp[existingElementindex].amount + item.amount;
            setItems(temp);
        }
    }

    const removeItemFromCartHander = (id) => {
        setItems((prevState) => {
            const updatedItems = prevState.map((item) => {
                if (item.id === id && item.amount > 0) {
                    return { ...item, amount: item.amount - 1 };
                }
                return item;
            }).filter(item => item.amount > 0);

            return updatedItems;
        });
    }

    const increaseQuantityHandler = (itemId) => {
        setItems((prevState) => {
            return (
                prevState.map((item) => (
                    item.id === itemId ? { ...item, amount: item.amount + 1 } : item
                ))
            );
        })
    }

    const Cartcontext = {
        items: items,
        totalAmount: totalamount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHander,
        increaseQuantity: increaseQuantityHandler,
    }

    return <Cardcontext.Provider value={Cartcontext}>
        {props.children}
    </Cardcontext.Provider>

}

export default CartProvider;