import * as actionTypes from "../actionTypes";

export const fetchCollectionStart = () => {
  return {
    type: actionTypes.FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsSuccess = collectionsMap => ({
  type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = err => ({
  type: actionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: err
});

// export const fetchCollectionStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection("collections");

//     dispatch(fetchCollectionStart());

//     collectionRef
//       .get()
//       .then(snapshot => {
//         const collectionsMap = convertCollectionsSnapshopToMap(snapshot);

//         dispatch(fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch(err => fetchCollectionsFailure(err.message));
//   };
// };
