import React, { useState, useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MeallitemForm.module.css";
import Cartcontext from "../../Store/Cart-context";

const MeallitemForm = (props) => {
  const [addItems, setAddItems] = useState("1");
  const cartCtx = useContext(Cartcontext);

  const AmountChangeHandler = (event) => {
    setAddItems(event.target.value);
  };
  const AddItemHandler = (event) => {
    event.preventDefault();
    const amountValue = Number(addItems);

    const item = {
      id: props.id,
      amount: amountValue,
      productdata: props.product,
    }

    cartCtx.addItem(item);

  };
  return (
    <form className={classes.form} onSubmit={AddItemHandler}>
      <Input label="Amount" input={{
        id: 'amount',
        value: addItems,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        onChange: AmountChangeHandler,
      }} />
      <button type="submit">+Add</button>
    </form>
  );
}

export default MeallitemForm;