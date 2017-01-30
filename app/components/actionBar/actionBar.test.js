/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ActionBar from './actionBar';

const defaultProps = {
  changePage: () => {}
};
function actionBarFactoy(newProps = {}) {
  const props = Object.assign({}, defaultProps, newProps);
  return <ActionBar {...props} />;
}

describe('<ActionBar />', () => {
  it('renders', () => {
    expect(shallow(actionBarFactoy())).to.exist;
  });
});
