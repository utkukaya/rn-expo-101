import React from 'react';
import { Text,Button, View} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import CategoriesScreen from './CategoriesScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { create_api } from '@relateddigital/visilabs-react-native'

class HomeScreen extends React.Component {
  
  
  HandleButton(){
    this.props.navigation.push('Categories',{
            
    })}


  render() {
    return (
      <SafeAreaView>
        <View style={{ alignItems: 'center', justifyContent: 'center',backgroundColor: '#b00020',height: 600}}  >
      
          
          <View>
          <Feather 
             name="home"
             color="white"
             size={100}
                    />

          </View>
           <Animatable.View 
                    animation="fadeInUpBig"
                    style={{flex: 0,
                        backgroundColor: 'white',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        paddingHorizontal: 100,
                        paddingVertical: 30,
                    }}
                >
          <View  style ={{backgroundColor: '#b00020',
          padding: 10,
          marginTop: 35,
          borderRadius: 10
          }}>
          <Button
          title = "Categories"
          color= 'white'
          onPress ={()=>this.HandleButton()}
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
           </Animatable.View>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;