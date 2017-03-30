import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Gif from '../../components/gif/gif';
import * as AppActions from '../app/actions';

function mapStateToProps(state, props) {
  return {
    preview: state.settings.preview,
    gif: props.gif
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gif);
