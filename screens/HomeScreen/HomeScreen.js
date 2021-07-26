import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Animated,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ScreenWrapper from '../../components/ScreenWrapper';
import CustomText from '../../components/CustomText';
import CardSkeletonLoader from '../../components/CardSkeletonLoader';
import Utils from '../../constants';
import SearchBar from '../../components/SearchBar';
import RecipeItem from './RecipeItem';
import DummyData from '../../DUMMYDATA';
import FilterIcon from '../../assets/icons/FilterIcon';
import {useTheme} from '../../hooks/useTheme';
import {default as Reanimated} from 'react-native-reanimated';
import {getRecipeHandler} from '../../redux/actions/recipe';
import CustomBottomSheet from './CustomBottomSheet';
const HEADER_HEIGHT = hp('8%');

const TopSection = openBottomSheetHandler => {
  const theme = useTheme();
  return (
    <>
      <View style={styles.labelContainer}>
        <View style={styles.leftLabelSection}>
          <CustomText
            label={'What would you like to cook today?'}
            fontSize={Utils.FontSizes.large}
            fontFamily={Utils.FontFamily.opensans_B}
          />
        </View>

        <View style={styles.rightLabelSection}>
          <TouchableOpacity onPress={openBottomSheetHandler}>
            <View style={styles.filterIcon(theme)}>
              <FilterIcon />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const FooterSection = () => {
  //To offset the customBottomTabbar height
  return <View style={{height: 60 + Utils.Spacing.vs * 4}} />;
};

const renderItem = (isFirstLoading, {item}) => {
  if (isFirstLoading) return <CardSkeletonLoader />;
  return <RecipeItem dataProps={item} />;
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const allRecipeData = useSelector(state => state.recipe.allRecipe);

  //for bottomSheet
  const bs = useRef();
  const fall = new Reanimated.Value(1);
  const openBottomSheetHandler = () => {
    bs.current.snapTo(0);
  };

  // for animated header
  const scrollingY = useRef(new Animated.Value(0)).current;
  const diffClampScrollY = useRef(
    new Animated.diffClamp(scrollingY, 0, HEADER_HEIGHT),
  ).current;
  const translation = diffClampScrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT - 20],
  });
  const getAnimatedSearchStyle = () => {
    return {
      position: 'absolute',
      top: Platform.OS === 'android' ? 0 : 24,
      left: 0,
      right: 0,
      zIndex: isRefreshing ? -1000 : 1000,
      // elevation: 1000,
      height: HEADER_HEIGHT,
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      transform: [
        {
          translateY: translation,
        },
      ],
      paddingTop: Utils.Spacing.vs,
      paddingHorizontal: Utils.Spacing.hs,
    };
  };

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    dispatch(getRecipeHandler(stopLoader));
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    getData();
  };
  const stopLoader = () => {
    setIsFirstLoading(false);
    setIsRefreshing(false);
  };

  const searchSubmitHandler = () => {
    alert(`Api call to ${searchText}`);
  };

  return (
    <ScreenWrapper>
      <Animated.View style={getAnimatedSearchStyle()}>
        <SearchBar
          onChangeText={setSearchText}
          value={searchText}
          onSubmitEditing={searchSubmitHandler}
        />
      </Animated.View>

      <CustomBottomSheet ref={bs} fall={fall} />
      <View style={styles.content}>
        <Animated.FlatList
          data={isFirstLoading ? DummyData : allRecipeData}
          keyExtractor={(item, index) => item._id}
          renderItem={renderItem.bind(this, isFirstLoading)}
          ListHeaderComponent={TopSection.bind(this, openBottomSheetHandler)}
          ListFooterComponent={FooterSection}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          style={styles.offSetHeaderHeight}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollingY,
                  },
                },
              },
            ],
            {useNativeDriver: true},
          )}
        />
        {!isFirstLoading && allRecipeData.length === 0 && (
          <View style={styles.offSetHeaderHeight}>
            <CustomText
              label="No Recipes found. You can pull to refresh"
              fontSize={Utils.FontSizes.large}
              fontFamily={Utils.FontFamily.opensans_B}
            />
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  labelContainer: {
    marginTop: Utils.Spacing.vs * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:"red"
  },
  content: {
    paddingHorizontal: Utils.Spacing.hs,
  },
  leftLabelSection: {
    width: wp('80%'),
  },
  rightLabelSection: {
    width: wp('10%'),
  },
  filterIcon: theme => ({
    backgroundColor: theme.backgroundColor1,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }),
  offSetHeaderHeight: {paddingTop: HEADER_HEIGHT},
});
