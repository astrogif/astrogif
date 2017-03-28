/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import History from './history';

const defaultProps = {
  history: {
    hello: [
      {
        id: 1,
        image_original_url: 'some.url.here'
      },
      {
        id: 2,
        image_original_url: 'other.image'
      }
    ],
    goodbye: [
      {
        id: 3,
        image_original_url: 'bye.bye'
      }
    ]
  },
  changePage: () => {},
  hide: () => {},
  copyUrl: () => {}
};

const historyFactory = props => shallow(<History {...defaultProps} {...props} />);

describe('<History />', () => {
  it('renders', () => {
    expect(historyFactory()).to.exist;
  });

  describe('when `history` is an empty object', () => {
    it('renders a no history icon', () => {
      const icon = historyFactory({
        history: {}
      }).find('.qa-no-h');
      expect(icon).to.have.length(1);
      expect(icon.prop('glyph')).to.eql('noHistory');
    });

    it('renders the `go back` button', () => {
      const back = historyFactory({
        history: {}
      }).find('.qa-back');
      expect(back).to.have.length(1);
    });
  });

  describe('when `history` has a value', () => {
    it('renders a `FilterBox`', () => {
      expect(historyFactory().find('FilterBox')).to.have.length(1);
    });

    it('renders a search term heading for each key in `history`', () => {
      const headings = historyFactory().find('h2');
      expect(headings.at(0).text()).to.eql('hello');
      expect(headings.at(1).text()).to.eql('goodbye');
    });

    it('renders a `Summary` for each value inside each `history` key', () => {
      expect(historyFactory().find('Summary')).to.have.length(3);
    });

    it('renders the `go back` button', () => {
      expect(historyFactory().find('.qa-back')).to.have.length(1);
    });

    describe('when there us a fuzzy search', () => {
      it('only renders the `history` keys that match', () => {
        const cmp = historyFactory();
        cmp.setState({
          filterText: 'hell'
        });
        const headings = cmp.find('h2');
        expect(headings.at(0).text()).to.eql('hello');
        expect(headings).to.have.length(1);
      });
    });
  });

  describe('callbacks from `FilerBox` changes', () => {
    describe('when filterUp is called', () => {
      it('decreases `selectedIdx` state when `selectedIdx` is gt 0', () => {
        const cmp = historyFactory();
        cmp.setState({
          selectedIdx: 1
        });
        const fb = cmp.find('FilterBox');
        fb.prop('onUp')();
        expect(cmp.state('selectedIdx')).to.eql(0);
      });

      it('sets `selectedIdx` to 0 when it already equals 0', () => {
        const cmp = historyFactory();
        const fb = cmp.find('FilterBox');
        fb.prop('onUp')();
        expect(cmp.state('selectedIdx')).to.eql(0);
      });
    });

    describe('when filterDown is called', () => {
      it('increases `selectedIdx` state when `selectedIdx` is lt the total length of all items in `history`', () => {
        const cmp = historyFactory();
        const fb = cmp.find('FilterBox');
        fb.prop('onDown')();
        expect(cmp.state('selectedIdx')).to.eql(1);
      });

      it('sets `selectedIdx` to the `history` item length when it already equals that length', () => {
        const cmp = historyFactory();
        cmp.setState({
          selectedIdx: 2
        });
        const fb = cmp.find('FilterBox');
        fb.prop('onDown')();
        expect(cmp.state('selectedIdx')).to.eql(2);
      });
    });

    describe('when filterEnter is called', () => {
      it('calls `copyUrl` with the image url of the selectedGif', (done) => {
        const cmp = historyFactory({
          copyUrl: (url, meta) => {
            expect(meta).to.be.true;
            done();
          }
        });
        const fb = cmp.find('FilterBox');
        fb.prop('onEnter')({
          metaKey: true
        });
      });

      it('calls `copyUrl` with the meta value of the enter event', (done) => {
        const cmp = historyFactory({
          copyUrl: (url, meta) => {
            expect(meta).to.be.true;
            done();
          }
        });
        const fb = cmp.find('FilterBox');
        fb.prop('onEnter')({
          metaKey: true
        });
      });

      it('calls `hide`', (done) => {
        const cmp = historyFactory({
          hide: () => {
            done();
          }
        });
        const fb = cmp.find('FilterBox');
        fb.prop('onEnter')({
          metaKey: true
        });
      });
    });

    describe('when filterEscape is called', () => {
      it('calls `hide`', (done) => {
        const cmp = historyFactory({
          hide: () => {
            done();
          }
        });
        const fb = cmp.find('FilterBox');
        fb.prop('onEscape')();
      });
    });
  });

  it('calls `changePage` with `home` when the back button is clicked', (done) => {
    historyFactory({
      changePage: (url) => {
        expect(url).to.eql('home');
        done();
      }
    }).find('.qa-back').simulate('click');
  });
});
