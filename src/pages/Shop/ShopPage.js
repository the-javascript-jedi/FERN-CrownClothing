import React from "react";
// import connect
import { connect } from "react-redux";
// import from reselcet
import { createStructuredSelector } from "reselect";

// import the shop page selector
import { selectCollections } from "../../redux/shop/shopSelector";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
