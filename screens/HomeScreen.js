import React from 'react';
import { Text,Button, View } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import CategoriesScreen from './CategoriesScreen';
import LoginScreen from './LoginScreen';
import SigninScreen from './SigninScreen';



class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{ alignItems: 'center', justifyContent: 'center'}}  >
          <Text>Welcome to My App</Text>
            <Button
            title="Click the button to open the categories"
            onPress={() =>
                this.props.navigation.navigate('Categories',{
                  
                })
            }
          />
           <Button
            title="Log in"
            onPress={() =>
                this.props.navigation.navigate('Login',{
                  
                })
            }
          />
           <Button
            title="Sign in"
            onPress={() =>
                this.props.navigation.navigate('Signin',{
                  
                })
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;