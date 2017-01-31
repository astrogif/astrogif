import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../../components/app/app';
import * as AppActions from '../app/actions';

function mapStateToProps(state) {
  return state.app;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
