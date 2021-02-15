import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
// because it is not a jsx we set the name as logo
import { ReactComponent as Logo } from "../../assets/crown.svg";
// auth firebase
import { auth } from "../../firebase/firebase.utils";
// import connect higher order function
import { connect } from "react-redux";
const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {/* if a currentUser data is present  */}
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="option">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
// we get the current state in this function
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
//connect is a higher order component to which we pass in our Header component
// pass in 2 functions to connect and then to the resulting function we pass in our component
//the first argument to connect is mapStateToProps- this is the function that allows us to access state, the state being our root reducer
export default connect(mapStateToProps)(Header);
