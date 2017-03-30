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

  it('calls `onEnter` when enter is pressed', (done) => {
    const input = filterBoxFactory({
      onEnter: () => { done(); }
    }).find('input');

    input.simulate('keyDown', {
      which: 13
    });
  });

  it('calls `onEscape` when escape is pressed', (done) => {
    const input = filterBoxFactory({
      onEscape: () => { done(); }
    }).find('input');

    input.simulate('keyDown', {
      which: 27
    });
  });

  it('calls `onUp` when the up arrow is pressed', (done) => {
    const input = filterBoxFactory({
      onUp: () => { done(); }
    }).find('input');

    input.simulate('keyDown', {
      which: 38
    });
  });

  it('calls `onDown` when the down arrow is pressed', (done) => {
    const input = filterBoxFactory({
      onDown: () => { done(); }
    }).find('input');

    input.simulate('keyDown', {
      which: 40
    });
  });

  it('calls `onFilterChange` when the textbox value changes', (done) => {
    const value = 'search yo!';
    const input = filterBoxFactory({
      onFilterChange: (v) => {
        expect(v).to.eql(value);
        done();
      }
    }).find('input');

    input.simulate('change', {
      target: {
        value
      }
    });
  });
});
