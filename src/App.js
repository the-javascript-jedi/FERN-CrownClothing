import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/Header/Header";
function App() {
  const HatsPage = () => {
    return <p>HatsPage</p>;
  };
  return (
    <div className="App">
      {/* header component outside switch*/}
      <Header />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </div>
  );
}
export default App;
