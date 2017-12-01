import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  ScrollView
} from 'react-native';
import Home from './app/components/Home/Home';
import About from './app/components/About/About';
import Contact from './app/components/Contact/Contact';

const styles = require('./app/style');

export default class ShivvyBusinessApp extends Component {
  render() {
    return (
      <View>
        <View style={styles.imageWrap}>
          <Image style={styles.image} source={require('./logo.png')} />
        </View>

        <ScrollView style={styles.scrollView}>
          <Home />
          <About />
          <Contact />
        </ScrollView>
      </View>
    )
  }
}

AppRegistry.registerComponent('ShivvyBusinessApp', () => ShivvyBusinessApp);
