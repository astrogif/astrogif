import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchBox from '../../components/searchBox/searchBox';
import * as SearchActions from './actions';
import * as AppActions from '../app/actions';
import * as GifActions from '../gif/actions';

function mapStateToProps(state) {
  return state.search;
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, SearchActions, {
    hide: AppActions.hide,
    clear: GifActions.clear,
    request: GifActions.request
  });

  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
