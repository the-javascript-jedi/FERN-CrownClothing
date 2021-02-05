import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
function App() {
  const HatsPage = () => {
    return <p>HatsPage</p>;
  };
  return (
    <div className="App">
      {/* exact is true or false */}
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}
export default App;
