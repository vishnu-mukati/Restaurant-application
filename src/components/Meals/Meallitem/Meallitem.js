import React, { useContext } from "react";
import classes from "./Meallitem.module.css";
import MeallitemForm from "./MeallitemForm";
import Cartcontext from "../../Store/Cart-context";

const Meallitem = (props) => {
  const cartctx = useContext(Cartcontext);


  const dataobj = [{
    id: props.id,
    name: props.name,
    description: props.description,
    price: props.price,
  }]



  return (
    <li className={classes.meal}>

      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MeallitemForm id={props.id} product={dataobj} />
      </div>
    </li>
  );
}

export default Meallitem;  