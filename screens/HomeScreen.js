import React from 'react';
import { Text,Button, View } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import CategoriesScreen from './CategoriesScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Feather from 'react-native-vector-icons/Feather';


class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}  >
          <View>
          <Feather 
             name="home"
             color="#b00020"
             size={100}
                    />

          </View>
            
          <View  style ={{backgroundColor: '#b00020',
          padding: 10,
          marginTop: 35,
          borderRadius: 10
          }}>
          <Button
          title = "Categories"
          color= 'white'
          onPress ={()=>this.props.navigation.navigate('Categories',{
            
          })}
          />
          </View> 
          <View  style ={{backgroundColor: '#b00020',
          padding: 10,
          marginTop: 35,
          borderRadius: 10
          }}>
          <Button
          title = "Log in"
          color= 'white'
          onPress ={()=>this.props.navigation.navigate('Login',{
            
          })}
          />
          </View>
          <View  style ={{backgroundColor: '#b00020',
                padding: 10,
                marginTop: 35,
                borderRadius: 10
                }}>
                <Button
                title = "Sign Up"
                color= 'white'
                onPress ={()=>this.props.navigation.navigate('Signup',{
                  
                })}
                />
                </View>
           
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;