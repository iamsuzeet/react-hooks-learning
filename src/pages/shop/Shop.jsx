import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";

import { fetchCollectionStart } from "../../redux/shop/shop-action";

//higher order components

import CollectionOverviewContainer from "../../components/collection-overview/CollectionOverviewContainer";
import CollectionContainer from "./../collection/CollectionContainer";

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
    // fetch(
    //   `https://firestore.googleapis.com/v1/projects/ecomclothing-db/databases/(default)/documents/collections`
    // )
    //   .then(res => res.json())
    //   .then(collections => {
    //     console.log(collections);
    //     const collectionsMap = convertCollectionsSnapshopToMap(collections);
    //   });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(Shop);
