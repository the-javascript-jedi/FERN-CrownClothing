import React from "react";
import "./CollectionsOverviewSASS.scss";
// import connect
import { connect } from "react-redux";
// import from reselcet
import { createStructuredSelector } from "reselect";
// import the shop page selector
import { selectCollections } from "../../redux/shop/shopSelector";
// CollectionPreview component
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(CollectionsOverview);
