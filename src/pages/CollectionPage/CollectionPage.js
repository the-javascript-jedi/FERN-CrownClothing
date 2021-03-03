import React from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import "./CollectionPageSASS.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelector";
const CollectionPage = (props) => {
  const { collection } = props;
  console.log("collection--CollectionPage", collection);
  return (
    <div className='collection'>
      <h2>CollectionPage</h2>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  //selectCollection selector returns a function that takes a state and runs it through the selector flow so we need to pass the state
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
