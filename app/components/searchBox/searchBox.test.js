/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SearchBox from './searchBox';

const defaultProps = {
  clear: () => {},
  hide: () => {},
  copy: () => {},
  request: () => {},
  next: () => {},
  currentQuery: '',
  newQuery: () => {}
};
function searchBoxFactory(newProps = {}) {
  const props = Object.assign({}, defaultProps, newProps);
  return <SearchBox {...props} />;
}

describe('<SearchBox />', () => {
  it('renders', () => {
    expect(shallow(searchBoxFactory())).to.have.length(1);
  });
});
