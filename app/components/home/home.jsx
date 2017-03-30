import React, { Component, PropTypes } from 'react';
import { ipcRenderer } from 'electron';
import Search from '../../containers/gif/search';
import Gif from '../../containers/gif';
import ActionBar from '../../containers/actionBar';
import Icon from '../icons/icons';

import styles from './styles.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queryIdx: null,
      queries: []
    };

    this.newQuery = this.newQuery.bind(this);
    this.clear = this.clear.bind(this);
    this.copy = this.copy.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidMount() {
    ipcRenderer.send('resetHeight');
  }

  componentWillReceiveProps(nextProps) {
    // going from no gif to gif
    if ((!this.state.gif && nextProps.gif)
    // going from gif to different gif
      || (nextProps.gif && this.state.gif.id !== nextProps.gif.id)) {
      const { queryIdx, queries } = this.state;
      this.setState({
        queryIdx: queryIdx === null ? 0 : queryIdx + 1,
        queries: queries.concat(nextProps.gif),
        gif: nextProps.gif
      });
    }
  }

  getLoader() {
    return (<div className={styles.icon}>
      <Icon glyph="loader" className="qa-loader" />
      <h1>Searching...</h1>
    </div>);
  }

  getError() {
    return (<div className={styles.icon}>
      <Icon glyph="error" className="qa-error" />
      <h1>Something went wrong :(</h1>
    </div>);
  }

  getNoGif() {
    return (<div className={styles.icon}>
      <Icon glyph="noGif" className="qa-noGif" />
      <h1>No gifs found. Shame :(</h1>
    </div>);
  }

  getGif() {
    const { gif } = this.state;
    if (!gif) {
      return this.getNoGif();
    }

    return <Gif gif={gif} />;
  }

  resetState() {
    this.setState({
      queryIdx: null,
      queries: [],
      gif: null
    });
  }

  newQuery(query) {
    this.props.newQuery(query);
    this.resetState();
  }

  clear() {
    this.resetState();
    this.props.clear();
  }

  copy(meta) {
    this.props.copy(this.state.gif, meta);
  }

  next() {
    const { queryIdx, queries } = this.state;
    if (queryIdx === queries.length - 1) {
      this.props.next();
      return;
    }

    this.setState({
      queryIdx: queryIdx + 1,
      gif: queries[queryIdx + 1]
    });
  }

  prev() {
    const { queryIdx, queries } = this.state;
    if (queryIdx === 0) {
      return;
    }

    this.setState({
      queryIdx: queryIdx - 1,
      gif: queries[queryIdx - 1]
    });
  }

  getDefault() {
    return (<div className={styles.icon}>
      <Icon glyph="logo" className="qa-logo" />
      <h1>Astrogif</h1>
      <ActionBar />
    </div>);
  }

  render() {
    const { error, fetching, gif, hide, request } = this.props;
    let innerCmp;
    if (fetching) {
      innerCmp = this.getLoader();
    } else if (error) {
      innerCmp = this.getError();
    } else if (gif) {
      innerCmp = this.getGif();
    } else {
      innerCmp = this.getDefault();
    }

    return (<div className={styles.container}>
      <Search
        newQuery={this.newQuery}
        prev={this.prev}
        next={this.next}
        clear={this.clear}
        hide={hide}
        request={request}
        copy={this.copy} />
      {innerCmp}
    </div>);
  }
}

Home.propTypes = {
  error: PropTypes.object,
  fetching: PropTypes.bool,
  gif: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  // copy: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  copy: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  request: PropTypes.func.isRequired,
  newQuery: PropTypes.func.isRequired
};
