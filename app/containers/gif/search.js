import { connect } from 'react-redux';
import SearchBox from '../../components/searchBox/searchBox';

function mapStateToProps(state, props) {
  return {
    ...state.gif,
    ...props
  };
}

export default connect(mapStateToProps)(SearchBox);
