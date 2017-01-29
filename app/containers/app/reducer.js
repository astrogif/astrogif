import APP from './constants';

const initialState = {
  page: 'home'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case APP.CHANGEPAGE:
      return {
        page: action.payload
      };
    case APP.RESET:
      return initialState;
    default:
      return state;
  }
}
