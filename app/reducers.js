import { combineReducers } from 'redux';

import app from './containers/app/reducer';
import gif from './containers/gif/reducer';
import search from './containers/search/reducer';
import settings from './containers/settings/reducer';
import updater from './containers/settings/reducer';

const rootReducer = combineReducers({
  app,
  gif,
  search,
  settings,
  updater
});

export default rootReducer;
