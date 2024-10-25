import React, { Fragment } from "react";
import image from "../../assets/meals.jpg";
import classes from "./Header.module.css"
import HeaderCardButton from "./HeaderCartButton";


const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCardButton onClick ={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={image} alt="A table full of delecious food" />
            </div>
        </Fragment>
    );
}

export default Header;