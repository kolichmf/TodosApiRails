import React from 'react';
import {styles} from "../common/styles";
import {View, ActivityIndicator} from 'react-native';

class LoadingScreen extends React.Component {
  render() {
    return(
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default LoadingScreen;