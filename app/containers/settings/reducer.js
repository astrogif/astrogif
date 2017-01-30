import SETTINGS from './constants';
import config from '../../../config';

const initialState = config.get();

export default function reducer(state = initialState, action) {
  if (action.type === SETTINGS.UPDATE) {
    return Object.assign({}, state, {
      [action.payload.key]: action.payload.value
    });
  }

  return state;
}
