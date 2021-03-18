// import SHOP_DATA from "./shop.data";
import ShopActionTypes from "./shop.types";
import shopActionTypes from "./shop.types";
const INITIAL_STATE = {
  // collections: SHOP_DATA,
  //collections are default null because the collections data is loaded from firebase
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default shopReducer;
