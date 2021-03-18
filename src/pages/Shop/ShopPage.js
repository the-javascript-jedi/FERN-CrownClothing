import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
// import CollectionsOverview and CategoryPage
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
// import action
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
// import selector
import { createStructuredSelector } from "reselect";
//import isCollectionFetching from selector
import {
  //selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shopSelector";

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
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match, isCollectionLoaded } = this.props;

    console.log("match--shoppage", match);
    console.log("match.path", match.path);
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              //empty object returns true, !!{} = true // object with data will contain false
              //so for an object which contains data we will get false, so we need to pass the falsey value to check if collection is loaded
              //isLoading={true}
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  //isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
