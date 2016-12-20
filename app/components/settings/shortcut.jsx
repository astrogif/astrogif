import React, { Component, PropTypes } from 'react';
import ShortcutChooser from 'react-shortcut-chooser';
import { ipcRenderer } from 'electron';
import config from '../../../config';

export default class Shortcut extends Component {
  shortCutHandler(shortcut) {
    config.set('shortcut', shortcut);
    ipcRenderer.send('shortcut', shortcut);
  }

  render() {
    return <ShortcutChooser defaultValue={config.get('shortcut')} onUpdate={this.shortCutHandler} />;
  }
}
