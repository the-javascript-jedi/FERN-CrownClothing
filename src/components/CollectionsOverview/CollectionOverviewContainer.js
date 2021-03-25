import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shopSelector";
import CollectionsOverview from "./CollectionsOverview";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
  //isCollectionLoaded: selectIsCollectionsLoaded,
});
// without compose
// const CollectionsOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionsOverview)
// );
// compose will curry all our functions together - it is similar to above code without currying
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
export default CollectionsOverviewContainer;
