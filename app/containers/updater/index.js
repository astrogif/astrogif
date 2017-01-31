import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Updater from '../../components/updater/updater';
import * as Actions from './actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(state => state.updater, mapDispatchToProps)(Updater);

