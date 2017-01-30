import { ipcRenderer } from 'electron';
import * as AppActions from './containers/app/actions';
import * as UpdaterActions from './containers/updater/actions';

export default function register(store) {
  ipcRenderer.on('reset', () => {
    store.dispatch(AppActions.reset());
  });

  ipcRenderer.on('updateAvailable', (event, payload) => {
    store.dispatch(UpdaterActions.updateAvailable(payload));
  });

  ipcRenderer.on('updateDownloaded', (event, payload) => {
    store.dispatch(UpdaterActions.updateDownloaded(payload));
  });

  ipcRenderer.on('updateError', (event, payload) => {
    store.dispatch(UpdaterActions.updateError(payload));
  });

  ipcRenderer.on('updateChecking', (event, payload) => {
    store.dispatch(UpdaterActions.updateChecking(payload));
  });
}
