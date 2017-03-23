import GIF from './constants';
import APP from '../app/constants';

const initialState = {
  error: null,
  searchQuery: '',
  fetching: false,
  details: null,
  currentQuery: null
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GIF.QUERY:
      return {
        error: null,
        fetching: false,
        details: null,
        currentQuery: action.payload
      };
    case GIF.NEXT:
    case GIF.REQUEST:
      return {
        ...state,
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
    case GIF.CLEAR:
    case APP.RESET:
      return initialState;
    default:
      return state;
  }
}
