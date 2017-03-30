import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../../components/home/home';
import * as AppActions from '../app/actions';
import * as GifActions from '../gif/actions';

function mapStateToProps(state) {
  return Object.assign({}, state.gif, {
    gif: state.gif.details
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    request: GifActions.request,
    clear: GifActions.clear,
    newQuery: GifActions.newQuery,
    next: GifActions.next,
    copy: AppActions.copy,
    hide: AppActions.hide
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
