import React, { Component } from 'react';
import { ActivityIndicator, TouchableOpacity, FlatList, Text, View, Button, Image, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeProvider } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { create_api } from '@relateddigital/visilabs-react-native'
import { Euromessage } from '../Euromessage';

class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            number: 1,
            basket: [],
            data_array: []
        }
    }
    
    componentDidMount = async () => {
        this.getData()
        api = Euromessage();
        var data = {"OM.tid" : this.state.product.id, "OM.pp" : this.state.product.id, "OM.pu" : this.state.product.status, "OM.ppr" : (this.state.product.id * int(this.state.product.price))};
        api.customEvent("Cart", data);
        /* const productPurchase = {
            'OM.siteID': '4C514C35383967586E56413D',
            'OM.cookieID': 'EVALYQHYOFEYXYEP20200903175229',
            'OM.oid': '46437177476C676D3745303D',
            'OM.tid': this.state.product.id,
            'OM.pp': this.state.product.id,
            'OM.pu': this.state.product.status,
            'OM.pp.2': this.state.product.id,
            'OM.ppr': (this.state.product.id * int(this.state.product.price)),
            'OM.exVisitorID': '190',
            'OM.lvt': todaysDate,
          }
          let query = Object.keys(productPurchase)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(productPurchase[k]))
        .join('&');

        pvUrl = `https://lgr.visilabs.net/supporttest/om.gif?${query}`

        this.handleRequest() */

    }

    handleRequest = async () => {
        const response = await fetch(pvUrl);
            //console.log(response);  
    }

    clearStorage = async () => {
        await AsyncStorage.removeItem('basket')
        this.getData()
    }
    getData = async () => {
        try {
            const values = await AsyncStorage.getItem('basket')
            if (values !== null) {
                this.setState({
                    product: JSON.parse(values)
                })
            }
        }
        catch (e) {
        }
    }
    Buyit() {
        alert('You have bought it!!')
    }
    Minus(cur_number) {
        if (this.state.number > 0)
            cur_number--
        this.setState({
            number: cur_number
        })
    }
    Plus(cur_number) {
        cur_number++
        this.setState({
            number: cur_number

        })
    }
    cat_basket() {
        this.props.navigation.push('Categories', {
        })
    }
    render() {
        if (this.state.product == null || this.state.product.length == 0) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    backgroundColor: '#7f7f7f'
                }}>
                    <View>
                        <Animatable.View
                            animation="fadeInUpBig"
                            style={{
                                flex: 0,
                                backgroundColor: 'white',
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                            }}
                        >
                            <Text style={{ color: '#05375a', fontSize: 20, marginTop: 35, marginLeft: 'auto', marginRight: 'auto' }}>Your basket is empty</Text>
                            <View style={{
                                backgroundColor: '#3f3f3f',
                                padding: 10,
                                marginTop: 35,
                                borderRadius: 10
                            }}>
                                <Button
                                    title="Categories to add something your basket"
                                    color='white'
                                    backgroundColor="white"
                                    onPress={() => this.cat_basket()}
                                />
                            </View>
                        </Animatable.View>
                    </View>

                </View>

            )
        } else {
            return (
                <View>
                    <View style={{
                        backgroundColor: "#3f3f3f",
                        flexDirection: "row",
                        justifyContent: "center",
                        height: 80
                    }}>
                        <FontAwesome
                            name="shopping-bag"
                            color='white'
                            size={50}
                            style={{
                                flex: 0.5,
                                alignContent: "center",
                                height: 50,
                                marginTop: 15,
                                paddingLeft: 20
                            }}
                            onPress={() => this.getData()}
                        />
                        <FontAwesome
                            name="trash"
                            color='white'
                            size={60}
                            style={{
                                flex: 0.5,
                                alignContent: "center",
                                height: 50,
                                marginTop: 15,
                                paddingLeft: 260
                            }}
                            onPress={() => this.clearStorage(this.state.basket)}
                        />
                    </View>
                    <View style={{ position: "relative", marginBottom: 50, maxHeight: 500 }}>
                        <FlatList
                            data={this.state.product}
                            renderItem={({ item, index }) =>
                                <View style={{ backgroundColor: "black" }}>
                                    <Animatable.View
                                        animation="fadeInUpBig"
                                        style={{
                                            //flex: 0.3,
                                            backgroundColor: "#7f7f7f",
                                            display: "flex",
                                            alignItems: "center",
                                            marginTop: 2
                                        }}
                                    >
                                        <Image
                                            source={{ uri: 'https://store.therelated.com/media/catalog/product' + item.custom_attributes[0].value }}
                                            style={{ width: 360, height: 280, borderRadius: 20, marginBottom: 15 }}
                                        />
                                        <View>
                                            <Text style={{
                                                marginLeft: 40, fontSize: 24,
                                                marginBottom: 10,
                                                textAlignVertical:
                                                    "center",
                                                color: '#05375a'
                                            }}>
                                                {item.name}
                                            </Text>
                                            <Text style={{
                                                marginLeft: 40, fontSize: 24,
                                                textAlignVertical:
                                                    "center",
                                                color: '#05375a'
                                            }}>
                                                Price: {item.price} TL
                                                     </Text>
                                            <Text style={{
                                                marginLeft: 40, fontSize: 16,
                                                textAlignVertical:
                                                    "center",
                                                color: '#05375a'
                                            }}>
                                                ID of the product: {item.id}
                                            </Text>
                                        </View>
                                        <View style={{
                                            flexDirection: "row", display: "flex",
                                            justifyContent: "space-evenly"
                                        }}>
                                            <FontAwesome
                                                name="minus"
                                                color='#05375a'
                                                size={20}
                                                style={{
                                                    paddingRight: 20,
                                                    paddingTop: 10
                                                }}
                                                onPress={() => this.Minus(this.state.number)}
                                            />
                                            <Text style={{ fontSize: 24 }}>  {this.state.number} </Text>
                                            <FontAwesome
                                                name="plus"
                                                color='#05375a'
                                                size={20}
                                                style={{
                                                    paddingLeft: 20,
                                                    paddingTop: 10
                                                }}
                                                onPress={() => this.Plus(this.state.number)}
                                            />
                                        </View>
                                        <View style={{
                                            backgroundColor: '#3f3f3f',
                                            width: "80%",
                                            marginTop: 4,
                                            marginBottom: 20,
                                            borderRadius: 12
                                            
                                        }}>
                                            <Button
                                                title="Buy it"
                                                color='whitesmoke'
                                                onPress={() => this.Buyit()}
                                            />
                                        </View>
                                    </Animatable.View>
                                </View>
                            }
                        />
                    </View>
                </View>

            )
        }

    }

};

export default Basket;

const viewStyles = {
    flex: 1,
    alignItems: 'center'
};
const buttonStyles = StyleSheet.create({
    core: {
        borderStyle: 'solid',
        borderColor: '#d5d5d5',
        borderWidth: 1,
        backgroundColor: '#b00020',
        borderRadius: 30,
        padding: 15,
        paddingLeft: 15,
        paddingRight: 5
    },
    primary: {
        backgroundColor: '#b00020',
        borderColor: '#bbbbbb'
    },
    hairlineBorder: {
        borderWidth: StyleSheet.hairlineWidth
    },
    spacer: {
        marginBottom: 10
    }
});