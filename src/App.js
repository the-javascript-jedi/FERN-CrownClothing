import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/Header/Header";
import SignInSignUp from "./components/SignInSignUp/SignInSignUp";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  // componentDidMount() method runs after the component output has been rendered to the DOM
  componentDidMount() {
    // method on auth library
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log("user", user);
    });
  }
  // close the subscription to avoid memory leaks
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        {/* header component outside switch*/}
        {/* pass date to header so that we know that if user is signed in */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/signIn" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}
export default App;
