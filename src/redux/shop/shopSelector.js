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
// convert our object to array
//get the selectCollections object
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  //Object.keys(collections) = [hats,jackets,mens,sneakers,womans]
  //collections[key] collections[hats]={id(pin):1title(pin):"Hats"routeName(pin):"hats,items:[...]"}
  (collections) => Object.keys(collections).map((key) => collections[key])
);
//we pass in the urlParameter from frontend and we return the createSelector--cold curry function
//--it's a function which returns another function
export const selectCollection = (collectionUrlParam) =>
  //createSelector returns a function that takes a state and runs it through the selector flow
  //collections is the state we are passing in
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
