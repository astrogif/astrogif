import { ipcRenderer } from 'electron';
import GIF from './constants';

export function clear() {
  ipcRenderer.send('resetHeight');

  return {
    type: GIF.CLEAR
  };
}

export function newQuery(query) {
  return {
    type: GIF.QUERY,
    payload: query
  };
}

export function next() {
  return {
    type: GIF.NEXT
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
