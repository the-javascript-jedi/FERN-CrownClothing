import React from "react";
import { Route } from "react-router-dom";
// import CollectionsOverview and CategoryPage
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
const ShopPage = (props) => {
  const { match } = props;
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
};
export default ShopPage;
