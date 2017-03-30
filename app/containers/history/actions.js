import HISTORY from './constants';

export function add(query, gif) {
  console.log(gif);
  return {
    type: HISTORY.ADD,
    payload: {
      query,
      gif
    }
  };
}
