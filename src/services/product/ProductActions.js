import {GET_PRODUCTS_REQUEST} from './ProductType';

const ProductActions = {
  getProducts() {
    return {type: GET_PRODUCTS_REQUEST};
  },
};

export default ProductActions;
