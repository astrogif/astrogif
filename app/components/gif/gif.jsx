import React, { PropTypes } from 'react';
import cn from 'classnames';
import { ipcRenderer } from 'electron';
import styles from './styles.css';

// Silly hard coded values *shrug*
export const gifWidth = 300;
export const searchBoxEtcHeight = 82;

function setWindowHeightFromGifWidth(width, height) { // eslint-disable-line class-methods-use-this
  const proportion = gifWidth / width;

  ipcRenderer.send('newHeight', height * proportion + searchBoxEtcHeight); // eslint-disable-line no-mixed-operators
}

const Gif = ({ preview, hide, copy, gif }) => {
  const onClick = () => {
    copy();
    hide();
  };

  setWindowHeightFromGifWidth(Number(gif.image_width), Number(gif.image_height));

  const previewClasses = cn('qa-preview', styles.video);
  return (<div className={styles.container}>
    {preview === 'gif' ?
      <img alt="gif" src={gif.image_url} className={previewClasses} onClick={onClick} /> :
      <video autoPlay loop className={previewClasses} onClick={onClick}>
        <source src={gif.image_mp4_url} type="video/mp4" />
      </video>}
  </div>);
};

Gif.propTypes = {
  hide: PropTypes.func.isRequired,
  copy: PropTypes.func.isRequired,
  gif: PropTypes.object.isRequired,
  preview: PropTypes.string.isRequired
};

Gif.defaultProps = {
  preview: 'gif'
};

export default Gif;
