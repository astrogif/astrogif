import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Settings from '../../components/settings/settings';
import * as AppActions from '../app/actions';
import * as SettingsActions from './actions';

function mapStateToProps(state) {
  return {
    config: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, SettingsActions, {
    changePage: AppActions.changePage
  });
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
