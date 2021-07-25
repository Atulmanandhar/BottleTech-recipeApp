import React from 'react';
import {StyleSheet, View} from 'react-native';
import Utils from '../constants';

const Card = props => {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingVertical: Utils.Spacing.vs,
    paddingHorizontal: Utils.Spacing.hs,
  },
});

export default Card;
