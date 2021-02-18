import { createSelector } from "reselect";
// input selector - returns a piece of state
const selectUser = (state) => state.user;
/*If necessary we can send multiple selectors for state and pass the state in the array */
//const selectCart = (state) => state.cart;

//first argument is a collection of input selectors
//second argument will return the value we want out of the selector
//we can access multiple state by passing it in the array -[selectUser, selectCart],
//and also in the function //(user,cart)
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
