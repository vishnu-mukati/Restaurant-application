import React, {useState} from "react";
import Header from "./components/Layout/Header"
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Chart/Cart";
import CartProvider from "./components/Store/CartProvider";

function App() {

  const [CartIsShown,setCartIsShown] = useState(false);
  
  const ShowCartHandler = () =>{
    setCartIsShown(true);
  }

  const HideCardHandler = () =>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      { CartIsShown && <Cart onClose={HideCardHandler}/>}
      <Header onShowCart = {ShowCartHandler}/>
      <MealsSummary/>
    </CartProvider>
  );
}

export default App;
