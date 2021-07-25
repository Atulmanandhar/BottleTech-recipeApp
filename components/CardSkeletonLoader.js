import React, {useEffect, useRef} from 'react';
import {StyleSheet, Animated, View, Easing, Dimensions} from 'react-native';
import Utils from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

const SCREEN_WIDTH = Dimensions.get('window').width;

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

const CardSkeletonLoader = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear.inOut,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-SCREEN_WIDTH, SCREEN_WIDTH],
  });

  return (
    <View style={styles.card}>
      <AnimatedLG
        colors={['#a0a0a0', '#c0c0c0', '#a0a0a0']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          ...StyleSheet.absoluteFill,
          transform: [
            {
              translateX: translateX,
            },
          ],
        }}
      />
    </View>
  );
};

export default CardSkeletonLoader;

const styles = StyleSheet.create({
  card: {
    height: hp('15%'),
    width: wp('90%'),
    backgroundColor: '#a0a0a0',
    borderColor: '#b0b0b0',
    // marginHorizontal: Utils.Spacing.hs,
    marginVertical: Utils.Spacing.vs,
    borderRadius: 20,
    zIndex: 1,
    overflow: 'hidden',
  },
});
