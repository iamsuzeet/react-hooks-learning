import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import { clearCart } from "./cart-action";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(actionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
