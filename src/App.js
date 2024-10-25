import React, { Fragment } from "react";
import Header from "./components/Layout/Header"
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Chart/Cart";

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header />
      <MealsSummary/>
    </Fragment>
  );
}

export default App;
