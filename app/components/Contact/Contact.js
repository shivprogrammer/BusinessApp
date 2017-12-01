import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
const styles = require('../../style');

export default class Home extends Component {
  doSomething() {
    
  }

  render() {
    return (
      <View>
        <Text style={styles.heading}>Contact</Text>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Enter Name"
          />

          <TextInput
            style={{ height: 40 }}
            placeholder="Enter Email"
          />

          <TextInput
            style={{ height: 40 }}
            placeholder="Optional Message"
          />
          <Button
            title="Submit"
            color="#841584"
            onPress={this.doSomething}
          />
        </View>
      </View>
    );
  }
}
