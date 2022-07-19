import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import ChooseLanguage from '../screens/ChooseLanguage';
import SuccessScreen from '../screens/SuccessScreen';
import OnBoardingScreen from '../screens/onBoardingScreen';
import WheelScreen from '../screens/WheelScreen';

const Stack = createStackNavigator();

const MainStack = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Language" component={ChooseLanguage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="onBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Wheel" component={WheelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
