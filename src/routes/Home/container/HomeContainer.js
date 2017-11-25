import Home from "../components/Home";
import { connect } from 'react-redux';
import { getCurrentLocation } from '../actions/action';

function mapStateToProps (state) {
  return {
    region: state.HomeReducer.region
  }
}

const mapActionCreators = {
  getCurrentLocation,
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(Home)
