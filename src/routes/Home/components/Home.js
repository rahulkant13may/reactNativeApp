import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Container} from 'native-base';
import MapContainer from './MapContainer';

export default class Home extends Component {

  componentDidMount() {
      this.props.getCurrentLocation();
  }

  render() {
    console.log("1234hellloooo")
    console.log("region",this.props.region)
    console.log("inputdta",this.props.inputData)
    const region = {
                latitude: 22.3095840,
                longitude: 73.1864630,
                latitudeDelta: 0.1066169,
                longitudeDelta: 0.0666351,

    }

    return (
      <Container>
      { this.props.region.latitude &&
        <MapContainer region = {this.props.region} getInputData={this.props.getInputData}/>
      }
      </Container>
    );
  }
}



