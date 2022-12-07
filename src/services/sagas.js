import loginSaga from './login/LoginSaga';
import productSaga from './product/ProductSaga';
import {all} from '@redux-saga/core/effects';

export default function* rootSaga() {
  yield all([...loginSaga, ...productSaga]);
}
