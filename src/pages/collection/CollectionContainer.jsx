import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import withSpinner from "./../../components/with-spinner/withSpinner";
import { selectIsCollectionsLoaded } from "./../../redux/shop/shop-selectors";

import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(Collection);

export default CollectionContainer;
