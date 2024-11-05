import React, { useContext } from "react";
import CartIcon from "../Chart/ChartIcon";
import classes from "./HeaderCartButton.module.css";
import Cartcontext from "../Store/Cart-context";

const HeaderCardButton = (props) => {

  const Cartctx = useContext(Cartcontext);

  const numberOfCartItems = Cartctx.items.reduce((currNumber, item) => {

    return currNumber + item.amount;
  }, 0)


  return (
    <button className={classes.button} onClick={props.onClick} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCardButton;