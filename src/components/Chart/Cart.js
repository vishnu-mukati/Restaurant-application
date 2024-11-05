import React, { useState, useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Cartcontext from "../Store/Cart-context";

const Card = (props) => {

    const Cartctx = useContext(Cartcontext);


    const removeItemFromCartHander = (itemId) => {
        Cartctx.removeItem(itemId);
    }

    const increaseQuantityHandler = (itemId) => {
        Cartctx.increaseQuantity(itemId);
    }

    console.log(Cartctx);
    const cartitem = (
        <ul className={classes['cart-items']}>
            {Cartctx.items.map((item) => (
                item.productdata.map((product) => (
                    <li key={product.id}>
                        <div className={classes['cart-item-details']}>
                            <span className={classes['cart-item-name']}>{product.name}</span>
                            <span className={classes['cart-item-price']}>${product.price}</span>
                        </div>
                        <div className={classes['cart-item-actions']}>
                            <span>x{item.amount}</span>
                        </div>
                        <div className={classes["cart-item-actions"]}>
                            <button onClick={() => removeItemFromCartHander(item.id)}>-</button>
                            <button onClick={() => increaseQuantityHandler(item.id)}>+</button>
                        </div>
                    </li>
                )
                )
            )
            )}
        </ul>
    );



    return (
        <Modal>
            {cartitem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${Cartctx.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Card;