import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomSwitch from '../../components/CustomSwitch';
import CustomText from '../../components/CustomText';
import {useDispatch, useSelector} from 'react-redux';
import {SwitchThemeHandler} from '../../redux/actions/theme';
import Utils from '../../constants';
import ScreenWrapper from '../../components/ScreenWrapper';
import CustomButton from '../../components/CustomButton';
import {setUserHandler} from '../../redux/actions/user';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(state => state.user.userLoggedIn);

  const [toggleTheme, setToggleTheme] = useState(true);
  const [toggleUser, setToggleUser] = useState(false);
  const toggleThemeHandler = () =>
    setToggleTheme(previousState => !previousState);
  const toggleUserHandler = () =>
    setToggleUser(previousState => !previousState);

  useEffect(() => {
    toggleTheme
      ? dispatch(SwitchThemeHandler(Utils.darkTheme))
      : dispatch(SwitchThemeHandler(Utils.lightTheme));
  }, [toggleTheme]);
  useEffect(() => {
    toggleUser
      ? dispatch(setUserHandler(true))
      : dispatch(setUserHandler(false));
  }, [toggleUser]);

  return (
    <ScreenWrapper>
      <View style={styles.titleContainer}>
        <CustomText
          label="My Profile"
          fontSize={Utils.FontSizes.large}
          fontFamily={Utils.FontFamily.opensans_B}
        />
      </View>
      <View style={styles.content}>
        <CustomSwitch
          onValueChange={toggleThemeHandler}
          value={toggleTheme}
          label="Dark Mode"
        />
        <CustomSwitch
          onValueChange={toggleUserHandler}
          value={toggleUser}
          label="Toggle User Status"
        />
        <View style={styles.userStatusView}>
          <CustomText label={`User Status`} />
          <CustomText label={userLoggedIn ? 'Logged in' : 'Logged Out'} />
        </View>

        <CustomButton
          onPress={() => navigation.navigate('AddRecipeScreen')}
          label="Add Recipe"
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: Utils.Spacing.hs,
    marginVertical: Utils.Spacing.vs,
  },
  content: {
    flex: 1,
    marginHorizontal: Utils.Spacing.hs,
    marginVertical: Utils.Spacing.vs,
    // alignItems: 'center',
  },
  buttonStyle: {
    marginVertical: Utils.Spacing.vs,
    alignSelf: 'center',
  },
  userStatusView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Utils.Spacing.vs / 2,
  },
});
