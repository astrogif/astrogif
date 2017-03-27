import React, { Component, PropTypes } from 'react';
import Home from '../../containers/home';
import History from '../../containers/history';
import Settings from '../../containers/settings';

// Simple router. Uses Redex store to set key with the key being
// matched to a Component
const pages = {
  home: Home,
  settings: Settings,
  history: History
};

export default class App extends Component {
  constructor(props) {
    super(props);

    // Register the window toggle on initial create
    props.setShortcut();
  }

  render() {
    const { changePage, page } = this.props;
    const Cmp = pages[page];

    return <Cmp changePage={changePage} />;
  }
}

App.propTypes = {
  page: PropTypes.string.isRequired,
  setShortcut: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired
};

App.defaultProps = {
  page: 'home'
};
