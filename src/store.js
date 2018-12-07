import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './rootSaga';
import {authenticatedReducer} from './reducers';

let defaultState = {};

export const buildStore = (initialState = defaultState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      authenticated: authenticatedReducer
    }),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
