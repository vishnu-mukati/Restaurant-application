import CartIcon from "../Chart/ChartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCardButton = () =>{
      return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
        </button>
      );
}

export default HeaderCardButton;