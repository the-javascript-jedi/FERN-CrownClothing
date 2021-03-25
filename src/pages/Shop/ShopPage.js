import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
// import CollectionsOverview and CategoryPage
import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionOverviewContainer";
import CollectionPageContainer from "../../pages/CollectionPage/CollectionPageContainer";
// import action
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

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
          component={CollectionsOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
