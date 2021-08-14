import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen  from './Screens/homeScreen';
import SpaceCrafts from './screen/SpaceCraft';
import StarsMap from './screen/starsmap';

const Stack=createStackNavigator()

export default function App() {
  
  return (
  <NavigationContainer>
     <Stack.Navigator initialRouteName="home" screenOptions={{
       headerShown:false
     }}> 
     <Stack.Screen name="home"component={HomeScreen}/>
     <Stack.Screen name="dailyPic"component={DailyPic}/>
     <Stack.Screen name="SpaceCrafts"component={SpaceCrafts}/>
     <Stack.Screen name="starsmap"component={StarsMap}/>
     </Stack.Navigator>
  </NavigationContainer>
    
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

