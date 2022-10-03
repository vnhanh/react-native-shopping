import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./LoginTypes";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import LoginApi from "./LoginApi";

function* login(authData) {
  const {username, password} = authData;

  console.log(`Alan - running increment() in saga...`);

  try {
    const response = yield call(LoginApi.login, {username: username, password: password});

    // console.log(`Alan - LoginSaga - increment() - got response: ${JSON.stringify(response)}`);
    yield put({
      type: LOGIN_SUCCESS,
      ...response
    })
  } catch (error) {
    console.log(e);
    yield put({
      type: LOGIN_FAILURE,
      ...error
    })
  }
}

const incrementSaga = [takeEvery(LOGIN_REQUEST, login)];

export default incrementSaga;
