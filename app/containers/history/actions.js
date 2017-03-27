import HISTORY from './constants';

export function add(query, gif) {
  return {
    type: HISTORY.ADD,
    payload: {
      query,
      gif
    }
  };
}
