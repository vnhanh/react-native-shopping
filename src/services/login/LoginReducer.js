import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from './LoginTypes';

const initialState = {
  isLoading: null,
  // TODO: should refactor this prop name to isSuccess
  result: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        result: null,
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
