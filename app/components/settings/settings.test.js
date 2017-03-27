/* eslint-disable no-unused-expressions */
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { ipcRenderer } from 'electron';
import { expect } from 'chai';
import Settings from './settings';

const defaultProps = {
  config: {},
  changePage: () => {},
  update: () => {},
  updateShortCut: () => {}
};

const settingsFactory = (props, render = mount) => render(<Settings {...defaultProps} {...props} />);

describe.only('<Settings />', () => {
  it('renders', () => {
    expect(settingsFactory()).to.have.length(1);
  });

  describe('on mount', () => {
    before(() => {
      sinon.spy(ipcRenderer, 'send');
    });

    after(() => {
      ipcRenderer.send.restore();
    });

    it('calls `ipcRenderer` `newHeight` on mount', () => {
      settingsFactory();
      expect(ipcRenderer.send.calledWith('newHeight')).to.be.true;
    });
  });

  describe('on unmount', () => {
    before(() => {
      sinon.spy(ipcRenderer, 'send');
    });

    after(() => {
      ipcRenderer.send.restore();
    });

    it('calls `ipcRenderer` `resetHeight` on unmount', () => {
      const cmp = settingsFactory();
      cmp.unmount();
      expect(ipcRenderer.send.calledWith('resetHeight')).to.be.true;
    });
  });

  describe('navigate home', () => {
    it('renders a close button', () => {
      expect(settingsFactory().find('.qa-home')).to.have.length(1);
    });

    it('fires `changePage` with `home` when the close button is clicked', (done) => {
      const btn = settingsFactory({
        changePage: (page) => {
          expect(page).to.eql('home');
          done();
        }
      }).find('.qa-home');
      btn.simulate('click');
    });
  });

  describe('copy options', () => {
    it('renders a copy options Select', () => {
      expect(settingsFactory().find('.qa-cp')).to.have.length(1);
    });

    it('sets the correct copy option based on the `copy` config', () => {
      const copy = 'url';
      const sel = settingsFactory({
        config: { copy }
      }, shallow).find('.qa-cp');

      expect(sel.prop('value')).to.eql(copy);
    });

    it('calls update when the copy select is changed', (done) => {
      const copy = 'url';
      const value = 'newSetting';
      const sel = settingsFactory({
        update: (k, v) => {
          expect(k).to.eql('copy');
          expect(v).to.eql(value);
          done();
        },
        config: { copy }
      }, shallow).find('.qa-cp');

      sel.prop('onChange')({
        target: {
          value
        }
      });
    });
  });

  describe('preview options', () => {
    it('renders preview options buttons', () => {
      const bg = settingsFactory({}, shallow).find('.qa-prev');
      bg.children().forEach(b => expect(b.name()).to.eql('Button'));
    });

    it('sets the correct preview option based on the `preview` config', () => {
      const bg = settingsFactory({
        config: {
          preview: 'gif'
        }
      }, shallow).find('.qa-prev');
      expect(bg.childAt(0).prop('isActive')).to.be.true;
    });

    it('calls update when the preview is changed', (done) => {
      const value = 'gif';
      const bg = settingsFactory({
        config: {
          preview: 'mp4'
        },
        update: (k, v) => {
          expect(k).to.eql('preview');
          expect(v).to.eql(value);
          done();
        }
      }, shallow).find('.qa-prev');
      bg.childAt(0).prop('onClick')({
        target: {
          value
        }
      });
    });
  });

  describe('on start options', () => {
    it('renders on start options buttons', () => {
      const bg = settingsFactory({}, shallow).find('.qa-str');
      bg.children().forEach(b => expect(b.name()).to.eql('Button'));
    });

    it('sets the correct on start option based on the `login` config', () => {
      const bg = settingsFactory({
        config: {
          login: false
        }
      }, shallow).find('.qa-str');
      expect(bg.childAt(0).prop('isActive')).to.be.true;
    });

    it('calls update when the on start is changed', (done) => {
      const bg = settingsFactory({
        config: {
          login: false
        },
        update: (k, v) => {
          expect(k).to.eql('login');
          expect(v).to.be.true;
          done();
        }
      }, shallow).find('.qa-str');
      bg.childAt(1).prop('onClick')(true);
    });
  });

  describe('global shortcut', () => {
    const props = {
      config: {
        shortcut: 'ctrl+0'
      }
    };
    const sc = settingsFactory(props).find('Shortcut');

    it('renders', () => {
      expect(sc).to.have.length(1);
    });

    it('passes the current shortcut config down to <Shortcut />', () => {
      expect(sc.prop('currentShortcut')).to.eql(props.config.shortcut);
    });

    it('passes `updateShortCut` down to <Shortcut />', () => {
      expect(sc.prop('updateShortCut')).to.eql(defaultProps.updateShortCut);
    });
  });
});
