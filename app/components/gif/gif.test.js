/* eslint-disable no-unused-expressions */
import React from 'react';
import { ipcRenderer } from 'electron';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Gif from './gif';

const defaultProps = {
  hide: () => {},
  copy: () => {},
  gif: {}
};
function gifFactory(newProps) {
  const props = Object.assign({}, defaultProps, newProps);
  return <Gif {...props} />;
}

describe('<Gif />', () => {
  it('renders', () => {
    expect(shallow(gifFactory())).to.exist;
  });

  describe('ipcRenderer `newHeight` event', () => {
    before(() => {
      sinon.spy(ipcRenderer, 'send');
    });

    after(() => {
      ipcRenderer.send.restore();
    });

    it.only('sends an event when rendered', () => {
      shallow(gifFactory());
      expect(ipcRenderer.send.calledWith('newHeight')).to.be.true;
    });
  });

  describe('preview', () => {
    it('shows a gif if the preview type is unspecified', () => {
      const cmp = shallow(gifFactory());
      expect(cmp.find('img')).to.have.length(1);
    });

    it('shows a gif if the preview type is gif', () => {
      const cmp = shallow(gifFactory());
      expect(cmp.find('img')).to.have.length(1);
    });

    it('shows an mp4 video if the preview type is not gif', () => {
      const cmp = shallow(gifFactory());
      expect(cmp.find('video')).to.have.length(1);
    });
  });

  describe('onClick', () => {
    it('calls the `copy` prop', (done) => {
      const cmp = shallow(gifFactory({
        copy: () => { done(); }
      }));
      cmp.find('.qa-preview').simulate('click');
    });

    it('calls the `hide` prop', (done) => {
      const cmp = shallow(gifFactory({
        hide: () => { done(); }
      }));
      cmp.find('.qa-preview').simulate('click');
    });
  });
});
