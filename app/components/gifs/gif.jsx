import React, { Component, PropTypes } from 'react';

import styles from './gif.css';

export default class Gif extends Component {
  render() {
    const { copy, gif } = this.props;

    return (<div className={styles.container}>
      <img src={gif.image_url} className={styles.video} onClick={copy} />
    </div>);
  }
}

Gif.propTypes = {
  copy: PropTypes.func.isRequired,
  gif: PropTypes.any
};

      // <video autoPlay loop className={styles.video} onClick={copy}>
      //   <source src={gif.image_mp4_url} type="video/mp4" />
      // </video>
