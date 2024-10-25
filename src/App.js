import React, { Fragment ,useState} from "react";
import Header from "./components/Layout/Header"
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Chart/Cart";

function App() {

  const [CartIsShown,setCartIsShown] = useState(false);
  
  const ShowCartHandler = () =>{
    setCartIsShown(true);
  }

  const HideCardHandler = () =>{
    setCartIsShown(false);
  }

  return (
    <Fragment>
      { CartIsShown && <Cart onClose={HideCardHandler}/>}
      <Header onShowCart = {ShowCartHandler}/>
      <MealsSummary/>
    </Fragment>
  );
}

export default App;
