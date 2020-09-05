import React, { Component } from 'react';
import { ActivityIndicator,TouchableOpacity, FlatList, Text, View, Button } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './screens/CategoriesScreen';
import { ScreenStack } from 'react-native-screens';
import  HomeScreen  from './screens/HomeScreen'
import ProductsScreen from './screens/ProductsScreen';
import BottomProductScreen from './screens/BottomProductScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/> 
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Categories' }}/>
        <Stack.Screen name="Products" component={ProductsScreen} options={{ title: 'Products' }}/>
        <Stack.Screen name="BottomProducts" component={BottomProductScreen} options={{ title: 'BottomProducts' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;
