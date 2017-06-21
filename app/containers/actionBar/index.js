import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActionBar from '../../components/actionBar/actionBar';
import * as AppActions from '../app/actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changePage: AppActions.changePage }, dispatch);
}

export default connect(state => state, mapDispatchToProps)(ActionBar);
