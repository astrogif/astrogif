import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import rootSagas from './sagas';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});
const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware, thunk, logger)
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(rootSagas);

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers')) // eslint-disable-line global-require
    );
  }

  return store;
}
