import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = require('../../style');


export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Contact</Text>
      </View>
    );
  }
}
