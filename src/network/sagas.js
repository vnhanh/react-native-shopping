import incrementSaga  from "./login/LoginSaga";
import { all } from "@redux-saga/core/effects";

export default function* rootSaga() {
  yield all([
    ...incrementSaga,
  ]);
}
