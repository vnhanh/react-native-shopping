import {put, takeEvery} from '@redux-saga/core/effects';
import ProductApi from './ProductApi';

import GET_PRODUCTS_REQUEST, { GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS } from './ProductType';

function* getProducts() {
    try {
        // TODO: test receiving success and error response
        ProductApi.getProducts().then(response => {
            yield put({
                type: GET_PRODUCTS_SUCCESS,
                data: response
            });
        }).catch(error => {
            yield put({
                type: GET_PRODUCTS_ERROR,
                errMsg: `A failure occurred during calling service from the server: ${error}`
            });
        });
    } catch(exception) {
        console.log(exception);
        yield put({
            type: GET_PRODUCTS_ERROR,
            errMsg: exception
        });
    }
}

const productSaga = takeEvery(GET_PRODUCTS_REQUEST, getProducts);

export default productSaga;
