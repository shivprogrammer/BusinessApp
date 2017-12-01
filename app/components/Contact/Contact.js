import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

const styles = require('../../style');


export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Contact</Text>
        <View>
          <TextInput
            style={{ height: 40 }}
            placeholder="Enter Name"
          />
        </View>
      </View>
    );
  }
}
