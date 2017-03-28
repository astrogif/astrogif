import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import { ipcRenderer } from 'electron';
import fuzzy from 'fuzzy';
import Icon from '../icons/icons';
import Summary from '../summary/summary';
import FilterBox from '../filterBox/filterBox';
import styles from './styles.css';

function getTotalItemCount(history) {
  const titles = Object.keys(history);
  return titles.reduce((total, title) => total + history[title].length, 0);
}

export default class History extends Component {
  constructor(props) {
    super(props);

    this.totalItemCount = getTotalItemCount(props.history);

    const state = {
      selectedIdx: 0,
      filterText: ''
    };
    this.state = state;
    this.setFuzzedAndSelected(props, state);

    this.onNoItemsKeyDown = this.onNoItemsKeyDown.bind(this);
    this.onFilterDown = this.onFilterDown.bind(this);
    this.onFilterUp = this.onFilterUp.bind(this);
    this.onFilterEnter = this.onFilterEnter.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentDidMount() {
    if (!this.totalItemCount) {
      document.addEventListener('keydown', this.onNoItemsKeyDown);
    } else {
      ipcRenderer.send('newHeight', 370);
    }
  }

  componentWillUmount() {
    document.removeEventListener('keydown', this.onNoItemsKeyDown);
  }

  setFuzzedAndSelected(props, state) {
    const { history } = props;
    const { selectedIdx, filterText } = state;

    const fuzzedTitles = fuzzy.filter(filterText, Object.keys(history));
    const titles = fuzzedTitles.length && fuzzedTitles[0].string
      ? fuzzedTitles.map(e => e.string)
      : fuzzedTitles;

    this.fuzzedTitles = titles;
    let count = 0;
    titles
      .forEach((t) => {
        history[t].forEach((g) => {
          if (count === selectedIdx) {
            this.selectedGif = g;
          }
          count += 1;
        });
      });
  }

  componentWillUpdate(nextProps, nextState) {
    this.setFuzzedAndSelected(nextProps, nextState);
  }

  onNoItemsKeyDown(event) {
    if (event.which === 27) {
      this.props.hide();
    }
  }

  onFilterUp() {
    this.setState({
      selectedIdx: this.state.selectedIdx
        ? this.state.selectedIdx - 1
        : 0
    });
  }

  onFilterDown() {
    this.setState({
      selectedIdx: this.state.selectedIdx === this.totalItemCount - 1
        ? this.state.selectedIdx
        : this.state.selectedIdx + 1
    });
  }

  onFilterEnter(event) {
    this.props.copyUrl(this.selectedGif.image_original_url, event.metaKey);
    this.props.hide();
  }

  onFilterChange(filterText) {
    this.setState({
      filterText,
      selectedIdx: 0
    });
  }

  getNoHistory() {
    return (<div className={styles.icon}>
      <Icon glyph="noHistory" className="qa-no-h" />
      <h1 className={styles.noHistoryHeading}>There is no gif history</h1>
      <h2 className={styles.noHistorySubheading}>Simply copy some gifs to have them saved here</h2>
    </div>);
  }

  render() {
    const { hide, changePage, history } = this.props;
    const goBack = (<button alt="Home" className={styles.back} onClick={() => { changePage('home'); }}>
      <Icon height="20" width="20" glyph="left" className="qa-back" onClick={() => changePage('home')} />
    </button>);

    if (!this.totalItemCount) {
      return (<div>
        {this.getNoHistory()}
        {goBack}
      </div>);
    }

    return (<div>
      <FilterBox
        onDown={this.onFilterDown}
        onUp={this.onFilterUp}
        onEscape={() => hide()}
        onEnter={this.onFilterEnter}
        onFilterChange={this.onFilterChange}
        />
      <div className={styles.container}>
        {this.fuzzedTitles.map(t => <div className={styles.history}>
          <div className={styles.searchTermContainer}>
            <h2 className={styles.searchTerm}>{t}</h2>
          </div>
          <div className={styles.gifs}>
            {history[t].map(g => (<Summary
              gif={g}
              active={g.id === this.selectedGif.id} />))}
          </div>
        </div>)}
      </div>
      {goBack}
    </div>);
  }
}

History.propTypes = {
  history: PropTypes.object,
  changePage: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  copyUrl: PropTypes.func.isRequired
};

