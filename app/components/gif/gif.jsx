import React, { PropTypes } from 'react';
import { ipcRenderer } from 'electron';
import config from '../../../config';
import styles from './styles.css';

function setWindowHeightFromGifWidth(width, height) { // eslint-disable-line class-methods-use-this
  // Shouldn't hard code these numbers in here, but whatever
  const gifWidth = 300;
  const searchBoxEtAlHeight = 82;
  const proportion = gifWidth / width;

  ipcRenderer.send('newHeight', height * proportion + searchBoxEtAlHeight); // eslint-disable-line no-mixed-operators
}

const Gif = ({ hide, copy, gif }) => {
  const preview = config.get('preview');
  const onClick = () => {
    copy();
    hide();
  };

  setWindowHeightFromGifWidth(Number(gif.image_width), Number(gif.image_height));

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
