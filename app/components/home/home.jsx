import React, { Component } from 'react';
import { clipboard, ipcRenderer } from 'electron';
import request from 'request';
import config from '../../../config';
import SearchBox from '../searchBox/searchBox';
import Gif from '../gifs/gif';
import { Error, Loader, Logo, NoGif } from '../icons/icons';
import Actions from '../actions/actions';

import styles from './home.css';

const initialState = {
  error: null,
  gif: null,
  fetching: false,
  query: null
};

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.reset = this.reset.bind(this);
    this.resetAndClose = this.resetAndClose.bind(this);
    this.copy = this.copy.bind(this);
    this.search = this.search.bind(this);
    this.request = this.request.bind(this);
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
      if (tag !== this.state.query && !!this.state.query) {
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
    const { gif, error, fetching } = this.state;

    if (fetching) {
      return <Loader />;
    }

    if (error) {
      return (<div>
        <Error />
        <h1>Something went wrong :(</h1>
      </div>);
    }

    if (!gif) {
      return (<div>
        <Logo/>
        <h1>Astrogif</h1>
        <Actions openSettings={this.props.viewSettings} />
      </div>);
    }

    if (Array.isArray(gif)) {
      return (<div>
        <NoGif />
        <h1>No gifs found. Shame :(</h1>
      </div>);
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
        break;
      case 'markdown':
        clipboard.writeText(`![](${this.state.gif.image_original_url})`);
        break;
    }

    this.resetAndClose();
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
