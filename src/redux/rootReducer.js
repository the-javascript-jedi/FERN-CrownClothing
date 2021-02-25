// combines all our other states in rootReducer
import { combineReducers } from "redux";
// persistReducer - will persist our reducer
import { persistReducer } from "redux-persist";
//storage-using local storage, (to use session storage, search docs for package path)
import storage from "redux-persist/lib/storage";
//reducers
import userReducer from "../redux/user/userReducer";
import cartReducer from "../redux/cart/cartReducer";
import shopReducer from "../redux/shop/shopReducer";
import directoryReducer from "../redux/directory/directoryReducer";
// PersistConfig
const persistConfig = {
  key: "root",
  storage: storage,
  //whitelist-array containing string name  any of reducer we want to store
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  // user state is persisited by firebase
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
// export the persistReducer
export default persistReducer(persistConfig, rootReducer);
