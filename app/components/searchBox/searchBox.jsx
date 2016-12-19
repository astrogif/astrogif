import React, { Component, PropTypes } from 'react';

import magnifyingGlass from './magnifyingGlass.png';
import styles from './searchBox.css';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.onInputKeyDown = this.onInputKeyDown.bind(this);
  }
  onInputKeyDown(event) {
    const { close, copy, next, search } = this.props;
    const keyCode = event.which;
    const escape = 27;
    const enter = 13;
    const down = 40;

    if (keyCode === escape) {
      event.preventDefault();
      this.input.value = '';
      close();
      return;
    }

    if (keyCode === enter) {
      event.preventDefault();
      this.input.value = '';
      copy();
      return;
    }

    if (keyCode === down) {
      event.preventDefault();
      next();
      return;
    }

    search(event.target.value);
  }


  render() {
    const { search } = this.props;

    return (<div className={styles.container}>
      <img className={styles.magnifyingGlass} src={magnifyingGlass} />
      <input
        ref={i => this.input = i }
        onKeyUp={this.onInputKeyDown}
        className={styles.input}
        placeholder="what are you looking for?" />
      </div>);
  }
}

SearchBox.propTypes = {
  close: PropTypes.func.isRequired,
  copy: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired
};
