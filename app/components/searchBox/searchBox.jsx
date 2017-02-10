import React, { Component, PropTypes } from 'react';
import { MagnifyingGlass } from '../icons/icons';
import styles from './styles.css';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onInputKeyUp = this.onInputKeyUp.bind(this);
  }

  onEscape(event) {
    const { clear, hide } = this.props;

    event.preventDefault();
    hide();
    clear();
  }

  onEnter(event) {
    const { clear, copy, hide } = this.props;

    event.preventDefault();
    copy(event.metaKey);
    hide();
    clear();
  }

  onDown(event) {
    event.preventDefault();
    this.props.next();
  }

  onInputChange(event) {
    const query = event.target.value;
    if (!query) {
      return this.props.clear();
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
    } else if (keyCode === 40) { // Down
      return this.onDown(event);
    }
  }

  onInputKeyUp(event) {
    if (!event.target.value) {
      this.props.clear();
    }
  }

  render() {
    return (<div className={styles.container}>
      <MagnifyingGlass className={styles.magnifyingGlass} height="20" width="20" />
      <input
        autoFocus
        value={this.props.currentQuery}
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
