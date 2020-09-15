import React, { Component} from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button,Image, StyleSheet,TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Login from './LoginScreen'
import Categories from './CategoriesScreen'

class AccountScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           data : this.props.route.params.item
        }
        console.log(this.state.data)
    }


    Shopping(){
        
        this.props.navigation.push('Categories', {
        })
    }

    render() {
        return(
            <View>
                <ScrollView>
                <View style={{flex: 0,
                    justifyContent: 'flex-end',
                    paddingHorizontal: 20,
                    paddingBottom: 50,
                    backgroundColor: '#b00020'
                    }}>

               <FontAwesome 
                    name="shopping-basket"
                    color='white'
                    size={50}
                    style ={{marginLeft: 'auto',
                    marginRight: 'auto',marginTop: 45}}
                    onPress={() => this.Shopping()}
                    />  
                </View>
                <Animatable.View 
                    animation="fadeInUpBig"
                    style={{flex: 3,
                        backgroundColor: 'white',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        paddingHorizontal: 20,
                        paddingVertical: 30,
                    }}
                >
                
                <View style={{flexDirection: 'row', marginTop: 35}}>
                    <FontAwesome 
                    name="user-o"
                    color='#05375a'
                    size={20}/>
                    <Text>
                        Email: {this.state.data.email}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 35}}>
                    
                    <Text>
                        First Name: {this.state.data.firstname}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 35}}>
                    
                    <Text>
                        Last Name: {this.state.data.lastname}
                    </Text>
                </View>
                </Animatable.View>
                </ScrollView>
            </View>
        )
        
    }

};

export default AccountScreen;