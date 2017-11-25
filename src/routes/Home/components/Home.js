import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Container} from 'native-base';
import MapContainer from './MapContainer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component {

  componentDidMount() {
      this.props.getCurrentLocation();
  }

  render() {
    console.log("hellloooo")
    const region = {
                latitude: 22.3095840,
                longitude: 73.1864630,
                latitudeDelta: 0.1066169,
                longitudeDelta: 0.0666351,

    }

    return (
      <Container>
      { this.props.region.latitude &&
        <MapContainer region = {this.props.region}/>
      }
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});


