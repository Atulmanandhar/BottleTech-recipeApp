import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Utils from '../constants';
import useOrientationChange from '../hooks/useOrientationChange';
import {useTheme} from '../hooks/useTheme';

/**
 * This function will create a custom button accepting the following props
 * @param {string} label Label for the button
 * @param {function} OnPress OnPress function
 * @param {object} buttonStyle style object for the buttonContainer
 * @param {object} textStyle style object for the textComponent
 * @returns {React.Component} React Component
 */

function CustomButton({
  label,
  onPress,
  buttonStyle,
  textStyle,
  startColor,
  endColor,
}) {
  useOrientationChange();
  const theme = useTheme();
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonContainer(buttonStyle, theme)}
        onPress={onPress}>
        {/* <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[startColor, endColor]}
          style={{...StyleSheet.absoluteFill}}> */}
        <View style={styles.buttonTextContainer}>
          <Text
            style={[styles.buttonText(textStyle, theme)]}
            allowFontScaling={false}>
            {label}
          </Text>
        </View>
        {/* </LinearGradient> */}
      </TouchableOpacity>
    </View>
  );
}

CustomButton.defaultProps = {
  label: 'I am a Custom Button',
  onPress: () => {
    alert('clicked');
  },
  buttonStyle: {},
  textStyle: {},
  startColor: '#fff',
  endColor: '#fff',
};

export default CustomButton;

const styles = StyleSheet.create({
  mainView: {
    // overflow: 'hidden',
    // backgroundColor:"red",
    borderRadius: 20,
  },
  buttonContainer: (buttonStyle, theme) => ({
    width: wp('80%'),
    backgroundColor: theme.primaryButton,
    height: Utils.Spacing.vs * 3.5,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    ...buttonStyle,
  }),
  buttonTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  buttonText: (textStyle, theme) => ({
    fontFamily: Utils.FontFamily.montserrat_SB,
    fontSize: Utils.FontSizes.medium,
    color: theme.buttonTextColor,
    textAlign: 'center',
    ...textStyle,
  }),
});
