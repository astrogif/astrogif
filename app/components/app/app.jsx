import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
import config from '../../../config';
import Home from '../home/home';
import Settings from '../settings/settings';

export default class App extends Component {
  constructor(props) {
    super(props);

    // Register the window toggle on initial create
    ipcRenderer.send('shortcut', config.get('shortcut'));

    this.state = {
      settingsOpen: false
    };

    this.toggleSettings = this.toggleSettings.bind(this);
  }

  toggleSettings() {
    this.setState({
      settingsOpen: !this.state.settingsOpen
    });
  }

  render() {
    if (this.state.settingsOpen) {
      return <Settings close={this.toggleSettings} />;
    }

    return <Home viewSettings={this.toggleSettings} />;
  }
}
