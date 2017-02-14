/* eslint-disable class-methods-use-this */
import React, { Component, PropTypes } from 'react';
import Search from '../../containers/search';
import Gif from '../../containers/gif';
import ActionBar from '../../containers/actionBar';
import Icon from '../icons/icons';

import styles from './styles.css';

export default class Home extends Component {
  getLoader() {
    return (<div className={styles.icon}>
      <Icon glyph="loader" />
      <h1>Searching...</h1>
    </div>);
  }

  getError() {
    return (<div className={styles.icon}>
      <Icon glyph="error" />
      <h1>Something went wrong :(</h1>
    </div>);
  }

  getNoGif() {
    return (<div className={styles.icon}>
      <Icon glyph="noGif" />
      <h1>No gifs found. Shame :(</h1>
    </div>);
  }

  getGif() {
    const { gif } = this.props;
    if (Array.isArray(gif)) {
      return this.getNoGif();
    }

    return <Gif />;
  }

  getDefault() {
    return (<div className={styles.icon}>
      <Icon glyph="logo" />
      <h1>Astrogif</h1>
      <ActionBar />
    </div>);
  }

  render() {
    const { error, fetching, gif } = this.props;
    let innerCmp;
    if (fetching) {
      innerCmp = this.getLoader();
    } else if (error) {
      innerCmp = this.getError();
    } else if (gif) {
      innerCmp = this.getGif();
    } else {
      innerCmp = this.getDefault();
    }

    return (<div className={styles.container}>
      <Search />
      {innerCmp}
    </div>);
  }
}

Home.propTypes = {
  error: PropTypes.object,
  fetching: PropTypes.bool,
  gif: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
