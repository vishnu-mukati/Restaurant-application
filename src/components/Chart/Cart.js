import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Card = (props) => {
    const cartitem = (
        <ul className={classes['cart-items']}>
            {[{id:'c1',name:'Sushi',price:13.33,},].map((item)=><li key={item.id}>{item.name}</li>)}
        </ul>
    );
    return (
        <Modal>
            {cartitem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>40.22</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Card;