/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FilterBox from './filterBox';

const defaultProps = {
  onEnter: () => {},
  onEscape: () => {},
  onDown: () => {},
  onUp: () => {},
  onFilterChange: () => {}
};

const filterBoxFactory = props => shallow(<FilterBox {...defaultProps} {...props} />);

describe('<FilterBox />', () => {
  it('renders', () => {
    expect(filterBoxFactory()).to.have.length(1);
  });
});
