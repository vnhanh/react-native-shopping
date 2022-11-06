import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from './LoginTypes';
import {call, put, takeEvery} from '@redux-saga/core/effects';
import LoginApi from './LoginApi';

function* login(authData) {
  const {username, password} = authData;

  try {
    const response = yield call(LoginApi.login, {
      username: username,
      password: password,
    });

    yield put({
      type: LOGIN_SUCCESS,
      ...response,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOGIN_FAILURE,
      ...error,
    });
  }
}

const loginSaga = [takeEvery(LOGIN_REQUEST, login)];

export default loginSaga;
