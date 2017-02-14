import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchBox from '../../components/searchBox/searchBox';
import * as GifActions from './actions';
import * as AppActions from '../app/actions';

function mapStateToProps(state) {
  return state.gif;
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, GifActions, {
    hide: AppActions.hide,
    copy: AppActions.copy
  });

  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
