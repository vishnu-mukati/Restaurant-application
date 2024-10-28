import classes from "./Meallitem.module.css";
import MeallitemForm from "./MeallitemForm";

const Meallitem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    
  const dataobj = {
    id : props.id,
    name:props.name,
    description : props.description,
    price : props.price,
  }
    return (
        <li className={classes.meal}>

            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
           <div>
            <MeallitemForm id = {props.id} product = {dataobj}/>
           </div>
        </li>
    );
}

export default Meallitem;