import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../../hooks/useTheme';
import Utils from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import CustomText from '../../components/CustomText';
import {useNavigation} from '@react-navigation/core';
import CloseIcon from '../../assets/icons/CloseIcon';
import {useDispatch} from 'react-redux';
import {removeFromCartHandler} from '../../redux/actions/cart';
const imageUrlFallback =
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

const RecipeItem = ({dataProps, fromCartScreen = false}) => {
  const {name = '', imageUrl = imageUrlFallback} = dataProps;
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeFromCartHandler(dataProps));
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        navigation.navigate('RecipeDetailScreen', {dataProps, fromCartScreen});
      }}>
      <View style={styles.mainContainer(theme)}>
        <View style={styles.recipeItem}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.imageContainer}>
              <FastImage
                source={{uri: imageUrl}}
                style={styles.image}
                resizeMode={FastImage.resizeMode.cover}
              />
            </View>
            <View style={styles.rightContainer}>
              <CustomText
                numberOfLines={2}
                label={name}
                fontSize={Utils.FontSizes.medium}
                fontFamily={Utils.FontFamily.roboto_B}
                style={{color: 'white'}}
              />
            </View>
          </View>
        </View>
        {fromCartScreen && (
          <TouchableOpacity
            style={styles.closeIconView}
            onPress={removeFromCart}>
            <CloseIcon />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const compareProps = (prevProps, newProps) => {
  return prevProps.item.name === newProps.item.name;
};

// export default memo(RecipeItem, compareProps);
export default RecipeItem;

const styles = StyleSheet.create({
  mainContainer: theme => ({
    height: hp('15%'),
    width: wp('90%'),
    backgroundColor: theme.primaryButton,
    borderRadius: 20,
    borderColor: theme.borderColor,
    // overflow: 'hidden',
    // flexWrap: 'wrap',
    marginVertical: Utils.Spacing.vs,
  }),
  recipeItem: {
    justifyContent: 'center',
  },
  imageContainer: {
    height: hp('15%'),
    width: wp('40%'),
  },

  image: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  rightContainer: {
    paddingHorizontal: Utils.Spacing.hs,
    width: wp('50%'),
  },
  closeIconView: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 30000,
  },
});
