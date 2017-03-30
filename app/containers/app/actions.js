import { ipcRenderer } from 'electron';
import config from '../../../config';
import APP from './constants';

export function copy(gif, meta) {
  return {
    type: APP.COPY,
    payload: {
      gif,
      meta
    }
  };
}

export function copyUrl(url, meta) {
  return {
    type: APP.COPY,
    payload: {
      url,
      meta
    }
  };
}

export function copied() {
  return {
    type: APP.COPIED
  };
}

export function notCopied() {
  return {
    type: APP.NOTCOPIED
  };
}

export function changePage(page) {
  return {
    type: APP.CHANGEPAGE,
    payload: page
  };
}

export function hide() {
  ipcRenderer.send('hide');

  return {
    type: APP.HIDE
  };
}

export function reset() {
  ipcRenderer.send('resetHeight');

  return {
    type: APP.RESET
  };
}

export function setShortcut(keys) {
  const payload = keys || config.get('shortcut');
  ipcRenderer.send('shortcut', payload);

  return {
    type: APP.SHORTCUT,
    payload
  };
}
