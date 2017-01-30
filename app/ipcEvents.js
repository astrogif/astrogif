import { ipcRenderer } from 'electron';
import * as AppActions from './containers/app/actions';

export default function register(store) {
  ipcRenderer.on('reset', () => {
    store.dispatch(AppActions.reset());
  });
}
