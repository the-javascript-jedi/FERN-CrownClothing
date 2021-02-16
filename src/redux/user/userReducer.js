import { UserActionTypes } from "./userTypes";
const INITIAL_STATE = {
  currentUser: null,
  cartItems: [],
};
// null is considered a value and if null is passsed then initial state will not be passsed on as default

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    // every single reducer gets every single action that ever gets fired. Even if those actions are not related to this reducer so we need a default return statement where the state is returned because if none of the action types match inside of the switch statement about the ones that we care about then we just want to return the state.
    default:
      return state;
  }
};
export default userReducer;
