/* eslint-disable no-unused-expressions */
import { ipcRenderer } from 'electron';
import sinon from 'sinon';
import { expect } from 'chai';
import ElectronConfig from 'electron-config';
import * as Actions from '../actions';
import APP from '../constants';

const payload = 'p-p-payload';
const actionFactory = method => Actions[method](payload);

describe('app actions', () => {
  describe('#copy', () => {
    it(`returns a type of ${APP.COPY}`, () => {
      expect(actionFactory('copy', APP.COPY).type)
        .to.eql(APP.COPY);
    });
  });

  describe('#copied', () => {
    it(`returns a type of ${APP.COPIED}`, () => {
      expect(actionFactory('copied', APP.COPIED).type)
        .to.eql(APP.COPIED);
    });
  });

  describe('#notCopied', () => {
    it(`returns a type of ${APP.NOTCOPIED}`, () => {
      expect(actionFactory('notCopied', APP.NOTCOPIED).type)
        .to.eql(APP.NOTCOPIED);
    });
  });

  describe('#changePage', () => {
    const call = actionFactory('changePage', APP.CHANGEPAGE);
    it(`returns a type of ${APP.CHANGEPAGE}`, () => {
      expect(call.type)
        .to.eql(APP.CHANGEPAGE);
    });

    it('returns the given payload', () => {
      expect(call.payload).to.eql(payload);
    });
  });

  describe('#hide', () => {
    let call;
    let ipcSpy;

    before(() => {
      ipcSpy = sinon.spy(ipcRenderer, 'send');
      call = actionFactory('hide', APP.HIDE);
    });

    after(() => {
      ipcRenderer.send.restore();
    });

    it('sends an ipcRenderer message of `hide`', () => {
      expect(ipcSpy.callCount).to.equal(1);
      expect(ipcSpy.getCalls()[0].args[0]).to.eql('hide');
    });

    it(`returns a type of ${APP.HIDE}`, () => {
      expect(call.type).to.eql(APP.HIDE);
    });
  });

  describe('#reset', () => {
    let call;
    let ipcSpy;

    before(() => {
      ipcSpy = sinon.spy(ipcRenderer, 'send');
      call = actionFactory('reset', APP.RESET);
    });

    after(() => {
      ipcRenderer.send.restore();
    });

    it('sends an ipcRenderer message of `resetHeight`', () => {
      expect(ipcSpy.callCount).to.equal(1);
      expect(ipcSpy.getCalls()[0].args[0]).to.eql('resetHeight');
    });

    it(`returns a type of ${APP.RESET}`, () => {
      expect(call.type)
        .to.eql(APP.RESET);
    });
  });

  describe('#setShortcut', () => {
    const shortcut = "alt + k";

    describe('when passed a new key', () => {
      let call;
      let ipcSpy;
      const newShortcut = "ctrl + p";

      before(() => {
        ipcSpy = sinon.spy(ipcRenderer, 'send');
        call = Actions.setShortcut(newShortcut);
      });

      after(() => {
        ipcRenderer.send.restore();
      });

      it('sends an ipcRenderer message of `shortcut` with the new key value', () => {
        expect(ipcSpy.callCount).to.equal(1);
        expect(ipcSpy.getCalls()[0].args[0]).to.eql('shortcut');
        expect(ipcSpy.getCalls()[0].args[1]).to.eql(newShortcut);
      });

      it(`returns a type of ${APP.SHORTCUT}`, () => {
        expect(call.type).to.eql(APP.SHORTCUT);
      });

      it(`passes through the new key as payload`, () => {
        expect(call.payload).to.eql(newShortcut);
      });
    });

    describe('when not passed a new key', () => {
      let call;
      let ipcSpy;

      before(() => {
        ipcSpy = sinon.spy(ipcRenderer, 'send');
        sinon.stub(ElectronConfig.prototype, 'get').returns((shortcut));
        call = Actions.setShortcut();
      });

      after(() => {
        ipcRenderer.send.restore();
        ElectronConfig.prototype.get.restore();
      });

      it('sends an ipcRenderer message of `shortcut` with the config shortcut value', () => {
        expect(ipcSpy.callCount).to.equal(1);
        expect(ipcSpy.getCalls()[0].args[0]).to.eql('shortcut');
        expect(ipcSpy.getCalls()[0].args[1]).to.eql(shortcut);
      });

      it(`returns a type of ${APP.SHORTCUT}`, () => {
        expect(call.type).to.eql(APP.SHORTCUT);
      });

      it(`passes through the config shortcut key as payload`, () => {
        expect(call.payload).to.eql(shortcut);
      });
    });
  });
});
