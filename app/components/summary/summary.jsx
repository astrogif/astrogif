import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import styles from './summary.css';
import Icon from '../icons/icons';

export default class Summary extends Component {
  componentWillReceiveProps(nextProps) {
    if (!this.props.active && nextProps.active) {
      this.el.scrollIntoViewIfNeeded();
    }
  }

  render() {
    const { gif, active } = this.props;
    const imageClasses = cn(styles.image, {
      [styles.active]: active
    });
    let gifUrl;
    let gifUrlStill;

    if (Number(gif.fixed_height_small_width) > Number(gif.fixed_height_small_height)) {
      gifUrl = gif.fixed_width_small_url;
      gifUrlStill = gif.fixed_width_small_still_url;
    } else {
      gifUrl = gif.fixed_height_small_url;
      gifUrlStill = gif.fixed_height_small_still_url;
    }

    return (<div className={styles.container}>
      <img
        ref={el => this.el = el}
        alt={gif.caption}
        className={imageClasses}
        src={active
          ? gifUrl
          : gifUrlStill} />
      {active && <Icon
        className={styles.activeIcon}
        glyph="success" />}
    </div>);
  }
}

Summary.propTypes = {
  gif: PropTypes.object.isRequired,
  active: PropTypes.bool
};


