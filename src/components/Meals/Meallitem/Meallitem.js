import classes from "./Meallitem.module.css";
import MeallitemForm from "./MeallitemForm";

const Meallitem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>

            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
           <div>
            <MeallitemForm/>
           </div>
        </li>
    );
}

export default Meallitem;