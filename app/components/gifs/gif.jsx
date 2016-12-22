import React, { Component, PropTypes } from 'react';
import config from '../../../config'
import styles from './gif.css';

export default ({ copy, gif }) => {
  const preview = config.get('preview');

  return (<div className={styles.container}>
    {preview === 'gif' ?
      <img src={gif.image_url} className={styles.video} onClick={copy} /> :
      <video autoPlay loop className={styles.video} onClick={copy}>
        <source src={gif.image_mp4_url} type="video/mp4" />
      </video>}
  </div>);
}
