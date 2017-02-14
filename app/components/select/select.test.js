/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Select from './select';

describe('<Select />', () => {
  let cmp;
  const onChange = () => {};
  const value = '1';

  before(() => {
    cmp = shallow(<Select onChange={onChange} value={value}>
      <option value="1">One</option>
      <option value="2">Two</option>
    </Select>);
  });

  it('renders', () => {
    expect(cmp).to.have.length(1);
  });

  it('renders a <select />', () => {
    expect(cmp.find('select')).to.have.length(1);
  });

  it('renders the children', () => {
    expect(cmp.find('option')).to.have.length(2);
  });

  it('sets the correct value', () => {
    expect(cmp.find('select').props().value).to.eql(value);
  });

  it('passes through the `onChange` event', () => {
    expect(cmp.find('select').props().onChange).to.eql(onChange);
  });
});
