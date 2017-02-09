import React, { Component, PropTypes } from 'react';
import magnifyingGlass from './magnifyingGlass.png';
import styles from './styles.css';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.clear = this.clear.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onInputKeyUp = this.onInputKeyUp.bind(this);
  }

  onEscape(event) {
    event.preventDefault();
    this.clear();
    this.props.hide();
  }

  onEnter(event) {
    event.preventDefault();
    this.props.copy(event.metaKey);
    this.clear();
    this.props.hide();
  }

  onDown(event) {
    event.preventDefault();
    this.props.next();
  }

  onInputChange(event) {
    const query = event.target.value;
    if (!query) {
      return this.clear();
    }

    this.props.newQuery(query);

    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() => {
      this.props.request(query);
    }, 300);
  }

  // Just deals with non-value keys
  onInputKeyDown(event) {
    const keyCode = event.which;
    const value = event.target.value;

    if (keyCode === 27) { // Escape
      return this.onEscape(event);
    }

    if (!value) {
      return;
    }

    if (keyCode === 13) { // Enter
      return this.onEnter(event);
    } else if (keyCode === 40 && value) { // Down
      return this.onDown(event);
    }
  }

  onInputKeyUp(event) {
    if (!event.target.value) {
      this.clear();
    }
  }

  clear() {
    this.props.clear();
  }

  render() {
    return (<div className={styles.container}>
      <img alt="search" className={styles.magnifyingGlass} src={magnifyingGlass} />
      <input
        autoFocus
        value={this.props.currentQuery}
        ref={i => this.input = i} // eslint-disable-line no-return-assign
        onKeyDown={this.onInputKeyDown}
        onKeyUp={this.onInputKeyUp}
        onChange={this.onInputChange}
        className={styles.input}
        placeholder="what are you looking for?" />
    </div>);
  }
}

SearchBox.propTypes = {
  clear: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  copy: PropTypes.func.isRequired,
  request: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  currentQuery: PropTypes.string,
  newQuery: PropTypes.func.isRequired
};
