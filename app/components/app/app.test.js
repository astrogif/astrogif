/* eslint-disable no-unused-expressions */
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import App from './app';

const initialStoreData = {
  app: {},
  gif: {
    details: {}
  },
  settings: {}
};
const store = configureStore([])(initialStoreData);
const defaultProps = {
  changePage: () => {},
  setShortcut: () => {}
};
function appFactory(newProps = {}) {
  const props = Object.assign({}, defaultProps, newProps);
  return (<Provider store={store}>
    <App {...props} />
  </Provider>);
}

describe('<App />', () => {
  it('renders', () => expect(mount(appFactory())).to.have.length(1));

  describe('on creation', () => {
    it('calls `setShortcut', (done) => {
      const cmp = appFactory({ setShortcut: () => { console.log('here'); done(); } });
      mount(cmp);
    });

    it('renders the <Home /> when no `page` is provided', () => {
      const cmp = mount(appFactory());
      const home = cmp.find('Home');
      expect(home).to.have.length(1);
    });
  });

  describe('when page is `settings`', () => {
    it('renders <Settings /> when `page` is `settings`', () => {
      const cmp = mount(appFactory({ page: 'settings' }));
      const settings = cmp.find('Settings');
      expect(settings).to.have.length(1);
    });
  });

  describe('when page is `home`', () => {
    it('renders <Home /> when `page` is `home`', () => {
      const cmp = mount(appFactory({ page: 'home' }));
      const home = cmp.find('Home');
      expect(home).to.have.length(1);
    });
  });

  describe('`changePage` prop', () => {
    it('passes `changePage` to the child component', () => {
      const changePage = () => {};
      const cmp = mount(appFactory({ changePage }));
      const home = cmp.find('Home');
      expect(home.props().changePage).to.eql(changePage);
    });
  });
});
