/* eslint-disable no-unused-expressions */
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import Home from './home';

const store = configureStore([])({ settings: {}, gif: { details: {} } });
function homeFactory(props = {}) {
  return (<Provider store={store}>
    <Home {...props} />
  </Provider>);
}

describe('<Home />', () => {
  it('renders', () => expect(mount(homeFactory()).find('Home')).to.have.length(1));

  describe('by default', () => {
    let cmp;

    before(() => {
      cmp = mount(homeFactory());
    });

    it('renders <Logo />', () => expect(cmp.find('.qa-logo')).to.have.length(1));
    it('renders a <SearchBox />', () => expect(cmp.find('SearchBox')).to.have.length(1));
    it('renders an <ActionBar />', () => expect(cmp.find('ActionBar')).to.have.length(1));
  });

  describe('when fetching', () => {
    let cmp;

    beforeEach(() => {
      cmp = mount(homeFactory({ fetching: true }));
    });

    it('renders a <Loader />', () => expect(cmp.find('.qa-loader')).to.have.length(1));
    it('renders a <SearchBox />', () => expect(cmp.find('SearchBox')).to.have.length(1));
    it('does not render an <ActionBar />', () => expect(cmp.find('ActionBar')).to.have.length(0));
  });

  describe('when there is an error', () => {
    let cmp;

    beforeEach(() => {
      cmp = mount(homeFactory({ error: {} }));
    });

    it('renders an <Error />', () => expect(cmp.find('.qa-error')).to.have.length(1));
    it('renders a <SearchBox />', () => expect(cmp.find('SearchBox')).to.have.length(1));
    it('does not render an <ActionBar />', () => expect(cmp.find('ActionBar')).to.have.length(0));
  });

  describe.skip('when there is a gif', () => {
    let cmp;

    before(() => {
      cmp = mount(homeFactory());
      cmp.setProps({
        gif: 'here'
      });
    });

    it('renders a <Gif />', () => {
      expect(cmp.find('Gif')).to.have.length(1);
    });
    it('renders a <SearchBox />', () => expect(cmp.find('SearchBox')).to.have.length(1));
    it('does not render an <ActionBar />', () => expect(cmp.find('ActionBar')).to.have.length(0));
  });

  describe('when there is an empty array gif', () => {
    let cmp;

    beforeEach(() => {
      cmp = mount(homeFactory({ gif: [] }));
    });

    it('renders a <NoGif />', () => expect(cmp.find('.qa-noGif')).to.have.length(1));
    it('renders a <SearchBox />', () => expect(cmp.find('SearchBox')).to.have.length(1));
    it('does not render an <ActionBar />', () => expect(cmp.find('ActionBar')).to.have.length(0));
  });
});
