import { createSelector } from "reselect";
//create a collection id map to map the id to the url params values
//we will pass in the string and use the string value as a dynamic value to get the respective id
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

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
//we pass in the urlParameter from frontend and we return the createSelector--cold curry function
//--it's a function which returns another function
export const selectCollection = (collectionUrlParam) =>
  //createSelector returns a function that takes a state and runs it through the selector flow
  //collections is the state we are passing in
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      //COLLECTION_ID_MAP[hats]=1
    )
  );
