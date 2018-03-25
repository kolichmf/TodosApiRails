import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {styles}from '../common/styles';

const mapState = (state) => {
  return {
    todos: state.todos
  };
};

class Todos extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Your Todos!</Text>
      </View>
    );
  }
}

export default connect(mapState)(Todos);