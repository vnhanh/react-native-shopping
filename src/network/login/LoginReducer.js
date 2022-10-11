import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from './LoginTypes';

const initialState = {
  isLoading: false,
  result: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {...state, isLoading: false, result: true};
    case LOGIN_FAILURE:
      return {...state, isLoading: false, result: false};
    default:
      return state;
  }
};

export default loginReducer;
