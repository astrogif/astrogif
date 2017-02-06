/* eslint-disable no-unused-expressions */
import { ipcRenderer } from 'electron';
import sinon from 'sinon';
import { expect } from 'chai';
import * as Actions from '../actions';

import UPDATER from '../constants';

const payload = 'Kaboom!';

const actionFactory = method => Actions[method](payload);

describe('updater actions', () => {
  describe('#updateChecking', () => {
    const call = actionFactory('updateChecking', UPDATER.CHECKING);

    it(`returns a type of ${UPDATER.CHECKING}`, () => {
      expect(call.type).to.eql(UPDATER.CHECKING);
    });

    it('returns the given payload', () => {
      expect(call.payload).to.eql(payload);
    });
  });

  describe('#updateAvailable', () => {
    const call = actionFactory('updateAvailable', UPDATER.AVAILABLE);

    it(`returns a type of ${UPDATER.AVAILABLE}`, () => {
      expect(call.type).to.eql(UPDATER.AVAILABLE);
    });

    it('returns the given payload', () => {
      expect(call.payload).to.eql(payload);
    });
  });

  describe('#updateError', () => {
    const call = actionFactory('updateError', UPDATER.ERROR);

    it(`returns a type of ${UPDATER.ERROR}`, () => {
      expect(call.type).to.eql(UPDATER.ERROR);
    });

    it('returns the given payload', () => {
      expect(call.payload).to.eql(payload);
    });
  });

  describe('#updateDownloaded', () => {
    const call = actionFactory('updateDownloaded', UPDATER.DOWNLOADED);

    it(`returns a type of ${UPDATER.DOWNLOADED}`, () => {
      expect(call.type).to.eql(UPDATER.DOWNLOADED);
    });

    it('returns the given payload', () => {
      expect(call.payload).to.eql(payload);
    });
  });

  describe.only('#installAndRestart', () => {
    let call;
    let ipcSpy;

    before(() => {
      ipcSpy = sinon.spy(ipcRenderer, 'send');
      call = actionFactory('installAndRestart', UPDATER.INSTALL);
    });

    after(() => {
      ipcRenderer.send.restore();
    });

    it('sends an ipcRenderer message of `installAndRestart`', () => {
      expect(ipcSpy.callCount).to.equal(1);
      expect(ipcSpy.getCalls()[0].args[0]).to.eql('installAndRestart');
    });

    it(`returns a type of ${UPDATER.INSTALL}`, () => {
      expect(call.type).to.eql(UPDATER.INSTALL);
    });
  });
});
