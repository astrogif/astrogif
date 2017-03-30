import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import History from '../../components/history/history';
import * as AppActions from '../app/actions';

function mapStateToProps(state) {
  return {
    history: state.history.list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
