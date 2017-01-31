import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Gif from '../../components/gif/gif';
import * as AppActions from '../app/actions';

function mapStateToProps(state) {
  return {
    gif: state.gif.details
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gif);
