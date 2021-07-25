import React from 'react';
import {forwardRef} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Utils from '../constants';
// import useOrientationChange from '../hooks/useOrientationChange';
import {useTheme} from '../hooks/useTheme';

const CustomTextInput = forwardRef((props, ref) => {
  // useOrientationChange();
  const theme = useTheme();
  return (
    <View style={[styles.textInputContainer(theme), props.containerStyle]}>
      <TextInput
        ref={ref}
        allowFontScaling={false}
        style={styles.input(theme)}
        placeholder={props.placeholder}
        placeholderTextColor={theme.primaryText}
        onChangeText={props.onChangeText}
        value={props.value}
        onSubmitEditing={props.onSubmitEditing}
        keyboardType={props.keyboardType}
      />
    </View>
  );
});

CustomTextInput.defaultProps = {
  onChangeText: () => {},
  value: '',
  onSubmitEditing: () => {},
  placeholder: 'Title',
  keyboardType: 'default',
  containerStyle: {},
};
export default CustomTextInput;

const styles = StyleSheet.create({
  textInputContainer: theme => ({
    height: hp('8%'),
    borderRadius: 10,
    marginVertical: Utils.Spacing.vs,
    backgroundColor: theme.backgroundColor1,
    borderColor: theme.borderColor,
    borderWidth: 1,
    paddingHorizontal: Utils.Spacing.hs,
    justifyContent: 'center',
  }),
  input: theme => ({
    color: theme.primaryText,
    fontSize: Utils.FontSizes.medium,
    // borderWidth: 1,
  }),
});
