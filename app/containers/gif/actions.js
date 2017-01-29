import GIF from './constants';

export function clear() {
  return {
    type: GIF.CLEAR
  };
}

export function request(query) {
  return {
    type: GIF.REQUEST,
    payload: query
  };
}

export function result(gif) {
  return {
    type: GIF.RESULT,
    payload: gif.data
  };
}

export function error(err) {
  return {
    type: GIF.ERROR,
    payload: err
  };
}
