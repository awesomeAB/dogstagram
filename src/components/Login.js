import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

class Feed extends Component {
  login() {
    this.props.navigation.navigate('feed');
  }
  render() {
    return (
      <TouchableOpacity
        style={{
          height: '100%',
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => this.login()}>
        <Text>Login</Text>
      </TouchableOpacity>
    );
  }
}

export default Feed;
