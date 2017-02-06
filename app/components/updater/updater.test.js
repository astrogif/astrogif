/* eslint-disable no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Updater from './updater';

describe('<Updater />', () => {
  describe('when not downloaded and not available', () => {
    it('does not render', () => {
      const cmp = shallow(<Updater />);
      expect(cmp.node).to.be.null;
    });
  });

  describe('when not downloaded but available', () => {
    it('does not render', () => {
      const cmp = shallow(<Updater />);
      expect(cmp.node).to.be.null;
    });
  });

  describe('when downloaded and available', () => {
    it('it renders', () => {
      const cmp = shallow(<Updater available downloaded />);
      expect(cmp.node).to.not.be.null;
    });

    it('calls `installAndRestart` when clicked', (done) => {
      const cmp = shallow(<Updater available downloaded installAndRestart={() => { done(); }} />);
      cmp.simulate('click');
    });
  });
});
