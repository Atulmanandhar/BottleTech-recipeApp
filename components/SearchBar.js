import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icons from '../assets/icons';
import Utils from '../constants';
import {useTheme} from '../hooks/useTheme';

const SearchBar = ({onChangeText, value, onSubmitEditing}) => {
  const theme = useTheme();
  return (
    <View style={styles.textInputContainer(theme)}>
      <TextInput
        style={styles.input(theme)}
        allowFontScaling={false}
        placeholder="Search"
        placeholderTextColor={theme.primaryText}
        onChangeText={onChangeText}
        value={value}
        onSubmitEditing={onSubmitEditing}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={onChangeText.bind(this, '')}>
        {value === '' ? <Icons.SearchIcon /> : <Icons.CloseIcon />}
      </TouchableOpacity>
    </View>
  );
};
SearchBar.defaultProps = {
  onChangeText: () => {},
  value: '',
  onSubmitEditing: () => {},
};
export default SearchBar;

const styles = StyleSheet.create({
  textInputContainer: theme => ({
    height: hp('8%'),
    borderRadius: 10,
    // marginVertical: Utils.Spacing.vs,
    marginTop: Utils.Spacing.vs * 2,
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
  iconContainer: {
    position: 'absolute',
    top: hp('2%'),
    right: wp('4%'),
  },
});
