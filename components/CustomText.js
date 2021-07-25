import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Utils from '../constants';
import useOrientationChange from '../hooks/useOrientationChange';
import {useTheme} from '../hooks/useTheme';

/**
 * Custom Text component which accepts two params
 * @param {String} label labeltext
 * @param {Number} fontSize FontSize
 * @param {String} fontFamily FontFamily
 * @param {Object} style styling for the Text Component
 * @param {Number} numberOfLines
 * @returns React Component
 */

const CustomText = ({label, style, fontSize, fontFamily, numberOfLines}) => {
  useOrientationChange();
  const theme = useTheme();
  return (
    <Text
      allowFontScaling={false}
      {...{numberOfLines}}
      style={styles.textStyle(style, fontSize, fontFamily, theme)}>
      {label}
    </Text>
  );
};

CustomText.defaultProps = {
  label: '',
  style: {},
  fontSize: Utils.FontSizes.small,
  fontFamily: Utils.FontFamily.montserrat_SB,
  numberOfLines: 0,
};

export default CustomText;

const styles = StyleSheet.create({
  textStyle: (style, fontSize, fontFamily, theme) => ({
    fontFamily: fontFamily,
    fontSize: fontSize,
    color: theme.primaryText,
    ...style,
  }),
});
