import SEARCH from './constants';
import GIF from '../gif/constants';
import APP from '../app/constants';

const initialState = {
  currentQuery: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH.QUERY:
      return {
        currentQuery: action.payload
      };
    case GIF.CLEAR:
    case APP.RESET:
      return initialState;
    default:
      return state;
  }
}
