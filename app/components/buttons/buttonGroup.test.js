/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ButtonGroup from './button';

describe('<ButtonGroup />', () => {
  it('renders', () => {
    expect(shallow(<ButtonGroup />)).to.exist;
  });

  it('renders any given children', () => {
    const children = <p className="qa-child">hiya</p>;
    const cmp = shallow(<ButtonGroup>{children}</ButtonGroup>);
    expect(cmp.childAt(0).hasClass('qa-child')).to.be.true;
  });
});
