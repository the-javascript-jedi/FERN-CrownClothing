// import SHOP_DATA from "./shop.data";
import shopActionTypes from "./shop.types";
const INITIAL_STATE = {
  // collections: SHOP_DATA,
  //collections are default null because the collections data is loaded from firebase
  collections: null,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
export default shopReducer;
