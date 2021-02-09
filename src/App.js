import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/Header/Header";
import SignInSignUp from "./components/SignInSignUp/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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
    // method on auth library in firebase.utils.js
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //check if user is signed in
      if (userAuth) {
        // if user is not present get back the user data
        const userRef = await createUserProfileDocument(userAuth);
        // get back first state of data in snapshot
        userRef.onSnapshot((snapshot) => {
          // only if we use .data() we can get the data from firebase snapshot
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            // setState is asynchronous so there is a chance that state is not set, so we need to pass setState as a second parameter and setState is called after our state is fully propagated
            () => {
              console.log("this.state", this.state);
            }
          );
        });
      } else {
        // if user is logged out we set the state to null that we get back from auth library
        this.setState({ currentUser: userAuth });
      }
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
