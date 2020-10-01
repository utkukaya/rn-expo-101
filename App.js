import React, { Component } from 'react';
import { ActivityIndicator,TouchableOpacity, FlatList, Text, View, Button } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { NavigationContainer,navigation } from '@react-navigation/native';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';
import { create_api } from '@relateddigital/visilabs-react-native'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

global.XMLHttpRequest = global.originalXMLHttpRequest
  ? global.originalXMLHttpRequest
  : global.XMLHttpRequest;
global.FormData = global.originalFormData
  ? global.originalFormData
  : global.FormData;

fetch; // Ensure to get the lazy property

if (window.__FETCH_SUPPORT__) {
  // it's RNDebugger only to have
  window.__FETCH_SUPPORT__.blob = false;
} else {
  /*
   * Set __FETCH_SUPPORT__ to false is just work for `fetch`.
   * If you're using another way you can just use the native Blob and remove the `else` statement
   */
  global.Blob = global.originalBlob ? global.originalBlob : global.Blob;
  global.FileReader = global.originalFileReader
    ? global.originalFileReader
    : global.FileReader;
}


class App extends React.Component {
 
 /*  render (){
    return(
      <NavigationContainer>
      <Tab.Navigator>
       <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
      </NavigationContainer> 
    )

  } */
  render() {
    return (
    /*   <NavigationContainer>

        <Tab.Navigator>
       <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator> 
      </NavigationContainer> */
      <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}/> 
        
        <Stack.Screen name="Categories" component={CategoriesScreen} options={({ route,navigation}) => 
        ({ title:  route.params.title,
        headerRight: ({}) => (
       <FontAwesome 
            name="shopping-basket"
            color='black'
            size={30}
            style ={{marginLeft: 'auto',
            marginRight: 'auto'}}
            onPress={() => navigation.push('Basket',{})}
            /> 
        ),
        headerLeft: ({}) => (
            <FontAwesome 
            name="id-badge"
            color='black'
            size={30}
            style ={{marginLeft: 'auto',
            marginRight: 'auto'}}
            onPress={() => navigation.push('Account',{})}
            /> 

        ),
        })}/>
        <Stack.Screen name="Products" component={ProductsScreen} options={({ route,navigation}) => 
        ({ title:  route.params.title,
        headerRight: ({}) => (
       <FontAwesome 
            name="shopping-basket"
            color='black'
            size={30}
            style ={{marginLeft: 'auto',
            marginRight: 'auto'}}
            onPress={() => navigation.push('Basket',{})}
            />  
        ),
        headerLeft: ({}) => (
          <FontAwesome 
          name="id-badge"
          color='black'
          size={30}
          style ={{marginLeft: 'auto',
          marginRight: 'auto'}}
          onPress={() => navigation.push('Account',{})}
          /> 

      ),
        })}/>
        <Stack.Screen name="BottomProducts" component={BottomProductScreen} options={({navigation}) => 
        ({ title:  'Bottom Product',
        headerRight: ({}) => (
       <FontAwesome 
            name="shopping-basket"
            color='black'
            size={30}
            style ={{marginLeft: 'auto',
            marginRight: 'auto'}}
            onPress={() => navigation.push('Basket',{})}
            />  
        ),
        headerLeft: ({}) => (
          <FontAwesome 
          name="id-badge"
          color='black'
          size={30}
          style ={{marginLeft: 'auto',
          marginRight: 'auto'}}
          onPress={() => navigation.push('Account',{})}
          /> 

      ),
        })}/>
        <Stack.Screen name="ViewProducts" component={ViewProductsScreen} options={({ route,navigation}) => 
        ({ title:  route.params.title,
        headerRight: ({}) => (
       <FontAwesome 
            name="shopping-basket"
            color='black'
            size={30}
            style ={{marginLeft: 'auto',
            marginRight: 'auto'}}
            onPress={() => navigation.push('Basket',{})}
            />  
        ),
        headerLeft: ({}) => (
          <FontAwesome 
          name="id-badge"
          color='black'
          size={30}
          style ={{marginLeft: 'auto',
          marginRight: 'auto'}}
          onPress={() => navigation.push('Account',{})}
          /> 

      ),
        })}/>
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
