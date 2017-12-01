import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
var styles = require('../../style');

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.sectionText}>Veniam veniam sit cupidatat mollit dolor proident. Ea est reprehenderit reprehenderit ullamco. Sunt dolore sint velit incididunt dolore reprehenderit ad sit. Do esse voluptate sit in consequat sint Lorem consectetur laboris elit ipsum. Fugiat excepteur dolor veniam sit velit aliquip laboris consectetur dolor incididunt sint proident.</Text>
      </View>
    );
  }
}
