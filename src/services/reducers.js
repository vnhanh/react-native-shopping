import {combineReducers} from 'redux';
import loginReducer from './login/LoginReducer';
import productReducer from './product/ProductReducer';

const allReducers = combineReducers({
  loginReducer,
  productReducer,
});

export default allReducers;
