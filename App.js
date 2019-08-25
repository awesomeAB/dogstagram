/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {View} from 'react-native';

import Dogstagram from './src/Dogstagram';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Dogstagram />
    </View>
  );
};

export default App;
