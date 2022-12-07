import {put, takeLatest} from '@redux-saga/core/effects';
import ProductApi from './ProductApi';

import * as ProductType from './ProductType';

function* getProducts(actions) {
  try {
    console.log('Alan - ProductSaga - getProducts');
    // TODO: test receiving success and error response
    ProductApi.getProducts()
      .then(response => {
        console.log(
          `Alan - ProductSaga - getProducts - response: ${JSON.stringify(
            response,
          )}`,
        );
        put({
          type: ProductType.GET_PRODUCTS_SUCCESS,
          data: response,
        });
      })
      .catch(error => {
        console.log(
          `Alan - ProductSaga - getProducts - error: ${JSON.stringify(error)}`,
        );
        put({
          type: ProductType.GET_PRODUCTS_ERROR,
          errMsg: `A failure occurred during calling service from the server: ${error}`,
        });
      });
  } catch (exception) {
    console.log(exception);
    yield put({
      type: ProductType.GET_PRODUCTS_ERROR,
      errMsg: exception,
    });
  }
}

// We use takeEvery to start a new getProducts task on each dispatched GET_PRODUCTS_REQUEST action
const productSaga = [takeLatest(ProductType.GET_PRODUCTS_REQUEST, getProducts)];

export default productSaga;
