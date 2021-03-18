import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMapCollections,
} from "../../firebase/firebase.utils";
// thunks are, is an action creator that returns a function that gets the dispatch(very similar to mapDispatchToProps)
// instead of creating an action that returns an action, we are going to create a function that returns a function that gets dispatch in it,
// so that whenever dispatch is called it will fire multiple actions
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});
// success call
export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});
// error message
export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// function that we will pass into our component to begin the process
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    // dispatch fetchCollectionsStart - isFetching will be set to true
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMapCollections(
          snapshot
        );
        // dispatch FETCH_COLLECTIONS_SUCCESS action with the collectionsMap as action.payload
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
