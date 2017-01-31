/* eslint-disable no-unused-expressions */
import React from 'react';
import electron from 'electron';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
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

  describe('Settings icon', () => {
    it('renders', () => {
      const cmp = shallow(actionBarFactoy());
      expect(cmp.find('.qa-settings')).to.have.length(1);
    });

    it('changes page to `settings` when clicked', (done) => {
      const changePage = () => { done(); };
      const cmp = shallow(actionBarFactoy({ changePage }));
      const icon = cmp.find('.qa-settings');
      icon.simulate('click');
    });
  });

  describe('Github icon', () => {
    before(() => {
      sinon.stub(electron.shell, 'openExternal').returns(null);
    });

    after(() => {
      electron.shell.openExternal.restore();
    });

    it('renders', () => {
      const cmp = shallow(actionBarFactoy());
      expect(cmp.find('.qa-github')).to.have.length(1);
    });

    it('Navigates away to the github repo', () => {
      const cmp = shallow(actionBarFactoy());
      cmp.find('.qa-github').simulate('click');
      expect(electron.shell.openExternal.calledOnce).to.be.true;
    });
  });

  describe('Quit icon', () => {
    let hasQuit = false;
    before(() => {
      electron.remote.app.quit = () => { hasQuit = true; };
    });

    after(() => {
      electron.remote.app.quit = undefined;
    });

    it('renders', () => {
      const cmp = shallow(actionBarFactoy());
      expect(cmp.find('.qa-quit')).to.have.length(1);
    });

    it('quits the app', () => {
      const cmp = shallow(actionBarFactoy());
      cmp.find('.qa-quit').simulate('click');
      expect(hasQuit).to.be.true;
    });
  });
});
