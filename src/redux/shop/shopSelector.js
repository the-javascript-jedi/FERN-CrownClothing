import { createSelector } from "reselect";
// create a selector
//this selector will return the shop state
const selectShop = (state) => state.shop;
//first argument is a collection of input selectors
//second argument will return the value we want out of the selector
//choose the collections state data from the directory state
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
