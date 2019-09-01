import React, {Component} from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {MainFeed, Login} from './components';

const MainStack = createSwitchNavigator({
  login: Login,
  feed: MainFeed,
});
const App = createAppContainer(MainStack);

export default App;
