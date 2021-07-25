import React, {useState, forwardRef} from 'react';
import {StyleSheet, TouchableOpacity, View, Button} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import CustomSwitch from '../../components/CustomSwitch';
import BottomSheet from 'reanimated-bottom-sheet';
import Utils from '../../constants';
import CustomText from '../../components/CustomText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from '../../components/CustomButton';
import {useDispatch} from 'react-redux';
import {filterRecipeHandler} from '../../redux/actions/recipe';
const BottomSheetHeader = theme => (
  <View style={styles.header(theme)}>
    <View style={styles.panelHeader}>
      <View style={styles.panelHandle(theme)} />
    </View>
  </View>
);

export const InnerBottomSheetContent = (
  theme,
  onionFilter,
  saltFilter,
  capsicumFilter,
  onionHandler,
  saltHandler,
  capsicumHandler,
  submitFilter,
) => {
  return (
    <View style={styles.contentContainer(theme)}>
      <CustomText
        label="Apply some of the following predefined ingredient filters"
        fontSize={Utils.FontSizes.medium}
        fontFamily={Utils.FontFamily.opensans_B}
      />
      <CustomSwitch
        onValueChange={saltHandler}
        value={saltFilter}
        label="Salt Filter"
      />
      <CustomSwitch
        onValueChange={onionHandler}
        value={onionFilter}
        label="Onion Filter"
      />
      <CustomSwitch
        onValueChange={capsicumHandler}
        value={capsicumFilter}
        label="Capsicum Filter"
      />
      <CustomButton
        label="Apply Filter"
        onPress={submitFilter}
        buttonStyle={styles.applyFilterButton}
      />
    </View>
  );
};

const CustomBottomSheet = forwardRef((props, ref) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [onionFilter, setOnionFilter] = useState(false);
  const [saltFilter, setSaltFilter] = useState(false);
  const [capsicumFilter, setCapsicumFilter] = useState(false);

  const onionHandler = () => setOnionFilter(curr => !curr);
  const saltHandler = () => setSaltFilter(curr => !curr);
  const capsicumHandler = () => setCapsicumFilter(curr => !curr);

  const submitFilter = () => {
    dispatch(filterRecipeHandler({onionFilter, saltFilter, capsicumFilter}));
  };

  return (
    <BottomSheet
      ref={ref}
      snapPoints={[hp('60%'), 0]}
      initialSnap={1}
      callbackNode={props.fall}
      enabledGestureInteraction={true}
      enabledContentGestureInteraction={false}
      renderContent={InnerBottomSheetContent.bind(
        this,
        theme,
        onionFilter,
        saltFilter,
        capsicumFilter,
        onionHandler,
        saltHandler,
        capsicumHandler,
        submitFilter,
      )}
      renderHeader={BottomSheetHeader.bind(this, theme)}
    />
  );
});

export default CustomBottomSheet;

const styles = StyleSheet.create({
  contentContainer: theme => ({
    backgroundColor: theme.backgroundColor1,
    height: '100%',
    width: wp('100%'),
    paddingHorizontal: Utils.Spacing.hs,
  }),

  header: theme => ({
    backgroundColor: theme.backgroundColor1,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }),
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: theme => ({
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.mode === 'light' ? '#00000040' : '#fff',
    marginBottom: 10,
  }),
  filterIcon: theme => ({
    backgroundColor: theme.backgroundColor1,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }),
  applyFilterButton: {alignSelf: 'center', marginTop: Utils.Spacing.vs},
});
