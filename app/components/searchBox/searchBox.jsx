import React, { Component, PropTypes } from 'react';
import { ipcRenderer } from 'electron';
import magnifyingGlass from './magnifyingGlass.png';
import styles from './styles.css';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previousQuery: ''
    };

    this.clear = this.clear.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);

    // Giving this it's own event handler for 'reset' because the text content of
    // the input is not determinied by the redux store (which is the other listener
    // of `reset`)
    ipcRenderer.on('reset', this.clear);
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('reset', this.clear);
  }

  onEscape(event) {
    event.preventDefault();
    this.clear();
    this.props.hide();
  }

  onEnter(event) {
    event.preventDefault();

    if (!event.target.value) {
      return;
    }

    this.clear();
    this.props.copy(event.metaKey);
    this.props.hide();
  }

  onDown(event) {
    event.preventDefault();
    this.props.next();
  }

  onInputKeyDown(event) {
    const keyCode = event.which;
    const value = event.target.value;

    if (keyCode === 27) { // Escape
      return this.onEscape(event);
    } else if (keyCode === 13) { // Enter
      return this.onEnter(event);
    } else if (keyCode === 40) { // Down
      return this.onDown(event);
    }

    if (!event.target.value) {
      return this.props.clear();
    }

    // Nothing has changed. Ignore.
    if (event.target.value === this.state.previousQuery) {
      return;
    }

    this.setPreviousQuery(value);

    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() => {
      this.props.request(value);
    }, 300);
  }

  setPreviousQuery(previousQuery) {
    this.setState({
      previousQuery
    });
  }

  clear() {
    if (this.input) {
      this.input.value = '';
      this.setPreviousQuery('');
    }
  }

  render() {
    return (<div className={styles.container}>
      <img alt="search" className={styles.magnifyingGlass} src={magnifyingGlass} />
      <input
        autoFocus
        ref={i => this.input = i} // eslint-disable-line no-return-assign
        onKeyDown={this.onInputKeyDown}
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
  next: PropTypes.func.isRequired
};
