import { connect } from 'react-redux';
import Home from '../../components/home/home';

function mapStateToProps(state) {
  return Object.assign({}, state.gif, {
    gif: state.gif.details
  });
}

export default connect(mapStateToProps)(Home);
