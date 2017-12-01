import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

var styles = require('../../style');

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Welcome</Text>
      </View>
    );
  }
}
