import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CustomText from '../../components/CustomText';
import ScreenWrapper from '../../components/ScreenWrapper';
import Utils from '../../constants';
import {useSelector} from 'react-redux';
import RecipeItem from '../HomeScreen/RecipeItem';

const renderItem = ({item}) => {
  return <RecipeItem dataProps={item} fromCartScreen />;
};
const FooterSection = () => {
  //To offset the customBottomTabbar height
  return <View style={{height: 60 + Utils.Spacing.vs * 4}} />;
};

const CartScreen = () => {
  const userLoggedIn = useSelector(state => state.user.userLoggedIn);
  const allCart = useSelector(state => state.cart.allCart);
  return (
    <ScreenWrapper>
      <View style={styles.titleContainer}>
        <CustomText
          label="My Cart"
          fontSize={Utils.FontSizes.large}
          fontFamily={Utils.FontFamily.opensans_B}
        />
      </View>
      {!userLoggedIn ? (
        <View style={styles.noUserView}>
          <CustomText
            label="Please login to use cart functionalities"
            fontSize={Utils.FontSizes.large}
            fontFamily={Utils.FontFamily.opensans_B}
          />
        </View>
      ) : (
        <View style={styles.mainContent}>
          {allCart.length === 0 && (
            <CustomText
              label="No items in Cart"
              fontSize={Utils.FontSizes.large}
              fontFamily={Utils.FontFamily.opensans_B}
            />
          )}
          <FlatList
            data={allCart}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            ListFooterComponent={FooterSection}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </ScreenWrapper>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: Utils.Spacing.hs,
    marginVertical: Utils.Spacing.vs,
  },
  noUserView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    marginHorizontal: Utils.Spacing.hs,
    marginVertical: Utils.Spacing.vs,
  },
});
