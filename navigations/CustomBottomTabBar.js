import React, {useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  StyleSheet,
  Platform,
} from 'react-native';
import {CustomBottomMenuItem} from './CustomBottomMenuItem';
import Utils from '../constants';
import {useSelector} from 'react-redux';
import useOrientationChange from '../hooks/useOrientationChange';

function MyTabBar({state, descriptors, navigation}) {
  useOrientationChange();
  const theme = useSelector(state => state.theme.theme);
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const translateValue = useRef(new Animated.Value(0)).current;
  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;

  const animateSlider = index => {
    Animated.spring(translateValue, {
      toValue: index * tabWidth,
      velocity: 10,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateSlider(state.index);
  }, [state.index]);

  return (
    <View style={[style.tabContainer(theme), {width: totalWidth}]}>
      <View style={{flexDirection: 'row'}}>
        <Animated.View
          style={[
            style.slider,
            {
              transform: [{translateX: translateValue}],
              width: tabWidth - 20,
            },
          ]}
        />

        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1}}>
              <CustomBottomMenuItem
                iconName={label.toString()}
                isCurrent={isFocused}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default MyTabBar;

const style = StyleSheet.create({
  tabContainer: theme => ({
    height: Platform.OS === 'android' ? 60 : 70,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
    backgroundColor: theme.backgroundColor1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
    paddingBottom: Platform.OS === 'android' ? 0 : 10,
  }),
  slider: {
    width: 10,
    height: 40,
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: Utils.lightTheme.primaryButton,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
