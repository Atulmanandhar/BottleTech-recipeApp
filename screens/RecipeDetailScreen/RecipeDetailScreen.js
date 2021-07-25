import React, {useRef} from 'react';
import {StyleSheet, View, TouchableOpacity, Animated} from 'react-native';
import CustomText from '../../components/CustomText';
import ScreenWrapper from '../../components/ScreenWrapper';
import Utils from '../../constants';
import BackIcon from '../../assets/icons/BackIcon';
import {useTheme} from '../../hooks/useTheme';
import RecipeIngredientSection from './RecipeIngredientSection';
import RecipeHeaderSection from './RecipeHeaderSection';
import RecipeStepsSection from './RecipeStepsSection';
import CustomButton from '../../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {addToCartHandler} from '../../redux/actions/cart';

const RecipeDetailScreen = ({route: {params}, navigation}) => {
  const {ingredients, steps, imageUrl, name} = params.dataProps;
  const {fromCartScreen, dataProps} = params;
  const theme = useTheme();
  const dispatch = useDispatch();
  const scrollY = useRef(new Animated.Value(0)).current;
  const userLoggedIn = useSelector(state => state.user.userLoggedIn);

  const onSubmitHandler = () => {
    if (userLoggedIn) {
      dispatch(addToCartHandler(dataProps));
      alert('Item has been added to the cart');
    } else {
      alert('You need to be logged in to add to cart');
    }
  };

  return (
    <ScreenWrapper>
      <Animated.ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{borderRadius: 20}}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        <RecipeHeaderSection {...{imageUrl}} {...{scrollY}} />
        <View style={styles.nameContainer}>
          <CustomText
            label={name}
            fontSize={Utils.FontSizes.xlarge}
            fontFamily={Utils.FontFamily.opensans_B}
          />
        </View>
        <RecipeIngredientSection {...{ingredients}} />

        <RecipeStepsSection {...{steps}} />
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.absouluteBackButton}
          activeOpacity={0.6}>
          <View style={styles.backButton(theme)}>
            <BackIcon />
          </View>
        </TouchableOpacity>
        {!fromCartScreen && (
          <CustomButton
            label={'Add To Cart'}
            buttonStyle={styles.buttonContainer}
            onPress={onSubmitHandler}
          />
        )}
      </Animated.ScrollView>
    </ScreenWrapper>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'red',
  },

  nameContainer: {
    paddingHorizontal: Utils.Spacing.hs,
    marginVertical: Utils.Spacing.vs,
  },
  absouluteBackButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1000,
  },
  backButton: theme => ({
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.backgroundColor1,
    borderRadius: 10,
  }),
  buttonContainer: {
    alignSelf: 'center',
    marginVertical: Utils.Spacing.vs,
  },
});
