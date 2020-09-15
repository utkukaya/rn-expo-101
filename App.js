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
import ViewProductsScreen from './screens/ViewProductsScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import BasketScreen from './screens/BasketScreen';
import AccountScreen from './screens/AccountScreen';

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
        <Stack.Screen name="Categories" component={CategoriesScreen} options={({ route }) => ({ title:  route.params.title})}/>
        <Stack.Screen name="Products" component={ProductsScreen} options={{ title: 'Products' }}/>
        <Stack.Screen name="BottomProducts" component={BottomProductScreen} options={{ title: 'BottomProducts' }}/>
        <Stack.Screen name="ViewProducts" component={ViewProductsScreen} options={{ title: 'ViewProducts' }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Signup' }}/>
        <Stack.Screen name="Basket" component={BasketScreen} options={{ title: 'Basket' }}/>
        <Stack.Screen name="Account" component={AccountScreen} options={{ title: 'Account' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;
