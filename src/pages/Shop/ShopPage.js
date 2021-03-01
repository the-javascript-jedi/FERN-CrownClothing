import React from "react";
// import CollectionsOverview
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
