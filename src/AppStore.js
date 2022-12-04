import {applyMiddleware, compose, createStore} from 'redux';
import allReducers from './services/reducers';
import {createLogger} from 'redux-logger/src';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './services/sagas';

const configureStore = callback => {
  const sagaMiddleWare = createSagaMiddleware();
  const loggerMiddleWare = createLogger();
  const enhancers = [];
  const store = compose(
    applyMiddleware(sagaMiddleWare, loggerMiddleWare),
    ...enhancers,
  )(createStore)(allReducers);

  sagaMiddleWare.run(rootSaga);
  callback(store);
};

export default configureStore;
