import {
  createStore,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);


export default function configureStore(initialState) {
  sagaMiddleware.run(rootSagas);

  return createStore(rootReducer, initialState, enhancer);
}
