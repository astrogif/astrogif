import { combineReducers } from 'redux';

import app from './containers/app/reducer';
import history from './containers/history/reducer';
import gif from './containers/gif/reducer';
import settings from './containers/settings/reducer';
import updater from './containers/updater/reducer';

const rootReducer = combineReducers({
  app,
  history,
  gif,
  settings,
  updater
});

export default rootReducer;
