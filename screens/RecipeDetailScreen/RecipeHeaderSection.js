import React from 'react'
import { StyleSheet, Animated, View } from 'react-native'
import FastImage from 'react-native-fast-image';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);
const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
const topSectionHeight = 250;

const RecipeHeaderSection = ({imageUrl, scrollY}) => {
    return (
      <View
        style={{flex: 1, overflow: 'hidden', marginTop: -1000, paddingTop: 1000}}>
        <AnimatedFastImage
          source={{uri: imageUrl ?? FALLBACK_IMAGE}}
          style={{
            height: topSectionHeight,
            width: '100%',
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-topSectionHeight, 0, topSectionHeight],
                  outputRange: [
                    -topSectionHeight / 2,
                    0,
                    topSectionHeight * 0.75,
                  ],
                }),
              },
              {
                scaleY: scrollY.interpolate({
                  inputRange: [-topSectionHeight, 0, topSectionHeight],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
    );
  };
export default RecipeHeaderSection

const styles = StyleSheet.create({})
