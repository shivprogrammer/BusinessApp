import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text,
  ScrollView,
  Switch
} from 'react-native';
import Home from './app/components/Home/Home';
import About from './app/components/About/About';
import Contact from './app/components/Contact/Contact';
const styles = require('./app/style');

export default class ShivvyBusinessApp extends Component {
  constructor() {
    super();
    this.state = {
      logoHidden: false
    };
  }

  render() {
    let logoHidden = this.state.logoHidden;
    let img = <Text />;
    if (logoHidden) {
      img = <Text />;
    } else {
      img = <Image style={styles.image} source={require('./logo.png')} />
    }

    return (
      <View>
        <View style={styles.imageWrap}>
          {img}
          <Switch onValueChange={(value) => this.setState({ logoHidden: value })} value={this.state.logoHidden} />
        </View>

        <ScrollView style={styles.scrollView}>
          <Home />
          <About />
          <Contact />
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('ShivvyBusinessApp', () => ShivvyBusinessApp);
