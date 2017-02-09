import UPDATER from './constants';

export const initialState = {
  available: false,
  checking: false,
  downloaded: false,
  error: null
};

export default function autoUpdaterReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATER.CHECKING:
      return Object.assign({}, state, {
        available: initialState.available,
        checking: true,
        downloaded: initialState.downloaded,
        error: initialState.error
      });
    case UPDATER.AVAILABLE:
      return Object.assign({}, state, {
        available: true
      });
    case UPDATER.DOWNLOADED:
      return Object.assign({}, state, {
        downloaded: true
      });
    case UPDATER.ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
}
