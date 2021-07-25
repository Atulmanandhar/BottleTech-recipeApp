import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Utils from '../constants';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

//custom bottombar
import TabBar from './CustomBottomTabBar';
import LoginScreen from '../screens/AuthScreen/LoginScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen/RecipeDetailScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen/AddRecipeScreen';
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          screenOptions={{headerShown: false, stackAnimation: 'fade'}}>
          <Stack.Screen name="BottomTabScreen" component={BottomTabNavigator} />

          <Stack.Screen
            name="RecipeDetailScreen"
            component={RecipeDetailScreen}
          />

          <Stack.Screen name="AddRecipeScreen" component={AddRecipeScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

const BottomTabNavigator = () => {
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <BottomTab.Navigator tabBar={props => <TabBar {...props} />}>
        <BottomTab.Screen name="HomeScreen" component={HomeScreen} />

        <BottomTab.Screen name="CartScreen" component={CartScreen} />
        <BottomTab.Screen name="LoginScreen" component={LoginScreen} />
      </BottomTab.Navigator>
    </View>
  );
};

export default Routes;
