import HISTORY from './constants';

const initialState = {
  list: {}
};

function addToHistory(history, query, gif) {
  const newHistory = Object.assign({}, history);

  if (!newHistory[query]) {
    newHistory[query] = [gif];
  } else {
    newHistory[query] = newHistory[query].concat(gif);
  }

  return newHistory;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HISTORY.ADD:
      return Object.assign({}, state, {
        list: addToHistory(state.list, action.payload.query, action.payload.gif)
      });
    default:
      return state;
  }
}
