/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Settings from './settings';

describe('<Settings />', () => {
  it('renders', () => {

  });

  it('calls `ipcRenderer` `newHeight` on mount', () => {

  });

  it('calls `ipcRenderer` `resetHeight` on unmount', () => {

  });

  describe('navigate home', () => {
    it('renders a close button', () => {

    });

    it('fires `changePage` with `home` when the close button is clicked', () => {

    });
  });

  describe('copy options', () => {
    it('renders a copy options Select', () => {

    });

    it('sets the correct copy option based on the `copy` config', () => {

    });

    it('calls update when the copy select is changed', () => {

    });
  });

  describe('preview options', () => {
    it('renders preview options buttons', () => {

    });

    it('sets the correct preview option based on the `preview` config', () => {

    });

    it('calls update when the preview is changed', () => {

    });
  });

  describe('on start options', () => {
    it('renders on start options buttons', () => {

    });

    it('sets the correct on start option based on the `login` config', () => {

    });

    it('calls update when the on start is changed', () => {

    });
  });

  describe('global shortcut', () => {
    it('passes the current shortcut config down to <Shortcut />', () => {

    });

    it('passes `updateShortCut` down to <Shortcut />', () => {

    });
  });
});
