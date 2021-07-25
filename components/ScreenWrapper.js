import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useOrientationChange from '../hooks/useOrientationChange';
import {useTheme} from '../hooks/useTheme';
import Utils from '../constants';

const ScreenWrapper = ({children}) => {
  useOrientationChange();
  const theme = useTheme();
  return <SafeAreaView style={styles.screen(theme)}>{children}</SafeAreaView>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  screen: theme => ({
    flex: 1,
    backgroundColor: theme.backgroundColor2,
    // paddingHorizontal: Utils.Spacing.hs,
  }),
});
