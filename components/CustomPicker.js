import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Utils from '../constants';
import {Picker} from '@react-native-picker/picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useTheme} from '../hooks/useTheme';

const CustomPicker = props => {
  const theme = useTheme();
  return (
    <View style={styles.pickerCardView(theme)}>
      <Picker
        selectedValue={props.value}
        style={styles.pickerStyle(theme)}
        dropdownIconColor={theme.borderColor}
        onValueChange={
          (itemValue, itemIndex) => props.setPickerDataHandler(itemValue)
          // console.log(itemValue,itemIndex)
        }>
        {props.data.map(item => {
          return <Picker.Item label={item} value={item} key={item} />;
        })}
      </Picker>
    </View>
  );
};

export default CustomPicker;

const styles = StyleSheet.create({
  pickerCardView: theme => ({
    height: hp('8%'),
    width: wp('30%'),
    backgroundColor: theme.backgroundColor1,
    borderColor: theme.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    // marginVertical: wp('2%'),
    // borderColor:Colors.primary,
    // borderWidth:1,
  }),
  pickerStyle: theme => ({
    height: '100%',
    width: '100%',
    color: theme.primaryText,
  }),
});
