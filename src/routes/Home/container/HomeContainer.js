import Home from "../components/Home";
import { connect } from 'react-redux';
import { getCurrentLocation } from '../actions/getCurrentLocation';
import { getInputData } from '../actions/getInputData';

function mapStateToProps (state) {
  return {
    region: state.home.region,
    inputData: state.home.inputData || {}
  }
}

const mapActionCreators = {
  getCurrentLocation,
  getInputData
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(Home)
