import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Home from './app/components/Home/Home';
import About from './app/components/About/About';
import Contact from './app/components/Contact/Contact';

export default class ShivvyBusinessApp extends Component {
  render() {
    return (
      <View>
        <Home />
        <About />
        <Contact />
      </View>
    )
  }
}

AppRegistry.registerComponent('ShivvyBusinessApp', () => ShivvyBusinessApp);
