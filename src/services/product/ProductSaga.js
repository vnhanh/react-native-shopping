import {takeEvery} from '@redux-saga/core/effects';

import GET_PRODUCTS_REQUEST from './ProductType';

function* getProducts() {}

const productSaga = takeEvery(GET_PRODUCTS_REQUEST, getProducts);

export default productSaga;
