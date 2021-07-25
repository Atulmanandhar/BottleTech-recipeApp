import React from 'react';
import {View} from 'react-native';
import Utils from '../constants';
import Icons from '../assets/icons';
const ICONS = {
  HomeScreen: Icons.HomeIcon,
  CartScreen: Icons.CartIcon,
  LoginScreen: Icons.ProfileIcon,
};

export const CustomBottomMenuItem = ({iconName, isCurrent}) => {
  let ItemCmp = ICONS[iconName];
  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ItemCmp color={isCurrent ? Utils.lightTheme.buttonTextColor : 'gray'} />
    </View>
  );
};
