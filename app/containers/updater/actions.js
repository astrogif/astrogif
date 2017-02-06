import { ipcRenderer } from 'electron';
import UPDATE from './constants';

export function updateChecking(payload) {
  return {
    type: UPDATE.CHECKING,
    payload
  };
}

export function updateAvailable(payload) {
  return {
    type: UPDATE.AVAILABLE,
    payload
  };
}

export function updateDownloaded(payload) {
  return {
    type: UPDATE.DOWNLOADED,
    payload
  };
}

export function updateError(payload) {
  return {
    type: UPDATE.ERROR,
    payload
  };
}

export function installAndRestart() {
  ipcRenderer.send('installAndRestart');

  return {
    type: UPDATE.INSTALL
  };
}
