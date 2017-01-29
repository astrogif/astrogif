import React, { PropTypes } from 'react';
import config from '../../../config';
import styles from './styles.css';

const Gif = ({ hide, copy, gif }) => {
  const preview = config.get('preview');
  const onClick = () => {
    copy();
    hide();
  };

  return (<div className={styles.container}>
    {preview === 'gif' ?
      <img alt="gif" src={gif.image_url} className={styles.video} onClick={onClick} /> :
      <video autoPlay loop className={styles.video} onClick={onClick}>
        <source src={gif.image_mp4_url} type="video/mp4" />
      </video>}
  </div>);
};

Gif.propTypes = {
  hide: PropTypes.func.isRequired,
  copy: PropTypes.func.isRequired,
  gif: PropTypes.object.isRequired
};

export default Gif;
