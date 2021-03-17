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
// import the hoc
import WithSpinner from "../../components/WithSpinner/WithSpinner";
//this below code will give us a new component wrapped around with the component that we passed in
// we need to pass the loading and otherProps to the <Route> to CollectionsPage using render= instead of component=
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
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
        this.setState({ loading: false });
      }
    );
  }
  render() {
    const { match } = this.props;
    // destructure loading from state
    const { loading } = this.state;
    console.log("match--shoppage", match);
    console.log("match.path", match.path);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
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
