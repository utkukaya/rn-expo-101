import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button, Image, StyleSheet, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Login from './LoginScreen'
import Categories from './CategoriesScreen'
import AsyncStorage from '@react-native-community/async-storage';
import { create_api } from '@relateddigital/visilabs-react-native'

class AccountScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.route.params.item
        }
    }
    componentDidMount = async () => {
        var DEMO_TOKEN = await AsyncStorage.getItem('account_token');
        if (DEMO_TOKEN != null) { this.loginFromSP(DEMO_TOKEN) }
    }
    loginFromSP = (token) => {
        fetch('https://store.therelated.com/rest/V1/customers/me', {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json
                })
            });
    }
    Shopping() {
        this.props.navigation.push('Categories', {
            item: this.state.data
        })
    }
    render() {
        if (this.state.data === undefined) {
            return (
                <View>
                    <View style={{
                        flex: 0,
                        justifyContent: 'flex-end',
                        paddingHorizontal: 20,
                        paddingBottom: 50,
                        backgroundColor: '#b00020'
                    }}>

                    </View>
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={{
                            flex: 0,
                            backgroundColor: 'white',
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            paddingHorizontal: 20,
                            paddingVertical: 30,
                        }}
                    >
                        <Text style={{
                            color: 'black',
                            height: 55,
                            fontWeight: 'bold',
                            fontSize: 15,
                            textAlign: 'center',
                        }}>You see the your profile first log in or sign up</Text>

                        <View style={{
                            backgroundColor: '#b00020',
                            padding: 10,
                            marginTop: 35,
                            borderRadius: 10
                        }}>
                            <Button
                                title="Enter to sign up"
                                color='white'
                                onPress={() => this.props.navigation.push('Signup', {
                                })}
                            />
                        </View>
                        <View style={{
                            backgroundColor: '#b00020',
                            padding: 10,
                            marginTop: 35,
                            borderRadius: 10
                        }}>
                            <Button
                                title="Enter to log in"
                                color='white'
                                onPress={() => this.props.navigation.push('Login', {
                                })}
                            />
                        </View>
                    </Animatable.View>
                </View>
            )
        }
        return (
            <View>
                <ScrollView>
                    <View style={{
                        flex: 0,
                        justifyContent: 'flex-end',
                        paddingHorizontal: 20,
                        paddingBottom: 50,
                        backgroundColor: '#b00020'
                    }}>

                        <FontAwesome
                            name="shopping-basket"
                            color='white'
                            size={50}
                            style={{
                                marginLeft: 'auto',
                                marginRight: 'auto', marginTop: 45
                            }}
                            onPress={() => this.Shopping()}
                        />
                    </View>
                    <Animatable.View
                        animation="fadeInUpBig"
                        style={{
                            flex: 3,
                            backgroundColor: 'white',
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            paddingHorizontal: 20,
                            paddingVertical: 30,
                        }}
                    >

                        <View style={{ flexDirection: 'row', marginTop: 35 }}>
                            <FontAwesome
                                name="user-o"
                                color='#05375a'
                                size={20} />
                            <Text>
                                Email: {this.state.data.email}
                    </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 35 }}>

                            <Text>
                                First Name:{this.state.data.firstname}
                    </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 35 }}>

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