import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import Routes from './navigations/Routes';
import {store} from './redux/store';
import {enableScreens} from 'react-native-screens';
enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
