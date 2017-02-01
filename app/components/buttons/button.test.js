/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from './button';

describe('<Button />', () => {
  it('renders', () => {
    expect(shallow(<Button />)).to.exist;
  });

  describe('isActive', () => {
    it('adds an active class when `isActive` is true', () => {
      const cmp = shallow(<Button isActive />);
      expect(cmp.prop('className')).to.contain('active');
    });

    it('does not add an active class when `isActive` is falsey', () => {
      const cmp = shallow(<Button />);
      expect(cmp.prop('className')).to.not.contain('active');
    });
  });

  it('renders any given children', () => {
    const children = <p className="qa-child">hiya</p>;
    const cmp = shallow(<Button>{children}</Button>);
    expect(cmp.childAt(0).hasClass('qa-child')).to.be.true;
  });

  it('calls the `onClick` prop when clicked', (done) => {
    const cmp = shallow(<Button onClick={() => { done(); }} />);
    cmp.simulate('click');
  });
});
