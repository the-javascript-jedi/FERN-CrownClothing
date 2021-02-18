import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import Header from "./components/Header/Header";
import SignInSignUp from "./components/SignInSignUp/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// import connect
import { connect } from "react-redux";
// import setCurrentUser action
import { setCurrentUser } from "./redux/user/userAction";
//import from reselect library
import { createStructuredSelector } from "reselect";
//import the memoized selector
import { selectCurrentUser } from "./redux/user/userSelector";
class App extends React.Component {
  unsubscribeFromAuth = null;
  // componentDidMount() method runs after the component output has been rendered to the DOM
  componentDidMount() {
    const { setCurrentUser } = this.props;
    // method on auth library in firebase.utils.js
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //check if user is signed in
      if (userAuth) {
        console.log("userAuth", userAuth);
        // if user is not present get back the user data
        const userRef = await createUserProfileDocument(userAuth);
        // get back first state of data in snapshot
        userRef.onSnapshot((snapshot) => {
          // only if we use .data() we can get the data from firebase snapshot
          //we pass in the current user data as an object to setCurrentUser action
          setCurrentUser(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            // setState is asynchronous so there is a chance that state is not set, so we need to pass setState as a second parameter and setState is called after our state is fully propagated
            () => {
              console.log("this.state--app.js", this.state);
            }
          );
        });
      } else {
        console.log("userAuth", userAuth);
        // if user is logged out we set the state to null that we get back from auth library
        setCurrentUser(userAuth);
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
        <Header />
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/home" component={HomePage} />
          {/* <Route path="/signIn" component={SignInSignUp} /> */}
          {/* redirect user if logged in  */}
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}
// we use mapStateToProps to access the component state
//we destructure the user state and get access to this.props.currentUser
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
// we get access to dispatch keyword throuch which we can fire an action
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// we pass null as first argument if we do not need any state
// export default connect(null, mapDispatchToProps)(App);

//we pass mapStateToProps to access state and mapDispatchToProps to fire an action
export default connect(mapStateToProps, mapDispatchToProps)(App);
