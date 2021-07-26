import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, StatusBar} from 'react-native';
import Routes from './navigations/Routes';
import {store} from './redux/store';
import {enableScreens} from 'react-native-screens';
enableScreens();

const App = () => {
  StatusBar.setBackgroundColor('black');
  StatusBar.setBarStyle('light-content');
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
