import React, { Component } from 'react';
import { clipboard, ipcRenderer } from 'electron';
import autobind from 'react-autobind'
import request from 'request';
import config from '../../../config';
import SearchBox from '../searchBox/searchBox';
import Loader from '../loader/loader';
import Error from '../error/error';
import EmptyState from '../empty/empty';
import Gif from '../gifs/gif';
import NoGif from '../gifs/noGif';
import Settings from '../settings/settings';

import styles from './app.css';

const initialState = {
  error: null,
  gif: null,
  fetching: false,
  query: null,
  settingsOpen: false
};

export default class App extends Component {
  constructor(props) {
    super(props);

    // Register the window toggle on initial create
    ipcRenderer.send('shortcut', config.get('shortcut'));

    this.state = initialState;

    this.reset = this.reset.bind(this);
    this.resetAndClose = this.resetAndClose.bind(this);
    this.copy = this.copy.bind(this);
    this.search = this.search.bind(this);
    this.request = this.request.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
  }

  reset() {
    this.setState(initialState);
    this.resetWindowHeight();
  }

  close() {
    ipcRenderer.send('close');
  }

  resetAndClose() {
    this.close();
    if (config.get('hide') === 'reset') {
      this.reset();
    }
  }

  search(query) {
    if (!query || !query.length) {
      this.reset();
      return;
    }

    if (query === this.state.query) {
      return;
    }

    this.request(query);
  }

  request(query) {
    this.resetWindowHeight();

    const tag = query || this.state.query;

    this.setState({
      error: null,
      gif: null,
      fetching: true,
      query
    });

    request(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${tag}`, (err, res, body) => {
      // Has the request changed since we fired off this one?
      if (tag !== this.state.query) {
        return;
      }

      if (err) {
        this.setState({
          error: err,
          fetching: false
        });

        return;
      }

      this.setState({
        gif: JSON.parse(body).data,
        fetching: false
      });
    });
  }

  getInner() {
    const { gif, error, fetching, settingsOpen } = this.state;

    if (settingsOpen) {
      return <Settings close={this.toggleSettings} />;
    }

    if (fetching) {
      return <Loader />;
    }

    if (error) {
      return <Error />;
    }

    if (!gif) {
      return <EmptyState openSettings={this.toggleSettings} closeSettings={this.toggleSettings} />;
    }

    if (Array.isArray(gif)) {
      return <NoGif />;
    }

    this.setWindowHeightFromGifWidth(Number(gif.image_width), Number(gif.image_height));

    return <Gif
      copy={this.copy}
      gif={gif} />;
  }

  setWindowHeightFromGifWidth(width, height) {
    // Shouldn't hard code these numbers in here, but whatever
    const gifWidth = 300;
    const searchBoxEtAlHeight = 82;
    const proportion = gifWidth / width;

    ipcRenderer.send('newHeight', height * proportion + searchBoxEtAlHeight);
  }

  resetWindowHeight() {
    ipcRenderer.send('resetHeight');
  }

  copy() {
    const copy = config.get('copy');
    switch(copy) {
      case 'url':
        clipboard.writeText(this.state.gif.image_original_url);
      case 'markdown':
        clipboard.writeText(`![](${this.state.gif.image_original_url})`);
    }

    this.resetAndClose();
  }

  toggleSettings() {
    this.setState({
      settingsOpen: !this.state.settingsOpen
    });
  }

  render() {
    return <div className={styles.container}>
      <SearchBox
        close={this.resetAndClose}
        search={this.search}
        copy={this.copy}
        next={this.request} />
      <div>
        {this.getInner()}
      </div>
    </div>;
  }
}
