import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
// import CollectionsOverview and CategoryPage
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import {
  firestore,
  convertCollectionsSnapshotToMapCollections,
} from "../../firebase/firebase.utils";
// import action
import { updateCollections } from "../../redux/shop/shop.actions";
class ShopPage extends React.Component {
  unsubscribeFromSnapShot = null;
  componentDidMount() {
    // destructure props for redux
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection("collections");
    // display the converted data from the firestore
    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMapCollections(
          snapshot
        );
        //commit tests
        // pass the collectionsMap from firebase to the action
        updateCollections(collectionsMap);
        console.log(
          "collectionsMap--converted object--shopPage",
          collectionsMap
        );
      }
    );
  }
  render() {
    const { match } = this.props;
    console.log("match--shoppage", match);
    console.log("match.path", match.path);
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
