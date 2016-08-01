/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class tutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 39.749632,
            longitude: -105.000363,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0201,
          }}
        >
          <MapView.Marker
            coordinate={{longitude:-105.000363, latitude:39.749632 }}
            title={"title"}
            description={"description"}
          />
        </MapView>
      </View>
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
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

AppRegistry.registerComponent('tutorial', () => tutorial);
