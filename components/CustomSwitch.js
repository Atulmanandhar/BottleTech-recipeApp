import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import Utils from '../constants';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CustomText from './CustomText';
import {useTheme} from '../hooks/useTheme';
// import useOrientationChange from '../hooks/useOrientationChange';

const CustomSwitch = ({value, onValueChange, label}) => {
  // useOrientationChange();
  const theme = useTheme();
  return (
    <View style={{paddingVertical: Utils.Spacing.vs / 2}}>
      {/* <CustomText label="Toggle Theme" /> */}
      <View style={styles.fitlerContainer}>
        <View style={{width: wp('70%')}}>
          <CustomText label={label} />
        </View>
        <Switch
          trackColor={{
            false: theme.borderColor,
            true: theme.primaryButton,
          }}
          thumbColor={value ? 'white' : 'white'}
          onValueChange={onValueChange}
          value={value}
        />
      </View>
    </View>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  fitlerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Utils.Spacing.vs / 2,
  },
});
