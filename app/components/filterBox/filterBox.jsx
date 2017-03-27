import React, { Component, PropTypes } from 'react';
import Icon from '../icons/icons';
import styles from './styles.css';

export default class FilterBox extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
  }

  onInputChange(event) {
    this.props.onFilterChange(event.target.value);
  }

  // Just deals with non-value keys
  onInputKeyDown(event) {
    const keyCode = event.which;
    const { onEnter, onEscape, onDown, onUp } = this.props;

    if (keyCode === 27) { // Escape
      return onEscape(event);
    } else if (keyCode === 13) { // Enter
      return onEnter(event);
    } else if (keyCode === 38) { // Up
      return onUp(event);
    } else if (keyCode === 40) { // Down
      return onDown(event);
    }
  }

  render() {
    return (<div className={styles.container}>
      <Icon glyph="magnifyingGlass" className={styles.funnel} height="20" width="20" />
      <input
        autoFocus
        onKeyDown={this.onInputKeyDown}
        onChange={this.onInputChange}
        className={styles.input}
        placeholder="filter your search history" />
    </div>);
  }
}

FilterBox.propTypes = {
  onEnter: PropTypes.func.isRequired,
  onEscape: PropTypes.func.isRequired,
  onDown: PropTypes.func.isRequired,
  onUp: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired
};
