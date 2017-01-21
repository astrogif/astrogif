import React, { PropTypes } from 'react';
import config from '../../../config';
import styles from './gif.css';

const Gif = ({ copy, gif }) => {
  const preview = config.get('preview');

  return (<div className={styles.container}>
    {preview === 'gif' ?
      <img alt="gif" src={gif.image_url} className={styles.video} onClick={copy} /> :
      <video autoPlay loop className={styles.video} onClick={copy}>
        <source src={gif.image_mp4_url} type="video/mp4" />
      </video>}
  </div>);
};

Gif.propTypes = {
  copy: PropTypes.func,
  gif: PropTypes.object
};

export default Gif;
