import GIF from './constants';
import APP from '../app/constants';
import SEARCH from '../search/constants';

const initialState = {
  error: null,
  fetching: false,
  details: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GIF.CLEAR:
      return initialState;
    case SEARCH.NEXT:
    case GIF.REQUEST:
      return {
        error: null,
        fetching: true,
        details: null
      };
    case GIF.RESULT:
      return {
        ...state,
        fetching: false,
        details: action.payload
      };
    case GIF.ERROR:
      return {
        ...state,
        error: action.payload,
        fetching: false
      };
    case APP.RESET:
      return initialState;
    default:
      return state;
  }
}
