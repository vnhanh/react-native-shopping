import {GET_PRODUCTS_REQUEST} from './ProductType';

const initialState = {
  isLoading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
        isLoading: false,
      };
  }
};

export default productReducer;
