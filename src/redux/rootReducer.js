// combines all our other states in rootReducer
import { combineReducers } from "redux";

import userReducer from "../redux/user/userReducer";
import cartReducer from "../redux/cart/cartReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
