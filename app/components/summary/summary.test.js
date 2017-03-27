/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Summary from './summary';

const defaultProps = {
  gif: {
    fixed_height_small_height: 100,
    fixed_height_small_width: 150,
    fixed_height_small_url: 1,
    fixed_width_small_url: 2,
    fixed_height_small_still_url: 3,
    fixed_widthtsmall_still_url: 4
  }
};

const summaryFactory = props => shallow(<Summary {...defaultProps} {...props} />);

describe('<Summary />', () => {
  it('renders', () => {
    expect(summaryFactory()).to.have.length(1);
  });
});
