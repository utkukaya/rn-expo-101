/*import React, { Component } from 'react';
import { ActivityIndicator,TouchableOpacity, FlatList, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './Categories';

const Stack = createStackNavigator();*/
/*
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>{*//* ... *//*}</Stack.Navigator>
    </NavigationContainer>
  );
}
*/
/*
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount = () => {
    fetch('https://store.therelated.com/rest/V1/categories',{
      method:'get',
      header: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response => response.json())
    .then(json => {
       this.setState({
           categories: json.children_data
      }) 
    });
   
  }
  
  showAlert = (data) =>{
    //alert(data.name + ' was clicked!')
   
    
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" Component={Categories} options={{ title: 'Welcome' }}/>
        {*//* Screens gonna add *//*}
      </Stack.Navigator>
    </NavigationContainer>
    );

  }

  render() {
    
    return this.state.categories.map((data, index) =>
    <TouchableOpacity key={index} style={{
        backgroundColor: "#D8BFD8", margin: 2,
        padding: 15
    }} onPress={() =>this.showAlert(data)}>
             <View style={{ flexDirection: "row" }}>
             <Text style={{
                 marginLeft: 10, fontSize: 18,
                  textAlignVertical:
                     "center"
             }}>{data.name}</Text>
         </View>
          
          
        
     
    </TouchableOpacity>
)



  }
};
*/
