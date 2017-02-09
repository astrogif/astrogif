/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SearchBox from './searchBox';

const defaultProps = {
  clear: () => {},
  hide: () => {},
  copy: () => {},
  request: () => {},
  next: () => {},
  currentQuery: '',
  newQuery: () => {}
};
function searchBoxFactory(newProps = {}) {
  const props = Object.assign({}, defaultProps, newProps);
  return <SearchBox {...props} />;
}

describe('<SearchBox />', () => {
  it('renders', () => {
    expect(shallow(searchBoxFactory())).to.have.length(1);
  });

  it('renders an` input', () => {
    expect(shallow(searchBoxFactory()).find('input')).to.have.length(1);
  });

  it('gives the rendered input the the `currentQuery` value', () => {
    const currentQuery = 'Woo';
    const input = shallow(searchBoxFactory({ currentQuery })).find('input');
    expect(input.props().value).to.eql(currentQuery);
  });

  describe('On change', () => {
    describe('when there is no input value', () => {
      it('calls `clear`', (done) => {
        const cmp = shallow(searchBoxFactory({
          clear: () => { done(); }
        }));
        cmp.find('input').simulate('change', {
          target: {
            value: ''
          }
        });
      });
    });

    describe('when there is an input value', () => {
      it('calls `request` with the current value', (done) => {
        const value = 'booyah';
        const cmp = shallow(searchBoxFactory({
          request: (req) => {
            expect(req).to.eql(value);
            done();
          }
        }));
        cmp.find('input').simulate('change', {
          target: {
            value
          }
        });
      });
    });

    describe('when two change events are fired quickly', () => {
      it('only calls `request` for the latter', (done) => {
        const valueOne = 'booyah';
        const valueTwo = 'boi';
        const cmp = shallow(searchBoxFactory({
          request: (req) => {
            expect(req).to.eql(valueTwo);
            done();
          }
        }));
        const input = cmp.find('input');
        input.simulate('change', {
          target: {
            value: valueOne
          }
        });

        setTimeout(() => {
          input.simulate('change', {
            target: {
              value: valueTwo
            }
          });
        }, 50);
      });
    });
  });

  describe('on enter', () => {
    describe('when there is no input value', () => {
      it('does not call `copy`', (done) => {
        let callCount = 0;
        const cmp = shallow(searchBoxFactory({
          copy: () => { callCount++; }
        }));
        cmp.find('input').simulate('keyDown', {
          which: 13,
          target: {
            value: ''
          }
        });

        setImmediate(() => {
          expect(callCount).to.eql(0);
          done();
        });
      });
    });

    describe('when there is an input value', () => {
      let clearCallCount;
      let copyCallCount;
      let copyCallValue;
      let calledMethodFirst;
      let hideCallCount;

      beforeEach(() => {
        clearCallCount = 0;
        copyCallCount = 0;
        hideCallCount = 0;
        const cmp = shallow(searchBoxFactory({
          copy: (val) => {
            copyCallCount++;
            if (!calledMethodFirst) {
              calledMethodFirst = 'copy';
            }
            copyCallValue = val;
          },
          clear: () => {
            clearCallCount++;
            if (!calledMethodFirst) {
              calledMethodFirst = 'clear';
            }
          },
          hide: () => {
            hideCallCount++;
          }
        }));
        cmp.find('input').simulate('keyDown', {
          preventDefault: () => {},
          metaKey: true,
          which: 13,
          target: {
            value: 'boo'
          }
        });
      });

      it('calls `copy` with the status of the meta key (i.e. cmd or ctrl)', () => {
        expect(copyCallCount).to.eql(1);
        expect(copyCallValue).to.be.true;
      });

      it('calls `clear`', () => {
        expect(clearCallCount).to.eql(1);
      });

      it('calls `hide`', () => {
        expect(hideCallCount).to.eql(1);
      });

      it('calls `copy` before `clear`', () => {
        expect(calledMethodFirst).to.eql('copy');
      });
    });
  });

  describe('on down', () => {
    describe('when there is no input value', (done) => {
      it('does not call `next`', () => {
        let callCount = 0;
        const cmp = shallow(searchBoxFactory({
          copy: () => { callCount++; }
        }));
        cmp.find('input').simulate('keyDown', {
          which: 40,
          target: {
            value: ''
          }
        });

        setImmediate(() => {
          expect(callCount).to.eql(0);
          done();
        });
      });
    });

    describe('when there is an input value', (done) => {
      it('calls `next`', () => {
        const cmp = shallow(searchBoxFactory({
          copy: () => { done(); }
        }));
        cmp.find('input').simulate('keyDown', {
          which: 40,
          target: {
            value: ''
          }
        });
      });
    });
  });

  describe('on escape', () => {
    it('calls `clear`', (done) => {
      const cmp = shallow(searchBoxFactory({
        clear: () => { done(); }
      }));
      cmp.find('input').simulate('keyDown', {
        preventDefault: () => {},
        which: 27,
        target: {
          value: ''
        }
      });
    });

    it('calls `hide`', (done) => {
      const cmp = shallow(searchBoxFactory({
        hide: () => { done(); }
      }));
      cmp.find('input').simulate('keyDown', {
        preventDefault: () => {},
        which: 27,
        target: {
          value: ''
        }
      });
    });
  });

  describe('on clearing the input (backspace)', () => {
    describe('when there is no input value', () => {
      it('calls `clear`', (done) => {
        const cmp = shallow(searchBoxFactory({
          clear: () => { done(); }
        }));
        cmp.find('input').simulate('keyUp', {
          preventDefault: () => {},
          which: 10,
          target: {
            value: ''
          }
        });
      });
    });

    describe('when there is still an input value', () => {
      it('does not call `clear`', (done) => {
        let callCount = 0;
        const cmp = shallow(searchBoxFactory({
          clear: () => { callCount++; }
        }));
        cmp.find('input').simulate('keyUp', {
          which: 10,
          target: {
            value: 'something here'
          }
        });

        setImmediate(() => {
          expect(callCount).to.eql(0);
          done();
        });
      });
    });
  });
});
