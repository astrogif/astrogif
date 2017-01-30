import { ipcRenderer } from 'electron';
import SETTINGS from './constants';
import config from '../../../config';

export function updateShortCut(shortcut) {
  ipcRenderer.send('shortcut', shortcut);

  return {
    type: SETTINGS.UPDATE,
    payload: {
      key: 'shortcut',
      value: shortcut
    }
  };
}

export function update(key, value) {
  config.set(key, value);

  return {
    type: SETTINGS.UPDATE,
    payload: { key, value }
  };
}
