import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shopSelector";
import CollectionPage from "../CollectionPage/CollectionPage";
import WithSpinner from "../../components/WithSpinner/WithSpinner";

const mapStateToProps = createStructuredSelector({
  // we need to send the inverse state because we need to load the collection only if collection is present
  //we pass in the state to the shopSelector to get isLoading state
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});
const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
export default CollectionPageContainer;
